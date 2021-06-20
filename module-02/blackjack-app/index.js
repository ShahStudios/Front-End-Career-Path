let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let cardsArray = []
let sum = 0
let hasBlackJack = false
let message = ""

let player = {
    name: 'Shah',
    chips: 21
}

playerEl.textContent = "Player: " + player.name + " | Chips: $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardsArray = [firstCard, secondCard]
    sum = cardsArray[0] + cardsArray[1]
    renderGame()
}

function renderGame() {
    for (let i = 0; i < cardsArray.length; i++) {
        cardsEl.textContent += cardsArray[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true & hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cardsArray.push(card)
        renderGame()
    }
}