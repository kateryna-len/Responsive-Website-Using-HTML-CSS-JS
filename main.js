const btnmenu = document.querySelector('.burger-menu');
const listmenu = document.querySelector('.nav-list');

btnmenu.addEventListener('click', () => {
  listmenu.classList.toggle('nav-open')
})

console.log(btnmenu)
console.log(listmenu)