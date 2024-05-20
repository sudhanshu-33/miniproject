let gameseq=[];
let userseq=[];
let highestScore=0;
let started=false;
let level=0;
let btns=["orange","yellow","green","purple"];
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        
      levelup();
    }
});
function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash");
    },250);
 }
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let rdmIdx=Math.floor(Math.random()*3);
    let rdmcolor=btns[rdmIdx];
    let rdmbtn=document.querySelector(`.${rdmcolor}`);
    gameseq.push(rdmcolor);
    console.log(gameseq);
    gameflash(rdmbtn);
}
function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
        }else{
            h2.innerHTML=`Game over! Your score was <b>${level}</b> <br>Press any key to start`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
            },150);
            highest();
            reset();
        }
    }

function btnpress(){
    
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
    for(btn of allbtns){
       btn.addEventListener("click",btnpress);
    }
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}
function highest(){
    if(level>highestScore){
        highestScore=level;
        h3.innerText=`highest score = ${highestScore}`;
    }
}
