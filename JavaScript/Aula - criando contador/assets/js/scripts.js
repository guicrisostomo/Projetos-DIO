var currentNumberWrapper = document.getElementById("currentNumber");
var buttonAddWrapper = document.getElementsByName('adicionar')[0];
var buttonSubtWrapper = document.getElementsByName('subtrair')[0];
var currentNumber = 0;

function load() {
    buttonAddWrapper.addEventListener("click", increment, false);
    buttonSubtWrapper.addEventListener("click", decrement, false);
}

document.addEventListener("DOMContentLoaded", load, false);

function increment() {
    if (currentNumber === 9) {
        buttonAddWrapper.style.display = 'none';
    } else {
        buttonSubtWrapper.style.display = 'block';
    }

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    if (currentNumber === 1) {
        buttonSubtWrapper.style.display = 'none';
    } else {
        buttonAddWrapper.style.display = 'block';
    }

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}