import React from "react";
import './about.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    return (
        <div className="about" id="about"> 
            <div className="about_title">
                <h1>About Me Me</h1>
                <img src={theme_pattern} alt="theme_pattern" />
            </div>
            <div className="aboutsection">
                <div className="about-img">.</div>
                <div className="about-text">
                    <h2><span>I am Debashis Mitra, a fullstack developer and web designer</span> </h2>
            <p>I was introduced to HTML at 4th standard and then the love for web development kept thriving.
            <p>I am fluent in <span >C++, JavaScript, Java </span>.</p> 
            <p>My fields of interest are building experiences with <span >Web Technology</span> and also in areas related to <span >Cloud Computing</span>.</p>    
            <p>I am in a continuous learning curve of <span >Python</span>.</p>   
            <p>I specialize in both frontend and backend development, with expertise in 
                <span > React.js</span>, 
                <span > Next.js</span>, 
                and <span > Spring</span>. 
                This allows me to create robust, scalable web applications that meet diverse project needs. 
                By leveraging Node.js and modern JavaScript libraries alongside Spring, 
                I ensure high-performance solutions across the full stack.</p>    
            </p>
            <div className='Links'>
            <a className='Icon' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{border:'none'}}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a className='Icon' href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={{border:'none'}} >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a className='Icon' href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={{border:'none'}}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
        </div>
            </div>
        </div>
        </div>
    )
};

export default AboutMe;