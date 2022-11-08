const buttonSearch = document.querySelector(".button-search");
const inputSearch = document.querySelector('.input-search');
const buttonClear = document.querySelector('.button-clear');


const url = "http://127.0.0.1:4002/";







const functionSearch = async () => {
  
  content.innerHTML = "";
  const response = await fetch(url+`products/?search=${inputSearch.value}`, {
        method: 'get',      
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',        
      }      
    });
    const data = await response.json();
   
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
      const regEx = /,\d$/;
      let formatedPrice = String(element.price).includes(".") ? String(element.price).replace(".",",") : String(element.price) + ",00";
      formatedPrice = regEx.test(formatedPrice) ? formatedPrice + "0" : formatedPrice;            
      priceProduct.innerHTML = `<p><strong>R$</strong> ${formatedPrice} </p>`;      
      classProduct.appendChild(classViewProduct);
      classProduct.appendChild(classDescriptionProduct);
      classViewProduct.appendChild(imgProduct);
      classDescriptionProduct.appendChild(descriptionProduct);  
      classDescriptionProduct.appendChild(priceProduct);     
      content.appendChild(classProduct);      
    });
};

  const content = document.querySelector('.content');
  buttonSearch.addEventListener('click', functionSearch);


document.addEventListener('keydown', (event) => {
  if(event.key == "Enter"){
    functionSearch();
  }
})

inputSearch.addEventListener("input", () => {      
    buttonClear.style = inputSearch.value === "" ? "Display: none" : "Display: block";
});

buttonClear.addEventListener("click", () => {
    inputSearch.value = "";
    buttonClear.style = inputSearch.value === "" ? "Display: none" : "Display: block";
    inputSearch.focus();
});


