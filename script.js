 const buttonSearch = document.querySelector("#buttonSearch");
const url = "http://127.0.0.1:4002/";

const product = {
    name: "food",
    price: 8.50
};


const init = {   
    method: 'POST',
    body: JSON.stringify(product),
    headers: {"Content-type": "application/json"}
}



buttonSearch.addEventListener('click', async () => {
    const response = await fetch(url, init);
    const datas = await response.json();
    const datasJson = JSON.stringify(datas);
    console.log(datas[0].name);    
});