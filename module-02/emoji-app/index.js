const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")

const myEmojis = ["👨🏽‍💻", "🎮", "🍕"]

function render() {
    for (let i = 0; i < myEmojis.length; i++) {
        // console.log("loop")
        emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>`
    }
}

pushBtn.addEventListener("click", function () {
    const emojiInput = document.getElementById("emoji-input")

    if (emojiInput.value) {
        // Push the emoji into the myEmoji's array
        myEmojis.push(emojiInput.value)
        // clear the input field
        emojiInput.value = ""
    }
    emojiContainer.innerHTML = ``
    render()
})