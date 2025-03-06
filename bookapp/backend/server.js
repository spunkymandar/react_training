require("dotenv").config();
const express=require("express")
const mysql=require("mysql")
const cors=require("cors")

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root123",
  database:"bookdb"
})

db.connect((err)=>{
    if(err)console.log("connection failed");
    else console.log("connected to mysql")

})

app.get("/books",(req,res)=>{
  const myquery="select * from books";
  db.query(myquery,(err,result)=>{
    if(err) return res.json({error:err});
    res.json(result)
  })
})


app.post("/books",(req,res)=>{
  const {bookid,bookname,bookauthor}=req.body;
  const sql="insert into books (bookid,bookname,bookauthor) values (?,?,?)";
  db.query(sql,[bookid,bookname,bookauthor],(err,result)=>{
    if(err) return res.json({error:err});
    res.json({message:"Book added successfully!!"})
  })
})

app.delete("/books/:id",(req,res)=>{
  const sql="delete from books where bookid=?";
  db.query(sql,[req.params.id],(err,result)=>{
    if(err)return res.json({error:err});
    if(result.affectedRows==0){
      return res.status(404).json({message:"Book not found!!"})
    }
    res.json({message:"Book deleted successfully!!"})
  })
})

app.put("/books/:id",(req,res)=>{
  const sql="update books set bookname=?, bookauthor=? where bookid=?";
  const {bookname,bookauthor}=req.body;
  db.query(sql,[bookname,bookauthor,req.params.id],(err,result)=>{
    if(err)return res.json({error:err});
    if(result.affectedRows==0){
      return res.status(404).json({message:"Book not found!!"})
    }
    res.json({message:"book modified successfully!!"})
  })

})


app.get("/books/:id",(req,res)=>{
  
})




app.listen(5000,()=>console.log("server running on port number 5000"))

// http://localhost:5000/books

