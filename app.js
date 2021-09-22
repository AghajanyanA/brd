const board = document.querySelector('#board')
const squareCount = 460

for (let i = 0; i < squareCount; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    

    square.addEventListener('mouseover', () => {setColor(square)
    })
    square.addEventListener('mouseleave', () => {removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const random = Math.floor(Math.random()*(999-100+1)+100);
    element.style.backgroundColor = `#${random}`
    element.style.boxShadow = `0 0 2px ${random}, 0 0 10px ${random}`
}

function removeColor(element) {
    element.style.backgroundColor = 'rgb(37, 37, 37)'
    element.style.boxShadow = `0 0 2px black`
}