import React from 'react';
import './works.css'
// import Portfolio1 from '../../assets/portfolio-1.png';
// import Portfolio2 from '../../assets/portfolio-2.png';
// import Portfolio3 from '../../assets/portfolio-3.png';
// import Portfolio4 from '../../assets/portfolio-4.png';
// import Portfolio5 from '../../assets/portfolio-5.png';
// import Portfolio6 from '../../assets/portfolio-6.png';

export const Works = () => {
  return (
      <section id='works'>
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc">Exciting Projects Coming Soon! </span>
        <br/>
        <span className="worksDesc">
          I'm currently hard at work building and refining a collection of projects to showcase 
          right here on my portfolio website. Stay tuned as I'll be adding them very soon! 
          From web applications to mobile apps, I'm eager to share my latest creations with you. 
          In the meantime, feel free to explore the rest of my portfolio and learn more about my 
          skills and background.</span> 
          <br/>
          <span className="worksDesc">Thank you for your patience, and I can't wait to unveil what's in store!</span> 
        {/* <div className="worksImgs">
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio2} alt="" className="worksImg" />
          <img src={Portfolio3} alt="" className="worksImg" />
          <img src={Portfolio4} alt="" className="worksImg" />
          <img src={Portfolio5} alt="" className="worksImg" />
          <img src={Portfolio6} alt="" className="worksImg" />
    
        </div>
        <button className="worksBtn">See more</button> */}
      </section>     
  )
}

export default Works;