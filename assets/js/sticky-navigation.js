"use strict";var stickyNavigation=function(){var t=document.getElementById("sticky-nav"),s=document.getElementById("after-sticky-nav"),e=t.offsetTop;window.addEventListener("scroll",function(){window.pageYOffset>=e?(t.classList.add("sticky"),s.classList.add("after-sticky")):(t.classList.remove("sticky"),s.classList.remove("after-sticky"))})}();