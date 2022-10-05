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
const redMove = () => {
  let move = rollDice()
  diceBlock.textContent = move

  for (let i = 0; i < blocks.length; i++) {
    if (parseInt(blocks[i].getAttribute('blockIndex')) === move) {
      blocks[move - 1].appendChild(redPeg)
      let newPosition = parseInt(blocks[move].getAttribute('blockindex'))
      console.log(newPosition)
    }
  }
}

const blueMove = () => {
  let move = rollDice()
  diceBlock.textContent = move

  for (let i = 0; i < blocks.length; i++) {
    if (parseInt(blocks[i].getAttribute('blockindex')) === move) {
      blocks[i - 1].appendChild(bluePeg)
    }
  }
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
bluePeg.addEventListener('click', blueMove)
redPeg.addEventListener('click', redMove)
