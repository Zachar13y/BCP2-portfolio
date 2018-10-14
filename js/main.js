"use strict";

function dropDown() {
    var hamburger = document.querySelector('.hamburger');
    var fullMenu = document.querySelector('.nav-drop');
    var clickOut = document.querySelector('#wrapper');
    
    hamburger.addEventListener('click', (event) => {
        event.preventDefault(event);
        clickOut.addEventListener('click', (event) => {
            event.preventDefault(event);

            if (window.getComputedStyle(hamburger).display === 'block') {
                hamburger.style.display = 'none';
                fullMenu.style.display = 'block';
            } else {
                hamburger.style.display = 'block';
                fullMenu.style.display = 'none';
            }
        })
    })
};
dropDown();
