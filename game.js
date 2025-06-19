let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");

function forbtn(){
     if (!started) {
        console.log("Game started");
        started = true;
        levelup();
    }
};

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game started");
        started = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}

function levelup() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let rdmidx = Math.floor(Math.random() * 4);
    let rdmclr = btns[rdmidx];
    let rdmbtn = document.querySelector(`.${rdmclr}`);

    gameseq.push(rdmclr);
    console.log("Game Sequence:", gameseq);
    btnflash(rdmbtn);
}

function btnpress() {
    let btnn = this;
    btnflash(btnn);

    let userclr = btnn.getAttribute("id");
    console.log("User clicked:", userclr);
    userseq.push(userclr);
    checkns(userseq.length - 1);
}

function checkns(currentIdx) {
    if (userseq[currentIdx] === gameseq[currentIdx]) {
        if (userseq.length === gameseq.length) {
            // User completed the sequence correctly
            setTimeout(levelup, 1000);
        }
    } else {
        // Wrong click — game over
        h3.innerText = `Game Over! Press any key to restart. high score is level:-${level}`;
        console.log("Game Sequence:", gameseq);
        console.log("User Sequence:", userseq);
        document.body.classList.add("game-over");
        setTimeout(() => {
            document.body.classList.remove("game-over");
        }, 200);
        resetGame();
    }
}

function resetGame() {
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
