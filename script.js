// MISC
const blinkSpeed1 = 0250;
const darkRed = 'rgb(70, 18, 32)';
const music = document.querySelector('.music');
const soundFX = document.querySelector('.sfx');

const brooksCode = document.querySelector('.brookscode');
brooksCode.addEventListener('click', brooksFunc);
function brooksFunc() {
    soundStatus == false ? soundFX.src = '' : soundFX.src = 'audio/click.mp3';
    soundFX.play();
}

setTimeout( () => {
    music.src = 'audio/song.mp3';
    music.play();
}, 2000);

const toggleSound = document.querySelector('.toggle-sound');
let soundStatus = true;
const soundControl = {
    on: function() {
        music.src = 'audio/song.mp3';
        music.play();
    },
    off: function () {
        music.src = '';
        music.play();
        soundFX.src = '';
        soundFX.play();
    }
}
toggleSound.addEventListener('click', soundOff);
function soundOff() {
    soundStatus = false;
    soundFX.src = 'audio/click.mp3';
    soundFX.play();
    soundControl.on() ? soundControl.off() : soundControl.on();
}
toggleSound.addEventListener('click', soundOn);
function soundOn() {
    soundFX.src = 'audio/click.mp3';
    soundFX.play();
    soundControl.off() ? soundControl.on() : soundControl.off();
}
// NEED TO TURN SOUND BACK ON BY CLICKING SAME BUTTON - SOUNDon AND ITS TERNARY NOT WORKING!


// SCOREBOX
const scoreBox = document.querySelector('.score-box');
const scoreBoxFlash = {
    time: null,
    start: function() {
        this.time = setInterval( () => {
            scoreBox.style.backgroundColor = (scoreBox.style.backgroundColor === darkRed ? 'rgb(254, 208, 187)' : darkRed); 
        }, blinkSpeed1);
    },
    stop: function() {
        clearInterval(this.time, 2000); 
    }
}
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
            scoreBox.innerHTML = 'Check out the instructions below. &#8595;&#8595;&#8595;'
            setTimeout(welcome4, 3000);
            setTimeout(welcome5, 1000);
            function welcome4() {
                scoreBox.innerHTML = `Player: ${playerScore} | Machine: ${compScore}`;
            }
        }
    }
}

// INSTRUCTION BOX
const insBox = document.querySelector('.instruction-box');
const insBoxFlash = {
    time: null,
    start: function() {
        this.time = setInterval( () => {
            insBox.style.backgroundColor = (insBox.style.backgroundColor === darkRed ? 'rgb(178, 58, 72)' : darkRed); 
        }, blinkSpeed1);
    },
    stop: function() {
        clearInterval(this.time); 
    }
}

function welcome5() {
    insBoxFlash.start();
    insBox.innerHTML = 'First to 5 points wins...';
    setTimeout(stopFlash, 3000);
    setTimeout(instruction2, 3000);
    setTimeout(instruction3, 7000);
    function stopFlash() {
        insBoxFlash.stop();
        insBox.style.backgroundcolor = darkRed;
    };
    function instruction2() {
        insBox.innerHTML = 'Click the Romeo, Present, or Syphillis icon in the Player box and hit Select';
    };
    function instruction3() {
        insBox.innerHTML = '- Romeo beats Present.<br>- Present beat Syphillis.<br>- Syphillis beats Romeo.';
    }
}

// USER CHOICE
const userChoice = document.querySelector('.user-choice');
const romeo = document.querySelector('.ch-romeo');
const present = document.querySelector('.ch-present');
const syphillis = document.querySelector('.ch-syphillis');
const select = document.querySelector('.user-select');
const userImage = document.getElementById('userImage');

romeo.addEventListener('click', romFunc);
function romFunc() {
    soundStatus == false ? soundFX.src = '' : soundFX.src = 'audio/click.mp3';
    soundFX.play();
    userChoice.children[1].style.display = 'block';
    userChoice.children[1].style.bottom = '40px';
    userChoice.children[1].innerHTML = 'Romeo';
    userImage.src = 'pics/romeo.png';
}

present.addEventListener('click', preFunc);
function preFunc() {
    soundStatus == false ? soundFX.src = '' : soundFX.src = 'audio/click.mp3';
    soundFX.play();
    userChoice.children[1].style.display = 'block';
    userChoice.children[1].style.bottom = '33px';
    userChoice.children[1].innerHTML = 'Present';
    userImage.src = 'pics/present.png';
}

syphillis.addEventListener('click', sypFunc);
function sypFunc() {
    soundStatus == false ? soundFX.src = '' : soundFX.src = 'audio/click.mp3';
    soundFX.play();
    userChoice.children[1].style.display = 'block';
    userChoice.children[1].style.bottom = '40px';
    userChoice.children[1].innerHTML = 'Syphillis';
    userImage.src = 'pics/syphillis.png';
}

select.addEventListener('click', selectFunc);
function selectFunc() {
    soundStatus == false ? soundFX.src = '' : soundFX.src = 'audio/click.mp3';
    soundFX.play();
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
    const drawComment = ["It's a draw.", "Even Stevens, carry on.", "Draw? There's no paper here!", 
                        "A draw won't do. Keep going.", "Nobody likes a draw. Play on."];
    const winComment = ["Nice one, eat that bot!", "Exactly, it's just a machine.", "No mercy!", 
                        "Yay. You're killing it!", "Eat that bot for breakfast!"];
    const loseComment = ["Unlucky.", "Sorry, the computer says 'no'.", "Better luck next time.", 
                        "Don't let the bot win!", "Hang in there!"];
    const commentIndex = Math.floor(Math.random() * 5);
    if((userChoice.children[1].innerHTML === 'Romeo' && compChoice.children[1].innerHTML === 'Romeo') ||
    (userChoice.children[1].innerHTML === 'Present' && compChoice.children[1].innerHTML === 'Present') ||
    (userChoice.children[1].innerHTML === 'Syphillis' && compChoice.children[1].innerHTML === 'Syphillis')) {
            scoreBox.style.fontFamily = 'Arial, Helvetica, sans-serif';
            scoreBox.innerHTML = drawComment[commentIndex];
            setTimeout(drawReset, 2000);
        } else if((userChoice.children[1].innerHTML === 'Romeo' && compChoice.children[1].innerHTML === 'Present') ||
                    (userChoice.children[1].innerHTML === 'Present' && compChoice.children[1].innerHTML === 'Syphillis') ||
                    (userChoice.children[1].innerHTML === 'Syphillis' && compChoice.children[1].innerHTML === 'Romeo')) {
                        soundStatus == false ? soundFX.src = '' : soundFX.src = 'audio/yay.mp3';
                        soundFX.play();
                        playerScore++;
                        scoreBox.style.fontFamily = 'Arial, Helvetica, sans-serif';
                        scoreBox.innerHTML = winComment[commentIndex];
                        scoreBoxFlash.start();
                        setTimeout(stopScoreFlash, 2000);
                        function stopScoreFlash() {
                            scoreBoxFlash.stop();
                            scoreBox.style.background = darkRed;
                        }
                        setTimeout(winReset, 2000);
                    } else {
                        soundStatus == false ? soundFX.src = '' : soundFX.src = 'audio/boo.mp3';
                        soundFX.play();
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
    soundStatus == false ? soundFX.src = '' : soundFX.src = 'audio/click.mp3';
    soundFX.play();
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
    const winComment = ["PLAYER WINS!", "YOU'VE WON!!!", "CONGRATULATIONS. GO HUMANITY!!!", "YOU'VE KILLED IT!!!"];
    const loseComment = ["MACHINE WINS!", "OH NO. YOU'VE LOST!", "WWHHHYHYYYYYYY!!!", "BETTER LUCK NEXT TIME!"];
    const detIndex = Math.floor(Math.random() * 4);
    if(playerScore > 4) {
        soundStatus == false ? soundFX.src = '' : soundFX.src = 'audio/cheers.mp3';
        soundFX.play();
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






