const container = document.querySelector('.box-container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.className = 'row-of-boxes';
    for (let s = 0; s < 16; s++) {
        const box = document.createElement('div');
        box.className = 'box-in-container';
        row.appendChild(box);
    }
    container.appendChild(row);
}

container.addEventListener('click', checkNode);

container.addEventListener('click', fillBox);
container.addEventListener('dblclick', unfillBox);

function fillBox(e) {
    e.target.setAttribute('style', 'background-color: #0D1B1E');
}

function unfillBox(e) {
    e.target.setAttribute('style', 'background-color: transparent');
}

function checkNode(e) {
    console.log(e);
}