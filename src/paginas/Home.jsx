import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
      <>
        <div className='body'>
            <h1>Bienvenido</h1>
                <p className='pHome'>Este es el portafolio de un Desarrollador Web</p>
                <nav>
                <ul>
                    <li><Link to="/projects">Proyectos</Link></li>
                    <li><Link to="/resume">Currículum</Link></li>
                </ul>
                </nav>
        </div>
      </>
    );
  }
  
  export default Home;
  