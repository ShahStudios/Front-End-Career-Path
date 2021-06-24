const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")

const myEmojis = ["👨🏽‍💻", "🎮", "🍕"]

for (let i = 0; i < myEmojis.length; i++) {
    emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>`
}

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function() {
    // console.log("click")
    const emojiInput = document.getElementById("emoji-input")
    console.log(emojiInput.value)
})