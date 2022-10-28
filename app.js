const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())


const products = [
    {
        name : "car",
        price: 1000.00
    },
    {
        name: "phone",
        price: 5000.00
    }
];


app.post("/", (req, res) =>{      
    res.json(products);    
});



app.listen(4002, () =>{
    console.log("Server rodando na porta 4002");
});


