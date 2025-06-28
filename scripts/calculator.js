let calculation = '';

function updateCalculation(n) {
  calculation += n;
  console.log(calculation);
}

function printCalculationString() {
  document.querySelector('.js-calculation-string').innerHTML = calculation;
}