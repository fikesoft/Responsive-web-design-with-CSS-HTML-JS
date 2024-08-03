const menuBtn = document.querySelector('.menu_btn');
const menuBtnClose = document.querySelector('.menu-close-btn');
const menuList = document.querySelector('.menu_list');
console.log('2')
menuBtn.addEventListener('click', function() {
    menuList.classList.add("menu_list--active")
    console.log('3')
  });

  menuBtnClose.addEventListener('click', function() {
    menuList.classList.remove("menu_list--active")
    console.log('4')
  });