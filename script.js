const buttonSearch = document.querySelector("#buttonSearch");
const nameProduct = document.querySelector('#nameProduct');

const url = "http://127.0.0.1:4002/";






const main = document.querySelector('#main');


buttonSearch.addEventListener('click', async () => {


    const response = await fetch(url, {   
        method: 'POST',
        body: JSON.stringify({
            name: `${nameProduct.value}`            
        }),
        headers: {"Content-type": "application/json"}
    });
    const datas = await response.json();
    
    
    datas.forEach(element => {
        let classProduct = document.createElement('div');
        classProduct.setAttribute('class', 'product');
        let classImg = document.createElement('div');
        classImg.setAttribute('class', 'img');
        let classInfos = document.createElement('div');
        classInfos.setAttribute('class', 'infos');
        let name = document.createElement('h2');
        name.innerText = element.name;
        let price = document.createElement('h2');
        price.innerText = element.price;
        
        classProduct.appendChild(classImg);
        classProduct.appendChild(classInfos);
        classInfos.appendChild(name);
        classInfos.appendChild(price);
        main.appendChild(classProduct);
        
    });
    
    





});

