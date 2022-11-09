const Scanner = require('readline-sync');
score = 0;
highscore = 0;
play = true;
let playerName = Scanner.question("What is your name\n");
let Reference = Scanner.question("Do You Know Mahijith(y/n)\n");
if (Reference == 'y') {
  console.log("Well He made a Game for you");
}
else {
  console.log("Oh ho no perhaps ! Here's A Game made by him try it out!!\n\n");
}
console.log(playerName + " Game is Starting!!! Hope you'll enjoy\n!!!------- Warning Sensitive Cases------\n(First Letter Capital rest all small and only one word quiz");
questionOne = {
  question: "What is the colour of Batman Mask",
  answer: "Black"
}
questionTwo = {
  question: "Who wears red suit in Netflix superhero among Daredevil/Punisher",
  answer: "Daredevil"
}
questionThree = {
  question: `Complete the sentence:-"Fantastic ____"`,
  answer: "Four"
}
questionFour = {
  question: "Weapon used by Hawkeye is -----",
  answer: "Arrow"
}
questionFive = {
  question: "What's Similar between Hulk and Batman",
  answer: "Bruce"
}
questionSix = {
  question: "Colour of Hulk?",
  answer: "Green"
}
questionSeven = {
  question: "Black Widow's suit colour?",
  answer: "Black"
}
questionEight = {
  question: "Vison's mind consist of which stone?",
  answer: "Mine"
}
questionNine = {
  question: "Superhero Made of tree",
  answer: "Groot"
}
questionTen = {
  question: "Thor Hammer's name",
  answer: "Mjonir"
}

function quiz(a, b) {
  let live = Scanner.question(a + "\n");
  if (live == b) {
    console.log("Right Answer!!");
    score++;
  }
  else {
    console.log("Wrong Answer!!");
    score--
  }
  console.log("Score is " + score);
  scoreCheck(score);
}
function scoreCheck(score) {
  if (score == 5) {
    console.log("-------- You Entered Level 2 ---------")
  }
  if (score == 8) {
    console.log("-------- You Entered Level 3 ---------")
  }
  if (score == 10) {
    console.log("-------- You Won! ---------")
    play = false;
  }

}
while (play === true) {
  console.log("-------------Question 1--------------")
  quiz(questionOne.question, questionOne.answer);
  console.log("-------------Question 2--------------")
  quiz(questionTwo.question, questionTwo.answer);
  console.log("-------------Question 3--------------")
  quiz(questionThree.question, questionThree.answer);
  console.log("-------------Question 4--------------")
  quiz(questionFour.question, questionFour.answer);
  console.log("-------------Question 5--------------")
  quiz(questionFive.question, questionFive.answer);
  console.log("-------------Question 6--------------")
  quiz(questionSix.question, questionSix.answer);
  console.log("-------------Question 7--------------")
  quiz(questionSeven.question, questionSeven.answer);
  console.log("-------------Question 8--------------")
  quiz(questionEight.question, questionEight.answer);
  console.log("-------------Question 9--------------")
  quiz(questionNine.question, questionNine.answer);
  console.log("-------------Question 10-------------")
  quiz(questionTen.question, questionTen.answer);
  play = false;
}
// if(score<0){
//   score=0;
// }
if (highscore < score) {
  highscore = score;
  console.log("You Scored the highest rank in the game!!")
  console.log("Take Screenshot if you want!!!")
}
else {
  console.log("You Still have a chance to beat the highscore");
  console.log("Your Score a Total of " + score);
  console.log("HighScore is " + highscore);
}
// gamePlay = Scanner.question('Want to play the game again(y/n)');
// if (gamePlay == 'y') {
//   score = 0;
//   play = true;
// }