'use strict';

var projects = [];

function Project(rawObjData) {
    this.title = rawObjData.title;
    this.icon = rawObjData.icon;
    this.description = rawObjData.description;
}

function buildProjects() {
    
    for(var index = 0; index < rawObjData.length; index++) {
        var content = document.getElementById('project-box');
        var item = document.createElement('div');
        item.setAttribute('class', 'one-project');
        var name = document.createElement('h3');
        name.innerText = rawObjData[index].title;
        item.appendChild(name);
        var projectIcon = document.createElement('img');
        projectIcon.setAttribute('src', rawObjData[index].icon);
        projectIcon.setAttribute('class', "project-screenshot");
        item.appendChild(projectIcon);
        var about = document.createElement('p');
        about.innerText = rawObjData[index].description;
        item.appendChild(about);
        content.appendChild(item);
    }
}
window.addEventListener('load', buildProjects);