import React from 'react';
import './Intro.css'
import {Link} from 'react-scroll';
import bg from './../../assets/my image.png';
import btnImg from './../../assets/hireme.png';


const Intro = () => {

  
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='Hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Boopathi</span> <br /> Website developer </span>
            <p className='introPara'>I'm a frontend developer with a passion for creating visually stunning <br/> and user-friendly websites.</p>
            <Link  to='contact' spy={true} smooth={true} offset={-30} duration={500} > <button className='btn' onClick={() => {
            document.getElementById('contact').scrollIntoView( {behavior: 'smooth'});
            }}><img src={btnImg} alt='' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'></img>
    </section>
  )
}

export default Intro