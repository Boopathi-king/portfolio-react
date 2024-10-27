import React from 'react';
import './Portfolio.css';
import Project1 from './../../assets/Project1.png';
import Project2 from './../../assets/Project2.png';


const Portfolio = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'> My Portfolio</h2>
        <span className='worksDesc'>As a front-end developer, I create responsive, user-friendly web applications using HTML5, CSS3, JavaScript, and React. My projects focus on clean code, cross-browser compatibility, accessibility, and performance optimization. I integrate APIs and use design tools like Figma, ensuring seamless functionality and visually appealing, user-centric experiences.</span>
        <div className='workImgs'>
          <img src={Project1} alt='Project 1' className='worksImg' />
                <div className='projectButtons'>
                    <a href='https://github.com/Boopathi-king/Hear-it-Music-app.git' target='_blank' rel='noopener noreferrer' className='projectBtn'>GitHub Repo</a>
                    <a href='https://hear-it-demo.netlify.app/' target='_blank' rel='noopener noreferrer' className='projectBtn'>Live Preview</a>
                </div>
          <img src={Project2} alt='Project 1' className='worksImg' />
                <div className='projectButtons'>
                    <a href='https://github.com/Boopathi-king/Learn-now-project.git' target='_blank' rel='noopener noreferrer' className='projectBtn'>GitHub Repo</a>
                    <a href='https://learn-now-project.netlify.app/' target='_blank' rel='noopener noreferrer' className='projectBtn'>Live Preview</a>
                </div>
        </div>

        <button className='workBtn'>See more</button>
    </section>
  )
}

export default Portfolio