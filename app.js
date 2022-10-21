const express = require("express");

const app = express();

app.use("/",express.static(__dirname));


app.get("/index", (request, response) => {
    return response.json({
        message : "Hello world node.js and express framework and nodemon lib reload server" ,
    });
});

app.listen(4002, () =>{
    console.log("Server rodando na porta 4002");
});
