const timeDiv = document.querySelector(".time")

function updateClock() {
    let now = new Date()
    let timeString = now.toLocaleTimeString()
    timeDiv.innerHTML = timeString
}

setInterval(updateClock, 1000)
updateClock()