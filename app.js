const express = require("express");
const app = express();
app.use(express.json());

app.use("/",express.static(__dirname));



const products = [{
    img: "",
    description: "Notebook lenovo i5",
    category: "Notebook",
    brand: "Lenovo",
    price: 2459.00    
}];


app.get("/products/:search", (request, response) => {
    const {search} = request.params;    
    return response.json(products.filter( e => e.includes(search)));
}); 


/* app.get("/products", (request, response) => {
    console.log(request.params);
    
    response.send(JSON.stringify(products.filter( e => e.includes(request.params.search))))
}); */



app.listen(4002, () =>{
    console.log("Server rodando na porta 4002");
});
