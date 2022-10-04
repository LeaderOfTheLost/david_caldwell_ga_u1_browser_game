// Global Variables
let currentPlayer = 'red'
let playing = false
let diceRoll = Math.floor(Math.random() * 6 + 1)
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
  diceBlock.textContent = diceRoll
}
console.log(diceRoll)

// move pegs
// add dice roll to index of blocks
// move peg to that position
const playerMove = (diceRoll) => {
  // let diceRoll = Math.floor(Math.random() * 6 + 1)
  // diceBlock.textContent = diceRoll
  // for (let i = 0; i < blocks.length; i++) {
  // let move = diceRoll
  console.log(diceRoll)
  // }
}
const updateBlock = () => {}

const switchPlayer = () => {
  currentPlayer = currentPlayer == 'red' ? 'blue' : 'red'
  message.textContent = `${currentPlayer.toUpperCase()}'s turn`
}

const checkWinner = () => {
  let winner = false
}

startGame()
//event listeners
playBtn.addEventListener('click', startGame)
rollBtn.addEventListener('click', rollDice)
bluePeg.addEventListener('click', playerMove)
redPeg.addEventListener('click', playerMove)
