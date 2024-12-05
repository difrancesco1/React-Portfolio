import React from 'react'
import Terminal from '../../images/terminal.png'
import '../../App.css';

const Contact = () => {
  return (
    <div className='contact-holder'>
      <img className='contact-img' src={Terminal} />
      <div className='contact-container'>
        <h3 className='head-text'>Let's talk</h3>
        <p className='p-text-contact'>Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.</p>
        <form className='contact-form'>

          <label className='contact-full-name'>
            <span className='field-label'>Full Name</span>
            <input className='field-input' type='text' name='name' required='' placeholder='John Doe' value={""}></input>
          </label>

          <label className='contact-email'>
            <span className='field-label'>Email address</span>
            <input className='field-input' type='email' name='email' required='' placeholder='ex., johndoe@gmail.com' value={""}></input>
          </label>

          <label className='contact-message'>
            <span className='field-label'>Your message</span>
            <input className='field-input' name='message' rows="5" required='' placeholder='Share your thoughts or inquiries...'></input>
          </label>

          <button className='contact-button'>
            Send Message
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contact