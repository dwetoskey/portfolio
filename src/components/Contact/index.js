import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.css';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
  <div>
    <div className='form-row align-middle'>
      <h1 data-testid="h1tag" className='text-light'>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className='form-group col-md-2'>
          <label htmlFor="name" className='text-light'>Name:</label>
          <input type="text" name="name" className='form-control' defaultValue={name} onBlur={handleChange} />
        </div>
        <div className='form-group col-md-2'>
          <label htmlFor="email" className='text-light'>Email address:</label>
          <input type="email" className='form-control' name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className='form-group col-md-2'>
          <label htmlFor="message" className='text-light'>Message:</label>
          <textarea name="message" className='form-control' rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" class="btn btn-outline-light">Submit</button>
      </form>

      <h1 className='text-light'>My Contact info</h1>
      <p className='text-light'>Email: <a href="mailto:dwetoskey224@gmail.com" className='text-light'> dwetoskey224@gmail.com</a> | Phone: 517-303-9326 </p>
      
    </div>
  </div>
  );
}

export default ContactForm;