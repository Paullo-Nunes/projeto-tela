const container = document.querySelector('.container');

const registerBtn = document.getElementById('registrar');

const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");

})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");

})