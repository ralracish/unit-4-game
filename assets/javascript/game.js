$(document).ready(function(){
// Global variables

//To get target number between 19 and 120
  var targetNumber=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  console.log(targetNumber);
  $("#number-to-guess").text("Number to Guess:  " + targetNumber)

//To generate random numbers for each crystal
  var crystalOne = Math.floor(Math.random() * 12) + 1; // creates crystal 1 value, a random number between 1-12
  var crystalTwo = Math.floor(Math.random() * 12) + 1; // creates crystal 2 value, a random number between 1-12
  var crystalThree = Math.floor(Math.random() * 12) + 1; // creates crystal 3 value, a random number between 1-12
  var crystalFour = Math.floor(Math.random() * 12) + 1; // creates crystal 4 value, a random number between 1-12

    console.log(crystalOne, crystalTwo, crystalThree, crystalFour)
  
  var score=0;
  var wins=0;
  var losses=0;
  $("#wins").text(wins);
  $("#losses").text(losses);

  function reset(){
  //To get new target number
    var targetNumber=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(targetNumber);
    $("#number-to-guess").text("Number to Guess:  " + targetNumber)

  //To generate new random numbers for each crystal
    var crystalOne = Math.floor(Math.random() * 12) + 1; // creates crystal 1 value, a random number between 1-12
    var crystalTwo = Math.floor(Math.random() * 12) + 1; // creates crystal 2 value, a random number between 1-12
    var crystalThree = Math.floor(Math.random() * 12) + 1; // creates crystal 3 value, a random number between 1-12
    var crystalFour = Math.floor(Math.random() * 12) + 1; // creates crystal 4 value, a random number between 1-12
    var score=0
  
      console.log(crystalOne, crystalTwo, crystalThree, crystalFour)
    $("#score").text(score);
  }
  function youWin(){
    wins++
    var wins = $("#wins");
    wins.attr(wins);
    alert("You win!");
    reset();
    }

  function youLose(){
    losses++
    var losses = $("#losses");
    losses.attr("losses");
    alert("You lose!!");
    reset();
   }

  $("#crystal-1").on ('click', function(){
    score = score + crystalOne;
    console.log("New userTotal= " + score);
    $("#score").text(score); 
        if (score == targetNumber){ 
          youWin();
        }
        else if (score > targetNumber) {
          youLose();
        }
  })

  $("#crystal-2").on ('click', function(){
    score = score + crystalTwo;
    console.log("New userTotal= " + score);
    $("#score").text(score);
      if (score == targetNumber){ 
        youWin();
      }
      else if (score > targetNumber) {
        youLose();
      }
    })

  $("#crystal-3").on ('click', function(){
    score = score + crystalThree;
    console.log("New userTotal= " + score);
    $("#score").text(score); 
    if (score == targetNumber){ 
      youWin();
    }
    else if (score > targetNumber) {
      youLose();
    }
  })

  $("#crystal-4").on ('click', function(){
    score = score + crystalFour;
    console.log("New userTotal= " + score);
    $("#score").text(score); 
    if (score == targetNumber){ 
      youWin();
    }
    else if (score > targetNumber) {
      youLose();
    }  
  })
})
