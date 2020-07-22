function ToggleNavItems(){
  let navItems = document.querySelectorAll('nav > a');
  for(let i = 0; i < navItems.length; i++){
    navItems[i].classList.toggle('visible-nav-item');
  }
}