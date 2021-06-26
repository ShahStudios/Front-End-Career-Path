const searchInput = document.getElementById("searchInput")
searchInput.addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase()
    console.log(searchQuery)
    let allNamesDOMCollection = document.getElementsByClassName('name');
    console.log(allNamesDOMCollection[1].textContent);
})