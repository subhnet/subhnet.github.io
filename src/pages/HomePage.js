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
        { URL: "https://angular.io/", name: "JavaScript" }
    ]

    let adobeTechStack = [
        { URL: "https://angular.io/", name: "JavaScript" },
        { URL: "https://angular.io/", name: "ReactJS" },
        { URL: "https://angular.io/", name: "NodeJS" },
        { URL: "https://angular.io/", name: "MySQL" },
        { URL: "https://angular.io/", name: "Docker" },
        { URL: "https://angular.io/", name: "NGINX" },
        { URL: "https://angular.io/", name: "Apache Tomcat 7" }
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
            <PageSection id="about">
                <About />
            </PageSection>
            <PageSection title="Work Experience" id="experience">
                <Experience>
                    <ExperienceItem
                        title="Adobe System"
                        timeline="Now"
                        designation="Full-Stack Developer"
                        logo={adobeLogo}
                        techstack={adobeTechStack}
                    >
                        <p>Adobe</p>
                        <strong>Working as a Full Stack Developer at Adobe</strong>

                    </ExperienceItem>
                    <ExperienceItem
                        title="Fidelity Investments"
                        timeline="March,2017 - May,2019"
                        designation="Software Engineer"
                        logo={fidelityLogo}
                        techstack={fidelityTechStack}
                    >
                        <p>Fidelity Investments offers fund distribution and investment advice,
                               retirement services, wealth management,
                               securities execution and clearance, and life insurance.</p>

                        <strong>Working as a Software Engineer at Fidelity Investments</strong>
                        <p>
                            My Responsibilities include upgrading the code base to <span className="blue">Angular</span>
                            UI and
                            Back-end in <span className="blue">Restful </span> Services.
                                    Developing testable, reusable and maintainable components/services,
                                    integrating Restful API’s
                        </p>
                        <ul>
                            <li>We built a Table component framework for eTax Application and
                                I worked on developing the UI components focusing on its
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
                    </ExperienceItem>
                    <ExperienceItem
                        title="Wipro"
                        timeline="April,2016 - Feb,2017"
                        designation="Project Engineer"
                        logo={wiproLogo}
                        techstack={wiproTechStack}
                        projectImage={wirpoProjectImage}
                    >
                        <ul>
                            <li>Shipment application which possess the operations in domestic and
                                international courier services.</li>
                            <li>Handle end to end process starting from initiating a courier order,
                                pickup
                                and delivery.</li>
                            <li>Provide customer features like finding nearby service station for
                                pickup
                                and delivery (integration with Google API), Transit time,
                                scheduling a
                                pickup, booking a shipment and Track a shipment.</li>
                        </ul>
                    </ExperienceItem>
                </Experience>
            </PageSection>
            <PageSection id="blogs">
                <Blogs />
            </PageSection>
            <PageSection title="Contact" id="contact">
                <Contacts />
            </PageSection>
        </Auxilary>
    );
}

export default HomePage;