var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var wordList = ['declaration', 'bootcamp', 'programming', 'development', 'deployment', 'algorithm', 'statement', 'arithmatic', 'argument', 'assembly', 'backend', 'binary', 'bitwise', 'boolean', 'compile', 'conditional', 'constructor', 'dataflow', 'debugging', 'declaration', 'decrement', 'database', 'encapsulation', 'exception', 'floating', 'framework', 'inheritance', 'invalid', 'syntax', 'operator', 'polymorphism', 'procedure', 'pseudocode', 'recursion', 'recursive', 'software', 'buffer', 'character', 'command', 'compilation', 'computer', 'concurrency', 'compiler', 'developer', 'programmer', 'dynamic', 'static', 'element', 'increment', 'instance', 'integer', 'iteration', 'private', 'programmable', 'pseudolanguage', 'sequence'];


var showLives = document.getElementById('mylives');
var word;
var answerOutput = [];
var answerProgress = [];
var lives;
var counter;
var wordLength;


var result = function() {
  wordHolder = document.getElementById('hold');
  correct = document.createElement('ul');
  if (wordLength < 7) {
    var randomIndex = Math.floor(Math.random() * wordLength);
    counter ++;
  } else {
    var randomIndex = Math.floor(Math.random() * (wordLength - 5) + 5);
    var randomIndex2 = Math.floor(Math.random() * 5);
    counter += 2;
  }
  for (var i = 0; i < wordLength; i++) {
    correct.setAttribute('id', 'my-word');
    guess = document.createElement('li');
    guess.setAttribute('class', 'guess');
    if (i != randomIndex && i != randomIndex2)
      guess.innerHTML = "_";
    else
      guess.innerHTML = word[i];
    answerProgress.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
  }
}

var live = function() {
  showLives.innerHTML = "You have " + lives + " lives left";
  if (lives < 1) {
    showLives.innerHTML = "Game Over";
  }
  for (var i = 0; i < answerProgress.length; i++) {
    if (counter === answerProgress.length) {
      showLives.innerHTML = "You Win!";
      alert("\n===================================\n\n\t\t\tCONGRATULATION!\n\n==================================\n\n\n You can solve the word!");
    }
  }
  console.log("Counter: "+counter+" "+answerProgress.length);
}


var canvas = function() {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 2;
};

var submit = function() {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === document.getElementById('answer').value) {
      if(answerProgress[i].innerHTML=='_')
        counter++;
      answerProgress[i].innerHTML = document.getElementById('answer').value;
    }
  }
  var j = (word.indexOf(document.getElementById('answer').value));
  document.getElementById('answer').value = '';
  if (j === -1) {
    lives -= 1;
    live();
    showStickman();
  } else {
    live();
  }
}

var showStickman = function() {
  var drawMe = lives;
  drawArray[drawMe]();
}


var head = function() {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.arc(160, 25, 10, 0, Math.PI * 2, true);
  context.stroke();
}

var draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
}

var frame = function() {
  for(var i=0;i<4;i++)
  {
    draw(0, 150-i, 300, 150-i);
    draw(110+i, 0, 110+1, 600);
    draw(100, 5+i, 170, 5+i);
    draw(160+i, 5, 160+i, 15);
  }
};

var torso = function() {
  for(var i=0;i<1;i++)
  {
    draw(160+i, 36, 160+i, 70);
  }
};

var rightArm = function() {
  for(var i=0;i<1;i++)
  {
    draw(160, 46+i, 200, 50+i);
  }

};

var leftArm = function() {
  for(var i=0;i<1;i++)
  {
    draw(160, 46+i, 120, 50+i);
  }

};

var rightLeg = function() {
  for(var i=0;i<1;i++)
  {
    draw(160, 70+i, 200, 100+i);
  }

};

var leftLeg = function() {
  for(var i=0;i<1;i++)
  {
    draw(160, 70+i, 120, 100+i);
  }

};

drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head,frame];


document.getElementById('reset').onclick = function() {
  correct.parentNode.removeChild(correct);
  context.clearRect(0, 0, 400, 400);
  counter = 0;
  play();
}

document.getElementById("answer")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});

var play = function() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
  wordLength = word.length;
  console.log(word);
  answerProgress = [];
  lives = 7;
  counter = 0;

  result();
  live();
  canvas();
}

play();
