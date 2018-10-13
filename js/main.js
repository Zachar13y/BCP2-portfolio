"use strict";

// function dropdown(event) {
    var hamburger = document.querySelector('.hamburger');
    var fullMenu = document.querySelector('.nav-drop');
    
    console.log(hamburger);

    hamburger.addEventListener('click', () => {
        event.preventDefault();

        if (window.getComputedStyle(hamburger).display === 'block') {
            hamburger.style.display = 'none';
        } else {
            hamburger.style.display = 'block';
        }
    });
    
    // dropdown();
//     const menu = document.querySelector('.menu');
//     const menuToggle = document.querySelector('menuToggle');

//   menuToggle.addEventListener('click', (e) => {
//     e.preventDefault();

//     if (window.getComputedStyle(menu).display === 'block') {
//       menu.style.display = 'none';
//     } else  {
//       menu.style.display = 'block';
//     }
//   });
    
// }