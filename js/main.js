'use strict';

var projects = [];

function Project(title, icon, description, screenshots) {
    this.title = title;
    this.icon = icon;
    this.description = description;
    this.screenshots = screenshots;

    projects.push(new Project(rawObjData));
}
console.log(projects);

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
console.log(buildProjects);



// var student = "Zack";
// var response = `Hey, My name is ${student}. I'm happy to be here.`;

// <script id="pet-template" type="text/x-handlebars-template">
//     <article>
//         <h2></h2>
//     </article>
// </script>

