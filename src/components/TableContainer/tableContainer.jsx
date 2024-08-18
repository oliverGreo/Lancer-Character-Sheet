import './tableContainer.css'
import React from 'react'
import StatsTable from '../StatsTable/statsTable'
import SkillsTable from '../SkillsTable/skillsTable'


const TableContainer = (props) => {
    const { mechStats, mechSkills } = props

    return (
        <div className="tableContainer">
            <StatsTable stats={mechStats} />
            <SkillsTable skills={mechSkills} />
        </div>
    )
}

export default TableContainer;