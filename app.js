// Global Variables
let currentPlayer = 'red'
let playing = false
let winner = false
let diceBlock = document.querySelector('.dice')
const blocks = document.querySelectorAll('.boardBlocks')
const message = document.querySelector('.announcements')
const playBtn = document.querySelector('#playBtn')
const rollBtn = document.querySelector('#rollBtn')
const bluePeg = document.querySelector('#bluePeg')
const redPeg = document.querySelector('#redPeg')

//game logic functions
const startGame = () => {
  let currentPlayer = 'red'
  message.textContent = `${currentPlayer.toUpperCase()}'s Rolls First`
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
  checkWinner()
  updateBlock()

  switchPlayer()
}

const switchPlayer = () => {
  currentPlayer = currentPlayer === 'red' ? 'blue' : 'red'
  message.textContent = `${currentPlayer.toUpperCase()}'s turn`
}

const updateBlock = () => {
  console.log(redCurrentPosition)
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
  if (document.querySelector('#redSafe').children === redPeg) {
    winner = true
    alert('Red Wins')
  } else if (document.querySelector('#blueSafe').children === bluePeg) {
    winner = true
    alert('Blue Wins')
  }
}

startGame()
//event listeners
playBtn.addEventListener('click', startGame)
rollBtn.addEventListener('click', rollDice)
bluePeg.addEventListener('click', blueMove)
redPeg.addEventListener('click', redMove)
