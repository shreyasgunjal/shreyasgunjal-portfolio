import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'


const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Shreyas</span>< br />Software Developer </span>
          <p className="introPara">I am a skilled software developer with experience in creating <br />visually appealing and user friendly websites.</p>

            <button className="btn">
              <a href="https://drive.google.com/file/d/1I7KdXj8XGbr8NiQRlMT-zI-sgI2YA-lG/view?usp=sharing" target="_blank" rel="noopener noreferrer">  
                <img src={btnImg} alt="Resume" className="btnImg"/>Resume
              </a>
                
            </button>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;