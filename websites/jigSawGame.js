$(document).ready(function(){
  var jigsaw = $(".jigMessage");
  var guess = $('#input');
  var butt1 = $("#butt1");
  var butt2 = $('#butt2');
  var butt3 = $('#butt3');
  var butt4 = $('#butt4');
  var butt5 = $('#butt5');
  var timer = $('.timer');

  startingPoint();

  function startingPoint(){
    console.log("startingPoint firing");

    $('.hint').hide();
    guess.hide();
    guess.val("");
    butt1.show();
    butt2.show();
    butt3.hide();
    butt4.hide();
    butt5.hide();
    timer.hide();
    butt1.text("Guess the number");
    butt2.text("Guess the body part");
    jigsaw.text("I want to play a game...")

    butt1.click(function(){
      numbersGame()
    })

    butt2.click(function(){
      bodyPartGame();
    })
  }



  function numbersGame(){
      console.log("numberGame firing")

      var startMsg = "I'm thinking of a number between 1-10. Can you guess in 3 trys? Ha Ha Ha";
      jigsaw.text(startMsg);
      butt1.hide();
      butt2.hide();
      butt3.show();
      butt4.hide();
      butt5.hide();
      guess.val("");
      timer.show();
      guess.show();
      var tooHighMsg1 = "Too high, not many chances left";
      var tooHighMsg2 = "Wrong, you guess too high";
      var tooLowMsg1 = "Nice try but too low, your running out of chances";
      var tooLowMsg2 = "Too low again, can you win this game?";


      var lives = 3;


      butt3.text("Submit")
      timer.text("You have: " + lives + " chances left");
      var randomNum = Math.floor(Math.random()* (10 - 1)) + 1;


      butt3.click(function(){

          if(guess.val() == randomNum){
            console.log("winner");
            jigsaw.text("You win this time");
            timer.hide();
            butt4.show();
            butt3.hide();

            butt4.text("lets play another game");
            butt4.click(function(){
              location.reload();
              startingPoint();
            })
          }else if (guess.val() < randomNum){
            console.log("low guess")

              if (jigsaw.text() == startMsg){
                    jigsaw.text(tooLowMsg1)
                  }else if(jigsaw.text() == tooLowMsg1){
                    jigsaw.text(tooLowMsg2)
                  } else if(jigsaw.text() == tooLowMsg2){
                    jigsaw.text(tooLowMsg1)
                  }

            lives = checkLives(lives);
            timer.text("You have: " + lives + " chances left");

          }else if (guess.val() > randomNum){
            console.log("high guess")

               if (jigsaw.text() == startMsg){
                    jigsaw.text(tooHighMsg1)
                  }else if(jigsaw.text() == tooHighMsg1){
                    jigsaw.text(tooHighMsg2)
                  } else if(jigsaw.text() == tooHighMsg2){
                    jigsaw.text(tooHighMsg1)
                  }


            lives = checkLives(lives);
            timer.text("You have: " + lives + " chances left");

          }else{
            console.log("not a number between 1-10")
            jigsaw.text("You have to guess a Number between 1 and 10")
            guess.val("");
          }
      })
  }

  function checkLives(lives){
    console.log("checkLives firing")
    if (lives === 1){
      gameOver();

    }else{
      lives--
      return lives;
    }
  }

  function gameOver(){
    console.log("gameOver firing")
    jigsaw.text("You lose. Lets play again")
    butt4.text("play again")
    butt4.show();
    butt1.hide();
    butt2.hide();
    butt3.hide();
    butt5.hide();
    guess.hide();
    timer.hide();
    butt4.click(function(){
      location.reload();
      startingPoint();
    })
  }

  function bodyPartGame(){
    console.log("bodyPartGame firing");
    var bodyPart = ["left arm", "right arm", "left leg", "right leg", "head", "ear", "nose", "right hand", "left hand", "right foot", "left foot"];
    var randomPart = Math.floor(Math.random()* (11 - 1));
    butt1.hide();
    butt2.hide();
    butt3.hide();
    butt4.hide();
    butt5.show();
    butt5.text("Hint");
    timer.show();
    guess.show();
    guess.val("");
    var firstMsg = "I'm thinking of a body part. Can you guess which one?"
    jigsaw.text(firstMsg);
    var wrongMsg1 = "Thats not it, time is running out";
    var wrongMsg2 = "Wrong again, not much time left";
    var seconds = 60;

    display(seconds);

    butt5.click(function(){
      $('.hint').show();
      $('.hintlist').append("<li>These are some of my favorite body parts:</li>");
      for(var i = 0; i < bodyPart.length; i++){

          $('.hintlist').append("<li>" + bodyPart[i] + "</li>");
      }
    })

    guess.keydown(function(e){
      if(e.which === 13){
          if(guess.val() == bodyPart[randomPart]){
                  console.log("winner bodyPart");
                  jigsaw.text("You win this time, you may keep your body part");
                  timer.hide();
                  butt4.show();
                  butt2.hide();
                  butt3.hide();
                  butt5.hide();
                  clearTimeout(t);

                  butt4.text("lets play another game");
                  butt4.click(function(){
                    location.reload();
                    startingPoint();
                  })
                }else{
                  guess.val("");
                  console.log("wrong answer bodyPart")
                  if (jigsaw.text() == firstMsg){
                    jigsaw.text(wrongMsg1)
                  }else if(jigsaw.text() == wrongMsg1){
                    jigsaw.text(wrongMsg2)
                  } else if(jigsaw.text() ==wrongMsg2){
                    jigsaw.text(wrongMsg1)
                  }
                }
                   }

    })
  }

  function display(seconds){
    timer.show();
    timer.text(seconds);
    if(seconds <= 10 && seconds !== 0){
      $(".header").css("background-color", "red");
      timer.css("color", "red");
    }else if (seconds === 0){
      gameOver();
      timer.text(seconds)
      return
    }
    timer.text(seconds);
    console.log(seconds);
    seconds--;
    t = setTimeout(display, 1000, seconds);
  }
});