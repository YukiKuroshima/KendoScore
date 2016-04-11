var idList = ['m1', 'm2', 'm3', 'm4', 'm5']; //array for id
var EneidList = ['Em1', 'Em2', 'Em3', 'Em4', 'Em5']; //array for id
var n = 0; //counter for id

function isTotalLessThanThree() { // if less than or equalthree return true
    "use strict";
    var result = false;
    if (document.getElementById(idList[n]).innerHTML.length
            + document.getElementById(EneidList[n]).innerHTML.length <= 3) {
        result = true;
    }
    return result;
}

//my side
document.getElementById("men").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2 && isTotalLessThanThree === true) {
        document.getElementById(idList[n]).innerHTML += 'メ';
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("ko").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2 && isTotalLessThanThree === true) {
        document.getElementById(idList[n]).innerHTML += 'コ';
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("do").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2 && isTotalLessThanThree === true) {
        document.getElementById(idList[n]).innerHTML += 'ド';
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("tu").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2 && isTotalLessThanThree === true) {
        document.getElementById(idList[n]).innerHTML += 'ツ';
    } else {alert("次へを押してください"); }
}, false);

//Opponents side
document.getElementById("Enemen").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(EneidList[n]).innerHTML.length < 2 && isTotalLessThanThree === true) {
        document.getElementById(EneidList[n]).innerHTML += 'メ';
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("Eneko").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(EneidList[n]).innerHTML.length < 2 && isTotalLessThanThree === true) {
        document.getElementById(EneidList[n]).innerHTML += 'コ';
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("Enedo").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(EneidList[n]).innerHTML.length < 2 && isTotalLessThanThree === true) {
        document.getElementById(EneidList[n]).innerHTML += 'ド';
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("Enetu").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(EneidList[n]).innerHTML.length < 2 && isTotalLessThanThree === true) {
        document.getElementById(EneidList[n]).innerHTML += 'ツ';
    } else {alert("次へを押してください"); }
}, false);
    
document.getElementById('next').addEventListener('click', function () {
    "use strict";
    if(n < 4) {n++; }
    else {alert("試合終了");}
}, false);
