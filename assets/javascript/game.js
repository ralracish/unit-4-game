
// Global variables

targetNumber=0
randoms=0
counter=0

//To get target number

//Create the function to start the game variables, but not actually run the function yet
// function startGame() {

targetNumber=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  
console.log(targetNumber)

var randoms = Array.from({length: 4}, () => Math.floor(Math.random() * 12));

console.log(randoms)

counter=0




// roundComplete() function
    // Here we will have all of the code that needs to be run after each guess is made.
    function roundComplete() {

      // First, log an initial status update in the console
      // telling us how many wins and losses there are.
      console.log("wins" + youWin + " | losses " + youLose);

       // Add to the win counter
       youWin++;
  
       // Give the user an alert
       alert("You win!");
   
       // Update the win counter in the HTML
       document.getElementById("wins").innerHTML = youWin;
   
       // Restart the game
       startGame();
     }
   
     // If we've score is greater than targetNumber
     else if (guessesLeft === 0) {
   
       // Add to the loss counter
       youLose++;
   
       // Give the user an alert
       alert("You lose");
   
       // Update the loss counter in the HTML
       document.getElementById("losses").innerHTML = youLose;
   
       // Restart the game
       startGame();
   
     }
   
   }
   
   // MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
   // ==================================================================
   
   // Starts the Game by running the startGame() function
   startGame();
   
   // Then initiates the function for capturing key clicks.
   document.onkeyup = function(event) {
   
     // Runs the code to check for correct guesses.
     checkLetters(guessedLetters);
   
     // Runs the code that ends each round.
     roundComplete();
   };
// }