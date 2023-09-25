import React from 'react';

function Projects(props) {
    return (
        console.log(props.projects) ,
        <div className="list-group">
            {props.projects.map((project) => {
                return (
                    // TODO: Your code here
                    <div key={project.id} className="list-group-item">
                        {project.name}
                        {project.description}
                        <ul>
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                        {project.gitLink}
                        {project.liveLink}
                    </div>
                );
            })}
        </div>
    );
}

export default Projects;
