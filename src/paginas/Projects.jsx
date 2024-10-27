import React from 'react';
import projects from '../data/projects';

function Projects() {
    return (
      <>
        <h1>Proyectos</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h2>{project.name}</h2>
              <img src={project.image} alt={`${project.name} image`} />
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Ver Proyecto
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }
  
  export default Projects;