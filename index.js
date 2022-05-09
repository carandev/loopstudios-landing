const menuIcon = document.querySelector('#menu_icon')
const header = document.querySelector('header')
const headerMenu = document.querySelector('#header_menu')
const h1 = document.querySelector('h1')
const optionsMenu = document.querySelectorAll('.nav-menu-bar li')

menuIcon.addEventListener('click', () => {
  if (header.classList.contains('header')){
    header.classList.replace('header','header__menu-open')
    menuIcon.setAttribute('src', 'images/icon-close.svg')
  } else {
    header.classList.replace('header__menu-open', 'header')
    menuIcon.setAttribute('src', 'images/icon-hamburger.svg')
  }

  h1.classList.toggle('hide')
  headerMenu.classList.toggle('header__menu-bar')
})

optionsMenu.forEach(option => {
  option.addEventListener('click', () => {
    header.classList.replace('header__menu-open', 'header')
    menuIcon.setAttribute('src', 'images/icon-hamburger.svg')
    h1.classList.toggle('hide')
    headerMenu.classList.toggle('header__menu-bar')
  })
})