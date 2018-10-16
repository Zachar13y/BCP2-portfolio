'use strict';

var hamburger = document.querySelector('.hamburger');
var fullMenu = document.querySelector('.nav-drop');

function dropDown() {
    if (hamburger.style.display === 'block') {
            hamburger.style.display = 'none';
            fullMenu.style.display = 'block';
    } 
    else {
        hamburger.style.display = 'block';
        fullMenu.style.display = 'none';
    }
};

window.addEventListener('click', function(){
    fullMenu.style.display === 'none';
});
hamburger.addEventListener('click', dropDown);


// var width = $(window).width() - 25; 
// $("i").width(width);

// console.log(width); 
// console.log();
