function makeBubble() {
    var clutter = "";

    for(i = 1; i <= 133; i++){
       var rndm = Math.floor(Math.random() * 10);
       clutter += `<div class="bubble">${rndm}</div>`;
    }

    document.querySelector("#pbottom").innerHTML = clutter;
}

makeBubble();

function runTimer() {
    var timer = 6;
    var timerval = setInterval(function() {
        if (timer < 0) {
            clearInterval(timerval);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
            return;
        }
        var boxTimer = document.querySelector("#timer");
        boxTimer.innerText = timer;
        timer--;
    }, 1000);
}

runTimer();

function getNewHit() {
    var hitval = Math.floor(Math.random() * 10);
    var hit  = document.querySelector("#hit");
    hit.innerText = hitval;
}

getNewHit();

var score = 0;
function calcscore() {
    score += 1;
    var scoreval = document.querySelector("#score");
    scoreval.innerText = score;
}

document.querySelector("#pbottom").addEventListener("click", function(dets) { 
    console.log(Number(dets.target.innerText));
    if( Number(dets.target.innerText) === Number(document.querySelector("#hit").innerText)) {
        calcscore();
        getNewHit();
        makeBubble();
    }
})