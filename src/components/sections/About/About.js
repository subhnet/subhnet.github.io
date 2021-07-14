import React from 'react'
import PropTypes from 'prop-types'
import SkillCard from './card/SkillCard'

const About = props => {
    return (
        <div className="row">
            <div className="col-md-9">
                <h4 className="widget-title">Learn About Me</h4>
                I am a <b>full stack developer</b> with over <b>six years of experience</b>
                <ul>
                    <li>Extensive hands-on experience and expertise in design, development and implementation of enterprise products
                        using <b>Java/J2EE Technologies, Angular,ReactJS, Golang, Spring, SpringMVC, Spring-Boot, Restful WebServices, Hibernate</b>,
                    JPA.</li>
                    <li><b>Front-end: </b><span className="blue">React (with Hooks)</span>, <span className="blue">Angular 4</span>,Jquery,JavaScript, Typescript</li>
                    <li><b>Back-end: </b><span className="blue">Java/J2EE</span> Technologies,<span className="blue">Spring</span>, SpringBoot, NodeJS, ExpressJS , GraphQL</li>
                    <li>Experience working with Containerization Technologies like <b>Docker</b>, <b>Docker Compose</b></li>
                    <li>Knowlegde in cloud based technologies: <span className="blue">AWS</span> and <span className="blue">GCP</span></li>
                    <li>Having Sound knowledge in OOPs ,Data Structures, and design patterns.</li>
                    <li>Good Analytics skills and quick Learner.</li>
                    <li>Knowlegde in <span className="blue"><a href="https://golang.org/">Go Programming
                            Language</a></span></li>
                    <li>Have extensively used a large number of software engineering tools, including
                    Maven,
                    Ant, TFS,git and svn.</li>
                    <li>I'm eager to use new technologies for the development of applications.
                </li>

                    <li>
                        My current toolset includes ReactJS,J2EE, SpringBoot, Restful WebServices, Angular, NodeJS TypeScript and all the
                        other various frameworks, libraries and technologies related to them.
                </li>
                </ul>
            </div>
            <div className="col-md-3">
                <SkillCard />
            </div>
        </div>
    )
}

About.propTypes = {

}

export default About
