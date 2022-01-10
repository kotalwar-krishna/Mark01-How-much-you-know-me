console.log('HOW MUCH DO YOU KNOW ME')
var readlineSync = require('readline-sync');
var userName = readlineSync.question('Please enter your name: ');
console.log('Welcome to the Game ' + userName +'!');
console.log('Answer the quiz quetions to How Much You Know krishna');
score = 0;

let quiz = (que, ans) => {
  var userAnswer = readlineSync.question(que);
  console.log('you choosed option: '+ userAnswer);

  if(userAnswer === ans){
    console.log('you are Right!');
    score= score+1;
  }else{
    console.log('You are Wrong!');
  }
  console.log('your current score is: ' + score);
  console.log('###############################')
} 

var questionOne = {
  question: 'which city i Born? ',
  answer: 'parbhani'
}
var questionTwo = {
  question: 'What is my Father name? ',
  answer: 'khandurao'
}
var questionThree = {
  question: 'which sport i like most? ',
  answer: 'cricket'
}
var questionFour = {
  question: 'which company your working? ',
  answer: 'TCS'
}
var questionFive = {
  question: 'Can I cook Food? ',
  answer: 'yes'
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for(var i=0; i < questions.length ; i++){
  quiz(questions[i].question, questions[i].answer);
}


// quiz('which city i Born? ', 'parbhani');
// quiz('What is my Father name? ', 'khandurao')
// quiz('which sport i like most? ', 'cricket')
// quiz('which company your working? ', 'TCS')
// quiz('Can I cook Food? ', 'yes')

console.log('your Final Score is: '+ score)