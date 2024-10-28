import projects from '../data/projects';

function Projects() {
    return (
      <>
        <div className='body'>
            <h1>Proyectos</h1>
            <ul className='bodyProjects'>
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
        </div>
      </>
    );
  }
  
  export default Projects;