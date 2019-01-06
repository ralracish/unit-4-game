$(document).ready(function(){

// Global variables
var targetNumber;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var score=0
var wins=0
var losses=0

//To get target number between 19 and 120
  var targetNumber=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  console.log(targetNumber);
  $("#number-to-guess").text("Number to Guess:  " + targetNumber) //place Number to Guess on the screen

//To generate random numbers for each crystal
  var crystalOne = Math.floor(Math.random() * 12) + 1; // creates crystal 1 value, a random number between 1-12
  var crystalTwo = Math.floor(Math.random() * 12) + 1; // creates crystal 2 value, a random number between 1-12
  var crystalThree = Math.floor(Math.random() * 12) + 1; // creates crystal 3 value, a random number between 1-12
  var crystalFour = Math.floor(Math.random() * 12) + 1; // creates crystal 4 value, a random number between 1-12

    console.log(crystalOne, crystalTwo, crystalThree, crystalFour)
  
  var score=0;
  var wins=0;
  var losses=0;
  $("#wins").text("Wins: " + wins); //sets the Wins at 0 on the screen
  $("#losses").text("Losses: " + losses); //sets the Losses at 0 on the screen
  $("#wins").css("font-size", "30px"); //just trying to use jquery to style something as an extra bonus
  $("#losses").css("font-size", "30px"); //just trying to use jquery to style something as an extra bonus

  //Function to reset game 
  function reset(){ 
  //To get new target number
  targetNumber=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(targetNumber);
    $("#number-to-guess").text("Number to Guess:  " + targetNumber)//to push target number into "Number to Guess" on html using jquery

  //To generate new random numbers for each crystal
    crystalOne = Math.floor(Math.random() * 12) + 1; // creates crystal 1 value, a random number between 1-12
    crystalTwo = Math.floor(Math.random() * 12) + 1; // creates crystal 2 value, a random number between 1-12
    crystalThree = Math.floor(Math.random() * 12) + 1; // creates crystal 3 value, a random number between 1-12
    crystalFour = Math.floor(Math.random() * 12) + 1; // creates crystal 4 value, a random number between 1-12
    score=0;
    $(".score").text(score);
  
    console.log(crystalOne, crystalTwo, crystalThree, crystalFour)
    
    wins=0;
    losses=0;
  }
  //To create win function to be called when random target is same as score
  function youWin(){
    wins++
    $("#wins").text("Wins: " + wins); //to push wins into html "Wins:"
    alert("You win!");
    reset();
    console.log(wins);
  }

  //To create lose function to be called when score goes over random target
  function youLose(){
    losses++
    $("#losses").text("Losses: " + losses); //to push losses into html "Losses:"
    alert("You lose!!");
    reset();
    console.log(losses);
  }

  //To create even handler for 1st crystal
  $("#crystal-1").on ('click', function(){
    score = score + crystalOne;
    console.log("Score= " + score);
    $(".score").text(score); 
        if(score == targetNumber){ 
          youWin();
        }
        else if (score > targetNumber) {
          youLose();
        }
  })
  
  //To create even handler for 2nd crystal
  $("#crystal-2").on ('click', function(){
    score = score + crystalTwo;
    console.log("Score= " + score);
    $(".score").text(score);
      if (score == targetNumber){ 
        youWin();
      }
      else if (score > targetNumber) {
        youLose();
      }
  })
  
  //To create even handler for 3rd crystal
  $("#crystal-3").on ('click', function(){
    score = score + crystalThree;
    console.log("Score= " + score);
    $(".score").text(score); 
    if (score == targetNumber){ 
      youWin();
    }
    else if (score > targetNumber) {
      youLose();
    }
  })

  //To create even handler for 4th crystal
  $("#crystal-4").on ('click', function(){
    score = score + crystalFour;
    console.log("Score= " + score);
    $(".score").text(score); 
    if (score == targetNumber){ 
      youWin();
    }
    else if (score > targetNumber) {
      youLose();
    }  
  })
})
