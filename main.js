const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');
const openBtn = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.close-menu');

openBtn.addEventListener('click', () => {
  menu.classList.add('active');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.classList.remove('active');
});