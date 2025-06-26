
const express=require("express")
const { tableconnection } = require("../config/db")

const router=express.Router()
const sql = 'INSERT INTO users (email, password) VALUES (?, ?)'

router.post("/register",(req,res)=>{
    const {email,password}=req.body
     
     if (!email || !password || email.trim() === "" || password.trim() === "") {
    return res.status(400).send("Email and password are required.");
  }

     tableconnection.query(sql,[email,password],(err,result)=>{
        if(err)
        {
            res.status(400).send("error occur")
            return
        }
        res.status(200).send("data regsiter succefully")
     })
})
module.exports={router}