const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root07",
    database:"test"
});

app.use(express.json());

app.get('/',(req,res)=>{
    res.json("hello this is backend");
});

app.get('/books',(req,res)=>{
    const q = "SELECT * FROM books";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.post('/books',(req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return resjson(err);
        return res.json(data);
    });
})

app.listen(8800,()=>{
    console.log("Server has been worked on Port 8800");
})