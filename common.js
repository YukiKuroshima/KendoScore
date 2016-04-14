var idList = ['m1', 'm2', 'm3', 'm4', 'm5']; //array for id
var EneidList = ['Em1', 'Em2', 'Em3', 'Em4', 'Em5']; //array for id
var colList = ["col1", "col2", "col3", "col4", "col5"];
var n = 0; //counter for id
var score = 0;
var eneScore = 0;
var winCount = 0;
var eWinCount = 0;
var addedScoreList = [];

highLightCurrentColumn(); //highlight the first column

function isTotalLessThanThree() { // if less than or equalthree return true
    "use strict";
    var result = true;

    if (document.getElementById(idList[n]).innerHTML.length
            + document.getElementById(EneidList[n]).innerHTML.length >= 3) {
        result = false;
    }
    return result;
}

function getWinnerNum() {
  "use strict";
  winCount = 0;
  eWinCount = 0;
  for (var i = 0; i < n + 1; i++){
    if(document.getElementById(idList[i]).innerHTML.length  // our team win
       > document.getElementById(EneidList[i]).innerHTML.length) {
        winCount++;
    }
    else if(document.getElementById(idList[i]).innerHTML.length  // enemy team win
       < document.getElementById(EneidList[i]).innerHTML.length) {
        eWinCount++;
    }
  }
}

function upDateScore() {
  "use strict";
  document.getElementById("mScore").innerHTML = score;
  document.getElementById("eScore").innerHTML = eneScore;
  document.getElementById("mWinNum").innerHTML = winCount;
  document.getElementById("eWinNum").innerHTML = eWinCount;
}

function highLightCurrentColumn() {
  //color current pos
  var temp = document.getElementsByClassName(colList[n]);
  if(temp[0].style.backgroundColor !== "green"){
    for (var i = 0; i < temp.length; i++) {
      temp[i].style.backgroundColor = 'green';
    }
  }

  if(n > 0 && n < 5){ //means pos is not at 0 (1 to 4)
    var temp2 = document.getElementsByClassName(colList[n - 1]); // check before
    if(temp2[0].style.backgroundColor === 'green'){
      for (var i = 0; i < temp2.length; i++) {
        temp2[i].style.backgroundColor = "white";
      }
    }
  }
  if(-1 < n && n < 4){ // means n is 0 to 3(one before last element)
    var temp3 = document.getElementsByClassName(colList[n + 1]); // check after
    if(temp3[0].style.backgroundColor === 'green'){
      for (var i = 0; i < temp3.length; i++) {
        temp3[i].style.backgroundColor = "white";
      }
    }
  }
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

function getNumScoreCurretMatch() {
  var result;
  result = document.getElementById(idList[n]).innerHTML.length
    + document.getElementById(EneidList[n]).innerHTML.length;
  return result;
}

function undo(){
  "use strict";

  if(n <= 0 && getNumScoreCurretMatch() === 0){ // n is smaller or = 0 and no char at current pos
    alert("これ以上戻れません。");
  }
  else if (getNumScoreCurretMatch() > 0){ // check if this pos has more than one char
    var tempPos = addedScoreList[addedScoreList.length - 1]; //m1 ... Em1
    var tempHTML = document.getElementById(tempPos).innerHTML;
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
        addedScoreList.push(idList[n]);
        score++;
        upDateScore();
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("do").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2 && isTotalLessThanThree()) {
        document.getElementById(idList[n]).innerHTML += 'ド';
        addedScoreList.push(idList[n]);
        score++;
        upDateScore();
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("tu").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2 && isTotalLessThanThree()) {
        document.getElementById(idList[n]).innerHTML += 'ツ';
        addedScoreList.push(idList[n]);
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
        addedScoreList.push(EneidList[n])
        eneScore++;
        upDateScore();
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("Enedo").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(EneidList[n]).innerHTML.length < 2 && isTotalLessThanThree()) {
        document.getElementById(EneidList[n]).innerHTML += 'ド';
        addedScoreList.push(EneidList[n])
        eneScore++;
        upDateScore();
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("Enetu").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(EneidList[n]).innerHTML.length < 2 && isTotalLessThanThree()) {
        document.getElementById(EneidList[n]).innerHTML += 'ツ';
        addedScoreList.push(EneidList[n])
        eneScore++;
        upDateScore();
    } else {alert("次へを押してください"); }
}, false);

document.getElementById('next').addEventListener('click', function () {
    "use strict";
    if(n < 4 && n > -1){ // means n is btw 0 to 3(one before last)
      getWinnerNum();
      upDateScore();
      n++;
      highLightCurrentColumn();
      }
    else { // n is more than 4 (last element)
      getWinnerNum();
      upDateScore();
      writeWinner();
      alert("試合終了");
    }
    console.log("In Next " + n);
}, false);

document.getElementById('undo').addEventListener('click', function() {
    "use strict";
    console.log("Before " + n);
    undo();
    getWinnerNum();
    upDateScore();
    console.log("after " + n);
    highLightCurrentColumn();
}, false);
