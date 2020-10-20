/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time){
  console.log('time: ' + time + "\nresult: " + parseInt(time.split(':')[0]));
  let hour = parseInt(time.split(':')[0]);
   if(hour < 12) {
      return 'Good Morning';
    }
  else if (12 <= hour && hour < 17) {
      return  'Good Afternoon';
    }
  else if (17 <= hour) {
      return  'Good Evening';
  };
}

function displayMessage(message) {
  greeting = document.getElementById('greeting');
  greeting.innerText = message;
}
