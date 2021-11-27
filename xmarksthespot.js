const selectBox = document.querySelector('.select-box');
const selectBoxX = selectBox.querySelector('.setup .playerX');
const selectBoxO = selectBox.querySelector('.setup .playerO');
const board = document.querySelector('.gameplay');
const playerX = document.querySelector('.players .playerX');
const playerO = document.querySelector('.players .playerO');
const allBoard = document.querySelectorAll('section span');
const resultBox = document.querySelector('.results');
const winningMessageText = resultBox.querySelector('.winner');
const restartButton = resultBox.querySelector('.newgamebutton');
let playerMark = 'X';

window.onload = () => {
    for (let i = 0; i < allBoard.length; i++) {
        allBoard[i].setAttribute('onclick', 'clickedBox(this)');
    }
};

selectBoxX.onclick = () => {
    selectBox.classList.add('hide');
    board.classList.add('show');
    playerX.setAttribute('class', 'playerX active');
};

selectBoxO.onclick = () => {
    selectBox.classList.add('hide');
    board.classList.add('show');
    playerO.setAttribute('class', 'playerO active');
};

function clickedBox(element) {
    if (playerO.classList.contains('active')) {
        playerMark = 'O';
        element.innerHTML = playerMark;
        playerO.classList.toggle('active');
        playerX.classList.toggle('active');
        element.setAttribute('id', playerMark);
    } else {
        playerMark = 'X';
        element.innerHTML = playerMark;
        playerO.classList.toggle('active');
        playerX.classList.toggle('active');
        element.setAttribute('id', playerMark);
    }
    selectWinner();
    element.style.pointerEvents = 'none';
    board.style.pointerEvents = 'none';
    let randomTimeDelay = (Math.random() * 1000 + 200).toFixed();
    setTimeout(() => {
        bot();
    }, randomTimeDelay);
}
// RUNBOT: https://www.youtube.com/c/CodingNepal/videos

function bot() {
    let array = [];
    for (let i = 0; i < allBoard.length; i++) {
        if (allBoard[i].childElementCount == 0) {
            array.push(i);
        }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if (array.length > 0) {
        if (playerO.classList.contains('active')) {
            playerMark = 'O';
            allBoard[randomBox].innerHTML = playerMark;
            playerO.classList.toggle('active');
            playerX.classList.toggle('active');
            allBoard[randomBox].setAttribute('id', playerMark);
        } else {
            playerMark = 'X';
            allBoard[randomBox].innerHTML = playerMark;
            playerO.classList.toggle('active');
            playerX.classList.toggle('active');
            allBoard[randomBox].setAttribute('id', playerMark);
        }
        selectWinner();
        allBoard[randomBox].style.pointerEvents = 'none';
    }
    board.style.pointerEvents = 'auto';
}

function getIdVal(classname) {
    return document.querySelector('.box' + classname).id;
}
function checkIdSign(val1, val2, val3, mark) {
    if (
        getIdVal(val1) == mark &&
        getIdVal(val2) == mark &&
        getIdVal(val3) == mark
    ) {
        return true;
    }
}
function selectWinner() {
    if (
        checkIdSign(1, 2, 3, playerMark) ||
        checkIdSign(4, 5, 6, playerMark) ||
        checkIdSign(7, 8, 9, playerMark) ||
        checkIdSign(1, 4, 7, playerMark) ||
        checkIdSign(2, 5, 8, playerMark) ||
        checkIdSign(3, 6, 9, playerMark) ||
        checkIdSign(1, 5, 9, playerMark) ||
        checkIdSign(3, 5, 7, playerMark)
    ) {
        // setTimeout(() => {
        //     selectBox.classList.remove('hide');
        //     board.classList.remove('show');
        // }, 700);
        winningMessageText.innerHTML = `Player <p>${playerMark}</p> has won.`;
        resultBox.style.opacity = 1;
    } else {
        if (
            getIdVal(1) != '' &&
            getIdVal(2) != '' &&
            getIdVal(3) != '' &&
            getIdVal(4) != '' &&
            getIdVal(5) != '' &&
            getIdVal(6) != '' &&
            getIdVal(7) != '' &&
            getIdVal(8) != '' &&
            getIdVal(9) != ''
        ) {
            //  ///           setTimeout(() => {
            //                 selectBox.classList.remove('hide');
            //                 board.classList.remove('show');
            //             }, 700);
            //
            winningMessageText.textContent = 'Match has been drawn!';
            resultBox.style.opacity = 1;
        }
    }
}
restartButton.addEventListener('click', function () {
    window.location.reload();
});
