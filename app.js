require("dotenv").config();

const express = require('express')

const PORT = process.env.PORT || 5000;
const app = express();
const connectDB = require('./db/connect')
const prod_routes = require("./router/product")
app.get('/' , (req,res) =>{
    res.send('Hello');
})

//middleware 
app.use('/api/products' ,prod_routes );

app.listen(PORT, ()=>{
    connectDB(process.env.Mongodb_url);
});