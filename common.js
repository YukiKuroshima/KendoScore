var idList = ['m1', 'm2', 'm3', 'm4', 'm5']; //array for id
var EneidList = ['Em1', 'Em2', 'Em3', 'Em4', 'Em5']; //array for id
var n = 0; //counter for id
var score = 0;
var eneScore = 0;
var winCount = 0;
var eWinCount = 0;
var addedScoreList = [];


function isTotalLessThanThree() { // if less than or equalthree return true
    "use strict";
    var result = true;

    if (document.getElementById(idList[n]).innerHTML.length
            + document.getElementById(EneidList[n]).innerHTML.length >= 3) {
        result = false;
    }
    return result;
}

function incrementWinCounter() {
    if(document.getElementById(idList[n]).innerHTML.length  // our team win
       > document.getElementById(EneidList[n]).innerHTML.length) {
        winCount++;
    }
    else if(document.getElementById(idList[n]).innerHTML.length  // enemy team win
       < document.getElementById(EneidList[n]).innerHTML.length) {
        eWinCount++;
    }
}

function upDateScore() {
    "use strict";
    document.getElementById("mScore").innerHTML = score;
    document.getElementById("eScore").innerHTML = eneScore;
    document.getElementById("mWinNum").innerHTML = winCount;
    document.getElementById("eWinNum").innerHTML = eWinCount;
}

function writeWinner() {
    if(winCount > eWinCount) {
        document.getElementById("mWin").innerHTML = "勝";
        document.getElementById("eWin").innerHTML = "負";
    }
    else if(winCount < eWinCount){
        document.getElementById("eWin").innerHTML = "勝";
        document.getElementById("mWin").innerHTML = "負";
    }
    else { //tie with num of win person
        if(score > eneScore) {
            document.getElementById("mWin").innerHTML = "勝";
            document.getElementById("eWin").innerHTML = "負";
        }
        else if(score < eneScore){
            document.getElementById("eWin").innerHTML = "勝";
            document.getElementById("mWin").innerHTML = "負";
        }
        else {
            document.getElementById("mWin").innerHTML = "引き";
            document.getElementById("eWin").innerHTML = "分け";
        }
    }
}

// function addedScore(scoreType, number){
//   this.scoreType = scoreType;
//   this.number = number;
//   //this.team = team;
// }

function getNumScoreCurretMatch() {
  var result;
  result = document.getElementById(idList[n]).innerHTML.length
    + document.getElementById(EneidList[n]).innerHTML.length;
  return result;
}

function undo(){
  "use strict";
  //alert("UNDO IN");
  var tempPos = addedScoreList[addedScoreList.length - 1]; //m1 ... Em1
  var tempHTML = document.getElementById(tempPos).innerHTML;

  if(n < 0 || addedScoreList.length === 0){
    alert("これ以上戻れません。");
  }
  //else if(tempHTML.length > 0){ // if this pos has more than one char
  else if (getNumScoreCurretMatch() > 0){
    document.getElementById(tempPos).innerHTML = tempHTML.substr(0, tempHTML.length-1);
    if(tempPos.substr(0, 1) === "m"){ // my side
      score--;
    }
    else {eneScore--;}
    addedScoreList.pop();
  }
  else {  //no more char in current Match
    n--;
  }
}

//my side
document.getElementById("men").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2 && isTotalLessThanThree()) {
        document.getElementById(idList[n]).innerHTML += 'メ';
        //var temp = new addedScore("メ", idList[n]);
        //addedScoreList.push(new addedScore("メ", idList[n]));
        addedScoreList.push(idList[n]);
        score++;
        upDateScore();
    } else {
        alert("次へを押してください");
    }
}, false);

document.getElementById("ko").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2 && isTotalLessThanThree()) {
        document.getElementById(idList[n]).innerHTML += 'コ';
        score++;
        upDateScore();
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("do").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2 && isTotalLessThanThree()) {
        document.getElementById(idList[n]).innerHTML += 'ド';
        score++;
        upDateScore();
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("tu").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2 && isTotalLessThanThree()) {
        document.getElementById(idList[n]).innerHTML += 'ツ';
        score++;
        upDateScore();
    } else {alert("次へを押してください"); }
}, false);

//Opponents side
document.getElementById("Enemen").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(EneidList[n]).innerHTML.length < 2 && isTotalLessThanThree()) {
        document.getElementById(EneidList[n]).innerHTML += 'メ';
        addedScoreList.push(EneidList[n]);
        eneScore++;
        upDateScore();
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("Eneko").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(EneidList[n]).innerHTML.length < 2 && isTotalLessThanThree()) {
        document.getElementById(EneidList[n]).innerHTML += 'コ';
        eneScore++;
        upDateScore();
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("Enedo").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(EneidList[n]).innerHTML.length < 2 && isTotalLessThanThree()) {
        document.getElementById(EneidList[n]).innerHTML += 'ド';
        eneScore++;
        upDateScore();
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("Enetu").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(EneidList[n]).innerHTML.length < 2 && isTotalLessThanThree()) {
        document.getElementById(EneidList[n]).innerHTML += 'ツ';
        eneScore++;
        upDateScore();
    } else {alert("次へを押してください"); }
}, false);

document.getElementById('next').addEventListener('click', function () {
    "use strict";
    incrementWinCounter();
    upDateScore();
    if(n < 4) {
        n++;
    }
    else {
        writeWinner();
        alert("試合終了");
    }
}, false);

document.getElementById('undo').addEventListener('click', function () {
    "use strict";
    //alert("UNDO");
    undo();
    upDateScore();
    alert(addedScoreList);
}, false);
