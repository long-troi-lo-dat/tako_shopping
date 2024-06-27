const db = require("../configs/db");

module.exports = {
  getAllUsers: (req, res) => {
    const sql = `SELECT * FROM users ORDER BY created_at asc`;
    db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  },
  getOneUser: (req, res) => {
    const sql = `SELECT * FROM users where users.id = ?`;
    db.query(sql, req.params.id, (err, data) => {
      if (err) return res.json(err);
      if (data.length === 0)
        return res.status(404).json("Ko tìm thấy nè đại ca");
      return res.json(data);
    });
  },
  createUser: (req, res) => {
    const sql = `SELECT * FROM users where users.id = ?`;
    db.query(sql, req.params.id, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  },
  updateUser: (req, res) => {
    const sql = `SELECT * FROM users where users.id = ?`;
    db.query(sql, req.params.id, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  },
  deleteUser: (req, res) => {
    const sql = `DELETE FROM users WHERE id = ?`;
    db.query(sql, req.params.id, (err, data) => {
      if (err) return res.json(err);
      return res.send("xóa thành công");
    });
  },
};
