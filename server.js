
const express = require('express')
const app = express()

app.get('/home', (req,res)=>{
res.send('welcome to world rest api')

})

app.listen(9060,()=>console.log('server started'))
