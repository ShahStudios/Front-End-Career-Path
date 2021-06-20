const saveEL = document.getElementById('save-el')
const displayCount = document.getElementById('counter')

let count = 0

function increment() {
    count++
    displayCount.textContent = count
    // console.log(count)
}

function save() {
    // reate a variable that contains both the count and the dash separator, i.e. "12 - "
    let previousCount = count + ' - '
    // Render the variable in the saveEl using innerText
    saveEL.textContent += previousCount
    // Make sure to not delete the existing content of the paragraph
    displayCount.innerHTML = 0
    count = 0
}

