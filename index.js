const button = document.querySelector('#btn');
const background = document.querySelector('.background');

let darkMode = false;

button.addEventListener('click', function() {
    if (darkMode) {
        button.classList.remove('button--darkMode');
        button.innerHTML = 'Dark Mode'
        background.classList.remove('background--darkMode');
        return darkMode = false;
    } else {
        button.classList.add('button--darkMode');
        button.innerHTML = 'Light Mode'
        background.classList.add('background--darkMode');
        return darkMode = true;
    }
});


