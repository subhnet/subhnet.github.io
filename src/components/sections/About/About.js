import React from 'react'
import PropTypes from 'prop-types'

const About = props => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h4 className="widget-title">Learn About Me</h4>
                I am a <b>full stack developer</b> with over <b>five years of experience</b>
                <ul>
                    <li> I have an extensive hands-on experience and expertise in working with
                    <b>Java/J2EE,
                        Angular,ReactJS, Golang, Spring, SpringMVC, Spring-Boot, Restful WebServices, Hibernate</b>,
                    JPA.</li>
                    <li>Frontend Development using <span className="blue">Angular 4,Jquery,JavaScript</span></li>
                    <li>Worked with Docker, Docker Compose</li>
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
                        My current toolset includes Java,J2EE, Spring, Restful WebServices, Angular, TypeScript and all the
                        other various
                        frameworks, libraries and technologies related to them.
                </li>
                </ul>
            </div>
        </div>
    )
}

About.propTypes = {

}

export default About