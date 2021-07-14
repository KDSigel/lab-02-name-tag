const nameEl = document.getElementById('oldName');

const buttonEl = document.getElementById('change-button');

const pinkButtonEl = document.getElementById('color-button-pink');

const lightgreenButtonEl = document.getElementById('color-button-lightgreen');

const lightblueButtonEl = document.getElementById('color-button-lightblue');

const stickerEl = document.getElementById('sticker-whole');

const theyThemButtonEl = document.getElementById('they-them-pronouns')

buttonEl.addEventListener('click', () => {
    const newNameEl = document.getElementById('name-input');

    console.log(newNameEl.value);

    nameEl.textContent = newNameEl.value;

});

pinkButtonEl.addEventListener('click', () => {

    stickerEl.style.backgroundColor = 'pink';

});

lightgreenButtonEl.addEventListener('click', () => {

    stickerEl.style.backgroundColor = 'lightgreen';

});

lightblueButtonEl.addEventListener('click', () => {

    stickerEl.style.backgroundColor = 'lightblue';

});

// theyThemButtonEl.addEventListener('click', () => {

//     newNameEl.textContent = newNameEl.value + "they/them"

// });