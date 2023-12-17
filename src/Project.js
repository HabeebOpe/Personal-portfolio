import React from 'react';
import whacamole from "./asset/proj/whacamole.jpg";
import fizzleapp from "./asset/proj/fizzleapp.jpg"
import emojistarrating from "./asset/proj/emojistarrating.jpg"
import starquest from "./asset/proj/starquest.jpg"

const Project = (props) => {
  return (
    <div>
      <section class="project-section" id="project">
        <h2>Recent Projects</h2>
        <div class="projects">
          <ul class="pad-proj">
            <li>
              <img src={whacamole} />
              <p><span>Whac a mole:</span> A Game with Javascript in which you try to catch the mole as it jumbs around the boxes before the given time elapses.</p>
              <div class="links">
                <span>
                  <a href="https://whac-a-mole-beeb.netlify.app/">Live preview</a>
                </span>
                <span>
                  <a href="https://github.com/HabeebOpe/Whac-A-mole-game">Source code</a>
                </span>
              </div>
            </li>
            <li>
              <img src={fizzleapp} />
              <p><span>Fizz App:</span> A social media landing page design with great features, coded and designed with my special frontend skill and my design instinct.</p>
              <div class="links">
                <span>
                  <a href="https://fizzle.netlify.app/">Live preview</a>
                </span>
                <span>
                  <a href="https://github.com/HabeebOpe/Fizzle">Source code</a>
                </span>
              </div>
            </li>
            <li>
              <img src={emojistarrating} />
              <p><span>Emoji-star rating:</span> A mini project coded and designed by me using just HTML and CSS. It help pick a review or your interest on something</p>
              <div class="links">
                <span>
                  <a href="https://emoji-star-rating-beeb.netlify.app/">Live preview</a>
                </span>
                <span>
                  <a href="https://github.com/HabeebOpe/emoji-star-rating-widget-">Source code</a>
                </span>
              </div>
            </li>
            <li>
              <img src={starquest} />
              <p><span>StarQuest:</span> A simple space landing page, coded and designed by me. Inspired by Space X and NASA for ideas and inspiration.</p>
              <div class="links">
                <span>
                  <a href="https://star-quest-exploration-beeb.netlify.app/">Live preview</a>
                </span>
                <span>
                  <a href="https://github.com/HabeebOpe/Space-Quest-explorer-">Source code</a>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div class="projects-portfolio">
        <div class="great">
          <h1>Check out my <span>Project Base</span> for more of my <span>amazing crafts...</span></h1>
          <a href="https://zodaic-project-base.netlify.app/">
            <button>
              Project Portfolio <i class="fa-brands fa-telegram"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project;