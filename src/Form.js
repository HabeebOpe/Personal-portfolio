import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from "react-router-dom";

const Form = () => {
  const [state, handleSubmit] = useForm("xnqeaqwj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  function handleResize(e) {
    const textarea = document.querySelector("textarea")
    textarea.style.height = "auto";
    let height = e.target.scrollHeight;
    textarea.style.height = ` ${height}px `;
  }
  return (
    <section  className="form-section">
    <Link to="/"><div className="back-home">
      <span><i className="fa fa-arrow-left"></i> back</span>
    </div></Link>
      <form onSubmit={handleSubmit}>
      <p>Gmail to be submitted is for reply purpose.</p>
      <div className="project-input-div">
      <input
        id="subject"
        type="subject" 
        name="Subject"
        placeholder="Subject"
      />
      <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
      />
      <input
        id="name"
        type="name" 
        name="name"
        placeholder="Name"
        required
        
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        onKeyUp={handleResize}
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
  </section>
  );
}

export default Form;



// import React from 'react';

// const Form = () => {
//   return (
//     <section>
//     <form action="https://formspree.io/f/xnqeaqwj" method="POST">
//       <div class="project-input-div">
//         <input class="project-name" name="Subject" type="text" placeholder="Subject">
//         <input class="project-github" name="Name" type="text" placeholder="Name" required>
//         <input class="project-github" name="Email" type="text" placeholder="Email" required>
//         <textarea name="Mail" placeholder="Type something here..." required></textarea>
//       </div>
//       <button>POST</button>
//     </form>
//   </section>
//   )
// }

                                                                                                                               