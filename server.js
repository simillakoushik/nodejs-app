
const express = require('express')
const app = express()

app.get('/', (req,res)=>{
res.send('welcome to world rest api')

})

app.listen(9070,()=>console.log('server started'))
