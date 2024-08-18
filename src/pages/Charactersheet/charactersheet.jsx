
import React, { useState } from 'react'
import Mechpage from '../Mechpage/mechpage'
import Pilotpage from '../Pilotpage/pilotpage'
import Talentspage from '../Talentspage/talentspage'
import Systemspage from '../Systemspage/systemspage'
import Savepage from '../Savepage/savepage'
import './charactersheet.css'

import CharacterCreationPage from '../CharacterCreationPage/characterCreationPage'

const Charactersheet = () => {
    const player = useState(JSON.parse(localStorage.getItem('lancerPlayer')))[0]

    return (
        <div className='charactersheetContainer'>
            {!player ? <CharacterCreationPage /> :
                <>
                    <Mechpage player={player} />
                    <Talentspage player={player} />
                    <Systemspage player={player} />
                    <Pilotpage player={player} />
                    <Savepage player={player} />
                </>
            }
        </div>
    )
}

export default Charactersheet
