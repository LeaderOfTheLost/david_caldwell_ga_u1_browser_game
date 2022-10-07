// Global Variables
let currentPlayer = 'red'
let playing = false
let message = document.querySelector('.announcements')
let diceBlock = document.querySelector('.dice')
const blocks = document.querySelectorAll('.boardBlocks')
const playBtn = document.querySelector('#playBtn')
const rollBtn = document.querySelector('#rollBtn')
const bluePeg = document.querySelector('#bluePeg')
const redPeg = document.querySelector('#redPeg')

//game logic functions
const startGame = () => {
  let currentPlayer = 'red'
  message.textContent = `${currentPlayer.toUpperCase()}'s First`
  diceBlock.textContent = null
  playing = true
  document.querySelector('#redStart').appendChild(redPeg)
  document.querySelector('#blueStart').appendChild(bluePeg)
  redCurrentPosition = 0
  blueCurrentPosition = 0
}
const rollDice = () => {
  let rollNum = Math.floor(Math.random() * 6 + 1)
  return rollNum
}

// move pegs
// add dice roll to index of blocks
// move peg to that position
let redCurrentPosition = 0
const redMove = () => {
  let move = rollDice()
  diceBlock.textContent = move
  if (redCurrentPosition + move <= 15) {
    blocks[move + redCurrentPosition - 1].appendChild(redPeg)

    redCurrentPosition =
      parseInt(redPeg.parentNode.getAttribute('blockIndex')) + 1
  } else {
    document.querySelector('#redSafe').appendChild(redPeg)
  }

  updateBlock()
  switchPlayer()
  checkWinner()
}
let blueCurrentPosition = 0
const blueMove = () => {
  let move = rollDice()
  diceBlock.textContent = move
  if (blueCurrentPosition + move < 15) {
    blocks[move + blueCurrentPosition - 1].appendChild(bluePeg)

    blueCurrentPosition =
      parseInt(bluePeg.parentNode.getAttribute('blockIndex')) + 1
  } else {
    document.querySelector('#blueSafe').appendChild(bluePeg)
  }

  updateBlock()
  switchPlayer()
  checkWinner()
}

const switchPlayer = () => {
  currentPlayer = currentPlayer === 'red' ? 'blue' : 'red'
  message.textContent = `${currentPlayer.toUpperCase()}'s turn`
}

const updateBlock = () => {
  if (currentPlayer === 'red' && redCurrentPosition === blueCurrentPosition) {
    document.querySelector('#blueStart').appendChild(bluePeg)
    blueCurrentPosition = 0
  } else if (
    currentPlayer === 'blue' &&
    redCurrentPosition === blueCurrentPosition
  ) {
    document.querySelector('#redStart').appendChild(redPeg)
    redCurrentPosition = 0
  }
}
const checkWinner = () => {
  if (document.querySelector('#blueSafe').hasChildNodes() === true) {
    message.textContent = 'BLUE WINS!'
  } else if (document.querySelector('#redSafe').hasChildNodes() === true) {
    message.textContent = 'RED WINS!!'
  }
}

startGame()
//event listeners
playBtn.addEventListener('click', startGame)
rollBtn.addEventListener('click', rollDice)
bluePeg.addEventListener('click', blueMove)
redPeg.addEventListener('click', redMove)
