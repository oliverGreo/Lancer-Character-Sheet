import React, { useState } from 'react'
import './weaponslot.css'

import BASE_WEAPONS from '../../resources/baseWeapons'
import System from '../System/system'

const Weaponslot = (
    {
        mounttype,
        weapon,
        passValue,
        slotnumber,
        limitedToAux,
        toggleSystem
    }
) => {
    const [weaponModalIsOpen, setWeaponModalIsOpen] = useState(false)


    const filteredWeapons = Object.entries(BASE_WEAPONS)
        .filter(([key, weapon]) => {
            if (limitedToAux) {
                return weapon.size === 'Auxiliary';
            }
            return (
                (mounttype === 'Heavy' && (weapon.size === 'Heavy')) ||
                (mounttype === 'Main' && (weapon.size === 'Main')) ||
                (mounttype === 'Main/Aux' && weapon.size === 'Main') ||
                (mounttype === 'Flex' && (weapon.size === 'Main' || weapon.size === 'Auxiliary')) ||
                (mounttype === 'Aux/Aux' && weapon.size === 'Auxiliary') ||
                (mounttype === 'Aux' && weapon.size === 'Auxiliary')
            );
        })
        .map(([key, weapon]) => ({ key, ...weapon }));

    return (
        <>
            <div className="weaponslot" onClick={() => toggleSystem && setWeaponModalIsOpen(true)}>
                {weapon === undefined && <p>no weapon found</p>}
                {weapon !== undefined &&
                    <System system={weapon} systemType={'weapon'} passValue={() => { }} />
                }

            </div>
            {
                weaponModalIsOpen && (
                    <div className="weaponslotModalBackground" onClick={() => setWeaponModalIsOpen(false)}>
                        <div className="weaponslotModalContent" >
                            <div className="weaponslotModalLabel">
                                Pick a Weapon:
                            </div>
                            {
                                filteredWeapons.map((weapon, index) =>
                                    <System
                                        system={weapon}
                                        key={index}
                                        systemType={'weaponslot'}
                                        passValue={(value) => passValue({ mounttype, value, slotnumber })}
                                        toggleSystem={toggleSystem}
                                    />
                                )
                            }

                        </div>
                    </div >

                )
            }
        </>
    )
}

export default Weaponslot