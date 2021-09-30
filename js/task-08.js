const boxesElement = document.querySelector('input');

const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

const boxesElements = document.querySelector('#boxes');


const clickHendler = () => {
    const amount = boxesElement.value;
    
    createBoxes(amount)
};
let defaultSize = 20;
const createBoxes = (amount) => {
    const markupDiv = [];
    
    
    for (let i = 0; i < amount; i += 1) {
        const colorR = Math.floor(Math.random() * 256);
        const colorG = Math.floor(Math.random() * 256);
        const colorB = Math.floor(Math.random() * 256);
        defaultSize += 10;
        
        const divEl = document.createElement("div");
        divEl.setAttribute('style', `width: ${defaultSize}px; height: ${defaultSize}px; background-color: rgb(${colorR},${colorG},${colorB})`);
        boxesElement.value = "";
        markupDiv.push(divEl);
        
    }
    boxesElements.append(...markupDiv);
}

const renderBtnClickHendler = renderBtn.addEventListener("click", clickHendler)

const destroyBoxes = () => {
    boxesElements.innerHTML = "";
    boxesElement.value = "";
     defaultSize = 20;
};
const destroyBtnClickHendler = destroyBtn.addEventListener("click", destroyBoxes);
