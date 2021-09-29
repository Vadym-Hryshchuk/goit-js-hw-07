const boxesElement = document.querySelector('input');
// console.log(boxesElement.value);
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

// console.log(renderBtn);
const boxesElements = document.querySelector('#boxes');


const clickHendler = () => {
    const amount = boxesElement.value;
    
    createBoxes(amount)
};

const createBoxes = (amount) => {
    const markupDiv = [];
    const defaultSize = 30;
    
    for (let i = 0; i < amount; i += 1) {
        const colorR = Math.floor(Math.random() * 256);
        const colorG = Math.floor(Math.random() * 256);
        const colorB = Math.floor(Math.random() * 256);
        const sizeDiv = defaultSize + i * 10;
        const divEl = document.createElement("div");
        divEl.setAttribute('style', `width: ${sizeDiv}px; height: ${sizeDiv}px; background-color: rgb(${colorR},${colorG},${colorB})`);
        markupDiv.push(divEl);
        
    }
    boxesElements.append(...markupDiv);
}

const renderBtnClickHendler = renderBtn.addEventListener("click", clickHendler)

const destroyBoxes = () => {
    boxesElements.innerHTML = "";
    boxesElement.value = ""
};
const destroyBtnClickHendler = destroyBtn.addEventListener("click", destroyBoxes);