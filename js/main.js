'use strict';

var projects = [];

function Project(rawObjData) {
    this.title = rawObjData.title;
    this.icon = rawObjData.icon;
    this.description = rawObjData.description;
    this.date = rawObjData.date
}

// Project.prototype.new = function() {
//     Object.toHTML(rawObjData.date);
// }


let result = rawObjData.map(pubDate => pubDate.date);
result.sort(function(a, b) {
    console.log(a - b);
    // return a - b;
})
console.log(result);



function buildProjectIcons() {
    
    for(var index = 0; index < rawObjData.length; index++) {
        var content = document.getElementById('project-box');
        var item = document.createElement('div');
        item.setAttribute('class', 'one-project');
        var name = document.createElement('h3');
        name.innerText = rawObjData[index].title;
        item.appendChild(name);
        var projectIcon = document.createElement('img');
        projectIcon.setAttribute('src', rawObjData[index].icon);
        projectIcon.setAttribute('class', "project-icon");
        item.appendChild(projectIcon);
        var about = document.createElement('p');
        about.innerText = rawObjData[index].description;
        item.appendChild(about);
        content.appendChild(item);
    }
}
window.addEventListener('load', buildProjectIcons);