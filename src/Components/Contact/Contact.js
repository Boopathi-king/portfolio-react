import React, { useRef } from 'react';
import './Contact.css';
import FacebookIcon from './../../assets/facebook-icon.png';
import InstagramIcon from './../../assets/instagram.png';
import TwitterIcon from './../../assets/twitter.png';
import LinkedinIcon from './../../assets/Linkedin.png';
import emailjs from '@emailjs/browser';




const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_z8gszll', 'template_90iiwwp', form.current, {
            publicKey: 'CsYT9hdbpWBOqcxSh',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id='contactpage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>
                Contact Me
            </h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work Oppurtinities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your name' name='your_name' />
                <input type='email' className='email' placeholder='Your email' name='your_email' />
                <textarea className='message' name='message' rows={5} placeholder='Your Message' />
                <button type='submit' value="Send" className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='facebook' className='link' />
                    <img src= {InstagramIcon} alt='Instagram' className='link' />
                    <img src={TwitterIcon} alt='Twitter' className='link' />
                    <img src={LinkedinIcon} alt='LinkedIn' className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact