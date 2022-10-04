// Global Variables
let currentPlayer = 'red'
let playing = false

let diceBlock = document.querySelector('.dice')
const blocks = document.querySelectorAll('.boardBlocks')
const message = document.querySelector('.announcements')
const playBtn = document.querySelector('#playBtn')
const rollBtn = document.querySelector('#rollBtn')
const bluePegs = document.querySelectorAll('.bluePegs')
const redPegs = document.querySelectorAll('.redPegs')
let blockSpace = blocks

//game logic functions
console.log(blockSpace)
const startGame = () => {
  message.textContent = `${currentPlayer.toUpperCase()}'s turn`
  playing = true
}
startGame()

const playGame = () => {
  currentPlayer = 'red'
  message.textContent = `${currentPlayer.toUpperCase()}'s turn`
  diceBlock.textContent = '0'
  playing = true
}
const rollDice = () => {
  let diceRoll = Math.floor(Math.random() * 6 + 1)
  diceBlock.textContent = diceRoll
}

// move pegs
const playerMove = () => {
  for (let i = 0; i < bluePegs.length; i++) {}
}

const winner = () => {}

//event listeners
playBtn.addEventListener('click', playGame)
rollBtn.addEventListener('click', rollDice)
