//Button Event
const button = document.getElementById('mouse');
const message = document.getElementById('message');

button.addEventListener('mouseenter', function() {
        message.textContent = 'Hovering over button';
    });
button.addEventListener('mouseleave', function() {
        message.textContent = 'Not hovering over button';
    });

//Keyboard Event
const keys = document.getElementById('keys');
const show = document.getElementById('show');

keys.addEventListener('keydown', function(keyDisplay) {
    show.textContent = keyDisplay.key;
});

//Form Event
const form = document.getElementById('form');
const formMessage = document.getElementById('formMessage');
const hero = document.getElementById('hero');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    formMessage.textContent = `The form has been submitted! Your favourite hero is: ${hero.value}`
});