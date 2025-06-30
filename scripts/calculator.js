const operators = ['+' , '-', '/', 'x', '.', '%'];
let calculation = localStorage.getItem('calculation') || '';
printCalculationString();

let icon = document.getElementById("icon");
  icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.src = "images/sun.png"
    }
    else{
      icon.src = "moon.png"
    }
}


function updateCalculation(n) {
  if (calculation === 'Error') calculation = '';

  const lastChar = calculation.slice(-1);

  if (calculation === '' && operators.includes(n)) 
    return;

  if (operators.includes(lastChar) && operators.includes(n)) 
    return;

  calculation += n;
  localStorage.setItem('calculation', calculation);
  printCalculationString();
}

function printCalculationString() {
  document.querySelector('.js-calculation-string').innerHTML = calculation;
}

function removeCalculationString() {
  calculation = '';
  localStorage.removeItem('calculation');
  printCalculationString();
}

function evaluateString() {
  try {
    let expression = calculation.replaceAll('x', '*');
    let result = eval(expression);
    calculation = result.toString();
    localStorage.setItem('calculation', calculation);
    printCalculationString();
  } 
  catch (error) {
    calculation = 'Error';  
    printCalculationString();
  }
}

function removeLastChar() {
  calculation = calculation.slice(0, -1);
  localStorage.setItem('calculation', calculation);
  printCalculationString(); 
}