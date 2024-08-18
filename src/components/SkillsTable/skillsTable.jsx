import React from "react";
import './skillsTable.css'

const SkillsTable = (props) => {
    const { skills } = props

    return (
        <div className="skillsContainer">
            <div className="label">
                MECH SKILLS
            </div>
            <div className='skillTable'>
                <div className="skill">
                    <span className='skillLabel'>Hull</span>
                    <span className='skillValue'>{skills?.hull}</span>
                </div>
                <div className="skill">
                    <span className='skillLabel'>Engineering</span>
                    <span className='skillValue'>{skills?.engineering}</span>
                </div>
                <div className="skill">
                    <span className='skillLabel'>Agility</span>
                    <span className='skillValue'>{skills?.agility}</span>
                </div>
                <div className="skill">
                    <span className='skillLabel'>Systems</span>
                    <span className='skillValue'>{skills?.systems}</span>
                </div>
            </div>
        </div>
    )
}

export default SkillsTable