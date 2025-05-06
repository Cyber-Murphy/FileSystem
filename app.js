const { error, log } = require('console')
const express= require('express')
const app=express()
const fs= require('fs/promises')


const code =`
bitch please this is my life
const function add(a,b){
return res= a+b
}
`
app.get('/read', async(req,res)=>{
    try {
        const result= await fs.readFile('hello.txt','utf-8')
        res.send(result)
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }    
})


app.get('/write', async(req,res)=>{
    const result= await fs.writeFile('write.txt',code)
    res.send(result)
    console.log(result);
    
})
app.get('/append', async(req,res)=>{
    try {
        const append= await fs.appendFile('hello.txt','This is Bangalore buddy')
        console.log('appended successfully');
        
    } catch (error) {
        console.error(error)
    }
})

app.get('/delete', async(req,res)=>{
    try {
        const deletei= await fs.unlink('delete.txt')
        console.log('file deleted');
        
    } catch (error) {
        console.error('deleted')
    }
})
app.listen(6000, ()=>{
    console.log('port connected successfully');
    
})