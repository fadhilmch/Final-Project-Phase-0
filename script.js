var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordList = ['declaration','bootcamp','programming','development','deployment','algorithm','statement','arithmatic','argument','assembly','backend','binary','bitwise','boolean','compile','conditional','constructor','dataflow', 'debugging','declaration','decrement','database','encapsulation','exception','floating','framework','inheritance','invalid','syntax','operator','polymorphism','procedure','pseudocode','recursion','recursive','software','buffer','character','command','compilation','computer','concurrency','compiler','developer','programmer','dynamic','static','element','increment','instance','integer','iteration','private','programmable','pseudolanguage','sequence'];


var showLives = document.getElementById('mylives');
var word;
var answerOutput = [];
var geusses = [];
var lives;
var counter;
var wordLength;


var result = function () {
 wordHolder = document.getElementById('hold');
 correct = document.createElement('ul');
 if(wordLength<7){
     var randomIndex = Math.floor(Math.random()*wordLength);
 }
 else{
     var randomIndex = Math.floor(Math.random()*(wordLength-5)+5);
     var randomIndex2 = Math.floor(Math.random()*5);
 }
 for (var i = 0; i < wordLength; i++) {
   correct.setAttribute('id', 'my-word');
   guess = document.createElement('li');
   guess.setAttribute('class', 'guess');
   if(i != randomIndex && i != randomIndex2)
      guess.innerHTML = "_";
  else
      guess.innerHTML = word[i];
   geusses.push(guess);
   wordHolder.appendChild(correct);
   correct.appendChild(guess);
 }
}

var live = function () {
 showLives.innerHTML = "You have " + lives + " lives left";
 if (lives < 1) {
   showLives.innerHTML = "Game Over";
 }
 for (var i = 0; i < geusses.length; i++) {
   if (counter === geusses.length) {
     showLives.innerHTML = "You Win!";
   }
 }
}

// Hangman
var canvas =  function(){
 myStickman = document.getElementById("stickman");
 context = myStickman.getContext('2d');
 context.beginPath();
 context.strokeStyle = "#fff";
 context.lineWidth = 2;
};

var submit = function(){
  for (var i = 0; i < word.length; i++) {
    if (word[i] === document.getElementById('answer').value){
      geusses[i].innerHTML = document.getElementById('answer').value;
  }}
  var j = (word.indexOf(document.getElementById('answer').value));
  document.getElementById('answer').value = '';
  if (j === -1) {
    lives -= 1;
    live();
    animate();
  } else {
    live();
  }
}

var animate = function () {
  var drawMe = lives ;
  drawArray[drawMe]();
}


head = function(){
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.arc(60, 25, 10, 0, Math.PI*2, true);
  context.stroke();
}

draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

context.moveTo($pathFromx, $pathFromy);
context.lineTo($pathTox, $pathToy);
context.stroke();
}

frame1 = function() {
 draw (0, 150, 150, 150);
};

frame2 = function() {
 draw (10, 0, 10, 600);
};

frame3 = function() {
 draw (0, 5, 70, 5);
};

frame4 = function() {
 draw (60, 5, 60, 15);
};

torso = function() {
 draw (60, 36, 60, 70);
};

rightArm = function() {
 draw (60, 46, 100, 50);
};

leftArm = function() {
 draw (60, 46, 20, 50);
};

rightLeg = function() {
 draw (60, 70, 100, 100);
};

leftLeg = function() {
 draw (60, 70, 20, 100);
};

drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];


  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }

// Play
var play = function () {
  word = wordList[Math.floor(Math.random()*wordList.length)];
  wordLength = word.length;
  console.log(word);
  geusses = [ ];
  lives = 6;
  counter = 0;
  result();
  live();
  canvas();
}

play();
