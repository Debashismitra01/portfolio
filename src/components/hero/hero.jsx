import React from "react";
import './hero.css';
import profileImage from '../../assets/profile.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return (
        <div className="hero" id="home">
            <div className="herotext">
            <h1>Hi,there </h1>
            <h2> I'M <span>DEBASHIS MITRA</span></h2>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink 
                        offset={50}
                        className="AnchorLink"
                        href="#contact" 
                    >Connect with me</AnchorLink></div>
                <a className="hero-resume" href="https://drive.google.com/uc?export=download&id=1GrCA4ClFWKOFdbYOKs32qwQmuOvnONIi" download="DebashisMitraResume">My Resume</a>
            </div>
            </div>
            <div className="profile">
                <div className="outerborder">
                <img src={profileImage}  alt="profile" className="hero-image" />
                </div>
            </div>  
        </div>
    )
}

export default Hero;
