import React, { useRef } from 'react';
import './contact.css';
import LinkedInIcon from '../../assets/linkedin.png';
import TwitterIcon from '../../assets/twitter.png';
import GitHubIcon from '../../assets/github.png';
import GFGIcon from '../../assets/gfg.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_wpw1f4t', 'template_8do7hui', form.current, 'bxMX-SPClSsljd2DE')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Sent!!');
        },(error) => {
              console.log(error.text);
        });
    };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="conatctDesc">Please fill out the form below to discuss any work opportunities</span>
                <form  className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name' required />
                    <input type="email" className="email" placeholder='Your Email' name='your_email' required />
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message' required ></textarea>
                    <button type='submit' value='Send' className="submitBtn">
                        Submit
                    </button>        
                    <div className="links">
                        <a href="https://www.linkedin.com/in/shreyas-gunjal" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="linkedin" />
                        </a>
                        <a href = "https://twitter.com/shree__12_" target="_blank" rel="noopener noreferrer">
                            <img src={TwitterIcon} alt="Twitter" className="link" />
                        </a>
                        <a href="https://github.com/shreyasgunjal" target="_blank" rel="noopener noreferrer">
                            <img src={GitHubIcon} alt="GitHub" className="git" />
                        </a>
                        <a href = "https://auth.geeksforgeeks.org/user/shreyasgunjal12" target="_blank" rel="noopener noreferrer">
                            <img src={GFGIcon} alt="GFG" className="gfg" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;