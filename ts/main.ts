let toggleOpen = document.getElementById('toggleOpen');
let toggleClose = document.getElementById('toggleClose');
let nav = document.getElementById('nav');

function openMenu() {
  nav?.classList.add('show');
  nav?.classList.remove('hide');
  toggleOpen?.classList.add('hide');
  toggleOpen?.classList.remove('show');
  toggleClose?.classList.add('show');
  toggleClose?.classList.remove('hide');
}
function closeMenu() {
  nav?.classList.add('hide');
  nav?.classList.remove('show');
  toggleOpen?.classList.add('show');
  toggleOpen?.classList.remove('hide');
  toggleClose?.classList.add('hide');
  toggleClose?.classList.remove('show');
}
