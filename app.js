// Global Variables
let currentPlayer = 'red'
let playing = false
let diceBlock = document.querySelector('.dice')
const blocks = document.querySelectorAll('.boardBlocks')
const message = document.querySelector('.announcements')
const playBtn = document.querySelector('#playBtn')
const rollBtn = document.querySelector('#rollBtn')
const bluePeg = document.querySelector('#bluePeg')
const redPeg = document.querySelector('#redPeg')

//game logic functions
const startGame = () => {
  message.textContent = `${currentPlayer.toUpperCase()}'s Rolls First`
  diceBlock.textContent = null
  playing = true
}
const rollDice = () => {
  let rollNum = Math.floor(Math.random() * 6 + 1)
  return rollNum
}
// move pegs
// add dice roll to index of blocks
// move peg to that position
let currentPosition = 0
const playerMove = () => {
  let move = rollDice()

  diceBlock.textContent = move
  blocks[move + currentPosition - 1].appendChild(redPeg)
  currentPosition += parseInt(redPeg.parentNode.getAttribute('blockIndex'))

  console.log(currentPosition)
  if (currentPosition > 15) {
    document.querySelector('#redSafe').appendChild(redPeg)
  }
  checkWinner()
}

const switchPlayer = () => {
  currentPlayer = currentPlayer === 'red' ? 'blue' : 'red'
  message.textContent = `${currentPlayer.toUpperCase()}'s turn`
}

const checkWinner = () => {
  let winner = false
  if (document.querySelectorAll('.safe')[1].childNodes === redPeg) {
    winner = true
    alert('Red Wins')
  } else if (document.querySelectorAll('.safe')[0].children === bluePeg) {
    winner = true
    alert('Blue Wins')
  }
}

startGame()
//event listeners
playBtn.addEventListener('click', startGame)
rollBtn.addEventListener('click', rollDice)
bluePeg.addEventListener('click', playerMove)
redPeg.addEventListener('click', playerMove)
