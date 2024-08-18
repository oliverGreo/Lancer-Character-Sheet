import React, { useState, useEffect } from "react"
import System from "../../components/System/system"

const Systemspage = ({ player }) => {
    const { systems } = player.mechInformation

    const [activeSystemNames, setActiveSystemNames] = useState([])

    useEffect(() => {
        const initialActiveSystemNames = systems.map(system => system.name)
        setActiveSystemNames(initialActiveSystemNames)
    }, [systems])

    const activeSystems = []
    const inactiveSystems = []

    systems.forEach((system) => {
        if (activeSystemNames.includes(system.name)) {
            activeSystems.push(system)
        } else {
            inactiveSystems.push(system)
        }
    })

    const setSystemActive = (system) => {
        if (!activeSystemNames.includes(system.name)) {
            setActiveSystemNames([...activeSystemNames, system.name])
        }
    }

    const setSystemInactive = (system) => {
        if (activeSystemNames.includes(system.name)) {
            const updatedSystemNames = activeSystemNames.filter(activeSystem => activeSystem !== system.name)
            setActiveSystemNames(updatedSystemNames)
        }
    }


    return (

        <div className="systemsPage">
            <div className='sheetLabel'>
                Systems
            </div>
            <div className='systemsContainer'>
                {activeSystems.map((system, index) => (
                    <div key={index} className='systemEntry'>
                        <System system={system} systemType={'system'} isActive={true} toggleSystem={true} passValue={(system) => setSystemInactive(system)} />
                    </div>
                ))}
                {inactiveSystems.map((system, index) => (
                    <div key={index} className='systemEntry'>
                        <System system={system} systemType={'system'} isActive={false} toggleSystem={true} passValue={(system) => setSystemActive(system)} />
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Systemspage