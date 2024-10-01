import React from 'react';
import './Portfolio.css';
import Portfolio1 from './../../assets/portfolio-1.png';
import Portfolio2 from './../../assets/portfolio-2.png';
import Portfolio3 from './../../assets/portfolio-3.png';
import Portfolio4 from './../../assets/portfolio-4.png';
import Portfolio5 from './../../assets/portfolio-5.png';
import Portfolio6 from './../../assets/portfolio-6.png';


const Portfolio = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'> My Portfolio</h2>
        <span className='worksDesc'>As a front-end developer, I create responsive, user-friendly web applications using HTML5, CSS3, JavaScript, and React. My projects focus on clean code, cross-browser compatibility, accessibility, and performance optimization. I integrate APIs and use design tools like Figma, ensuring seamless functionality and visually appealing, user-centric experiences.</span>
        <div className='workImgs'>
            <img src={Portfolio1} alt='' className='worksImg' />
            <img src={Portfolio2} alt='' className='worksImg' />
            <img src={Portfolio3} alt='' className='worksImg' />
            <img src={Portfolio4} alt='' className='worksImg' />
            <img src={Portfolio5} alt='' className='worksImg' />
            <img src={Portfolio6} alt='' className='worksImg' />
        </div>

        <button className='workBtn'>See more</button>
    </section>
  )
}

export default Portfolio