
const gameBody=document.getElementById('game-body')

const shotgun=new Audio('./assets/shotgun.wav')
const backgroundSound = new Audio("./assets/bgm.mp3");

let lives=2,time=60;

backgroundSound.play();
backgroundSound.loop = true;

callZombie()

gameBody.onclick=()=>{
    shotgun.pause();
    shotgun.currentTime=0;
    shotgun.play();
}

function callZombie() {
    document.getElementById('lives').innerHTML=`
    <img src="./assets/zombie-${randomNumber(1,6)}.png" alt="" class="zombie-image" id="zombie">
    `;
    document.getElementById('zombie').style.left=randomNumber(1,1200)+'px';

    killZombie()
}

function killZombie() {
    document.getElementById('zombie').onclick=()=>{
        callZombie();
    }
}

let isKilled=setInterval(()=>{
    let top=parseInt(window.getComputedStyle(document.getElementById('zombie')).getPropertyValue('top'))
    if (top<-750) {
        lives--;
        callZombie();
    }

    if (lives==0) {
        gameOver(true);
    }
},500)

let timer=setInterval(()=> {
    document.getElementById('timer').innerText=time;
    time--;

    if (time==0) {
        gameOver(false)
    }
},1000)

function gameOver(isOver) {
    if(isOver) window.open('game-over.html','_self')
    else window.open('win.html','_self')
}

function randomNumber(min,max) {
    return Math.floor(min+Math.random()*max);
}