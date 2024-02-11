// 랜덤번호 지정

// 유저가 번호를 입력, 그리고 go라는 버튼을 누름

// 버튼을 눌렀을 때, 유저가 번호를 맞히면 >> 맞혔습니다!

// 랜덤번호 < 유저번호 DOWN!

// 랜덤번호 > 유저번호 UP!

// RESET 버튼을 누르면 게임이 리셋된다.

// 5번의 기회를 다 쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)

// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 X

// 유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 X


let computerNum = 0;
let playBtn = document.getElementById("playBtn"); // document = 웹페이지 그 자체, document 안에서 Id를 선택, 그 Id는 playBtn.
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");

playBtn.addEventListener("click", play); // 함수를 매개변수로 넘긴 것


function randomNumber(){
    computerNum = Math.floor(Math.random()*100)+1;
    // Math.random >> 랜덤한 숫자를 뽑을 수 있게 도와주는 함수. 0~1 사이의 숫자를 반환함. (소숫점으로 반환함)
    // 이걸 1~100 사이의 숫자로 바꿔야 함. >> Math.floor 뒤의 소숫잠을 내림하여 반환함. 61.43245 >> 61, 82.5435346 >> 82 이런식으로.
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;
    if(userValue < computerNum){
        resultArea.textContent = 'Up!';
    }else if(userValue > computerNum){
        resultArea.textContent = 'Down!';
    }else{
        resultArea.textContent = '정답입니다!';
    }
}



randomNumber();
