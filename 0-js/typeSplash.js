//This is the array in which we want to "type" out
let textArray = [
  "There are two types of people in the world.",
  "The one who talks about making a difference...",
  "And the one who actually makes a difference.",
  "Let's make a difference",
  "Together."
];

let speed = 70;                         //This is the time variable in milliseconds
let index = 0;                          //Print the array at this position
let arrayLength = textArray[0].length   //Length of an individual array string
let scrollAt = 20;                      //Scroll up at this many lines

//These variables will change as the function fires
let textPosition = 0; //Initialize text position
let contents = '';    //Initialize contents variable
let row;              //Initialize current row


//Now it's the fucntion below

function typewriter() {
  contents = '';
  row = Math.max(0, index - scrollAt);
  let destination = document.getElementById('typedText'); //This is where the magic is being placed at

  //While the row is less than the index, execute the following (adding one to display the next row)
  while (row < index) {
    contents += textArray[row++] + '<br />' + '<br />';
  }


  //Let's get the content and display it on the page
  destination.innerHTML = contents + textArray[index].substring(0, textPosition) + "|";

  //If the text position is equal to the arrayLength then we stop
  if (textPosition++ == arrayLength) {
    textPosition = 0;
    index++;
    if (index != textArray.length) {
      arrayLength = textArray[index].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", speed);
  }
}

//Now let's call the beautiful function
typewriter();

//THIS IS FIRED AFTER THE WHOLE TYPE WRITER FUNCTION IS DONE
window.onload = function () {
  setTimeout(showButton, 15000);
  }

  //Let's make the store it in a variable first
  let buttonWrapper = document.getElementById('buttonWrapper');
  let buttonOne = document.getElementById('firstButton');
  let buttonTwo = document.getElementById('secondButton');

  function showButton() {
    if (buttonWrapper.style.display == "none") {
      buttonWrapper.style.display = "block";
      buttonOne.style.display = "block";
      buttonTwo.style.display = "block";
    } else {
      console.log(`this didn't work out`)
    }

  }
