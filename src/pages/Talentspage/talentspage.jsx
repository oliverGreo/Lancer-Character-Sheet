import React from "react"
import System from "../../components/System/system"

const Talentspage = ({ player }) => {
    const talentArray = player.pilotinformation.talents

    return (
        <div className="talentsPage">
            <div className='sheetLabel'>
                Talents
            </div>
            <div className='systemsContainer'>
                {talentArray.map((talent, index) => (
                    <div key={index} className='systemEntry'>
                        <System systemType={'talent'} system={talent} toggleSystem={false} />
                    </div>
                ))}
            </div>
        </div>

    )

}
export default Talentspage