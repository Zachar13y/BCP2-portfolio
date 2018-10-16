'use strict';


function Project(rawObjData) {
    this.title = title;
    this.icon = icon;
    this.description = description;
    this.screenshots = screenshots;
}
var projects = [];

projects.push(new projects(rawData));
// ask if this is the ideal location for this code

function buildProjects() {
    
    for(var projectsIndex = 0; projectsIndex < projects.length; projectsIndex++) {
        var content = document.getElementById('project-box');
        var item = document.createElement('div');
        item.setAttribute('class', 'one-project');
        var name = document.createElement('h3');
        name.innerText= projects[i].title;
        var projectIcon = document.createElement('img');
        projectIcon.setAttribute('src', projects[i].icon);
        var about = document.createElement('p');
        about.innerText = projects[i].description;
        item.appendChild(name);
        item.appendChild(projectIcon);
        item.appendChild(about);
        content.appendChild(item);
    }
}

window.addEventListener('load', buildProjects);

