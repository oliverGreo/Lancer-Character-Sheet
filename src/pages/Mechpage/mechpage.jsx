import React from "react"
import TableContainer from "../../components/TableContainer/tableContainer"
import Mechinfo from "../../components/Mechinfo/mechinfo"
import "./mechpage.css"
import Frame from "../../components/Frame/frame"
import FRAMES from "../../resources/frames"

const Mechpage = ({ player }) => {
    const pilot = player

    if (!player) {
        return
    }

    const mechInformation = pilot?.mechInformation
    const pilotInfo = pilot?.pilotinformation
    const frame = mechInformation?.frame
    const stats = frame?.stats
    const skills = mechInformation?.skills

    const applySkillsToStats = (skills, stats) => {
        const adjustedStats = {
            armor: stats?.armor,
            edefense: stats?.edefense + skills?.systems,
            evasion: stats?.evasion + skills?.agility,
            heatcap: stats?.heatcap + skills?.engineering,
            hp: stats?.hp + 2 * skills?.hull /*+ pilotInfo.grit*/,
            repaircap: stats?.repaircap + Math.floor(skills?.hull / 2),
            savetarget: stats?.savetarget /*+ pilotInfo.grit*/,
            sensors: stats?.sensors,
            size: stats?.size,
            speed: stats?.speed + Math.floor(skills?.agility / 2),
            systempoints: stats?.systempoints + Math.floor(skills?.systems / 2),
            techattack: stats?.techattack + skills?.systems,
            limitedbonus: stats?.limitedbonus,
            structure: stats?.structure,
            stress: stats?.stress,
            attackbonus: stats.attackbonus /*+ pilotInfo.grit*/
        }
        return adjustedStats
    }

    return (
        <div className="mechPage">
            <div className='sheetLabel'>
                {`Pilot:  ${pilotInfo.name} - Mech`}
            </div>
            <TableContainer mechStats={applySkillsToStats(skills, stats)} mechSkills={skills} />
            <Mechinfo mech={mechInformation} />
        </div>
    )

}
export default Mechpage