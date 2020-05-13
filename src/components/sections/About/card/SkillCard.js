import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './SkillCard.css'

const SkillCard = props => {
    const [skills, setSkills] = useState([
        { name: "React", score: 4 },
        { name: 'Java', score: 5 },
        { name: 'JavaScript', score: 3 },
        { name: 'Spring', score: 4 },
        { name: 'Angular', score: 3 },
        { name: 'NodeJS', score: 3 },
        { name: 'Docker', score: 3 },
    ])

    return (
        <div>
            <div className="EngineerCard__Container-sc-1wpqjm4-0 sqvXk">

                <div class="EngineerCard__Info-sc-1wpqjm4-3 dIcgtl">
                    <h3 color="darkBlue" class="skillHeading">Skills</h3>
                    <div class="EngineerCard__SubHeading-sc-1wpqjm4-6 cEMOqc"><div class="sc-bwzfXH fxkJNP sc-bxivhb bUZGRr" color="darkBlue">
                    </div>
                    </div>
                </div>
                <hr style={{ margin: "14px 0" }} />
                <div className="EngineerCard__Stats-sc-1wpqjm4-8 dcvOHH">
                    {/* <div className="EngineerCard__Title-sc-1wpqjm4-9 eyHvrW">
                        <div className="EngineerCard__OverallScoreWrapper-sc-1wpqjm4-13 cArByi">
                            <p className="sc-dnqmqq hmVOQX" color="plumBlue">/10</p>
                        </div>
                        <div className="EngineerCard__Divider-sc-1wpqjm4-4 dLUSXs"></div>
                        <div className="EngineerCard__RoleContainer-sc-1wpqjm4-10 esWYYf">
                            <p className="sc-dnqmqq EngineerCard__Role-sc-1wpqjm4-11 bzSKdf" color="plumBlue">Mid-to-Senior</p>
                        </div>
                    </div> */}
                    {
                        skills.map(skill => {
                            return (<div className="EngineerCard__Skill-sc-1wpqjm4-12 fnlfPX">
                                <p color="darkBlue" className="skills">{skill.name}</p>
                                <div className="EngineerCard__Score-sc-1wpqjm4-15 gffUbb">
                                    {
                                        [...Array(skill.score)].map(e => {
                                            return <div color="#E51700" className="score-dot"></div>
                                        })

                                    }
                                    {
                                        [...Array(5 - skill.score)].map(e => {
                                            return <div color="#E51700" className="score-dot-empty"></div>
                                        })
                                    }
                                    <div className="feaLkc"></div>
                                </div>
                            </div>)
                        })
                    }

                </div>
            </div>

        </div>
    )
}

SkillCard.propTypes = {

}

export default SkillCard
