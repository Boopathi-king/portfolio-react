import React, { useRef } from 'react';
import './Contact.css';
import FacebookIcon from './../../assets/facebook-icon.png';
import InstagramIcon from './../../assets/instagram.png';
import GithubIcon from './../../assets/github.png';
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

      const handleImageClick = (url) => {
        window.open(url, '_blank');
    }
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
                    <img src={FacebookIcon} alt='facebook' className='link' onClick={() => handleImageClick('https://www.facebook.com/share/oNUnsqt9ZjoUd9tj/?mibextid=LQQJ4d')}/>
                    <img src= {InstagramIcon} alt='Instagram' className='link' onClick={() => handleImageClick('https://www.instagram.com/mr_redox_kido/')}/>
                    <img src={GithubIcon} alt='Github' className='link' onClick={() => handleImageClick('https://github.com/Boopathi-king')}/>
                    <img src={LinkedinIcon} alt='LinkedIn' className='link' onClick={() => handleImageClick('https://www.linkedin.com/in/boopathi-varatharaj-639ab028b/')} />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact