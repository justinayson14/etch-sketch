const container = document.querySelector('.box-container');
const clear = document.querySelector('.clear-button');

const boxDim = prompt("What dimensions of the grid would you like? Please enter a value below or equal to 100.");
checkBoxDim(boxDim);

clear.addEventListener('click', clearContainer);
console.log(container.childNodes);

function makeSquares(lengthSide) {
    for (let i = 0; i < lengthSide; i++) {
        const row = document.createElement('div');
        row.className = 'row-of-boxes';
        for (let s = 0; s < lengthSide; s++) {
            const box = document.createElement('div');
            box.className = 'box-in-container';
            box.style.width = 600/lengthSide + 'px';
            box.style.height = 600/lengthSide + 'px';
            box.addEventListener('mouseover', fillBox);
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function fillBox(e) {
    e.target.style.backgroundColor = '#0D1B1E';
}

function clearContainer(e) {
    const boxes = document.querySelectorAll('.box-in-container');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'transparent';
    }
}

function checkBoxDim(userVal) {
   while(userVal > 100) {
    alert(`${userVal} is invalid. Please try again`);
    userVal = prompt('Enter value below or equal to 100: ');
   }
   return makeSquares(userVal);
}