import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import './Contact.css';

import ClientComponent from "../Client/Client";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isTrue, setIsTrue] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendMessage = () => {
    if (name !== '' && email !== '' && subject !== '' && message !== '') {
      setErrorMessage('Send Message');
      setIsTrue(false);
    } else if (name === '' || email === '' || subject === '' || message === '') {
      setErrorMessage('Name, Email, Subject, or Message is invalid');
      setIsTrue(true);
    } else {
      setErrorMessage('Message is invalid');
      setIsTrue(true);
    }
  };
  return (
    <div className="contact-container container-fluid text-dark"><br />
      <h1 style={{ color: '#1bbd64' }}>Get in Contact with us</h1>
      <div style={{ display: 'flex', backgroundColor: "#fff"}} className='bg-container-form'>
        <div className="button-container p-3 shadow-
        sm rounded " style={{ width: '600px', height: '480px', backgroundColor: 'lightgrey', transition: 'background-color 0.3s ease, box-shadow 0.3s ease', marginLeft: '60px', marginTop: '20px' }}>
          <div className="mb-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="yourName"
                placeholder="Your Name"
                onChange={(e) => {
                  setName(e.target.value);
                  setIsTrue(false);
                  setErrorMessage('');
                }}
                value={name}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="yourEmail"
                placeholder="Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsTrue(false);
                  setErrorMessage('');
                }}
                value={email}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                onChange={(e) => {
                  setSubject(e.target.value);
                  setIsTrue(false);
                  setErrorMessage('');
                }}
                value={subject}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="form-group">
              <label htmlFor="message" style={{ color: '#1bbd64' }}>Message</label>
              <textarea
                rows="5"
                className="form-control"
                id="message"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
          </div>
          <button
            className={isTrue ? 'btn btn-danger' : 'btn btn-success button'}
            onClick={sendMessage}
          >
            Send Message
          </button>
          <p className="mt-3">{errorMessage}</p>
        </div>

      </div>
      <div className="d-flex flex-row mb-3 justify-content-center">
        <div className="address-card">
          <span className='span'>
          <IoLocationOutline className='icon' />
          </span>          
          <h5 className=" location">Location:</h5>
          <p className="address-text">Kadapa, Nellore, Guntur, Vijayawada,
           <br></br>Bhadurapalli, Hyderabad,Tadipatri,
            Anantapuram, Pulivendula</p>
        </div>
        <div className="address-card">
          <span className='span'>
          <GoMail className='icon' />
          </span>
         
          <h5 className="">Email:</h5>
          <p className="address-text">info@gmail.com <br/> contact@example.com</p>
        </div>
        <div className="address-card">
          <span className='span'><BsPhone className='icon'/></span>
          
          <h5 className="">Cell:</h5>
          <p className="address-text">+1 08338459440  <br/> +1 49499900030</p>
        </div>
      </div>

      <h1 style={{ color: '#1bbd64' }}>Our Address</h1>
      <div className="map-container">
        <iframe
        title='localtion'
          className="localtion-container"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3854.8120026561137!2d77.98176897511296!3d14.947563685580896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDU2JzUxLjIiTiA3N8KwNTknMDMuNiJF!5e0!3m2!1sen!2sin!4v1699752988003!5m2!1sen!2sin"
          width={1150}
          height={400}
          style={{ border: 1 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <ClientComponent />
    </div>
  );
};

export default Contact;



