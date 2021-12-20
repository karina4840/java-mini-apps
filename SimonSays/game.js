var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var pressed = false;
var level = 0;



$(document).keydown(function () {
    if (!pressed) {
        nextSequence();
        pressed = true;
    }
})


function nextSequence() {
    level++;
    userClickedPattern = [];
    $('.restart-title').text('');


    $('#level-title').text('Level ' + level);

    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColors[randomNumber];

    var audio = new Audio('sounds/' + randomChosenColor + '.mp3');
    gamePattern.push(randomChosenColor);

    $('#' + randomChosenColor).fadeOut(100).fadeIn(100);
    audio.play();
}


$('.btn').click(function () {
    var userChosenColor = this.id;
    animatePress(this);

    var buttonSound = new Audio('sounds/' + userChosenColor + '.mp3');
    buttonSound.play();

    userClickedPattern.push(userChosenColor);
    checkAnswer(userClickedPattern.lastIndexOf(userChosenColor));
})


function animatePress(currentColor) {
    $(currentColor).addClass('pressed');

    setTimeout(function () {
        $(currentColor).removeClass('pressed');
    }, 50);
}


function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {

        var count = 0;
        for (var i = 0; i < gamePattern.length; i++) {

            if (gamePattern[i] === userClickedPattern[i]) {
                count++;
            }
        }
        if (count === gamePattern.length) {
            console.log('success');
            
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    } else {
        console.log('wrong');

        var wrongAudio = new Audio('sounds/wrong.mp3');
        wrongAudio.play();

        $('body').addClass('game-over');
        $('svg').addClass('svg-wrong');

        setTimeout(function () {
            $('body').removeClass('game-over');
            $('svg').removeClass('svg-wrong');

        }, 200);

        $('#level-title').text('Game Over');
        $('.restart-title').text('(Press Any Key to Restart)')
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    pressed = false;
}