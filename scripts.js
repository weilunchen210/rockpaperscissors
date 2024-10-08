const UserScore = document.getElementById("UserScore")
const CPUScore = document.getElementById("CPUScore")
const Outcome = document.getElementById("outcome")

var playerChoice = ""
var CPUChoice = ""
var UserCurrentScore = 0
var CPUCurrentScore = 0

function rockChoice(){
    playerChoice = "rock"
    document.getElementById('meImage').src="images/rock.png"
    playGame()
}

function paperChoice(){
    playerChoice = "paper"
    document.getElementById('meImage').src="images/paper.png"
    playGame()
}

function scissorsChoice(){
    playerChoice = "scissors"
    document.getElementById('meImage').src="images/scissors.png"
    playGame()
}


function playGame(){

    var num = Math.floor(Math.random() * 3)

    switch(num){
        case 0:
            CPUChoice = "rock"
            document.getElementById('cpuImage').src="images/rock.png"
            break
        case 1:
            CPUChoice = "scissors"
            document.getElementById('cpuImage').src="images/scissors.png"
            break
        case 2:
            CPUChoice = "paper"
            document.getElementById('cpuImage').src="images/paper.png"
            break
    }


    if(playerChoice == "rock" && CPUChoice == "scissors" || playerChoice == "scissors" && CPUChoice == "paper" || playerChoice == "paper" && CPUChoice == "rock"){
        UserCurrentScore++ 
        UserScore.innerHTML = UserCurrentScore
        Outcome.innerHTML = "You won!"
    }
    else if(playerChoice == CPUChoice){
        UserScore.innerHTML = UserCurrentScore
        Outcome.innerHTML ="It's a Tie"
    }
    else{
        CPUCurrentScore++
        CPUScore.innerHTML = CPUCurrentScore
        Outcome.innerHTML = "You Lost!"
    }


}