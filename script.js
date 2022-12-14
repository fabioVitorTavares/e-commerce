const url = "http://127.0.0.1:4002/";
const buttonSearch = document.querySelector(".button-search");
const inputSearch = document.querySelector('.input-search');
const buttonClear = document.querySelector('.button-clear');

const checkboxCategoryDesktop = document.querySelector('#checkboxCategoryDesktop'); 
const checkboxCategoryNotebook = document.querySelector('#checkboxCategoryNotebook');
const checkboxCategorySmartphone = document.querySelector('#checkboxCategorySmartphone');
const checkboxBrandApple = document.querySelector('#checkboxBrandApple');
const checkboxBrandDell = document.querySelector('#checkboxBrandDell');
const checkboxBrandLenovo = document.querySelector('#checkboxBrandLenovo');
const checkboxBrandSansung = document.querySelector('#checkboxBrandSansung');
const checkboxBrandXiaomi = document.querySelector('#checkboxBrandXiaomi');
const inputMinPrice = document.querySelector('#inputMinPrice');
const inputMaxPrice = document.querySelector('#inputMaxPrice');


const buttonClearFilterCategory = document.querySelector('#button-clear-filter-category');
const buttonClearFilterBrand = document.querySelector('#button-clear-filter-brand');
const buttonClearFilterPrice = document.querySelector('#button-clear-filter-price');
const clearFilter = [buttonClearFilterCategory, buttonClearFilterBrand, buttonClearFilterPrice];

const checksCategorys = [
  checkboxCategoryDesktop,
  checkboxCategoryNotebook,
  checkboxCategorySmartphone
];  

const checksBrands = [
  checkboxBrandApple,
  checkboxBrandDell,
  checkboxBrandLenovo,
  checkboxBrandSansung,
  checkboxBrandXiaomi
];  

function checkFilters() {
  return  {
    search: inputSearch.value,
    categorys: checksCategorys.filter( element =>  element.checked).map(element => element.value),
    brands: checksBrands.filter(element => element.checked).map(element => element.value),
    minPrice: inputMinPrice.value.length > 0 ? inputMinPrice.value : null,
    maxPrice: inputMaxPrice.value.length > 0 ? inputMaxPrice.value : null
  }  
};  




const search = async () => {
  
  const body = checkFilters();
  
  
  content.innerHTML = "";
  const response = await fetch(url+`products/?search=${JSON.stringify(body)}`, {
    method: 'get',      
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',        
    },  
   
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
      classProduct.setAttribute('ondblclick', 'focusProduct(this)')
      classViewProduct.setAttribute('class', 'view');
      classDescriptionProduct.setAttribute('class', 'description');
      imgProduct.setAttribute('src', `${element.img}`);
      descriptionProduct.innerText = element.description;            
      const regEx = /,\d$/;
      let formatedPrice = String(element.price).includes(".") ? String(element.price).replace(".",",") : String(element.price) + ",00";
      formatedPrice = regEx.test(formatedPrice) ? formatedPrice + "0" : formatedPrice;            
      priceProduct.innerHTML = `<p class"priceElement"><strong>R$</strong> ${formatedPrice} </p>`;      
      classProduct.appendChild(classViewProduct);
      classProduct.appendChild(classDescriptionProduct);
      classViewProduct.appendChild(imgProduct);
      classDescriptionProduct.appendChild(descriptionProduct);  
      classDescriptionProduct.appendChild(priceProduct);     
      content.appendChild(classProduct);      
    });  
  };  
  
  const content = document.querySelector('.content');
  buttonSearch.addEventListener('click', search);

  
checksCategorys.forEach(element => {       
  element.addEventListener('change', search );
})  

checksCategorys.forEach(element => {       
  element.addEventListener('change', () => {
    const anyChecked = !!checksCategorys.find(element => element.checked);
    buttonClearFilterCategory.style = anyChecked ? "Display: block" : "Display: none"; 
  });
}) 

checksBrands.forEach(element => {
  element.addEventListener('change', search );
})  

checksBrands.forEach(element => {       
  element.addEventListener('change', () => {
    const anyChecked = !!checksBrands.find(element => element.checked);
    buttonClearFilterBrand.style = anyChecked ? "Display: block" : "Display: none"; 
  });
})

document.addEventListener('keydown', (event) => {
  if(event.key == "Enter"){
    search();
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

const checksPriceEntry = () => {
  return !(inputMinPrice.value.length == 0 && inputMaxPrice.value.length == 0);
}

inputMinPrice.addEventListener('input', () => {   
  buttonClearFilterPrice.style = checksPriceEntry() ? "Display: block" : "Display: none";
});

inputMaxPrice.addEventListener('input', () => {
  buttonClearFilterPrice.style = checksPriceEntry() ? "Display: block" : "Display: none";
});


buttonClearFilterCategory.addEventListener('click', () => {
  checksCategorys.forEach(element => {
    element.checked = false;
  });
  buttonClearFilterCategory.style = "Display: none";
  search();
});

buttonClearFilterBrand.addEventListener('click', () => {
  checksBrands.forEach(element => {
    element.checked = false;
  });
  buttonClearFilterBrand.style = "Display: none";
  search();
});

buttonClearFilterPrice.addEventListener('click', () => {
  inputMinPrice.value = '';
  inputMaxPrice.value = '';
  buttonClearFilterPrice.style = "Display: none";
  search();
});

const main = document.querySelector('main');
const header = document.querySelector('header');
const product = document.querySelector('.product');
const viewDetailsProduct = document.querySelector( '.view-details-product');
const contentDetailsLeft = document.querySelector('.contentDetailsLeft');
const valueProduct = document.querySelector('.valorTotal');
const buttonFrete = document.querySelector('#buttonFrete');
const inputCEP = document.querySelector('#inputCEP');
const valorFrete = document.querySelector('#valorFrete');

let priceElement = "";
function focusProduct(element) {   

  viewDetailsProduct.style = "display: flex";  
  main.style = "opacity: 0.4";
  header.style = "opacity: 0.4";

  contentDetailsLeft.innerHTML = element.innerHTML;
  
  priceElement = element.innerText;
  priceElement =  priceElement.slice(priceElement.indexOf('$')-1)
  valueProduct.innerText = `Total ${priceElement}`;
  console.log(priceElement);
};


document.addEventListener('mouseup', function(e) {
    if (!viewDetailsProduct.contains(e.target)) {
        viewDetailsProduct.style.display = 'none';
        main.style = "opacity: 1";
        header.style = "opacity: 1";  
        
        inputCEP.value = "";
        valorFrete.innerText = "";

    }
});


const fretes = {
  AC: 200,
  AL: 250,
  AP: 145,
  AM: 157,
  BA: 190,
  CE: 300,
  DF: 120,
  ES: 100,
  GO: 120,
  MA: 147,
  MT: 180,
  MS: 172,
  MG: 50,
  PA: 244,
  PB: 334,
  PR: 275,
  PE:388,
  PI:240,
  RJ:229,
  RN:369,
  RS:178,
  RO:137,
  RR:126,
  SC:134,
  SP:122,
  TO:351
}

buttonFrete.addEventListener('click', async () =>{        
    const response = await fetch(`https://viacep.com.br/ws/${inputCEP.value}/json/`);
    const data = await response.json();
        
    if(!data.erro){
      console.log(data);
      valorFrete.innerHTML = `${data.localidade} - ${data.uf} <br> Frete R$${fretes[data.uf]},00`;
      const valorProduto = Number(priceElement.slice(priceElement.indexOf('$')+1).replace(",","."));
      let totalComFrete = String(valorProduto+fretes[data.uf]);
      totalComFrete = totalComFrete.includes(".") ? totalComFrete.replace(".",",") : totalComFrete + ",00";
      valueProduct.innerText = `Total R$ ${totalComFrete}`;
    }
});
