import React from 'react';
import './skills.css';
import tickIcon from './../../assets/checkmark.png';

const skills = () => {

    const skills = [
        { name: "HTML", level: "Experienced" },
        { name: "CSS", level: "Experienced" },
        { name: "Bootstrap", level: "Beginner" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "React V18+", level: "Intermediate" },
        { name: "Firebase", level: "Beginner" },
      ];

  return (
    <section id='skills-page'>
        <div className='myskill'>
            <p className='skillsPageExplore'>Explore my </p>
            <h1 className='skillsTitle'>Skills</h1>
        </div>
        <div>
            <div className='skill-container'>
            <h2>Frontend Development</h2>
            <div className="skills-gridcard">
             {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
            <span className="checkmark"><img src={tickIcon} alt='tickicon'/></span>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
            </div>
        </div>
    </section>
  )
}

export default skills