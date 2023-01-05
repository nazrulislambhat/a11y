var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var nav = document.getElementById('nav');
function openMenu() {
    nav === null || nav === void 0 ? void 0 : nav.classList.add('show');
    nav === null || nav === void 0 ? void 0 : nav.classList.remove('hide');
    toggleOpen === null || toggleOpen === void 0 ? void 0 : toggleOpen.classList.add('hide');
    toggleOpen === null || toggleOpen === void 0 ? void 0 : toggleOpen.classList.remove('show');
    toggleClose === null || toggleClose === void 0 ? void 0 : toggleClose.classList.add('show');
    toggleClose === null || toggleClose === void 0 ? void 0 : toggleClose.classList.remove('hide');
}
function closeMenu() {
    nav === null || nav === void 0 ? void 0 : nav.classList.add('hide');
    nav === null || nav === void 0 ? void 0 : nav.classList.remove('show');
    toggleOpen === null || toggleOpen === void 0 ? void 0 : toggleOpen.classList.add('show');
    toggleOpen === null || toggleOpen === void 0 ? void 0 : toggleOpen.classList.remove('hide');
    toggleClose === null || toggleClose === void 0 ? void 0 : toggleClose.classList.add('hide');
    toggleClose === null || toggleClose === void 0 ? void 0 : toggleClose.classList.remove('show');
}
