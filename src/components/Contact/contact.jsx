import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./contact.css";


function ContactForm() {
  const [state, handleSubmit] = useForm("mjkrypyr");
  if (state.succeeded) {
      return <p>Thanks for contacting would get back to you as soon as possible</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Your Email"
      />
      <input type="Name"
      id='name'
      name="name"
      placeholder="Your Name"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
