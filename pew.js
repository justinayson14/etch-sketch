const container = document.querySelector('.box-container');
const clear = document.querySelector('#clear-btn');
const black = document.querySelector('#blk-btn');
const rgb = document.querySelector('#rgb-btn');
const shade = document.querySelector('#shade-btn');

const boxDim = prompt("What dimensions of the grid would you like? Please enter a value below or equal to 100.");
checkBoxDim(boxDim);

clear.addEventListener('click', clearContainer);
black.addEventListener('click', chooseBlack);
rgb.addEventListener('click', chooseRGB);
shade.addEventListener('click', chooseShade);

function makeSquares(lengthSide) {
    for(let i = 0; i < lengthSide; i++) {
        const row = document.createElement('div');
        row.className = 'row-of-boxes';
        for(let s = 0; s < lengthSide; s++) {
            const box = document.createElement('div');
            box.className = 'box-in-container';
            box.style.width = 600/lengthSide + 'px';
            box.style.height = 600/lengthSide + 'px';
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function fillBox(e, color = 'white') {
    color = pickColor;
    e.target.style.backgroundColor = color;
}

function clearContainer() {
    const boxes = document.querySelectorAll('.box-in-container');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'transparent';
    }
}

function checkBoxDim(userVal) {
   while(userVal > 100 || userVal <= 0) {
    alert(`${userVal} is invalid. Please try again`);
    userVal = prompt('Enter value below or equal to 100: ');
   }
   return makeSquares(userVal);
}

function chooseBlack(e) {
    const boxes = document.querySelectorAll('.box-in-container');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'black');
    }
}

function chooseRGB(e) {
    const boxes = document.querySelectorAll('.box-in-container');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', (e) => e.target.style.backgroundColor = `rgb(${randomizeNum()}, ${randomizeNum()}, ${randomizeNum()})`);
    }
}

function chooseShade(e) {
    const boxes = document.querySelectorAll('.box-in-container');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', (e) => e.target.style.backgroundColor = `hsl(191, 40%, ${randomizeShade()}%)`);
    }
}

function randomizeNum() {
    return Math.floor(Math.random() * 255);
}

function randomizeShade() {
    return Math.floor(Math.random() * 40 + 10);
}