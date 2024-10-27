import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './paginas/Home';
import Projects from './paginas/Projects';
import Resume from './paginas/Resume';

function App() {
  return (
    <>
     <nav>
        <Link to="/">Home</Link> | <Link to="/projects">Projects</Link> | <Link to="/resume">Resume</Link>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}
  
export default App;