import React from 'react';

function Projects(props) {
  const projectStyle = {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '16px',
    marginBottom: '10px',
  };

  const techListStyle = {
    listStyle: 'none',
    margin: '0',
    padding: '0',
  };

  const techItemStyle = {
    fontSize: '14px',
    marginBottom: '5px',
  };

  const linkStyle = {
    display: 'inline-block',
    marginRight: '10px',
    fontSize: '14px',
    color: '#007bff',
  };

  const ProjectsList = props.projects.map((project) => (
    <div key={project.id} style={projectStyle}>
      <h2 style={titleStyle}>{project.name}</h2>
      <p style={descriptionStyle}>{project.description}</p>
      <ul style={techListStyle}>
        {project.technologies.map((tech, index) => (
          <li key={index} style={techItemStyle}>
            {tech}
          </li>
        ))}
      </ul>
      <a href={project.gitLink} style={linkStyle}>
        GitHub
      </a>
      <a href={project.liveLink} style={linkStyle}>
        Live Demo
      </a>
    </div>
  ));

  return <div className="list-group">{ProjectsList}</div>;
}

export default Projects;