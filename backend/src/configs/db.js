const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tako_shopping",
});


connection.connect();



module.exports = connection;
