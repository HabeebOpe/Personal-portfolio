import React from 'react';
import corel from "./asset/advan/coreldraw.png";
import figma from "./asset/advan/figma.png";
import inkscape from "./asset/advan/inscape.png";
import HTML from "./asset/advan/html.png";
import CSS from "./asset/advan/css.png";
import bootstrap from "./asset/advan/bootstrap.png";
import tailwind from "./asset/advan/tailwind.png";
import js from "./asset/advan/js.png";
import react from "./asset/advan/react.png";
import php from "./asset/advan/php.png";
import firebase from "./asset/advan/firebase.png";
import jquery from "./asset/advan/jquery.png";
import github from "./asset/advan/github.png";
import git from "./asset/advan/git.png";
import netlify from "./asset/advan/netlify.png";
import canva from "./asset/advan/canva.png";
import dribble from "./asset/advan/dribble.png";

const Advantage = (props) => {
  return (
    <section class="skill-section" id="skill">
        <h2>My Advantage</h2>
        <div class="skill-sec">
          <ul>
            <li>
              <div>
                <img src={corel} />
              </div>
              <p>Corel Draw</p>
            </li>
            <li>
              <div>
                <img src={figma} />
              </div>
              <p>Figma</p>
            </li>
            <li>
              <div>
                <img src={inkscape} />
              </div>
              <p>Inkscape</p>
            </li>
            <li>
              <div>
                <img src={HTML} />
              </div>
              <p>HTML</p>
            </li>
            <li>
              <div>
                <img src={CSS} />
              </div>
              <p>CSS</p>
            </li>
            <li>
              <div>
                <img src={bootstrap} />
              </div>
              <p>Bootstrap</p>
            </li>
            <li>
              <div>
                <img src={tailwind} />
              </div>
              <p>Tailwind CSS</p>
            </li>
            <li>
              <div>
                <img src={js} />
              </div>
              <p>Javascript</p>
            </li>
            <li>
              <div>
                <img src={react} />
              </div>
              <p>React Js</p>
            </li>
            <li>
              <div>
                <img src={php} />
              </div>
              <p>PHP</p>
            </li>
            <li>
              <div>
                <img src={firebase} />
              </div>
              <p>Firebase</p>
            </li>
            <li>
              <div>
                <img src={jquery} />
              </div>
              <p>jQuery</p>
            </li>
            <li>
              <div>
                <img src={github} />
              </div>
              <p>GitHub</p>
            </li>
            <li>
              <div>
                <img src={git} />
              </div>
              <p>Git</p>
            </li>
            <li>
              <div>
                <img src={netlify} />
              </div>
              <p>Netlify</p>
            </li>
            <li>
              <div>
                <img src={canva} />
              </div>
              <p>Canva</p>
            </li>
            <li>
              <div>
                <img src={dribble} />
              </div>
              <p>Dribble</p>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Advantage;