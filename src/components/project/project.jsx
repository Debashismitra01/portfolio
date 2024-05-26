import React from "react";
import './project.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Projects = () => {
    return (
        <div className="project">
            <div className="project_title" id="project">
                <h1>My Latest Projects</h1>
                <img src={theme_pattern} alt="theme pattern" />
            </div>
            <div className="project-container">
                { mywork_data.map((work, index) => {
                    return (
                        <img key={index} src={work.w_img} alt={`project ${index}`} />
                    );
                })}
            </div>
            <div className="showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="arrow icon" />
            </div>
        </div>
    );
};

export default Projects;
