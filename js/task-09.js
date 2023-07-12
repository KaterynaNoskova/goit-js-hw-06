function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChange = document.querySelector('.change-color');
const backGr = document.querySelector('.widget');
const spanText = document.querySelector('.color');


btnChange.addEventListener("click", onClick);

function onClick(evt){
  backGr.style.backgroundColor = getRandomHexColor();
  spanText.textContent = getRandomHexColor();
}

  