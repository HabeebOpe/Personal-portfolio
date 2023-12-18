import React from 'react';
import Home from "./Home.js"
import About from "./About.js"
import Project from "./Project.js"
import Advantage from "./Advantage.js"
import Contact from "./Contact.js"

const Section = () => {
  return (
    <div>
      <Home />
      <div class="section-padding">
        <About />
        <Project />
        <Advantage />
        <div class="great">
          <h1>Client's get <span>always exceptional</span> works from me...</h1>
        </div>
        <Contact />
      </div>
    </div>
  )
}

export default Section;