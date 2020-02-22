import React from 'react'
import PropTypes from 'prop-types'
import ProjectSection from './ProjectSection'

export const TechStack = ({ techstack }) => {
    if (techstack === null || techstack === undefined) {
        techstack = [];
    }
    return (
        <div className="project-technologies">
            <div className="technologies-title">Technologies</div>
            <ul className="tech-tags">
                {
                    techstack.map((tech, index) =>
                        <li key={index}><a href={tech.URL} rel="nofollow" target="_blank">{tech.name}</a></li>
                    )
                }
            </ul>
        </div>
    );
}

const Experience = props => {
    return (
        <div className="timeline portfolio-timeline">
            <ul>
                {props.children}
            </ul>
        </div>
    )
}


export const ExperienceItem = props => {

    let projImage;
    if (props.projectImage) {
        projImage = <div className="project-image">

            <a href="/portfolio/festblast/">
                <img src={props.projectImage} alt="Bluedart" />
            </a>
        </div>
    }
    return (
        <li className="timeline_element project">
            <div className="timeline_element-date">
                <time className="timeline_element-date-text">{props.timeline}</time>
            </div>

            <div className="timeline_element-contents">
                <div className="project-text">
                    <ProjectSection section="project-link">
                        <div className="company-image">
                            <img src={props.logo} alt="Adobe" height="70" width="70" />
                        </div>
                        <div className="project-title">{props.title}</div>
                        <div className="project-subtitle">{props.designation}</div>
                    </ProjectSection>
                    <ProjectSection section="project-description">
                        {props.children}
                    </ProjectSection>
                    <ProjectSection section="project-technologies">
                        <TechStack techstack={props.techstack} />
                    </ProjectSection>
                </div>
                {projImage}
            </div>
        </li>
    );
}


Experience.propTypes = {

}

export default Experience
