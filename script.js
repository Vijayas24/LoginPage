const flipBox = document.getElementById('flipBox');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');

registerLink.addEventListener('click', function(e) {
    e.preventDefault();
    flipBox.classList.add('flipped');
});

loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    flipBox.classList.remove('flipped');
});