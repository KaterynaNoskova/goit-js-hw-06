const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector("button[data-action='decrement']");
const btnIncrement = document.querySelector("button[data-action='increment']");

let value = 0;

btnIncrement.addEventListener("click", function(){
    value += 1;
    counterValue.textContent = value;
    counterValue.style.color = 'green';
});

btnDecrement.addEventListener("click", function(){
    value -= 1;
    counterValue.textContent = value;
    counterValue.style.color = 'red';
});