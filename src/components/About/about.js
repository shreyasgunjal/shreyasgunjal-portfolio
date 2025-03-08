import React from 'react';
import '../../components/About/about.css';


const About = () => {
  return (
    <section id='about'>
      <div className='abtIntro'>
          <span className='h1'>Hi, I'm <span className='h2'>Shreyas Gunjal</span></span> 
          <p className='para0'>I am currently employed as a Software Engineer 
          at Capgemini. Prior to this role, I was working for ITC InfoTech as Software Engineer(Associate IT Consultant) in Backend Development using Java-SpringBoot.
          I completed my engineering degree from SPPU University, where I developed a strong foundation in Engineering and Technical Skills. 
          I am passionate about Web & Software Development , 
          and I am committed to continuous learning and growth in this dynamic field.

          </p>
          <p className='para1'>My fascination with computers began in primary school when 
          I first encountered the command prompt. This early exposure ignited a journey of 
          exploration into HTML and CSS during my senior secondary education. 
          Eager to expand my horizons, I delved into programming, immersing myself in C and 
          absorbing knowledge from books, online platforms, and various teachings.
          </p>

        <p className='para2'>As I advanced to university, my passion for technology deepened. 
          I dedicated myself to mastering computer fundamentals, data structures, and algorithms, 
          laying a solid foundation for my future endeavors. Through hands-on projects and coursework, 
          I gained practical experience and developed skills to tackle real-world challenges. 
          Along the way, I discovered my affinity for web development and design, creating visually 
          appealing and functional websites. Recently completing a comprehensive Java programming course, 
          I've enriched my skill set. 
          With a commitment to continuous learning and a passion for technology's positive impact, 
          I'm excited to contribute to shaping the future of technology.
        </p>
        
        <h3 className='h3'>Skills: 
            <h3 className='h3a'>Languages: C, C#, CSS, HTML, Java, JavaScript</h3>
            <h3 className='h3a'>Technologies & Frameworks: GitHub, Hibernate, JUnit5, Postman API, .NET, NUnit, React.js, Spring-Boot</h3>
            <h3 className='h3a'>Tools: Anaconda, Eclipse, Git, Spyder, SSMS, Visual Studio, VS Code</h3>
            <h3 className='h3a'>Concepts: Agile Methodology, Azure, Computer Network, Cloud Computing, Data Structures, DBMS, Deep Learning,
            MySQL, OOPS</h3>
            <h3 className='h3a'>Operating Systems: MS Windows 10, 11, Windows Server 2019, 2022 and Linux</h3>
        </h3>
      </div>
      
      
    </section>
  )
}

export default About;