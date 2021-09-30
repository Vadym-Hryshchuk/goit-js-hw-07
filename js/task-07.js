const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.setAttribute('style', `font-size: ${inputEl.value}px`);

const functions = () => {
  textEl.setAttribute('style', `font-size: ${inputEl.value}px`);
};
const lisener = inputEl.addEventListener("input", functions);
