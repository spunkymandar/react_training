import React from "react";
import { useEffect,useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

function Home(){
  const [books, setBooks]=useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:5000/books")
    .then((res)=>setBooks(res.data))
  },[])

  function deleteBook(id){
    console.log("delete book function invoked!!")
    axios.delete(`http://localhost:5000/books/${id}`)
    .then((res)=>setBooks(books.filter((book)=>book.bookid!==id)))
  }
  return(
        <div>
           <h2>Book List</h2>
           <ul>
            {books.map((book)=>(
                <li key={book.bookid}>{book.bookname} by {book.bookauthor}
                <Link to={`/edit/${book.bookid}`}>Edit</Link>
                <button onClick={() => deleteBook(book.bookid)}>Delete</button>
                
                </li>
                
            ))}
           </ul>
        </div>
    )
}
export default Home;