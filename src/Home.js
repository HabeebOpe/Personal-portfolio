import React from 'react';
import logo from "./asset/logo.png"

const Home = () => {
  return (
     <div class="container">
      <div class="blur-home">
        <div class="logo">
          <img src={logo} alt="logo image" />
          <button class="get-resume">Get Resume</button>
        </div>
        <div class="home-text">
          <div class="name-intro">
            <div>
              <h3>Hey, welcome to my portfolio</h3>
              <h1>I'm Habeebullah Okunlola</h1>
            </div>
            <p>A Passionate Web developer & A Designer with a love for crafting elegant and efficient solutions to complex problems. I thrive in the dynamic world of web development and am constantly exploring new technologies to stay at the forefront of the field. Explore more about me below.</p>
          </div>
          <div class="social">
            <ul>
              <a href="https://x.com/habeebullaope?t=PGQ_2Q5bqIwQXf3L-tudwg&s=09"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="https://discordapp.com/users/habeebullah"><i class="fa-brands fa-discord"></i></a>
              <a href="https://github.com/HabeebOpe"><i class="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/habeebullah-okunlola-192043246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin"></i></a>
            </ul>
          </div>
          <ul class="name-intro-dot">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="random-quote">
            <p>Programming is an art of logic-based creativity - Habeebullah Okunlola </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;