"use strict";var postProgressBar=void window.addEventListener("scroll",function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById("progress-bar").style.width=e+"%"});