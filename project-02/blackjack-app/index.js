let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let firstCard = getRandomCard()
let secondCard = getRandomCard()

let cardsArray = [firstCard, secondCard]
let sum = cardsArray[0] + cardsArray[1]
let hasBlackJack = false
let isAlive = true

let message = ""
let cards = [firstCard, secondCard]

function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1
}

function startGame() {
    renderGame()
}

function renderGame() {
    
    for (let i=0; i<cardsArray.length; i++) {
        cardsEl.textContent +=  cardsArray[i] + " "
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
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    sum += card
    cardsArray.push(card)
    renderGame()
}