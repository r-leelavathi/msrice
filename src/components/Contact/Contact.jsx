import React, { useState } from 'react'
import { Contactdata } from '../../data/Contactdata'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/your-email-here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Form submitted successfully!');
      } else {
        // Handle error, e.g., show an error message
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };
  return (
      <div className='contact__main'>
        <div className="contact__Container">
          <div className="contact__left">
            <div className="contact__left__first">
              {Contactdata.map((info) =>
              (
                <div className='cont__outer__div'>
                  <div className='contact__icon'>
                    <info.image />
                  </div>
                  <div className='contact_details'>
                    <div>{info.title}</div>
                    <div>{info.details}</div>
                  </div>
                </div>
              )
              )}
            </div>
          </div>
          <div className="blur hero-blur-r"></div>
          <div className="blur hero-blur-l"></div>

          <div className="contact__right">
            <h1>CONTACT US</h1>
            <form onSubmit={handleSubmit} className='form__details'>
              <input type="text" placeholder='Enter your name' name="name" value={formData.name} onChange={handleChange} />
              <input type="email" placeholder='Enter your email' name="email" value={formData.email} onChange={handleChange} />
              <textarea name="message" placeholder='Enter your message' value={formData.message} onChange={handleChange} />
              <button
                className='btn'>
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <div className="map-container">
          <iframe
          
          
            title="Google Map Location"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d366.7186801202033!2d76.93394503005868!3d12.125544130638064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1710043333953!5m2!1sen!2sin"
            allowFullScreen
          />
        </div>
      </div>

  )
}

export default Contact

 