const express = require("express");
const { randomUUID } = require("crypto");

const fs = require("fs")

const app = express();

app.use(express.urlencoded());

app.use("/",express.static(__dirname));



const products = [];

app.post("/addProduct", (request, response) =>{

    

    const { name, price } = request.body;

    const product = {
        name,
        price
    }

    fs.writeFile("products.json", JSON.stringify(product), err =>{
        if(err){
            console.log(err);            
        }
        else{
            console.log("Produto inserido");            
        }
    });

    console.log(request.body);

    
    
    // const {name, price} = request.body;

    // const product = {
    //     name,
    //     price,
    //     id: randomUUID(),
    // }  
    
    // products.push(product);

    
    // return response.json({
    //     message : "Hello world node.js and express framework and nodemon lib reload server" ,
    // });
    
});

app.get("/get", (request, response) => {
    return response.json({
        message : "Hello world node.js and express framework and nodemon lib reload server" ,
    });
});

app.get("/products", (request, response) => {
    return response.json(products);
});

app.get("/products/:id", (request, response) => {
    const {id} = request.params;
    const product = products.find(product => product.id === id);
    return response.json(product);
}); 


app.put("/products/:id", (request, response) => {
    const {id} = request.params;

    const { name, price } = request.body;    
    
    
    const index = products.findIndex(product => product.id === id);
    products[index] = {
        ...products[index],
        name,
        price
    }    
    
    return response.json({message: "Alterado com sucesso"});
    
    
});

app.delete("/products/:id", (request, response) => {
    const {id} = request.params;   
    
    const index = products.findIndex(product => product.id === id);
    
    products.splice(index, 1);
    
    return response.json({message: "Deletado com sucesso"});
    
    
});



app.listen(4002, () =>{
    console.log("Server rodando na porta 4002");
});
