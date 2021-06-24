const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")
const emojiInput = document.getElementById("emoji-input")
const unshiftBtn = document.getElementById("unshift-btn")

const myEmojis = ["👨🏽‍💻", "🎮", "🍕"]

function render() {
    for (let i = 0; i < myEmojis.length; i++) {
        // console.log("loop")
        emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>`
    }
}

pushBtn.addEventListener("click", function () {
    if (emojiInput.value) {
        // Push the emoji into the myEmoji's array
        myEmojis.push(emojiInput.value)
        // clear the input field
        emojiInput.value = ""
    }
    // clear the container so it does not display the old array
    emojiContainer.innerHTML = ``
    render()
})

unshiftBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
    }
    emojiContainer.innerHTML = ``
    render()
})