"use strict";

var stickyNavigation = (function () {

    var stickyNavigation, elementFollowingSticky, stickyOffset;

    var setup = function() {
        stickyNavigation = document.getElementById("sticky-nav");
        elementFollowingSticky = document.getElementById("after-sticky-nav");
        stickyOffset = stickyNavigation.offsetTop;
    }

    var makeSticky = function () {
        if (window.pageYOffset >= stickyOffset) {
            stickyNavigation.classList.add("sticky");
            elementFollowingSticky.classList.add("after-sticky");
        } else {
            stickyNavigation.classList.remove("sticky");
            elementFollowingSticky.classList.remove("after-sticky");
        }
    };

    setup();
    window.addEventListener("scroll", makeSticky);
        
})();