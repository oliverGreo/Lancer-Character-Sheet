import React, { useState } from 'react'
import './mount.css'

import Weaponslot from '../Weaponslot/weaponslot'

const Mount = ({ mount, passValue, toggleSystem }) => {
    const { name: mounttype, weapons: weaponsArray } = mount
    const [pickedWeapons, setPickedWeapons] = useState([])

    let mountInfo = ''
    let showSlot1 = true
    let showSlot2 = false

    switch (mounttype) {
        case 'Superheavy':
            mountInfo = 'require both a HEAVY mount and one other mount of any size.'
            break
        case 'Heavy':
            mountInfo = 'fits one HEAVY weapon.'
            break
        case 'Flex':
            mountInfo = 'fits one MAIN weapon or up to two AUXILIARY weapons.'
            if (weaponsArray[0]?.size === 'Auxiliary' || pickedWeapons[0]?.size === 'Auxiliary') {
                showSlot2 = true
            }
            if (weaponsArray[0]?.size === 'Main') {
                showSlot2 = false
            }
            break
        case 'Main':
            mountInfo = 'fits one MAIN or AUXILIARY weapon.'
            break
        case 'Main/Aux':
            mountInfo = 'fits one MAIN weapon and one AUXILIARY weapon.'
            showSlot2 = true
            break
        case 'Aux/aux':
            mountInfo = 'fits two AUXILIARY weapons.'

            break
        case 'Integrated':
            mountInfo = 'Integrated mounts are designed around specific weapons, built into FRAMES. They automatically include the listed weapons, which cannot be destroyed, removed, replaced, or modified in any way.'
            break
        default:
            break
    }

    const handleWeaponChoice = ({ mounttype, value: weapon, slotnumber }) => {
        if (toggleSystem === false) {
            return
        }
        let helperArray = [...pickedWeapons]
        helperArray[slotnumber - 1] = weapon
        setPickedWeapons(helperArray)
        passValue(helperArray, mounttype)
    }



    return (
        <div className={'system weapon'} >
            <div className='systemName' >
                <span>{mounttype}</span>
            </div>
            <div className='mountInfo'>{mountInfo}</div>
            <div className='systemDescription'>
                <div className="weaponslotContainer">
                    {showSlot1 &&
                        <Weaponslot
                            mounttype={mounttype}
                            weapon={weaponsArray[0]}
                            passValue={(value) => handleWeaponChoice(value)}
                            slotnumber={1}
                            toggleSystem={toggleSystem}
                        />
                    }
                    {showSlot2 &&
                        <Weaponslot
                            mounttype={mounttype}
                            weapon={weaponsArray[1]}
                            passValue={(value) => handleWeaponChoice(value)}
                            slotnumber={2}
                            limitedToAux={true}
                            toggleSystem={toggleSystem}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Mount