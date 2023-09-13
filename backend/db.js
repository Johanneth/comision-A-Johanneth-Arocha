import mysql from "mysql"


export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"foro"
})


/* 
import mysql from "mysql"


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})

app.get("/", (req,res)=>{
    res.json("Hola desde el backend!!")
})

app.get("/foro", (req,res) =>{
    const q = "SELECT * FROM foro"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}) */
