let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");


document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game satred");
        started = true;
        levelup();
    }
});


function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    },500);
};


function levelup() {
    level++;
    h3.innerText = `level ${level}`;


    let rdmidx = Math.floor(Math.random() * 4);
    let rdmcle = btns[rdmidx];
    let rdmbtn = document.querySelector(`.${rdmcle}`);

    // console.log(rdmbtn);
    // console.log(rdmcle);
    // console.log(rdmidx);
    gameseq.push(rdmcle);
    console.log(gameseq)
    btnflash(rdmbtn);

};
// function btnpress() {
//     console.log("button was pressed");
//     this.classList.add("flash");
//     setTimeout(() => {
//         this.classList.remove("flash");
//     }, 500);
// }


function btnpress() {
 let btnn=this;
 btnflash(btnn);
 
 userclr = btnn.getAttribute("id");
 console.log(userclr);
 userseq.push(userclr);
 checkns();

};

let allbtns = document.querySelectorAll(".btn");

for( btn of allbtns){
    btn.addEventListener("click", btnpress);
};



function checkns(){
console.log(level);
let idx= level-1;
if(userseq[idx] == gameseq[idx]){
    
    levelup();
     console.log(`game seq is${gameseq}`);
    console.log(`user seq is ${userseq}`);
}
else{
    h3.innerText = `Game over`;
    console.log(`game seq is${gameseq}`);
    console.log(`user seq is ${userseq}`);
}
};