/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(HourMin) {
  let time = HourMin.split(":")[0];
  if (time < 12) {
    greeting = "Good Morning";
  } else if (time < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return greeting;
}

/* Write your implementation of displayMessage() */

function displayMessage(arg) {
  let g = document.getElementById("greeting");
  g.innerText = arg;
}

// <h1 id="greeting"></h1>
// When the function runs it should update the text inside the #greeting node with the content of the argument.
