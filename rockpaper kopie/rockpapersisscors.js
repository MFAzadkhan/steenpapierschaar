var userScore=0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_P=document.querySelector(".result>P ");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
const spock_div=document.getElementById("k");
const lizard_div=document.getElementById("l");


function getComputerChoice() {
    const choices = ['r', 'p', 's', 'k', 'l'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "k") return "Spock";
    if (letter === "l") return "Lizard";
}


    function win (userChoice, computerChoice) {
        userScore++;
        userScore_span.innerHTML=userScore;
        computerScore_span.innerHTML=computerScore;
        const smallUserWord = "user".fontsize(3).sub();
        const smallCompWord = "comp".fontsize(3).sub();
        const userChoice_div = document.getElementById(userChoice);
        result_P.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} You win! 🔥`;
        userChoice_div.classList.add('green-glow');
        setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 900);



    }
    function draw (userChoice, computerChoice){
        const smallUserWord = "user".fontsize(3).sub();
        const smallCompWord = "comp".fontsize(3).sub();
        const userChoice_div = document.getElementById(userChoice);
        result_P.innerHTML=`${convertToWord(userChoice)}${smallUserWord} is the same as ${convertToWord(computerChoice)}${smallCompWord} its a draww!!`;
        userChoice_div.classList.add('gray-glow');
        setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 900);


    }
    function lose (userChoice, computerChoice){
        computerScore++;
        userScore_span.innerHTML=userScore;
        computerScore_span.innerHTML=computerScore;
        const smallUserWord = "user".fontsize(3).sub();
        const smallCompWord = "comp".fontsize(3).sub();
        const userChoice_div = document.getElementById(userChoice);
        result_P.innerHTML=`${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} You lose!🫥`;
        userChoice_div.classList.add('red-glow');
        setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 900);


    }
    function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "rl":
        case"pk":
        case"pr":
        case"sp":
        case"sl":
        case"lp":
        case"lk":
        case"ks":
        case"kr":


            win(userChoice, computerChoice);
            break;

        case "rr":
        case "ll":
        case"kk":
        case"pp":
        case"ss":



            draw(userChoice, computerChoice);
            break;


        case "sr":
        case"kp":
        case"rp":
        case"ps":
        case"ls":
        case"pl":
        case"kl":
        case"sk":
        case"rk":


            lose(userChoice, computerChoice);
            break;
    }

        if (userScore === 5) {
            result_P.innerHTML=`You won the game!🔥`;
            window.setTimeout(function() {location.reload()}, 5000)
        }
        else if (computerScore === 5) {
            result_P.innerHTML=`You lost the game!🫥`;

            window.setTimeout(function() {location.reload()}, 5000);
        }

   }

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        game("s");
    })
    spock_div.addEventListener('click', function () {
        game("k");
    })
    lizard_div.addEventListener('click', function () {
        game("l");
    })

}
main();


