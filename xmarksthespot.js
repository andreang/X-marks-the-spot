const selectBox = document.querySelector('.select-box');
const selectBoxX = selectBox.querySelector('.setup .playerX');
const selectBoxO = selectBox.querySelector('.setup .playerO');
const board = document.querySelector('.gameplay');
const players = document.querySelector('.players');
const allBoard = document.querySelectorAll('section span');
const resultBox = document.querySelector('.results');
const winningMessageText = resultBox.querySelector('.winner');
const restartButton = results.querySelector('restartButton');
let playerX = 'fas fa-times';
let playerO = 'far fa-circle';
let playerMark = 'X';
let runBot = true;

window.onload = () => {
    for (let i = 0; i < allBoard.length; i++) {
        allBoard[i].setAttribute('onclick', 'clickedBox(this)');
    }
};

selectBoxX.onclick = () => {
    selectBox.classList.add('hide');
    board.classList.add('show');
};

selectBoxO.onclick = () => {
    selectBox.classList.add('hide');
    board.classList.add('show');
    players.setAttribute('class', 'players active player');
};

function clickedBox(element) {
    if (players.classList.contains('player')) {
        playerMark = 'O';
        element.innerHTML = `<i class="${playerO}"></i>`;
        players.classList.remove('active');
        element.setAttribute('id', playerMark);
    } else {
        element.innerHTML = `<i class="${playerX}"></i>`;
        element.setAttribute('id', playerMark);
        players.classList.add('active');
    }
    selectWinner();
    element.style.pointerEvents = 'none';
    board.style.pointerEvents = 'none';
    let randomTimeDelay = (Math.random() * 1000 + 200).toFixed();
    setTimeout(() => {
        bot(runBot);
    }, randomTimeDelay);
}
// RUNBOT: https://www.youtube.com/c/CodingNepal/videos

function bot() {
    let array = [];
    if (runBot) {
        playerMark = 'O';
        for (let i = 0; i < allBoard.length; i++) {
            if (allBoard[i].childElementCount == 0) {
                array.push(i);
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)];
        if (array.length > 0) {
            if (players.classList.contains('player')) {
                playerMark = 'X';
                allBoard[randomBox].innerHTML = `<i class="${playerX}"></i>`;
                allBoard[randomBox].setAttribute('id', playerMark);
                players.classList.add('active');
            } else {
                allBoard[randomBox].innerHTML = `<i class="${playerO}"></i>`;
                players.classList.remove('active');
                allBoard[randomBox].setAttribute('id', playerMark);
            }
            selectWinner();
        }
        allBoard[randomBox].style.pointerEvents = 'none';
        board.style.pointerEvents = 'auto';
        playerMark = 'X';
    }
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
        runBot = false;
        bot(runBot);
        setTimeout(() => {
            results.classList.add('show');
            board.classList.remove('show');
        }, 700);
        winningMessageText.innerHTML = `Player <p>${playerMark}</p> has won.`;
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
            runBot = false;
            bot(runBot);
            setTimeout(() => {
                results.classList.add('show');
                board.classList.remove('show');
            }, 700);
            winningMessageTextElement.textContent = 'Match has been drawn!';
        }
    }
}
restartButton.onclick = () => {
    window.location.reload();
};
