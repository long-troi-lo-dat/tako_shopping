const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")

dotenv.config({ path: './.env' })

const db = require("./src/configs/db")

const app = express()

app.use(express.static('./images'))
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 8080;


app.get("/", (req, res) => {
    res.send("Welcome back");
})

const verifyJwt = (req, res, next) => {
    const token = req.headers['access-token'];
    if (!token) {
        return res.json("Không có token")
    } else {
        jwt.verify(token, "jwtSecretKey", (err, data) => {
            if (err) {
                res.json(err);
            } else {
                req.id = data.id;
                req.role = data.role;
                next()
            }
        })
    }
}

app.get("/checkauth", verifyJwt, (req, res) => {
    const sql = `SELECT user.*,roles.name as rolename FROM user INNER JOIN roles on user.role = roles.id WHERE user.id=?`;
    db.query(sql, [req.id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
})

app.post('/signup', async (req, res) => {
    try {
        let randomId;
        let idExists = true;

        while (idExists) {
            randomId = Math.floor(1000000000 + Math.random() * 9000000000);
            const checkIdQuery = 'SELECT * FROM `user` WHERE `id` = ?';
            const data = await new Promise((resolve, reject) => {
                db.query(checkIdQuery, [randomId], (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
            });
            idExists = data.length > 0;
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const insertUserQuery = "INSERT INTO `user` (`id`, `username`, `email`, `password`,`role`) VALUES (?, ?, ?, ?,3)";
        const values = [
            randomId,
            req.body.ten,
            req.body.email,
            hashedPassword,
        ];

        db.query(insertUserQuery, values, (err, data) => {
            if (err) {
                return res.json({ error: 'Đăng ký thất bại', details: err });
            }
            return res.json({ success: true, message: 'Đăng ký thành công' });
        });
    } catch (error) {
        return res.json({ error: 'Đăng ký thất bại', details: error.message });
    }
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const sql = "SELECT user.*,roles.name as rolename FROM `user` INNER JOIN roles on user.role = roles.id WHERE user.email=?";
    db.query(sql, [email], async (err, data) => {
        if (err) {
            return res.json(err);
        }
        if (data.length > 0) {
            const user = data[0];
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                if (user.disabled === 0) {
                    const id = user.id;
                    const role = user.role;
                    const token = jwt.sign({ id, role }, "jwtSecretKey", { expiresIn: 300 });
                    return res.json({ Login: true, token, user });
                } else {
                    return res.json({ error: `Tài khoản đã bị vô hiệu hóa! Vui lòng liên hệ admin để biết thêm thông tin chi tiết` });
                }
            } else {
                return res.json({ error: "Sai mật khẩu" });
            }
        } else {
            // Người dùng không tồn tại
            return res.json({ error: "Người dùng không tồn tại" });
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

        const BASE_URL = req.protocol + '://' + req.get('host');

        data.map(product => {

            const slideImages = [];

            slideImages.push({
                url: BASE_URL + `/products/${product.id}/${product.thumbnail}`,
                name: '',
                description: ''
            })

            const productImages = product.image_urls.split(',').map(item => {
                return {
                    url: BASE_URL + `/products/${product.id}/${item}`,
                    name: '',
                    description: ''
                }
            })

            slideImages.push(...productImages)

            return product.image_urls = slideImages

        })

        return res.json(data);
    });
});

app.listen(port, console.log(`Server running on port ${port}`))