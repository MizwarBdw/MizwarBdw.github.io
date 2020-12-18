function playAudio(url){
    new Audio(url).play();
}

var mainGamePage = document.querySelector('.gamePage')
var enemy = document.querySelector('.enemys')

function randomPos(){
    playAudio('./assets/audio/laser.mp3')

    enemy.style.top = `${Math.floor(Math.random(300*50) * 600)}px`;
    enemy.style.left = `${Math.floor(Math.random(175*125) * 950)}px`;

    var score = parseInt(document.getElementById('h2').innerHTML)
    score += 10
    document.getElementById('h2').innerHTML = score

    if (score === 100){
        alert('Good Job!! Kamu berhasil menghancurkan semua musuh!'); document.location = 'gameover.html'
    }
}

