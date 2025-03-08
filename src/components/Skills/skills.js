import React, { useEffect, useState} from 'react';
import './skills.css';
import DYP from '../../assets/dyp.png';
import Jaihind from '../../assets/Jaihind.png';
import PCCOER from '../../assets/PCCOER.png';
import SSLP from '../../assets/synnex.png';
import ITC from '../../assets/itc.png';
import Capgemini from '../../assets/capgemini.png';

export const Skills = () => {
  // eslint-disable-next-line
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottomOfTimeline = document.getElementById('skills').getBoundingClientRect().bottom;
      const bottomOfWindow = window.innerHeight;
      const topOfTimeline = document.getElementById('skills').getBoundingClientRect().top;
      
      if (bottomOfTimeline < bottomOfWindow && topOfTimeline >= 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
    }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  
  return (
    <section id = 'skills'>
                                <h1 className='h1'>Education</h1>
    <div className="timeline">
        <div className="container left-container">
      <img src= {PCCOER} alt ="" className='pccoer'/>
        <div className="text-box">
            <h2><b>Bachelor of Engineering</b></h2>
          <h5><i>@Pimpri Chinchwad College Of Engineering & Research, Pune</i></h5>
          <small>2019-2023</small>
          <h6>Bachelor's Degree in Electronic & Telecommunications Engineering(E&TC)</h6>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="container right-container">
      <img src= {Jaihind} alt ="" className='jaihind'/>
        <div className="text-box">
          <h2><b>Senior Secondary</b></h2>
          <h5><i>@Jaihind High School & Junior College, Pune</i></h5>
          <small>2017-2019</small>
          <h6>Senior Secondary in Science Stream</h6>
          <span className="right-container-arrow"></span>
        </div>
      </div>
    
      <div className="container left-container">
      <img src= {DYP} alt ="" className='dyp'/>
        <div className="text-box">
            <h2><b>Secondary</b></h2>
          <h5><i>@DR. D.Y. Patil Public School, Pune</i></h5>
          <small>2008-2017</small>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      
    </div>

                                <h1 className='h1'>Experience</h1>

    
    <div className="timeline">

    <div className="container right-container">
      <img src= {Capgemini} alt ="" className='capgemini'/>
        <div className="text-box">
          <h2>Software Engineer</h2>
          <h5><i>@Capgemini, Pune</i></h5>
          <small>Jun 2024- Present</small>
            <ul>
              <h6>
                <li>Designed and implemented 20+ RESTful APIs for core functionalities including product management, order
                processing, and customer data handling.</li>
                <li>Designed and developed a web application using ASP.NET MVC, adhering to best practices to enhance system
                reliability and user experience.</li>
                <li>Integrated secure authentication and robust error handling, ensuring application security and achieving 99% unit
                test coverage with NUnit.</li>
                </h6>
            </ul>
          <span className="right-container-arrow"></span>
        </div>
      </div>

      <div className="container left-container">
      <img src= {ITC} alt ="" className='itc'/>
        <div className="text-box">
          <h2><b>Associate IT Consultant</b></h2>
          <h5><i>@ITC InfoTech, Banglore</i></h5>
          <small>Nov 2023- Apr 2024</small>
          <ul>
            <h6>
                <li>Developed efficient RESTful APIs using Java Spring Boot, enhancing financial operations and improving customer
                experience.</li>
                <li>Successfully integrated APIs with multiple databases and third-party services, resulting in a 30% increase in data
                retrieval efficiency.</li>
                <li>Improved API performance by 40% through optimization and caching techniques.</li>
                </h6>
            </ul>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="container right-container">
      <img src= {SSLP} alt ="" className='synnex'/>
        <div className="text-box">
          <h2>Web Developer Intern</h2>
          <h5><i>@Synnex Softech, Pune</i></h5>
          <small>Dec 2021- Feb 2022</small>
            <ul>
              <h6>
                <li>Designed and implemented responsive user interfaces with React.Js, HTML, CSS, achieving a productivity rate of
                95%.</li>
                <li>Addressed user needs for spatial data visualization and analysis by introducing the map feature within the interface,
                resulting in a 20% increase in user engagement.</li> 
                <li>Collaborated effectively with a team of web developers, enhancing communication skills</li>
                </h6>
            </ul>
          <span className="right-container-arrow"></span>
        </div>
      </div>

    </div>
    </section>
  );
}


export default Skills;