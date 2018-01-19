"use strict";

var floatingSubscribe = (function () {

    var messageId = "floating-subscribe";
    var closeMessageButton = document.getElementById("close-floating-message");

    var closeMessage = function() {
        document.getElementById(messageId).style.display = "none";
        setCookie(messageId, "closed", 365);
    }

    var setCookie = function(cName, value, expiredays) {
        var expDate = new Date();
        expDate.setDate(expDate.getDate()+expiredays);
        document.cookie=cName + "=" + escape(value) + 
        ";expires=" + expDate.toGMTString();
    }

    var loadMessage = function() {
        if(document.cookie.indexOf(messageId) === -1) {
            document.getElementById(messageId).style.display = "block";
        }
    }

    loadMessage();
    closeMessageButton.addEventListener("click", closeMessage);
})();