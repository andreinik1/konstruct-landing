let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let headimg = document.getElementById("headimg");

let v = false;

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})