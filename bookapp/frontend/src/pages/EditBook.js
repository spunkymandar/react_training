import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";


function EditBook(){
    const {id}=useParams()
    const[book, setBook]=useState({bookname:"",bookauthor:""})
    const navigate=useNavigate();
    // console.log(id)

    useEffect(()=>{
        axios.get("http://localhost:5000/books")
        .then((res)=>setBook(res.data.find((b)=>b.bookid==id)))

        
    },[id])

    const handleChange=(e)=>{
        setBook({...book,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/books/${id}`,book)
        .then(()=>navigate("/"))
        .catch((err)=>console.log(err))
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="bookname" value={book.bookname} 
                    onChange={handleChange} required/>
            <input type="text" name="bookauthor" value={book.bookauthor}
                    onChange={handleChange} required/>
            <button type="submit">Update Book</button>
        </form>
    )
}
export default EditBook;