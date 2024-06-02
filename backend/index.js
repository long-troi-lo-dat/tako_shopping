const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

dotenv.config();

const db = require("./src/configs/db");

const app = express();

const BaseURL = process.env.REACT_APP_URL_LOCAL;
app.use(
    cors({
        origin: BaseURL,
        credentials: true,
    })
);


app.use(express.static("./images"));
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const productId = req.productId;
        console.log(productId, "console productId dòng 32")
        const dir = `./images/products/${productId}`;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const productId = req.productId;
        console.log(productId, "console productId dòng 41")
        const dir = `./images/products/${productId}`;
        const count = fs.readdirSync(dir).length;
        cb(null, `${count + 1}.jpg`);
    },
});

const upload = multer({ storage });

app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Welcome back");
});

app.post("/create-product", upload.array("images", 10), (req, res) => {
    const productName = req.body.name;
    const productPrice = req.body.price;
    const productDescription = req.body.description;
    const productCategoryId = req.body.category;

    const query =
        "INSERT INTO products (`name`, `thumbnail`, `price`, `description`, `category_id`) VALUES (?, ?, ?, ?, ?)";
    db.query(
        query,
        [
            productName,
            "thumbnail.jpg",
            productPrice,
            productDescription,
            productCategoryId,
        ],
        (err, result) => {
            if (err) {
                console.error('Thêm sản phẩm thất bại:', err);
                return res.status(500).json({ error: "Failed to create product" });
            }

            const productId = result.insertId;
            req.productId = productId;

            const imageQueries = req.files.map((file) => {
                const imageQuery =
                    "INSERT INTO products_images (url, product_id) VALUES (?, ?)";
                return new Promise((resolve, reject) => {
                    db.query(imageQuery, [file.filename, productId], (err, result) => {
                        if (err) {
                            console.error('Failed to insert image:', err);
                            return reject(err);
                        }
                        resolve(result);
                    });
                });
            });

            Promise.all(imageQueries)
                .then(() =>
                    res.status(200).json({ message: "Product created", productId })
                )
                .catch((err) => {
                    console.error('Failed to save images:', err);
                    res.status(500).json({ error: "Failed to save images" });
                });
        }
    );
});

const verifyJwt = (req, res, next) => {
    const token = req.headers["access-token"];
    if (!token) {
        return res.json("Không có token");
    } else {
        jwt.verify(token, "jwtSecretKey", (err, data) => {
            if (err) {
                res.json(err);
            } else {
                req.id = data.id;
                next();
            }
        });
    }
};

app.get("/checkauth", verifyJwt, (req, res) => {
    const sql = `SELECT users.*,roles.name as rolename FROM user INNER JOIN roles on users.role = roles.id WHERE users.id=?`;
    db.query(sql, [req.id], (err, data) => {
        if (err) return res.json(err);
        return console.log(res.data);
    });
});

app.post("/signup", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const insertUserQuery =
            "INSERT INTO `users` (`username`, `email`, `password`,`role`) VALUES (?, ?, ?,3)";
        const values = [req.body.ten, req.body.email, hashedPassword];

        db.query(insertUserQuery, values, (err, data) => {
            if (err) {
                return res.json({ error: "Đăng ký thất bại", details: err });
            }
            return res.json({ success: true, message: "Đăng ký thành công" });
        });
    } catch (error) {
        return res.json({ error: "Đăng ký thất bại", details: error.message });
    }
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const sql =
        "SELECT users.*,roles.name as rolename FROM `users` INNER JOIN roles on users.role = roles.id WHERE users.email=?";
    db.query(sql, [email], async (err, data) => {
        try {
            if (data.length > 0) {
                const user = data[0];
                const passwordMatch = await bcrypt.compare(password, user.password);

                if (passwordMatch) {
                    if (user.disabled === 0) {
                        const id = user.id;
                        const role = user.role;
                        const token = jwt.sign({ id, role }, "jwtSecretKey", {
                            expiresIn: 300,
                        });
                        return res.json({ Login: true, token, user });
                    } else {
                        return res.json({
                            error: `Tài khoản đã bị vô hiệu hóa! Vui lòng liên hệ admin để biết thêm thông tin chi tiết`,
                        });
                    }
                } else {
                    return res.json({ error: "Sai mật khẩu" });
                }
            } else {
                // Người dùng không tồn tại
                return res.json({ error: "Người dùng không tồn tại" });
            }
        } catch (err) {
            return res.json(err);
        }
    });
});

app.get(`/api/products`, (req, res) => {
    const sql = `SELECT * FROM products ORDER BY created_at asc`;
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get(`/api/products/:keyword`, (req, res) => {
    const sql = `SELECT * FROM products WHERE name LIKE '%${req.params.keyword}%' ORDER BY created_at asc`;
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get(`/api/product/:id`, (req, res) => {
    const sql = `SELECT *,GROUP_CONCAT(products_images.url) AS image_urls FROM products INNER JOIN products_images ON products.id = products_images.product_id where products.id = ? GROUP BY products.id ORDER BY products.created_at DESC`;
    db.query(sql, [req.params.id], (err, data) => {
        if (err) return res.json(err);

        const BASE_URL = req.protocol + "://" + req.get("host");

        data.map((product) => {
            const slideImages = [];

            // slideImages.push({
            //     url: BASE_URL + `/products/${product.id}/${product.thumbnail}`,
            //     name: '',
            //     description: ''
            // })

            const productImages = product.image_urls.split(",").map((item) => {
                return {
                    url: BASE_URL + `/products/${product.id}/${item}`,
                    name: "",
                    description: "",
                };
            });

            slideImages.push(...productImages);

            return (product.image_urls = slideImages);
        });

        return res.json(data);
    });
});

app.listen(port, console.log(`Server running on port ${port}`));
