import React, { useState } from "react";
import profilePic from './Images/Me.jpeg';

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm Remmy Bett</h1>
      <img alt="My profile pic" src={profilePic} style={{ width: '350px', height: '350px' }} />
      <h2>About Me</h2>
      <p>
        I am a web developer skilled with passion for creating responsive and user-friendly websites.
        With expertise in front-end technologies like HTML, CSS and JavaScript, as well as experience in back-end development.
        I am dedicated to staying current with latest industry trends.
      </p>

      <div>
        <a href="https://github.com/Remmy4873">GitHub</a>
        <a href="https://www.linkedin.com/in/remmy-bett-a25241285/">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <fieldset>
          <legend>Select your interests:</legend>
          <label>
            <input type="checkbox" name="interest" value="coding" />
            Coding
          </label>
          <label>
            <input type="checkbox" name="interest" value="design" />
            Design
          </label>
          <label>
            <input type="checkbox" name="interest" value="gaming" />
            Gaming
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Form was submitted successfully</p>}
    </main>
  );
}

export default App;
