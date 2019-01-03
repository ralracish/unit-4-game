$(document).ready(function(){
// Global variables

var targetNumber=0
var randoms=[]
var counter=0
var wins=0
var losses=0

//To get target number

//Create the function to start the game variables, but not actually run the function yet
function startGame() {
  var targetNumber=0
  var randoms=[]
  var counter=0

}

var targetNumber=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  
console.log(targetNumber);

$("#number-to-guess").text("Number to Guess:" = targetNumber);


// randoms = Array.from({length: 4}, () => Math.floor(Math.random() * 12));

// console.log(randoms)
    var crystalOne = Math.floor(Math.random() * 12) + 1; // creates crystal 1 value, a random number between 1-12
    var crystalTwo = Math.floor(Math.random() * 12) + 1; // creates crystal 2 value, a random number between 1-12
    var crystalThree = Math.floor(Math.random() * 12) + 1; // creates crystal 3 value, a random number between 1-12
    var crystalFour = Math.floor(Math.random() * 12) + 1; // creates crystal 4 value, a random number between 1-12

$(".crystal-image").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;




// roundComplete() function
    // Here we will have all of the code that needs to be run after each guess is made.
    // function roundComplete() {

      // First, log an initial status update in the console
      // telling us how many wins and losses there are.
      console.log("wins" + youWin + " | losses " + youLose);

      
    
        // All of the same game win-lose logic applies. So the rest remains unchanged.
        alert("New score: " + counter);
    
        if (counter === targetNumber) {
          alert("You win!");
          startGame();
        }
    
        else if (counter >= targetNumber) {
          alert("You lose!!");
          startGame();
        }
      
   
    //  }
   
  //  }
   
   // MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
   // ==================================================================
   
   // Starts the Game by running the startGame() function
  //  startGame();
   
   // Then initiates the function for capturing clicks.
  //  
   
     // Runs the code to add score
        // addScore();
    // 
   
     // Runs the code that ends each round.
    //  roundComplete();
  //  };
      })