require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "bookdb",
});

db.connect((err) => {
  if (err) console.error("Database connection failed:", err);
  else console.log("Connected to MySQL");
});

// Routes
app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, result) => {
    if (err) return res.json({ error: err });
    res.json(result);
  });
});

app.post("/books", (req, res) => {
  const { bookid, bookname, bookauthor } = req.body;
  const sql = "INSERT INTO books (bookid, bookname, bookauthor) VALUES (?, ?, ?)";
  db.query(sql, [bookid, bookname, bookauthor], (err, result) => {
    if (err) return res.json({ error: err });
    res.json({ message: "Book added successfully" });
  });
});

app.put("/books/:id", (req, res) => {
  const { bookname, bookauthor } = req.body;
  const sql = "UPDATE books SET bookname=?, bookauthor=? WHERE bookid=?";
  db.query(sql, [bookname, bookauthor, req.params.id], (err, result) => {
    if (err) return res.json({ error: err });
    res.json({ message: "Book updated successfully" });
  });
});

app.delete("/books/:id", (req, res) => {
  const sql = "DELETE FROM books WHERE bookid=?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.json({ error: err });
    res.json({ message: "Book deleted successfully" });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
