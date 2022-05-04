const board = document.querySelector('#board')
const colors = ['#1E88E5', '#C6FF00', '#E65100', '#AB47BC', '#E91E63']
const SQUARES_NUMBER = 530


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)

    square.addEventListener('mouseover',  setColor )
    square.addEventListener('mouseleave',  removeColor )
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 00 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {    
    return colors[Math.floor(Math.random() * colors.length)]
}
