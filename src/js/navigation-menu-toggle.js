"use strict";

var navigationMenuToggle = (function () {

    var button = document.getElementById("navigation-menu-button");
    var isMenuOpen = false;

    var toggleMenu = function () {
        isMenuOpen = !isMenuOpen;
        button.setAttribute('aria-expanded', isMenuOpen);
    };

    button.addEventListener("click", toggleMenu);
})();