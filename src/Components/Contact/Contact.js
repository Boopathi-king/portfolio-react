import React from 'react';
import './Contact.css';
import FacebookIcon from './../../assets/facebook-icon.png';
import InstagramIcon from './../../assets/instagram.png';
import TwitterIcon from './../../assets/twitter.png';
import LinkedinIcon from './../../assets/Linkedin.png';




const Contact = () => {
  return (
    <section id='contactpage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>
                Contact Me
            </h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work Oppurtinities</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your name' />
                <input type='email' className='email' placeholder='Your email' />
                <textarea className='message' rows={5} placeholder='Your Message' />
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