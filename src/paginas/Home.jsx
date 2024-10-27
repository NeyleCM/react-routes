import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
      <>
        <h1>Bienvenido</h1>
        <p>Este es el portafolio de un Desarrollador Web</p>
        <nav>
          <ul>
            <li><Link to="/projects">Proyectos</Link></li>
            <li><Link to="/resume">Currículum</Link></li>
          </ul>
        </nav>
      </>
    );
  }
  
  export default Home;
  