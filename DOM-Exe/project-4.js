let startStopBtn=document.querySelector('#startStop');
let resetBtn= document.querySelector('#resetBtn');

let seconds=0;
let minutes=0;
let hours=0;

let timerInter=null;
let timerStatus="stopped";
function stopWatch(){
    seconds++
    if(seconds / 60 === 1){
        seconds=0;
        minutes++;

        if(minutes / 60 ===1){
            minutes=0;
            hours++;
        }
    }
    let displayTimer =document.getElementById('timer').innerHTML = hours + ":" + minutes + ":" + seconds;
}

//window.setInterval(stopWatch,1000)

console.log("hhhg");
startStopBtn.addEventListener('click', function(){
    if(timerStatus==="stopped"){
        timerInter=window.setInterval(stopWatch,1000)
        document.getElementById('startStop').innerHTML=`  <i id="pause">pause</i>`;
        timerStatus="started";
        
    }else{
        window.clearInterval(timerInter);
        document.getElementById('startStop').innerHTML=`  <i id="play">play</i>`;
        timerStatus="stopped";
    }
})

resetBtn.addEventListener('click',function(){
    window.clearInterval(timerInter);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById('timer').innerHTML="00:00:00";
})