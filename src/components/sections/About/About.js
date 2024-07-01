import React from 'react';
import SkillCard from './card/SkillCard';

const About = props => {
    return (
        <div className="row">
            <div className="col-md-9">
                <h4 className="widget-title">Learn About Me</h4>
                <p>Hi, I'm <strong>Subhransu Maharana</strong>, a dedicated <strong>Full Stack Engineer</strong> with over <strong>9 years</strong> of experience in developing innovative and efficient web applications. Currently, I hold the position of <strong>Senior Application Engineer</strong> at <strong>Adobe Systems</strong>, where I leverage my expertise to build and optimize solutions for top digital marketing clients.</p>
                <p>My journey in the tech world began with a deep interest in software development, which led me to earn a <strong>B.Tech in Computer Science and Engineering</strong> from <strong>VSSUT, Burla</strong>. Over the years, I have honed my skills in both front-end and back-end development, working with a diverse range of technologies including <strong>JavaScript, ReactJS, Node.js, Java, Python</strong>, and Big Data technologies like <strong>Hadoop</strong> and <strong>PySpark</strong>.</p>
                <p>At <strong>Adobe</strong>, I've had the opportunity to work on transformative projects, automate complex processes, and contribute to the development of next-generation applications. I am particularly proud of my work in automating client onboarding processes and building executive-focused analytics dashboards. My ability to design and recommend architecture for <strong>Gen AI-based initiatives</strong> highlights my knack for innovation and forward-thinking.</p>
                <p>In previous roles, I've successfully led the upgrade of codebases, developed robust web services, and integrated complex APIs. My experience spans across various industries, giving me a unique perspective and the ability to adapt to different technical challenges.</p>
                <p>Beyond my technical skills, I am passionate about mentoring junior engineers and fostering a collaborative work environment. I believe in the importance of maintaining high coding standards and continuously improving through learning and knowledge sharing.</p>
                <p>Outside of work, I enjoy exploring new technologies, participating in hackathons, and writing technical blogs. I'm always eager to learn and grow, both professionally and personally.</p>
                <p>Feel free to explore my portfolio to see the projects I've worked on and the impact I've made. If you'd like to get in touch, please visit the <strong>Contact</strong> section.</p>
            </div>
            <div className="col-md-3">
                <SkillCard />
            </div>
        </div>
    );
}

About.propTypes = {};

export default About;
