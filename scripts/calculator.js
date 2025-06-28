let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(n) {
  calculation += n;
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
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