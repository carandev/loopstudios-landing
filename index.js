const menuIcon = document.querySelector('#menu_icon')
const header = document.querySelector('header')
const headerMenu = document.querySelector('#header_menu')
const h1 = document.querySelector('h1')

menuIcon.addEventListener('click', () => {
  if (header.classList.contains('header')){
    header.classList.replace('header','header__menu-open')
  } else {
    header.classList.replace('header__menu-open', 'header')
  }
  h1.classList.toggle('hide')
  headerMenu.classList.toggle('header__menu-bar')
})