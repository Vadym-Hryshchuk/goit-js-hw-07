const counterValue = document.querySelector("#value");
let counter = 0;
const btnNext = document.querySelector("[data-action=decrement]");
const decrement = () => {
  counter -= 1;
  counterValue.textContent = counter;
};
btnNext.addEventListener("click", decrement);

const btnPrevious = document.querySelector("[data-action=increment]");
const increment = () => {
  counter += 1;
  counterValue.textContent = counter;
};
btnPrevious.addEventListener("click", increment);
