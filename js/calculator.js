
document.onkeydown = function (e) {
  if(e.key === '-' || e.key === '+') 
  e.preventDefault();
}

const numberEl = document.querySelectorAll('.number');
const operatorEl = document.querySelectorAll('.operator');
const clearAllEl = document.querySelector('.clearAll');
const clearEl = document.querySelector('.clear');
const equalsEl = document.querySelector('.equals');
const displayOneEl = document.querySelector('#display-one');
const displayTwoEl = document.querySelector('#display-two');
const tempResultEl = document.querySelector('#tempResult');
// const sciFunc = document.querySelectorAll('.sci-func');

let displayOne = '';
let displayTwo = '';
let result = null;
let haveDot = false;
let lastOperation = '';


numberEl.forEach( number => {
    number.addEventListener('click', (e)=> {
        if(e.target.innerText === '.' && !haveDot) {
          haveDot = true;
        }
        else if(e.target.innerText === '.' && haveDot) {
        return;
        }
        displayTwo += e.target.innerText;
        displayTwoEl.value = displayTwo;
    })
})

operatorEl.forEach( operator => {
    operator.addEventListener('click', (e) => {
        if(!displayTwo) return;
            haveDot = false;
        
        let operationName = e.target.innerText;
        
        if(displayOne && displayTwo && lastOperation) {
            mathOperation();
        }
        else {
            result = parseFloat(displayTwo);
        }
        clearVar(operationName);
        lastOperation = operationName; 
    })
});

function clearVar(name = '') {
    displayOne += displayTwo + ' ' + name + ' ';
    displayOneEl.innerHTML = displayOne;
    displayTwoEl.value = '';
    displayTwo = '';
    tempResultEl.innerText = result.toFixed(2);
}

function mathOperation() {
    if(lastOperation === '×') {
      result = parseFloat(result) * parseFloat(displayTwo);
    }
    else if(lastOperation === '+') 
      result = parseFloat(result) + parseFloat(displayTwo);
    
    else if(lastOperation === '-') 
      result = parseFloat(result) - parseFloat(displayTwo);
    
    else if(lastOperation === '/') 
      result = parseFloat(result) / parseFloat(displayTwo);
    
    else if(lastOperation === '%') 
      result = parseFloat(result) / 100;
}

equalsEl.addEventListener('click', (e) => {
    if(!displayOne && !displayTwo) return;
    haveDot = false;
    mathOperation();
    clearVar();
    displayTwoEl.value = result;
    tempResultEl.innerText = '';
    displayTwo = result;
    displayOne = '';
})


clearEl.addEventListener('click', (e) => {
  if(!displayTwo) return;
  displayTwoEl.value = '';
  displayTwo = '';
  
})

clearAllEl.addEventListener('click', (e) => {
  displayOneEl.innerText = null;
  displayTwoEl.value = '';
  tempResultEl.innerText = '';
  displayTwo = '';
  displayOne = '';
  tempResult = '';

})



// window.addEventListener('keydown', (e) => {
//   if(displayOneEl.innerText === '') 
//     return;

//   else if(
//     e.key === '+' ||
//     e.key === '-' ||
//     e.key === '/'
//   ) {
    
//     clearVar(e.key);
//     lastOperation = e.key;
    
//   }
//   else if(e.key === '*') 
//     clickOperatorButtonEl('×');
//   else if(e.key == 'Enter' || e.key === '=') 
//     clickEqual();
// })


// function clickOperatorButtonEl(key) {
//   operatorEl.forEach( button => {
//     if(button.innerText === key) 
//       button.click();
//   })
// }

// function clickEqual() {
//   equalsEl.click();
// }

 