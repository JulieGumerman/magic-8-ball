
$(document).ready(function() {
var magicEightBall = {};
  magicEightBall.listOfAnswers = ["My sources say no.", "Definitely yes", "It remains to be seen.", "Think harder as you ask.", "Are you sure that's what you want?"];

  $("#answer").hide();

  magicEightBall.askQuestion = function(question) {
    var randomNumber=Math.random();
    var randomNumberArray=randomNumber*this.listOfAnswers.length;
    var randomIndex=Math.floor(randomNumberArray);
    var answer=this.listOfAnswers[randomIndex];
    
   $("#answer").text(answer);
    console.log(answer);
    console.log(question);

  };

  
  var questionButton = document.getElementById("questionButton");
  var questionButtonPrompt = function() {
    var askMeAnything=prompt("What would you like to know?");
    magicEightBall.askQuestion(questionButtonPrompt);


    $("#8ball").effect("shake");
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    $("#answer").fadeIn(4000);
};
  

  
  questionButton.addEventListener("click", questionButtonPrompt);
  
  
});