/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(str) {
    let time = str.split(':');
    time = parseInt(time[0], 10)
    if (time < 12) return "Good Morning"
    if (time > 17) return "Good Evening"
    return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
    const input = document.getElementById('greeting')
    input.innerText = str
}