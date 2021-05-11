// GLOBAL

const buttons = document.querySelectorAll('.button');
const names = document.querySelectorAll('.name');
const keys = document.querySelectorAll('.key');
const pianoKeys = document.querySelector('.piano-keys')
const fullscreenButton = document.querySelector('.fullscreen');
const keyNames = [['c♯‎', 'R'], ['d♯‎', 'T'], ['f♯‎', 'U'], ['g♯‎', 'I'], ['a♯‎', 'O'], ['c', 'D'], ['d', 'F'], ['e', 'G'], ['f', 'H'], ['g', 'J'], ['a', 'K'], ['b', 'L']];
let activeNavigationButton = 'Notes';
let actualNameRegime = null;
let activeSound = null;
let activeKey = null;
let activeName = null;

// START SETTINGS INITIALISATION
for (let i = 0; i < names.length; i++) {
    names[i].innerText = keyNames[i][0]
}

// PIANO KEYS NAVIGATION

buttons[0].classList.add('button_active');

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', function () {
        buttons.forEach(el => el.classList.remove('button_active'))
        buttons[i].classList.add('button_active');
        activeNavigationButton = buttons[i].innerText;
        changeNames();
    });
}

function changeNames() {
    activeNavigationButton === 'Notes' ? actualNameRegime = 0 : actualNameRegime = 1;
    for (let i = 0; i < names.length; i++) {
        names[i].innerText = keyNames[i][actualNameRegime];
    }
}

// ACTIVE KEYS

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    key.addEventListener('click', soundOn);
    // key.addEventListener('mouseover', soundOn);
    window.addEventListener('keydown', soundOn);
}

function soundOn(e) {
    switch (e.type) {
        case 'click':
            activeSound = document.querySelector(`.audio${e.target.classList[2]}`);
            activeName = document.querySelector(`.name_${e.target.classList[2].split('')[8]}`);
            break;
        case 'mouseover':
            activeSound = document.querySelector(`.audio${e.target.classList[2]}`);
            activeName = document.querySelector(`.name_${e.target.classList[2].split('')[8]}`);
            break;
        case 'keydown':
            activeSound = document.querySelector(`.audiokey--${e.code}`);
            activeKey = document.querySelector(`.key--${e.code}`);
            activeKey.classList.add('key_hover');
            setTimeout(function () { activeKey.classList.remove('key_hover') }, 300);
            activeName = document.querySelector(`.name_${e.code.split('')[3]}`);
            break;

    }
    activeName.classList.add('name_light');
    setTimeout(function () { activeName.classList.remove('name_light') }, 300);
    activeSound.currentTime = 0;
    activeSound.play();
}

// FULLSCREEN

fullscreenButton.addEventListener('click', () => {
    toggleFullScreen();
});

function getFullscreenElement() {
    return document.fullscreenElement;
};

function toggleFullScreen() {
    getFullscreenElement() ? document.exitFullscreen() : document.documentElement.requestFullscreen();
}