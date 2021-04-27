const hamburger = document.getElementById('btnHamburger');
const overlay = document.getElementById('overlay');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('open');
    overlay.classList.toggle('hidden');

})
