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
