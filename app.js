const { error, log } = require('console')
const express= require('express')
const app=express()
const fs= require('fs/promises')

app.get('/', async(req,res)=>{
    try {
        const result= await fs.readFile('hello.txt','utf-8')
        res.send(result)
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }    
})

app.listen(6000, ()=>{
    console.log('port connected successfully');
    
})