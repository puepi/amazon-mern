import express from 'express'
import data from './data.js'
const port=process.env.PORT || 5000
const app=express()

app.get('/api/products/:id',(req,res)=>{
    const product=data.products.find(x=>x._id===parseInt(req.params.id))
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'Product not found'})
    }
    res.send(data.products)
})
app.get('/api/products',(req,res)=>{
    res.send(data.products)
})

app.get('/',(req,res)=>{
    res.send('Server is ready on port')
})

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}/`)
})