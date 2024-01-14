require("dotenv").config();
const connectDB = require("./db/connect")
const Product = require("./model/product")

const Prodjson = require("./prod.json")

const start = async () => {
    try{
        await connectDB(process.env.Mongodb_url);
        await Product.create(Prodjson);
    }
    catch (error){
        console.log(error);
    }
};

start();