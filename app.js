// Global Variables
let currentPlayer = 'red'
let playing = false
let diceRoll = Math.floor(Math.random() * 6 + 1)
let diceBlock = document.querySelector('.dice')
const blocks = document.querySelectorAll('.boardBlocks')
const message = document.querySelector('.announcements')
const playBtn = document.querySelector('#playBtn')
const rollBtn = document.querySelector('#rollBtn')

//game logic functions
console.log(diceRoll)
const startGame = () => {
  message.textContent = `${currentPlayer.toUpperCase()}'s turn`
  playing = true
}
startGame()

const playGame = () => {
  currentPlayer = 'red'
  message.textContent = `${currentPlayer}'s turn`
  diceBlock.textContent = '0'
  playing = true
}
const rollDice = () => {
  diceBlock.textContent = diceRoll
}
const playerMove = () => {}
const winner = () => {}

//event listeners
playBtn.addEventListener('click', playGame)
rollBtn.addEventListener('click', rollDice)
