const register = document.querySelector(".register");
const wrapper = document.querySelector('.wrapper');
const loginForm = document.querySelector('.form-login')
const registerForm = document.querySelector('.form-register')
const login =  document.querySelector(".login");
register.addEventListener('click', function(){
    wrapper.classList.add('active');
})
register.addEventListener('click', function(){
    loginForm.classList.add('active');
})
register.addEventListener('click', function(){
    registerForm.classList.add('active');
})
login.addEventListener('click', function(){
    wrapper.classList.remove('active');
    registerForm.classList.remove('active');
    loginForm.classList.remove('active');
})

const loginButtonNav = document.querySelector('.loginButtonNav');
loginButtonNav.addEventListener('click', function(){
    wrapper.classList.add('openFormLogin');
})

const closeIcon = document.querySelector('.closeIcon');
closeIcon.addEventListener('click', function(){
    wrapper.classList.remove('openFormLogin');
})