const usernameInput = document.getElementById("usernameInput")
usernameInput.addEventListener("keyup", function() {
    let username = event.target.value.toLowerCase()
    console.log(username)
})