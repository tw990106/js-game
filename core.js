let computerNum = 0;
let playBtn = document.getElementById("playBtn"); 
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
let resetBtn = document.getElementById("resetBtn");
let chance = 5; 
let gameOver = false;
let chanceArea = document.getElementById("chanceArea");
let history = [];

playBtn.addEventListener("click", play); 
resetBtn.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value = "";
})

function randomNumber(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;
    
    if(userValue<1 || userValue>100){
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력하세요."
        return;
    }

    chance --;
    chanceArea.textContent = `남은 기회 : ${chance} 번`;
    console.log("chance", chance);

    if(userValue < computerNum){
        resultArea.textContent = 'Up!';
    }else if(userValue > computerNum){
        resultArea.textContent = 'Down!';
    }else{
        resultArea.textContent = '정답입니다!';
        gameOver = true;
    }

    history.push(userValue); 
    console.log(history);

    if(chance < 1){
        gameOver=true;
    }

    if(gameOver==true){
        playBtn.disabled = true;
    }
}

function reset(){
    userInput.value = "";
    randomNumber();

    resultArea.textContent = "결과값이 여기 나옵니다";
}
randomNumber();
