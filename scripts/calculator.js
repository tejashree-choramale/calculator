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