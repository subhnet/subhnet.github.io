import React from "react";
import Auxilary from './../Layout/Auxilary';
import Experience from '../components/sections/Experience/Experience';
import Blogs from './../components/sections/Blogs/Blogs';
import Contacts from './../components/sections/Contacts/Contacts';
import { ExperienceItem } from './../components/sections/Experience/Experience';
import PageSection from './../components/sections/PageSection';
import adobeLogo from './../assets/img/adobe.png';
import fidelityLogo from './../assets/img/fid.png';
import wiproLogo from './../assets/img/wipro.png';
import wirpoProjectImage from './../assets/img/bluedart.png'
import About from './../components/sections/About/About';
import { Link, animateScroll as scroll } from "react-scroll";



const HomePage = () => {

    let wiproTechStack = [
        { URL: "https://angular.io/", name: "JavaScript" },
        { URL: "https://angular.io/", name: "JAVA-J2EE" },
        { URL: "https://angular.io/", name: "SPRING MVC" },
        { URL: "https://angular.io/", name: "Hibernate" },
        { URL: "https://angular.io/", name: "JAVA-J2EE" },
        { URL: "https://angular.io/", name: "Web Services (SOAP)" },
        { URL: "https://angular.io/", name: "Rest" },
        { URL: "https://angular.io/", name: "Google Map API" },
        { URL: "https://angular.io/", name: "Liferay Portal Framework" },
        { URL: "https://angular.io/", name: "Javascript" },
        { URL: "https://angular.io/", name: "Oracle" },
        { URL: "https://angular.io/", name: "Tomcat 7" }
    ]

    let adobeTechStack = [
        { URL: "https://angular.io/", name: "Java" },
        { URL: "https://angular.io/", name: "JavaScript" },
        { URL: "https://angular.io/", name: "ReactJS" },
        { URL: "https://angular.io/", name: "NodeJS" },
        { URL: "https://angular.io/", name: "MySQL" },
        { URL: "https://angular.io/", name: "Docker" },
        { URL: "https://angular.io/", name: "NGINX" },
        { URL: "https://angular.io/", name: "Apache Tomcat 7" },
        { URL: "https://angular.io/", name: "SpringBoot" },
    ]

    let fidelityTechStack = [
        { URL: "https://angular.io/", name: "JavaScript" },
        { URL: "https://angular.io/", name: "Angular4+" },
        { URL: "https://angular.io/", name: "JAVA-J2EE" },
        { URL: "https://angular.io/", name: "Spring MVC" },
        { URL: "https://angular.io/", name: "Typescript" },
        { URL: "https://angular.io/", name: "Oracle" },
        { URL: "https://angular.io/", name: "Apache Tomcat 7" },
        { URL: "https://angular.io/", name: "AGgrid Framework" },
        { URL: "https://angular.io/", name: "Restful Services" },
        { URL: "https://angular.io/", name: "JavaScript" },
        { URL: "https://angular.io/", name: "Angular" }
    ]
    return (
        <Auxilary>
            <PageSection id="about"><About /></PageSection>
            <PageSection title="Work Experience" id="experience">
                <Experience>
                    <ExperienceItem
                        title="Adobe System"
                        timeline="Now"
                        designation="Full-Stack Developer"
                        logo={adobeLogo}
                        techstack={adobeTechStack}
                        designation={(<strong>Full Stack Engineer</strong>)}
                    >
                        <div className="project-responsibility">
                            <ul>
                                <span className="project-sub-title black">Marriott Digital Traffic Dashboard</span>
                                <li>Build executive-focused analytical dashboards for Adobe's top digital marketing clients. Used technologies such as AngularJS/ReactJS/PHP/MySQL.</li>
                                <li>Worked closely with costomers and UX teams to build a solution that is meaningful to the costomer.</li>
                                <li>Developed a custom dashboard for Marriott which shows the real-time digital traffic in Map.</li>
                                <li>Integration with Adobe Analytics Reporting API.</li>
                                <li>Created a page showing various chart (line chart,column chart and Map) to show comparision of traffic to the marriot website.</li>
                                <li>Developed a PlunkQueue framework which was useful to show map plunks in a smooth flow.</li>
                                <li>Worked closely with architect and executed the architectural changes that can optimize the performance of the page.</li>
                                <span className="project-sub-title black">Blueprint Automation Framework</span>
                                <li>Designed and developed an Automation Framework which automates the setup of Adobe Analytics,Launch and Target for a Website.</li>
                                <li>Developed both frontend and backend architecture of Microservices using <span className="blue">ExpressJS</span>, <span className="blue">Node.js</span> and <span className="blue">ReactJS</span> Framework.</li>
                                <li>Containeratized the whole application using <span className="blue">Docker</span> and <span className="blue">Docker-compose</span> and deployed in server.</li>
                                <li>The Automation Framework brought down the Consoluntant Efforts by 90% and Is used across teams.</li>
                                <li>Integration with AdobeIO and JWT Autherization</li>
                                <span className="project-sub-title black">Survey Tool Engineering Architect Team</span>
                                <li>Developed end to end for a survey utility to track the response of customers and generate analysis report.</li>
                                <li>Developed the backend in spring-boot and ReactJS as the FrontEnd.</li>
                                <li>Database model design and design of application architecture in NodeJs and MongoDB.</li>
                            </ul>
                        </div>
                    </ExperienceItem>
                    <ExperienceItem
                        title="Fidelity Investments"
                        timeline="March,2017 - May,2019"
                        designation="Software Engineer"
                        logo={fidelityLogo}
                        techstack={fidelityTechStack}
                        designation={(<strong>Software Engineer</strong>)}
                    >
                        {/* <p>Fidelity Investments offers fund distribution and investment advice, retirement services, wealth management,securities execution and clearance, and life insurance.</p> */}

                        <div className="project-responsibility">

                            <p>
                                My Responsibilities include upgrading the code base to <span className="blue">Angular</span> UI and Back-end in <span className="blue">Restful </span> Services.
                                        Developing testable, reusable and maintainable components/services,
                                        integrating Restful API’s
                            </p>
                            <ul>
                                <li>We built a Table component framework for eTax Application and I worked on developing the UI components focusing on its
                                    stability ,which made rendering of dynamic
                                    content customizable. Now,Other teams across BU uses this
                                    framework .</li>
                                <li>Implemented <span className="blue">Lazy-Loading</span>, leading to
                                    85% reduction in web app
                                    loading time.</li>
                                <li>Enhanced development speed by creating and reusing generic base
                                    components, directives,pipes and various utilities.</li>
                                <li>Developed and Integrated RESTful API’s into services through
                                    GET, POST, PUT, DELETE calls</li>
                                <li>Managed the state of the page using different Angular Lifecycle
                                    Hooks such as OnChange, AfterViewChecked and Destroy</li>
                                <li>Improved the User Experience of the eTax Application using
                                    Angular and primeNg.</li>
                                <li>Identified and suggested new technologies and tools for
                                    enhancing product value.</li>
                                <li>Participated in daily scrum, sprint planning, sprint review and
                                    sprint retrospective meetings.</li>
                                <li>Developed the application using Agile methodology to review
                                    progress through bi-weekly sprints</li>
                                <li>Used JIRA as management tool and GIT as a version control tool.</li>
                            </ul>
                        </div>
                    </ExperienceItem>
                    <ExperienceItem
                        title="Wipro"
                        timeline="April,2016 - Feb,2017"
                        designation="Project Engineer"
                        logo={wiproLogo}
                        techstack={wiproTechStack}
                        projectImage={wirpoProjectImage}
                        designation={(<strong>Project Engineer</strong>)}
                    >
                        <ul>
                            <span className="project-sub-title black">Bluedart Website Revamp</span>
                            <li>Was a key contributer to the revamp of the Bluedart website - A shipment application which possess the operations in domestic and
                                international courier services which handled end to end process starting from initiating a courier order,pickup and delivery.</li>
                            <li>Provided customer features like finding nearby service station for pickup and delivery (integration with Google API), Transit time,
                                scheduling a pickup, booking a shipment and Track a shipment.</li>
                            <li>Developed of SOAP-based Web Services (bottom-up) which internally consumes various third-party vendors and also calls Oracle stored procedures.</li>
                            <li> <span className="blue">Google Map API </span> Integration with shortest path implementation</li>
                            <li>Worked on Module end to end (UI layer using LiferayAUI, Controllers and Client Stub using axis2 implementation)</li>
                        </ul>
                    </ExperienceItem>
                </Experience>
            </PageSection>
            <PageSection id="blogs"><Blogs /></PageSection>
            <PageSection title="Contact" id="contact"><Contacts /></PageSection>
        </Auxilary>
    );
}

export default HomePage;