import React from "react"
import Pilotinfo from "../../components/Pilotinfo/pilotinfo";

const Pilotpage = ({ player }) => {
    const pilotInfo = player.pilotinformation
    return (

        <div className="pilotPage">
            <div className='sheetLabel'>
                Pilot
            </div>
            <Pilotinfo pilot={pilotInfo} />
        </div>

    )

}
export default Pilotpage