const buttons = document.querySelectorAll('.btn');
const number = document.querySelector('.number');

let count = 0;


buttons.forEach(function (btnElement) {
    btnElement.addEventListener('click', function (event) {
        const style = event.currentTarget.classList;
        console.log(style);
       
        if (style.contains('decrease')) {
            count--;
            if (count < 0) {
                number.classList.add('red');
                number.classList.remove('green');
            }

        }
        if (style.contains('increase')) {
            count++;
            if (count > 0) {
                number.classList.add('green');
                number.classList.remove('red');
            }
        }
        if (style.contains('reset')) {
            count = 0;
            if (count === 0) {
                number.classList.remove('green')
                number.classList.remove('red');
            }

        }
        number.textContent = count;
    })
})

