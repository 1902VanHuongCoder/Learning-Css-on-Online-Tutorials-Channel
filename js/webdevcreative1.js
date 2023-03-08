const toggleNav = document.querySelector('.toggleNav');
const navRe = document.querySelector('.nav-responsive');
const barsAndClose = document.querySelector('.toggleNav i');

toggleNav.addEventListener('click', function(){
    navRe.classList.toggle('open');
    const isOpen = navRe.classList.contains('open');
    barsAndClose.classList = isOpen
    ?"fa-solid fa-xmark"
    :"fa-solid fa-bars"
})