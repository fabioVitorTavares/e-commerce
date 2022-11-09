const express = require("express");
const app = express();
const cors = require('cors');
const { request, response } = require("express");
app.use(cors());
app.use(express.json())

app.use("/",express.static(__dirname));



const products = [{
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Notebook Dell i5 8Gb SSD 128Gb",
    category: "Notebook",
    brand: "Dell",
    price: 3500.00
},
{
    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "MacBook AMD chipset",
    category: "Notebook",
    brand: "Apple",
    price: 8999.99    
},
{
    img: "https://grupomassa.vtexassets.com/arquivos/ids/328109-800-auto?v=638018066876370000&width=800&height=auto&aspect=true",
    description: "Notebook Sansung",
    category: "Notebook",
    brand: "Sansung",
    price: 3000.00    
},
{
    img: "https://a-static.mlcdn.com.br/800x560/apple-iphone-13-pro-max-256gb-verde-alpino-67-12mp-ios/magazineluiza/234682100/76b6fcf3365e71e740fc94eb09407a3f.jpg",
    description: "IPhone 13 Verde",
    category: "Smartphone",
    brand: "Apple",
    price: 12000.00    
},
{
    img: "https://www.mobiledokan.com/wp-content/uploads/2020/01/Samsung-Galaxy-A71.jpg",
    description: "Sansung A71",
    category: "Smartphone",
    brand: "Sansung",
    price: 3000.00    
},
{
    img: "https://www.notebookcheck.info/uploads/tx_nbc2/XiaomiRedmiNote9ProMax.JPG",
    description: "Xiaomi Redmi Note 9 ProMax",
    category: "Smartphone",
    brand: "Xiaomi",
    price: 4599.99    
},
{
    img: "https://images-shoptime.b2w.io/produtos/6394749574/imagens/computador-pc-completo-intel-i7-memoria-ram-8gb-hd-1tb-wi-fi/6394749574_1_large.jpg",
    description: "Computador de mesa Sansung completo",
    category: "Desktop",
    brand: "Sansung",
    price: 2500.00    
},
{
    img: "https://imgs.extra.com.br/1540996753/1xg.jpg",
    description: "Desktop Dell XPS",
    category: "Desktop",
    brand: "Dell",
    price: 2999.00    
},
{
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Notebook Dell i5 8Gb SSD 128Gb",
    category: "Notebook",
    brand: "Dell",
    price: 3500.00
},
{
    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "MacBook AMD chipset",
    category: "Notebook",
    brand: "Apple",
    price: 8999.99    
},
{
    img: "https://grupomassa.vtexassets.com/arquivos/ids/328109-800-auto?v=638018066876370000&width=800&height=auto&aspect=true",
    description: "Notebook Sansung",
    category: "Notebook",
    brand: "Sansung",
    price: 3000.00    
},
{
    img: "https://a-static.mlcdn.com.br/800x560/apple-iphone-13-pro-max-256gb-verde-alpino-67-12mp-ios/magazineluiza/234682100/76b6fcf3365e71e740fc94eb09407a3f.jpg",
    description: "IPhone 13 Verde",
    category: "Smartphone",
    brand: "Apple",
    price: 12000.00    
},
{
    img: "https://www.mobiledokan.com/wp-content/uploads/2020/01/Samsung-Galaxy-A71.jpg",
    description: "Sansung A71",
    category: "Smartphone",
    brand: "Sansung",
    price: 3000.00    
},
{
    img: "https://www.notebookcheck.info/uploads/tx_nbc2/XiaomiRedmiNote9ProMax.JPG",
    description: "Xiaomi Redmi Note 9 ProMax",
    category: "Smartphone",
    brand: "Xiaomi",
    price: 4599.99    
},
{
    img: "https://images-shoptime.b2w.io/produtos/6394749574/imagens/computador-pc-completo-intel-i7-memoria-ram-8gb-hd-1tb-wi-fi/6394749574_1_large.jpg",
    description: "Computador de mesa Sansung completo",
    category: "Desktop",
    brand: "Sansung",
    price: 2500.00    
},
{
    img: "https://imgs.extra.com.br/1540996753/1xg.jpg",
    description: "Desktop Dell XPS",
    category: "Desktop",
    brand: "Dell",
    price: 2999.00    
}];


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

    
    
    console.log(products
        .filter( element => element.description.toUpperCase().includes(search.search.toUpperCase()))
        .filter(searchByCategory)     
        .filter(searchByBrand)
        .filter(searchByMinPrice)
        .filter(searchByMaxPrice) 
    );

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
