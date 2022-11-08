const express = require("express");
const app = express();
const cors = require('cors');
const { request, response } = require("express");
app.use(cors());
app.use(express.json())

app.use("/",express.static(__dirname));



const products = [{
    img: "",
    description: "Notebook lenovo i5",
    category: "Notebook",
    brand: "Lenovo",
    price: 2459.00    
}];


app.get("/products", (request, response) => {            
    return response.json(products);
}); 

app.post("/", (request, response) => {
    console.log(request.body);
    response.json(request.body)    
});





app.listen(4002, () =>{
    console.log("Server rodando na porta 4002");
});
