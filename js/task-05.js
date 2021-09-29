const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const makeNameOutput = () => {
  if (nameInput.value === "") {
    return (nameOutput.textContent = "незнакомец");
  }
  nameOutput.textContent = nameInput.value;
};

nameInput.addEventListener("input", makeNameOutput);
