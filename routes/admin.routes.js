const express=require('express');
const router=express.Router();
const fs=require('fs');
router.post('/login',(req,res) => {
    fs.writeFile('./data.txt',req.body,(err)=>{
        if(err) res.send(400).json({ status:'Error'})
    })
});

