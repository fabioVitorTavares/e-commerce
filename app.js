const express = require("express");
const app = express();
const cors = require('cors');
const { request, response } = require("express");
app.use(cors());
app.use(express.json())

app.use("/",express.static(__dirname));



const products = [{
    img: "https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg",
    description: "Notebook lenovo i5",
    category: "Notebook",
    brand: "Lenovo",
    price: 2459.50    
},
{
    img: "https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg",
    description: "Notebook Dell i7",
    category: "Notebook",
    brand: "Dell",
    price: 1000.00    
},
{
    img: "https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg",
    description: "Notebook Sansung i5",
    category: "Notebook",
    brand: "Sansung",
    price: 3000.00    
},
{
    img: "https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg",
    description: "IPhone 13",
    category: "Smartphone",
    brand: "Aple",
    price: 12000.00    
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
