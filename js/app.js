'use strict';

var hamburger = document.querySelector('.hamburger');
var fullMenu = document.querySelector('.nav-drop');

function dropDown() {
  $('.nav-drop').toggleClass('show');
};

hamburger.addEventListener('click', dropDown);

