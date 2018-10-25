'use strict';

var projects = [];

//raw dataObj
function Project(rawObjData) {
    this.title = rawObjData.title;
    this.icon = rawObjData.icon;
    this.description = rawObjData.description;
    this.screenshots = rawObjData.screenshots;

}
projects.push(new Project(rawObjData));
console.log(projects);

// ask if this is the ideal location for this code

//Prototype
function buildProjects() {
    
    for(var projectsIndex = 0; projectsIndex < projectsIndex.length; projectsIndex++) {
        var content = document.getElementById('project-box');
        var item = document.createElement('div');
        item.setAttribute('class', 'one-project');
        var name = document.createElement('h3');
        name.innerText= projects[projectsIndex].title;
        var projectIcon = document.createElement('img');
        projectIcon.setAttribute('src', projects[projectsIndex].icon);
        var about = document.createElement('p');
        about.innerText = projects[projectsIndex].description;
        item.appendChild(name);
        item.appendChild(projectIcon);
        item.appendChild(about);
        content.appendChild(item);
    }
}
window.addEventListener('load', buildProjects);
// console.log(buildProjects);



// var student = "Zack";
// var response = `Hey, My name is ${student}. I'm happy to be here.`;

// <script id="pet-template" type="text/x-handlebars-template">
//     <article>
//         <h2></h2>
//     </article>
// </script>

