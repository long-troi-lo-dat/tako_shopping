const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

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

// aapi/capybara`, (req, res) => {
//     const sql = `SELECT * FROM products WHERE name LIKE "%capybara%" ORDER BY created_at DESC`;
//     db.query(sql, (err, data) => {
//         if (err) return res.json(err);
//         return res.json(data);
//     });
// });

app.get(`/api/products/:keyword`, (req, res) => {
    const sql = `SELECT * FROM products WHERE name LIKE '%${req.params.keyword}%' ORDER BY created_at asc`;
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// app.get(`/api/product/:id`, (req, res) => {
//     const sql = `SELECT * FROM products where category_id=? ORDER BY created_at DESC `;
//     db.query(sql, [req.params.id], (err, data) => {
//         if (err) return res.json(err);
//         return res.json(data);
//     });
// });

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
                description:''
            })

            const productImages = product.image_urls.split(',').map(item => {
                
                return {
                    url:  BASE_URL + `/products/${product.id}/${item}`,
                    name: '',
                    description:''
                }
            })
            
            slideImages.push(...productImages)

            return product.image_urls = slideImages
            
        })
        
        return res.json(data);
    });
});

app.listen(port, console.log(`Server running on port ${port}`))