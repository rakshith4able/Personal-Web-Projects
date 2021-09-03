const p1 = {
    score: 0,
    button: document.querySelector('#btnp1'),
    display: document.querySelector('#p1_score_display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#btnp2'),
    display: document.querySelector('#p2_score_display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#win');
let winningScore = 10;
winningScoreSelect.value = winningScore;
let isGameOver = false;


function updateScores(player, opponent) {
    if (!isGameOver) {
        if (winningScore === 0) {
            alert("Please enter target Greater than 0");
        }
        else {
            player.score += 1;
            if (player.score === winningScore) {
                isGameOver = true;
                player.display.classList.add('win');
                opponent.display.classList.add('lose');
                player.button.disabled = true;
                opponent.button.disabled = true;
            }
            player.display.textContent = player.score;
        }
    }
}




p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})



window.addEventListener('keyup', function (e) {

    if (e.code == 'KeyA')
        updateScores(p1, p2);
})

window.addEventListener('keyup', function (e) {
    if (e.code == 'KeyL')
        updateScores(p2, p1);
})

p1.button.addEventListener('touchstart', function (e) {
    e.preventDefault();

    updateScores(p1, p2)
})
p2.button.addEventListener('touchstart', function (e) {
    e.preventDefault();
    updateScores(p2, p1)
})





winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('win', 'lose');
        p.button.disabled = false;
    }
}


