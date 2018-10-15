'use strict';

var hamburger = document.querySelector('.hamburger');
var fullMenu = document.querySelector('.nav-drop');

function dropDown() {
        // removeMenu = function(){
        //     fullMenu.style.display === 'none';
        // }
        if (hamburger.style.display === 'block') {
            hamburger.style.display = 'none';
            fullMenu.style.display = 'block';
    } 
    else {
        hamburger.style.display = 'block';
        fullMenu.style.display = 'none';
    }
};

// $('nav-drop').toggleClass('display')
window.addEventListener('click', function(){
    fullMenu.style.display === 'none';
});
hamburger.addEventListener('click', dropDown);
