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

romeo.addEventListener('click', romFunc);
function romFunc() {
    userChoice.style.background = 'url(pics/romeo.png)';
    userChoice.style.backgroundSize = 'cover';
    userChoice.children[0].innerHTML = 'romeo';
}

present.addEventListener('click', preFunc);
function preFunc() {
    userChoice.style.background = 'url(pics/present.png)';
    userChoice.style.backgroundSize = 'cover';
    userChoice.children[0].innerHTML = 'present';
}

syphillis.addEventListener('click', sypFunc);
function sypFunc() {
    userChoice.style.background = 'url(pics/syphillis.png)';
    userChoice.style.backgroundSize = 'cover';
    userChoice.children[0].innerHTML = 'syphillis';
}

select.addEventListener('click', selectFunc);
function selectFunc() {
    console.log(`User choice: ${userChoice.children[0].innerHTML}`);
    if(userChoice.children[0].innerHTML.length > 0) {
        setTimeout(compFunc, 1000);
    }
}

// COMP CHOICE
const compChoice = document.querySelector('.comp-choice');
function compFunc() {
    const compArr = ['romeo', 'present', 'syphillis'];
    const compIndex = Math.floor(Math.random() * compArr.length);
    compChoice.children[0].innerHTML = compArr[compIndex];
    console.log(`Comp choice: ${compChoice.children[0].innerHTML}`);
    setTimeout(determineFunc, 1000);
}

// DETERMINE WINNER, COMMENT & RESET
function determineFunc() {
    const drawComment = ["It's a draw.", "Even Stevens, carry on.", "Draw? There's no paper here!"];
    const winComment = ["Nice one, eat that bot!", "Exactly, it's just a machine.", "No mercy!"];
    const loseComment = ["Unlucky.", "Sorry, the computer says 'no'.", "Better luck next time."];
    const commentIndex = Math.floor(Math.random() * 3);
    if((userChoice.children[0].innerHTML === 'romeo' && compChoice.children[0].innerHTML === 'romeo') ||
        (userChoice.children[0].innerHTML === 'present' && compChoice.children[0].innerHTML === 'present') ||
        (userChoice.children[0].innerHTML === 'syphillis' && compChoice.children[0].innerHTML === 'syphillis')) {
            scoreBox.innerHTML = drawComment[commentIndex];
            setTimeout(drawReset, 2000);
        } else if((userChoice.children[0].innerHTML === 'romeo' && compChoice.children[0].innerHTML === 'present') ||
                    (userChoice.children[0].innerHTML === 'present' && compChoice.children[0].innerHTML === 'syphillis') ||
                    (userChoice.children[0].innerHTML === 'syphillis' && compChoice.children[0].innerHTML === 'romeo')) {
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
    userChoice.children[0].innerHTML = '';
}

function winReset() {
    scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;
    userChoice.style.background = 'antiquewhite';
    userChoice.children[0].innerHTML = '';
}

const masterReset = document.querySelector('.master-reset');
masterReset.addEventListener('click', masReset)
function masReset() {
    playerScore = 0;
    compScore = 0;
    scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;
    userChoice.style.background = 'antiquewhite';
    userChoice.children[0].innerHTML = '';
}


/*IDEAS:
1. Different draw comments for Romeo, Present, etc.
2. Variable to count number of times scoreboard.innerHTML.includes('draw'). Once === 3, comment 'these draws are taking piss', etc.
3. Variable to count 3 wins in row and comment/userChoice.bg gifs, lovehearts, etc.
4. Master reset button.
5. Music, sfx (speak to Nelson).
*/