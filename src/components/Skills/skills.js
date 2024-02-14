import React from 'react';
import './skills.css';
import DYP from '../../assets/dyp.png';
import Jaihind from '../../assets/Jaihind.png';
import PCCOER from '../../assets/PCCOER.png';
import SSLP from '../../assets/synnex.png';
import ITC from '../../assets/itc.png';

export const Skills = () => {
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
          <h6>I've Completed my Bachelor's Degree in Electronic & Telecommunications Engineering(E&TC)</h6>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="container right-container">
      <img src= {Jaihind} alt ="" className='jaihind'/>
        <div className="text-box">
            <h2><b>Senior Secondary</b></h2>
          <h5><i>@Jaihind High School & Junior College, Pune</i></h5>
          <small>2017-2019</small>
          <h6>I've completed my Senior Secondary in Science Stream</h6>
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
      <div className="container left-container">
      <img src= {ITC} alt ="" className='itc'/>
        <div className="text-box">
            <h2><b>Associate IT Consultant</b></h2>
          <h5><i>@ITC InfoTech, Banglore</i></h5>
          <small>2023-Current</small>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="container right-container">
      <img src= {SSLP} alt ="" className='synnex'/>
        <div className="text-box">
            <h2>Web Developer Intern</h2>
          <h5><i>@Synnex Softech, Pune</i></h5>
          <small>2021-2022(2months)</small>
            <ul><h6>
                <li>Designed and implemented responsive user interfaces with React.Js, HTML, CSS. </li>
                <li>Addressed user needs for spatial data visualization and analysis by introducing the map feature within the interface.</li> 
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