import React from 'react';

const Contact = (props) => {
  return (
    <section id="contact" class="contact-section">
        <div class="connect">
          <div>
            <h2>Work Enquiry</h2>
            <p>Let's work together, and I will help you by all my best.</p>
          </div>
          <div>
            <button>Let's chat!</button>
          </div>
        </div>
        <div class="connect2">
          <h4>Stay connected</h4>
          <h3>Hello@habeebullah</h3>
          <p>Lagos, Nigeria</p>
          <h5><a href="tel:+2349158573159">(+234)91-5857-3159</a></h5>
        </div>
        <div class="foot-social">
          <span>
            <a href="https://x.com/habeebullaope?t=PGQ_2Q5bqIwQXf3L-tudwg&s=09"><i class="fa-brands fa-x-twitter"></i></a>
          </span>
          <span>
            <a href="https://discordapp.com/users/habeebullah"><i class="fa-brands fa-discord"></i></a>
          </span>
          <span>
            <a href="https://github.com/HabeebOpe"><i class="fa-brands fa-github"></i></a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/habeebullah-okunlola-192043246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin"></i></a>
          </span>
        </div>
      </section>
  )
}

export default Contact;