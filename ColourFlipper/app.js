const colors = ['red', 'blue', 'purple', 'orange', 'pink'];
const bgColor = document.querySelector('body');
const button = document.querySelector('.button');
const colorName = document.querySelector('.color-name');

button.addEventListener('click', function(){
    
    var randomColor = Math.floor(Math.random(colors.length)* 5);
    var randomColorName = colors[randomColor];

    colorName.innerHTML = randomColorName;
    
    if (randomColorName == 'red'){
        bgColor.classList.add('red')
    }else {
        bgColor.classList.remove('red')
    };

    if (randomColorName == 'blue'){
        bgColor.classList.add('blue');
    }else {
        bgColor.classList.remove('blue')
    };

    if (randomColorName == 'purple'){
        bgColor.classList.add('purple');
    }else {
        bgColor.classList.remove('purple')
    };

    if (randomColorName == 'orange'){
        bgColor.classList.add('orange')
    }else {
        bgColor.classList.remove('orange')
    };

     if (randomColorName == 'pink'){
        bgColor.classList.add('pink');
    }else {
        bgColor.classList.remove('pink')
    };

    console.log(randomColorName);
});

