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
    userChoice.style.background = 'url(pics/syphillis.jpg)';
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

// DETERMINE WINNER & RESET
function determineFunc() {
    if((userChoice.children[0].innerHTML === 'romeo' && compChoice.children[0].innerHTML === 'romeo') ||
        (userChoice.children[0].innerHTML === 'present' && compChoice.children[0].innerHTML === 'present') ||
        (userChoice.children[0].innerHTML === 'syphillis' && compChoice.children[0].innerHTML === 'syphillis')) {
            setTimeout(drawReset, 2000);
        } else if((userChoice.children[0].innerHTML === 'romeo' && compChoice.children[0].innerHTML === 'present') ||
                    (userChoice.children[0].innerHTML === 'present' && compChoice.children[0].innerHTML === 'syphillis') ||
                    (userChoice.children[0].innerHTML === 'syphillis' && compChoice.children[0].innerHTML === 'romeo')) {
                        playerScore++;
                        scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;
                        setTimeout(winReset, 2000);
                    } else {
                        compScore++;
                        scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;
                        setTimeout(winReset, 2000);
                    }
}

function drawReset() {
    userChoice.style.background = 'antiquewhite';
    userChoice.children[0].innerHTML = '';
}

function winReset() {
    userChoice.style.background = 'antiquewhite';
    userChoice.children[0].innerHTML = '';
}



// once winner determined, user-choice returns to normal