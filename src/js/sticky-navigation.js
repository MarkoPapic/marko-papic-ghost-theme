"use strict";

var stickyNavigation = (function () {

    var stickyNavigation = document.getElementById("sticky-nav");
    var elementFollowingSticky = document.getElementById("after-sticky-nav");
    var stickyOffset = stickyNavigation.offsetTop;

    var makeSticky = function () {
        if (window.pageYOffset >= stickyOffset) {
            stickyNavigation.classList.add("sticky");
            elementFollowingSticky.classList.add("after-sticky");
        } else {
            stickyNavigation.classList.remove("sticky");
            elementFollowingSticky.classList.remove("after-sticky");
        }
    };

    window.addEventListener("scroll", makeSticky);
})();