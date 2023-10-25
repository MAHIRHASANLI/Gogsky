const div = document.getElementById("ofline");

window.addEventListener('online', () => {
    div.style.display = 'none'
    console.log("online");
})

window.addEventListener('offline', () => {
    console.log("ofline");
    div.style.display = 'block'
})