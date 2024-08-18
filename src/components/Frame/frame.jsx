import React, { useState } from 'react'
import './frame.css'
import StatsTable from '../StatsTable/statsTable'
import System from '../System/system'
import Mount from '../Mount/mount'

const Frame = ({
    frame,
    toggleSystem = true,
    creationMode = {
        isInCreationMode: false,
        pickedFrame: null
    },
    passMechName,
    passMechWeaponslotEntry
}) => {
    const {
        name,
        stats,
        traits,
        mounts,
        coresystem
    } = frame
    const [isOpen, setIsOpen] = useState(true)

    const handleClick = () => {
        if (toggleSystem === true) {
            setIsOpen(!isOpen)
        }
    }

    const pickedThisFrame = creationMode.pickedFrame.name === name
    const chosenMounts = pickedThisFrame
        ? creationMode.pickedFrame.mounts
        : mounts;

    return (
        <div className='frameContainer'>
            <div className='frameLabelContainer'>
                <div className='frameLabel' onClick={() => handleClick()}>
                    {name}
                </div>
                {creationMode.isInCreationMode && <input type='text' placeholder='Mech Name' onChange={(event) => passMechName(event.target.value)} />}
            </div>
            {isOpen &&
                <div className='frameInfoDisplay'>
                    <StatsTable stats={stats} />
                    <div className='frameInfoDisplay'>
                        <StatsTable stats={stats} />
                        {traits.map((item, index) => (
                            <System
                                system={item}
                                systemType="trait"
                                key={item.id || index}
                            />
                        ))}
                        <System
                            system={coresystem}
                            systemType="trait"
                        />
                        {chosenMounts.map((item, index) => (
                            <Mount
                                mount={item}
                                key={item.id || index}
                                toggleSystem={creationMode.isInCreationMode}
                                passValue={(array, type) => passMechWeaponslotEntry(array, type)}
                            />
                        ))
                        }
                    </div>
                </div>}
        </div>
    )
}

export default Frame