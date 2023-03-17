var startButtonEl=document.getElementById("startBtn");
var questionSecEl=document.getElementById("question");
var startPageEl=document.getElementById("startPage");
var timerEl=document.getElementById("timer");
var secondsleft = 60;

function countDown(){
secondsleft = secondsleft - 1;
timerEl.textContent=secondsleft;

}

startButtonEl.addEventListener("click",function(){
questionSecEl.classList.remove("hide")
startPageEl.classList.add("hide")
timerEl.textContent=secondsleft;

setInterval(countDown,1000)
})

//event liste