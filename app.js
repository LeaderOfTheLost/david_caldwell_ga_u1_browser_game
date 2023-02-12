const rollBtn = document.querySelector("#rollBtn")
const playBtn = document.querySelector("#playBtn")
const blocks = document.querySelectorAll(".boardBlocks")
const redPeg = document.querySelector("#redPeg")
const bluePeg = document.querySelector("#bluePeg")
const redSafe = document.querySelector("#redSafe")
const blueSafe = document.querySelector("#blueSafe")
const announcements = document.querySelector(".announcements")

let diceBlock = document.querySelector(".dice")
let currentPlayer = "red"
let redPos = 0
let bluePos = 0
let roll = 0
let playing = true

// game logic functions

// initialize game state
const startGame = () => {
  currentPlayer = "red"
  announcements.innerHTML = `${currentPlayer.toUpperCase()}'s First`
  playing = true
  redPos = 0
  bluePos = 0
  diceBlock.innerHTML = null
  document.querySelector("#redStart").appendChild(redPeg)
  document.querySelector("#blueStart").appendChild(bluePeg)
}

// check current player
const checkPlayer = () => {
  if (currentPlayer === "red") {
    announcements.innerHTML = `${currentPlayer.toUpperCase()}'s Turn`
    checkPos()
  } else {
    announcements.innerHTML = `${currentPlayer.toUpperCase()}'s Turn`
    checkPos()
  }
}

// check player position
const checkPos = (redPos, bluePos) => {
  if (currentPlayer === "red") {
    redPos = parseInt(redPeg.parentNode.getAttribute("blockIndex")) + 1
  } else {
    bluePos = parseInt(bluePeg.parentNode.getAttribute("blockIndex")) + 1
  }
}

// roll dice
const rollDice = () => {
  roll = Math.floor(Math.random() * 6 + 1)
  diceBlock.textContent = roll
}

// move pegs
const movePeg = () => {
  let move = roll
  if (currentPlayer === "red") {
    if (redPos + move <= 16) {
      blocks[move + redPos - 1].appendChild(redPeg)
      redPos = parseInt(redPeg.parentNode.getAttribute("blockIndex")) + 1
    } else {
      document.querySelector("#redSafe").appendChild(redPeg)
      playing = false
    }
  } else {
    if (bluePos + move <= 16) {
      blocks[move + bluePos - 1].appendChild(bluePeg)
      bluePos = parseInt(bluePeg.parentNode.getAttribute("blockIndex")) + 1
    } else {
      document.querySelector("#blueSafe").appendChild(bluePeg)
      playing = false
    }
  }
  updateBlock()
  switchPlayer()
  checkWinner()
}

// update block
const updateBlock = () => {
  if (currentPlayer === "red" && redPos === bluePos) {
    document.querySelector("#blueStart").appendChild(bluePeg)
    bluePos = 0
  } else if (currentPlayer === "blue" && redPos === bluePos) {
    document.querySelector("#redStart").appendChild(redPeg)
    redPos = 0
  }
}

// check for winner
const checkWinner = () => {
  if (playing === false) {
    endGame()
  } else {
    checkPlayer()
  }
}

// switch player
const switchPlayer = () => {
  currentPlayer = currentPlayer === "red" ? "blue" : "red"
  announcements.textContent = `${currentPlayer.toUpperCase()}'s turn`
}

// end game
const endGame = () => {
  if (currentPlayer === "red") {
    announcements.textContent = `Blue Wins!`
  } else {
    announcements.textContent = `Red Wins!`
  }
}

// event listeners

startGame()

playBtn.addEventListener("click", startGame)
rollBtn.addEventListener("click", rollDice)
moveBtn.addEventListener("click", movePeg)
