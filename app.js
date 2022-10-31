const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())


const products = [
    {
        name : "car1",
        price: 1000.00
    },
    {
        name: "phone1",
        price: 5000.00
    },
    {
        name : "car2",
        price: 1000.00
    },
    {
        name: "phone2",
        price: 5000.00
    },
    {
        name : "car3",
        price: 1000.00
    },
    {
        name: "phone3",
        price: 5000.00
    }
];


app.use(express.static(__dirname));


app.post("/", (req, res) => {     
    const nameProduct = req.body.name;
    
    let productResultSearch = [];

    products.forEach(element => {
        if(element.name.includes(nameProduct)){
            productResultSearch.push(element);
        }        
    });
    console.log(productResultSearch);
    
    res.json(productResultSearch);    
});



app.listen(4002, () =>{
    console.log("Server rodando na porta 4002");
});


