coinFlip = () => {
    let result;
    if (Math.random() < 0.5) {
        result = 'Heads';
        document.getElementById('coin-svg').setAttribute('src', 'assets/heads.svg')
    }
    else {
        result = 'Tails';
        document.getElementById('coin-svg').setAttribute('src', 'assets/tails.svg')
    }
    document.getElementById('result').innerText = result;
}

handleCoinClick = () => {
    document.getElementById('coin-svg').addEventListener('click', () => {
        coinFlip();
    })
}

handleButtonClick = () => {
    document.getElementById('flip-button').addEventListener('click', () => {
        coinFlip();
    })
}

handleCoinClick();
handleButtonClick();