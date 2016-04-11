var idList = ['m1', 'm2', 'm3', 'm4', 'm5']; //array for id
var EneidList = ['Em1', 'Em2', 'Em3', 'Em4', 'Em5']; //array for id
var n = 0; //counter for id

document.getElementById("men").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2) {
        document.getElementById(idList[n]).innerHTML += 'メ';
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("ko").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2) {
        document.getElementById(idList[n]).innerHTML += 'コ';
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("do").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2) {
        document.getElementById(idList[n]).innerHTML += 'ド';
    } else {alert("次へを押してください"); }
}, false);

document.getElementById("tu").addEventListener('click', function () {
    "use strict";
    if (document.getElementById(idList[n]).innerHTML.length < 2) {
        document.getElementById(idList[n]).innerHTML += 'ツ';
    } else {alert("次へを押してください"); }
}, false);

    
document.getElementById('next').addEventListener('click', function () {
    "use strict";
    if(n < 4){n++; }
    else {alert("試合終了");}
}, false);
