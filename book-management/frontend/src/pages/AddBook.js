import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [book, setBook] = useState({ bookid: "", bookname: "", bookauthor: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/books", book)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="bookid" placeholder="Book ID" onChange={handleChange} required />
      <input type="text" name="bookname" placeholder="Book Name" onChange={handleChange} required />
      <input type="text" name="bookauthor" placeholder="Book Author" onChange={handleChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
