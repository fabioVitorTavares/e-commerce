const buttonSearch = document.querySelector(".button-search");
const inputSearch = document.querySelector('.input-search');
const buttonClear = document.querySelector('.button-clear');


const url = "http://127.0.0.1:4002/";






const content = document.querySelector('.content');

buttonSearch.addEventListener('click',( async () => {
    const response = await fetch(url+'products', {
        method: 'get',      
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        
      }      
    });
    const data = await response.json();
  
    console.log(data);
    data.forEach(element => {
      const classProduct = document.createElement('div');
      const classViewProduct = document.createElement('div');
      const classDescriptionProduct = document.createElement('div');
      const imgProduct = document.createElement('img');
      const descriptionProduct = document.createElement('p');
      const priceProduct = document.createElement('p');
      classProduct.setAttribute('class', 'product');
      classViewProduct.setAttribute('class', 'view');
      classDescriptionProduct.setAttribute('class', 'description');
      imgProduct.setAttribute('src', `${element.img}`);
      descriptionProduct.innerText = element.description;
      
      
      const formatedPrice = String(data.price).includes(".") ? String(data.price).replace(".",",") : String(data.price) + ",00";

      priceProduct.innerHTML = `<p><strong>R$</strong> ${formatedPrice} </p>`;
      console.log(formatedPrice);
      
      classProduct.appendChild(classViewProduct);
      classProduct.appendChild(classDescriptionProduct);
      classViewProduct.appendChild(imgProduct);
      classDescriptionProduct.appendChild(descriptionProduct);  
      classDescriptionProduct.appendChild(priceProduct);     
      content.appendChild(classProduct);      
  });

}));



   /*  const datas = await response.json();
    
    
     */


inputSearch.addEventListener("input", () => {   
    
    buttonClear.style = inputSearch.value === "" ? "Display: none" : "Display: block";
});

buttonClear.addEventListener("click", () => {
    inputSearch.value = "";
    buttonClear.style = inputSearch.value === "" ? "Display: none" : "Display: block";
    inputSearch.focus();
});


