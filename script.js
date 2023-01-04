const scoreBox = document.querySelector('.score-box');
scoreBox.innerHTML = 'Player: 0 / Computer: 0';


// USER CHOICE
const userChoice = document.querySelector('.user-choice');
const romeo = document.querySelector('.ch-romeo');
const present = document.querySelector('.ch-present');
const syphillis = document.querySelector('.ch-syphillis');
const select = document.querySelector('.user-select');
const userFinalChoice = '';

romeo.addEventListener('click', romFunc);
function romFunc() {
    userChoice.style.background = 'url(pics/romeo.png)';
    userChoice.style.backgroundSize = 'cover';
}

present.addEventListener('click', preFunc);
function preFunc() {
    userChoice.style.background = 'url(pics/present.png)';
    userChoice.style.backgroundSize = 'cover';
}

syphillis.addEventListener('click', sypFunc);
function sypFunc() {
    userChoice.style.background = 'url(pics/syphillis.jpg)';
    userChoice.style.backgroundSize = 'cover';
}

select.addEventListener('click', selFunc);
function selFunc() {
    if(userChoice.style.background !== 'url(pics/romeo.png)') {
        setTimeout(buttonFunc, 1000);
    }
}

/*
1. BUILD VARIABLE FOR RECORDING USER SELECTION
2. BUILD COMP RANDOM SELECTION GENERATOR
3. WRITE LOGIC TO DETERMINE WINNER
4. BUILD SCOREBOX WITH TWO POINTS SECTIONS
5. ADD POINT ACCORDINGLY
*/

// COMP CHOICE

function buttonFunc() {
    const choiceArr = ['romeo', 'picture', 'syphillis'];
    const choiceIndex = Math.floor(Math.random() * choiceArr.length);
    console.log(choiceArr[choiceIndex]);
}
