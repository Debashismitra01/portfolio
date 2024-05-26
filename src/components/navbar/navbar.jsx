import React,{useState} from "react";
import './navbar.css';
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
    const [selected, setSelected] = useState('home');

    const handleSetActive = (value) => {
        setSelected(value);
    };

    return (
        <div className="navbar">
                <img src={logo} alt="logo" />
                <ul className="navbar-menu">
                <li className="nav-item">
                    <AnchorLink 
                        href="#home" 
                        className={`nav-link ${selected === 'home' ? 'selected' : ''}`} 
                        onClick={() => handleSetActive('home')}
                    >
                        Home
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        href="#about" 
                        className={`nav-link ${selected === 'about' ? 'selected' : ''}`} 
                        onClick={() => handleSetActive('about')}
                    >
                        About
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        href="#skill" 
                        className={`nav-link ${selected === 'skill' ? 'selected' : ''}`} 
                        onClick={() => handleSetActive('skill')}
                    >
                        Skill
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        href="#project" 
                        className={`nav-link ${selected === 'project' ? 'selected' : ''}`} 
                        onClick={() => handleSetActive('project')}
                    >
                        Project
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        href="#contact" 
                        className={`nav-link ${selected === 'contact' ? 'selected' : ''}`} 
                        onClick={() => handleSetActive('contact')}
                    >
                        Contact
                    </AnchorLink>
                </li>
                </ul>

        </div>
    );
};

export default Navbar;