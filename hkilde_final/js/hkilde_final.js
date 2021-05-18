/*
  This the JavaScript code for
  "hkilde_final"
*/

//switch strings into number assignments
function answerToNum(x) {
  switch(x) {
    case "yes":
      return Number(4);
    case "maybe":
      return Number(2);
    case "no":
      return Number(0);
  }
}

function personalityTest () {
//variables
  var answer = [];
  var totalAnswer = 0;

//Input from user
  answer[0] = prompt("Do you try to find the best in every situation?\n Type: \"yes\", \"no\", or \"maybe\"").toLowerCase();
  answer[1] = prompt("Do you like helping other people?\n Type: \"yes\", \"no\", or \"maybe\"").toLowerCase();
  answer[2] = prompt("Do you enjoy challenges?\n Type: \"yes\", \"no\", or \"maybe\"").toLowerCase();
  answer[3] = prompt("Do you seek out new friendships?\n Type: \"yes\", \"no\", or \"maybe\"").toLowerCase();
  answer[4] = prompt("Do you try new things?\n Type: \"yes\", \"no\", or \"maybe\"").toLowerCase();

//convert answer to values

for(var index = 0; index < answer.length; index++){
  totalAnswer += answerToNum(answer[index]);
}

//display results
if (totalAnswer <= 6) {
  document.write("You scored " + totalAnswer + "/20!<br>You are a very cautious person.<br>Consider taking more chances.");
}else if((totalAnswer == 8) || (totalAnswer == 10) || (totalAnswer == 12)){
    document.write("You scored " + totalAnswer + "/20!<br>You are a very situational person.<br>Consider being bolder in your choices.");
}else if(totalAnswer >= 14){
    document.write("You scored " + totalAnswer + "/20!<br>You are a very adventurous and positive person!<br>Consider pacing yourself so that you don\'t overdo it.");
  }
}

personalityTest();
