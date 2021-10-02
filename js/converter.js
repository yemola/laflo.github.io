// Currency Converter
const currencyElOne = document.getElementById('currency-one');
const currencyElTwo = document.getElementById('currency-two');
const amountElOne = document.getElementById('amount-one');
const amountElTwo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
  const currencyOne = currencyElOne.value;
  const currencyTwo = currencyElTwo.value;

  fetch(`https://v6.exchangerate-api.com/v6/dac679102ab47566ce82e789/latest/${currencyOne}`)
    .then((response) => {response.json()})
    .then((data) => {
    const rate = data.conversion_rates[currencyTwo];
    if(currencyOne && currencyTwo)
    rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

    amountElTwo.value = (parseFloat(amountElOne.value * rate)).toFixed(2);
    })
  
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
    if (n > slides.length)
  {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++)
      {
        dots[i].className = dots[i].className.replace("active", "")
      }
      slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
}

currencyElOne.addEventListener('change', calculate);
currencyElTwo.addEventListener('change', calculate);
amountElOne.addEventListener('input', calculate);
amountElTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    let temp = currencyElOne.value;
    currencyElOne.value = currencyElTwo.value;
    currencyElTwo.value = temp;
    calculate();
});

calculate();


// class Converter{
//   constructor() {
//     this.API_KEY = 'dac679102ab47566ce82e789';
//     this.currencyElOne = document.getElementById('currency-one');
//     this.currencyElTwo = document.getElementById('currency-two');
//     this.amountElOne = document.getElementById('amount-one');
//     this.amountElTwo = document.getElementById('amount-two');
//     this.rateEl = document.getElementById('rate');
//     this.swap = document.getElementById('swap');
//     this.getRate();
//     this.eventHandleOne();
//     this.eventHandleTwo();
    
//   }
//   getRate(){
//     const currencyOne = "currencyElOne.value";
//     const currencyTwo = "currencyElTwo.value";
//     const baseURL = 'https://v6.exchangerate-api.com/v6/dac679102ab47566ce82e789/latest/currencyOne';
//     const response = fetch(baseURL, {
//       method: 'GET',
//       headers:{
//         Accept: 'application/json',
//         Authorization: this.API_KEY
//       }
//     });
//     const data = response.json;
//     console.log(data);
//   }
//   eventHandleOne(){
//     const money = document.querySelectorAll('.money');
//     money.addEventListener('change', (e) => {
//       this.getRate();
//     })
//   }
//   eventHandleTwo(){
//     const amount = document.querySelectorAll('.amount');
//     amount.addEventListener('input', (e) =>{
//       this.getRate();
//     })
//   }
    
// }

// const converter = new Converter;