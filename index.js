const button = document.querySelector('#btn');
const background = document.querySelector('.background');

let darkMode = false;

button.addEventListener('click', function() {
    if (darkMode) {
        button.classList.remove('button--darkMode');
        background.classList.remove('background--darkMode');
        return darkMode = false;
    } else {
        button.classList.add('button--darkMode');
        background.classList.add('background--darkMode');
        return darkMode = true;
    }
});


