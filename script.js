// SFX
const soundFX = document.querySelector('.sfx');

// SCOREBOX
const scoreBox = document.querySelector('.score-box');
let playerScore = 0;
let compScore = 0;
scoreBox.innerHTML = ``;
setTimeout(welcome1, 2000);
function welcome1() {
    scoreBox.innerHTML = 'Welcome to Romeo, Present, Syphillis...';
    setTimeout(welcome2, 3000);
    function welcome2() {
        scoreBox.innerHTML = 'the very best in juvenile entertainment.';
        setTimeout(welcome3, 3000);
        function welcome3() {
            scoreBox.innerHTML = 'Check out the instructions below. &#8595;'
            setTimeout(welcome4, 3000);
            setTimeout(welcome5, 0001);
            function welcome4() {
                scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;
            }
        }
    }
}

// INSTRUCTION BOX
const insBox = document.querySelector('.instruction-box');
function welcome5() {
    const b1 = setInterval(boxFlash1, 1000);
    function boxFlash1() {
        insBox.style.background = '#8C2F39';
    }
    const b2 = setInterval(boxFlash2, 2000);
    function boxFlash2() {
        insBox.style.background = '#461220';
    }
    setTimeout(finBox, 5000);
    function finBox() {
        clearInterval(b1, 0001);
        clearInterval(b2, 0001);
        insBox.style.background = '#461220';
    }
}

// if(scoreBox.style.width < 200) {
//     scoreBox.innerHTML = 'oh yeah';
// } // NEED TO FIGURE WAY OF MAKING SCOREBOX MORE RESPONSIVE

// USER CHOICE
const userChoice = document.querySelector('.user-choice');
const romeo = document.querySelector('.ch-romeo');
const present = document.querySelector('.ch-present');
const syphillis = document.querySelector('.ch-syphillis');
const select = document.querySelector('.user-select');
const userImage = document.getElementById('userImage');

romeo.addEventListener('click', romFunc);
function romFunc() {
    userChoice.children[1].style.display = 'block';
    userChoice.children[1].style.bottom = '40px';
    userChoice.children[1].innerHTML = 'Romeo';
    userImage.src = 'pics/romeo.png';
}

present.addEventListener('click', preFunc);
function preFunc() {
    userChoice.children[1].style.display = 'block';
    userChoice.children[1].style.bottom = '33px';
    userChoice.children[1].innerHTML = 'Present';
    userImage.src = 'pics/present.png';
}

syphillis.addEventListener('click', sypFunc);
function sypFunc() {
    userChoice.children[1].style.display = 'block';
    userChoice.children[1].style.bottom = '40px';
    userChoice.children[1].innerHTML = 'Syphillis';
    userImage.src = 'pics/syphillis.png';
}

select.addEventListener('click', selectFunc);
function selectFunc() {
    console.log(`User choice: ${userChoice.children[1].innerHTML}`);
    if(userChoice.children[1].innerHTML.length > 0) {
        setTimeout(compFunc, 0500);
    }
}

// COMP CHOICE
const compChoice = document.querySelector('.comp-choice');
const compImage = document.getElementById('compImage');
function compFunc() {
    const compArr = ['Romeo', 'Present', 'Syphillis'];
    const compIndex = Math.floor(Math.random() * compArr.length);
    compChoice.children[1].innerHTML = compArr[compIndex];
    compChoice.children[1].style.display = 'block';
    setTimeout(compImgFunc, 0001);
    console.log(`Comp choice: ${compChoice.children[1].innerHTML}`);
    setTimeout(determineFunc, 1000);
}

function compImgFunc() {
    if(compChoice.children[1].innerHTML === 'Romeo') {
        compImage.src = 'pics/romeo.png';
    } else if(compChoice.children[1].innerHTML === 'Present') {
        compImage.src = 'pics/present.png';
    } else if(compChoice.children[1].innerHTML === 'Syphillis') {
        compImage.src = 'pics/syphillis.png';
    } else {
        compImage.src = '';
    }
    
    compChoice.children[1].innerHTML === 'Present' ? 
    compChoice.children[1].style.bottom = '33px' :
    compChoice.children[1].style.bottom = '40px'; // THE 'PRESENT' TEXT WAS BEING STUPID.
}



// DETERMINE WINNER, COMMENT & RESET
function determineFunc() {
    const drawComment = ["It's a draw.", "Even Stevens, carry on.", "Draw? There's no paper here!"];
    const winComment = ["Nice one, eat that bot!", "Exactly, it's just a machine.", "No mercy!"];
    const loseComment = ["Unlucky.", "Sorry, the computer says 'no'.", "Better luck next time."];
    const commentIndex = Math.floor(Math.random() * 3);
    if((userChoice.children[1].innerHTML === 'Romeo' && compChoice.children[1].innerHTML === 'Romeo') ||
    (userChoice.children[1].innerHTML === 'Present' && compChoice.children[1].innerHTML === 'Present') ||
    (userChoice.children[1].innerHTML === 'Syphillis' && compChoice.children[1].innerHTML === 'Syphillis')) {
            scoreBox.style.fontFamily = 'Arial, Helvetica, sans-serif';
            scoreBox.innerHTML = drawComment[commentIndex];
            setTimeout(drawReset, 2000);
        } else if((userChoice.children[1].innerHTML === 'Romeo' && compChoice.children[1].innerHTML === 'Present') ||
                    (userChoice.children[1].innerHTML === 'Present' && compChoice.children[1].innerHTML === 'Syphillis') ||
                    (userChoice.children[1].innerHTML === 'Syphillis' && compChoice.children[1].innerHTML === 'Romeo')) {
                        playerScore++;
                        scoreBox.style.fontFamily = 'Arial, Helvetica, sans-serif';
                        scoreBox.innerHTML = winComment[commentIndex];
                        setTimeout(winReset, 2000);
                    } else {
                        compScore++;
                        scoreBox.style.fontFamily = 'Arial, Helvetica, sans-serif';
                        scoreBox.innerHTML = loseComment[commentIndex];
                        setTimeout(winReset, 2000);
                    }
        setTimeout(finalDet, 0001);
}

function drawReset() {
    scoreBox.style.fontFamily = "'Courier New', Courier, monospace";
    scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;
    userChoice.children[1].style.display = 'none';
    compChoice.children[1].style.display = 'none';
    userChoice.style.background = '#FCB9B2';
    userChoice.children[1].innerHTML = '';
    compChoice.children[1].innerHTML = '';
    userImage.src = '';
    compImage.src = '';
}

function winReset() {
    scoreBox.style.fontFamily = "'Courier New', Courier, monospace";
    scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;
    userChoice.children[1].style.display = 'none';
    compChoice.children[1].style.display = 'none';
    userChoice.style.background = '#FCB9B2';
    userChoice.children[1].innerHTML = '';
    compChoice.children[1].innerHTML = '';
    userImage.src = '';
    compImage.src = '';
}



// MASTER RESET
const masterReset = document.querySelector('.master-reset');
masterReset.addEventListener('click', masReset)
function masReset() {
    playerScore = 0;
    compScore = 0;
    scoreBox.style.fontFamily = "'Courier New', Courier, monospace";
    scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;
    userChoice.children[1].style.display = 'none';
    compChoice.children[1].style.display = 'none';
    userChoice.style.background = '#FCB9B2';
    userChoice.children[1].innerHTML = '';
    compChoice.children[1].innerHTML = '';
    userImage.src = '';
    compImage.src = '';
}

// DETERMINE ABSOLUTE WINNER, COMMENT AND RESET
function finalDet() {
    const winComment = ["PLAYER WINS!", "YOU'VE WON!!!", "CONGRATULATIONS. GO HUMANITY!!!"];
    const loseComment = ["MACHINE WINS!", "OH NO. YOU'VE LOST!", "WWHHHYHYYYYYYY!!!"];
    const detIndex = Math.floor(Math.random() * 3);
    if(playerScore > 4) {
        scoreBox.innerHTML = winComment[detIndex];
        // scoreBox.innerHTML.includes('E') ? soundFX.play() : soundFX; // USE LATER
        playerScore = 0;
        compScore = 0;
    } else if(compScore > 4) {
        scoreBox.innerHTML = loseComment[detIndex];
        // scoreBox.innerHTML.includes('E') ? soundFX.play() : soundFX; // USE LATER
        playerScore = 0;
        compScore = 0;
    }
}



/*IDEAS:
1. add more comments.
2. Variable to count number of times scoreboard.innerHTML.includes('draw'). Once === 3, comment 'these draws are taking piss', etc.
3. Variable to count 3 wins in row and comment/userChoice.bg gifs, lovehearts, etc.
4. Master reset button.
5. Music, sfx (speak to Nelson).
*/

// NEED THIS LATER FOR ADDING SFX - REMEMBER SOUNDfx IS CURRENTLY SET TO DISPLAY:NONE - do sfx last
// soundFX.src = 'audio/rocketWhoosh.wav';
// soundFX.play();