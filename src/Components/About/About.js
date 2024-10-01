import React from 'react';
import './About.css';
import UIDesign from './../../assets/ui-design.png';
import WebDesign from './../../assets/website-design.png';
import AppDesign from './../../assets/app-design.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skilldesc'>I am a skilled and creative frontend web developer with a passion for crafting engaging and user-friendly web interfaces. My expertise lies in transforming design concepts into responsive and visually appealing websites and web applications. With a strong foundation in HTML, CSS, and JavaScript, I excel at implementing responsive design, optimizing performance, and ensuring cross-browser compatibility.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign'className='skillBarImg' />
            <div className='skillBarText'>
              <h2>UI/UX Design</h2>
              <p>Here</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign'className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Website Design</h2>
              <p>WebDesign</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign'className='skillBarImg' />
            <div className='skillBarText'>
              <h2>App Design</h2>
              <p>AppDesign</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills