const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")
const emojiInput = document.getElementById("emoji-input")
const unshiftBtn = document.getElementById("unshift-btn")

const myEmojis = ["👨🏽‍💻", "🎮", "🍕"]

function render() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>`
    }
}

pushBtn.addEventListener("click", function () {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
    }
    render()
})

unshiftBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
    }
    render()
})