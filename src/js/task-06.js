const input = document.querySelector("#validation-input");
console.log(input.getAttribute("data-length"));

const inputChangeHendler = () => {
  if (input.value.length === Number(input.getAttribute("data-length"))) {
    return input.setAttribute("id", "validation-input__valid");
  }

  input.setAttribute("id", "validation-input__invalid");
};

const changelisenerInput = input.addEventListener("change", inputChangeHendler);
