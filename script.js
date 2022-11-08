const buttonSearch = document.querySelector(".button-search");
const inputSearch = document.querySelector('.input-search');
const buttonClear = document.querySelector('.button-clear');


const url = "http://127.0.0.1:4002/";






const content = document.querySelector('.content');

// buttonSearch.addEventListener('click',( async () => {
//     const response = await fetch(url+'products', {
//       method: 'get',      
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
        
//       }      
//     });
//     const content = await response.json();
  
//     console.log(content);
// }));

buttonSearch.addEventListener('click',( async () => {
    const response = await fetch(url, {
      method: 'post',      
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'        
      },
      body: JSON.stringify({
        nome: 'Fábio',
        idade: 26
      })      

    });
    const content = await response.json();
  
    console.log(content);
}));

   /*  const datas = await response.json();
    
    
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
        content.appendChild(classProduct);
        
    }); */


inputSearch.addEventListener("input", () => {   
    
    buttonClear.style = inputSearch.value === "" ? "Display: none" : "Display: block";
});

buttonClear.addEventListener("click", () => {
    inputSearch.value = "";
    buttonClear.style = inputSearch.value === "" ? "Display: none" : "Display: block";
    inputSearch.focus();
});


