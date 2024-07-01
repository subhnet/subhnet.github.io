import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SkillCard.css';

const SkillCard = props => {
    const [skills, setSkills] = useState({
        "Languages": [
            { name: "JavaScript", score: 5 },
            { name: "Java", score: 5 },
            { name: "Python", score: 4 },
            { name: "TypeScript", score: 4 }
        ],
        "Front-End": [
            { name: "React", score: 4 },
            { name: "Angular", score: 3 },
            { name: "JavaScript", score: 4 },
            { name: "TypeScript", score: 4 },
            { name: "HTML", score: 5 },
            { name: "CSS", score: 5 }
        ],
        "Back-End": [
            { name: "Java", score: 5 },
            { name: "NodeJS", score: 4 },
            { name: "Spring", score: 4 },
            { name: "Python", score: 3 },
            { name: "Express.js", score: 4 },
            { name: "MySQL", score: 4 }
        ],
        "DevOps": [
            { name: "Docker", score: 3 },
            { name: "AWS", score: 4 },
            { name: "Azure", score: 3 },
            { name: "Apache Airflow", score: 3 },
            { name: "GitHub Actions", score: 4 }
        ],
        "Big Data": [
            { name: "Hadoop", score: 3 },
            { name: "PySpark", score: 3 },
            { name: "AWS Glue", score: 3 },
            { name: "Kafka", score: 3 }
        ],
        "Miscellaneous": [
            { name: "GraphQL", score: 3 },
            { name: "Apache OpenWhisk", score: 3 },
            { name: "Gulp", score: 3 }
        ]
    });

    return (
        <div className="SkillCard">
            <h3 className="skillHeading">Skills</h3>
            <div className="skillCategories">
                {Object.keys(skills).map(category => (
                    <div key={category} className="category">
                        <h4>{category}</h4>
                        <div className="skills">
                            {skills[category].map(skill => (
                                <p key={skill.name} className="skill">{skill.name}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

SkillCard.propTypes = {};

export default SkillCard;
