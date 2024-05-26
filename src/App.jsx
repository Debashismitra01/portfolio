import React from 'react';
import './App.css';
import AboutMe from './components/about/about';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Contact from './components/contact/contact';
import Projects from './components/project/project';
import Skills from './components/skill/skill';


function App(){
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <AboutMe />
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  );
};

export default App;
