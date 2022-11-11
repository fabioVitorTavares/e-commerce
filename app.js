const express = require("express");
const app = express();
const cors = require('cors');
const { request, response } = require("express");
const { Db } = require("mongodb");
app.use(cors());
app.use(express.json())

app.use("/",express.static(__dirname));


const urldb ='mongodb+srv://fabioVitorTavares:qy9gIW6y2c9aOyT9@cluster0.8bw2tma.mongodb.net/?retryWrites=true&w=majority';
const dbName = "E-commerce";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(urldb)

let products = [];

client.connect( async(err) =>{
    
    const db = client.db(dbName);    
    const productsCollection = db.collection('productsCollection');
    await db.collection('productsCollection').find().toArray(function(err, result) {
        [id, ...products] = result;
        console.log(products);
    });
    //console.log(products);
    
});

app.get("/products", (request, response) => {
    
    const search = JSON.parse(request.query.search);        
    
    
    
    const searchByCategory = (element) => {
        return !search.categorys.length ? true : search.categorys.includes(element.category);
    }

    const searchByBrand = (element) => {
        return !search.brands.length ? true : search.brands.includes(element.brand);
    }

    const searchByMinPrice = (element) => {
        return !search.minPrice ? true : element.price >= search.minPrice;
    }
    
    const searchByMaxPrice = (element) => {
        return !search.maxPrice ? true : element.price <= search.maxPrice;
    }

    
    
  

    return response.json(products
    .filter( element => element.description.toUpperCase().includes(search.search.toUpperCase()))
    .filter(searchByCategory)     
    .filter(searchByBrand) 
    .filter(searchByMinPrice)
    .filter(searchByMaxPrice));   
    
}); 



app.listen(4002, () =>{
    console.log("Server rodando na porta 4002");
});




