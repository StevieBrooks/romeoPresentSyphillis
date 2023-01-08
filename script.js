// SCOREBOX
const scoreBox = document.querySelector('.score-box');
let playerScore = 0;
let compScore = 0;
scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;

// USER CHOICE
const userChoice = document.querySelector('.user-choice');
const romeo = document.querySelector('.ch-romeo');
const present = document.querySelector('.ch-present');
const syphillis = document.querySelector('.ch-syphillis');
const select = document.querySelector('.user-select');
const userImage = document.getElementById('userImage');

romeo.addEventListener('click', romFunc);
function romFunc() {
    userChoice.children[1].innerHTML = 'Romeo';
    userImage.src = 'pics/romeo.png';
}

present.addEventListener('click', preFunc);
function preFunc() {
    userChoice.children[1].innerHTML = 'Present';
    userImage.src = 'pics/present.png';
}

syphillis.addEventListener('click', sypFunc);
function sypFunc() {
    userChoice.children[1].innerHTML = 'Syphillis';
    userImage.src = 'pics/syphillis.png';
}

select.addEventListener('click', selectFunc);
function selectFunc() {
    console.log(`User choice: ${userChoice.children[1].innerHTML}`);
    if(userChoice.children[1].innerHTML.length > 0) {
        setTimeout(compFunc, 1000);
    }
}

// COMP CHOICE
const compChoice = document.querySelector('.comp-choice');
const compImage = document.getElementById('compImage'); // NEED MAKE IMAGE APPEAR IN COMPcHOICE
function compFunc() {
    const compArr = ['Romeo', 'Present', 'Syphillis'];
    const compIndex = Math.floor(Math.random() * compArr.length);
    compChoice.children[1].innerHTML = compArr[compIndex];
    console.log(`Comp choice: ${compChoice.children[1].innerHTML}`);
    setTimeout(determineFunc, 1000);
}

if(compChoice.children[1].innerHTML === 'Romeo') {
    compImage.src = 'pics/romeo.png';
} else if(compChoice.children[1].innerHTML === 'Present') {
    compImage.src = 'pics/present.png';
} else {
    compImage.src = 'pics/syphillis.png';
}
/* NEED TO MAKE IMAGE APPEAR AT SAME TIME AS INNERHTML RESULT. INSTEAD OF IF STATEMENT, 
SEE IF A DO/WHILE STATEMENT WORKS. */

// DETERMINE WINNER, COMMENT & RESET
function determineFunc() {
    const drawComment = ["It's a draw.", "Even Stevens, carry on.", "Draw? There's no paper here!"];
    const winComment = ["Nice one, eat that bot!", "Exactly, it's just a machine.", "No mercy!"];
    const loseComment = ["Unlucky.", "Sorry, the computer says 'no'.", "Better luck next time."];
    const commentIndex = Math.floor(Math.random() * 3);
    if((userChoice.children[1].innerHTML === 'Romeo' && compChoice.children[1].innerHTML === 'Romeo') ||
        (userChoice.children[1].innerHTML === 'Present' && compChoice.children[1].innerHTML === 'Present') ||
        (userChoice.children[1].innerHTML === 'Syphillis' && compChoice.children[1].innerHTML === 'Syphillis')) {
            scoreBox.innerHTML = drawComment[commentIndex];
            setTimeout(drawReset, 2000);
        } else if((userChoice.children[1].innerHTML === 'Romeo' && compChoice.children[1].innerHTML === 'Present') ||
                    (userChoice.children[1].innerHTML === 'Present' && compChoice.children[1].innerHTML === 'Syphillis') ||
                    (userChoice.children[1].innerHTML === 'Syphillis' && compChoice.children[1].innerHTML === 'Romeo')) {
                        playerScore++;
                        scoreBox.innerHTML = winComment[commentIndex];
                        setTimeout(winReset, 2000);
                    } else {
                        compScore++;
                        scoreBox.innerHTML = loseComment[commentIndex];
                        setTimeout(winReset, 2000);
                    }
}

function drawReset() {
    scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;
    userChoice.style.background = 'antiquewhite';
    userChoice.children[1].innerHTML = '';
    compChoice.children[1].innerHTML = '';
    userImage.src = '';
    compImage.src = '';
}

function winReset() {
    scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;
    userChoice.style.background = 'antiquewhite';
    userChoice.children[1].innerHTML = '';
    compChoice.children[1].innerHTML = '';
    userImage.src = '';
    compImage.src = '';
}

const masterReset = document.querySelector('.master-reset');
masterReset.addEventListener('click', masReset)
function masReset() {
    playerScore = 0;
    compScore = 0;
    scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;
    userChoice.style.background = 'antiquewhite';
    userChoice.children[1].innerHTML = '';
    compChoice.children[1].innerHTML = '';
    userImage.src = '';
    compImage.src = '';
}


/*IDEAS:
1. Different draw comments for Romeo, Present, etc.
2. Variable to count number of times scoreboard.innerHTML.includes('draw'). Once === 3, comment 'these draws are taking piss', etc.
3. Variable to count 3 wins in row and comment/userChoice.bg gifs, lovehearts, etc.
4. Master reset button.
5. Music, sfx (speak to Nelson).
*/

