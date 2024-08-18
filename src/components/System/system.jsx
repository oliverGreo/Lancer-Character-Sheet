import React, { useState, useCallback } from 'react'
import './system.css'
import Infobox from '../Infobox/infobox'
import Mount from '../Mount/mount'
import Tier from '../Tier/tier'


const System = ({
    system = {},
    isActive = true,
    toggleSystem,
    systemType,
    passValue,
    possibleOptions,
    inputType
}) => {
    const {
        name,
        tags,
        reactionTrigger,
        description,
        damage,
        range,
        threat,
        value,
        extras,
        frequency,
        type,
        cost,
        isCorepower,
        isWeapon,
        isProtocol
    } = system
    const [isOpen, setIsOpen] = useState(isActive)

    const handleToggle = useCallback(() => {
        if (toggleSystem === false) {
            return null
        }
        toggleSystem ? toggleSystem(name) : setIsOpen(prev => !prev)
    }, [name, toggleSystem])



    // // build the classname
    let classname = 'system'
    if (isWeapon || damage || type === 'weapon' || systemType === 'mount') classname += ' weapon'
    if (isProtocol || type === 'protocol') classname += ' protocol'
    if (type === 'reaction') classname += ' reaction'
    if (type === 'hack') classname += ' hack'
    if (type === 'quick action') classname += ' quickaction'


    if (systemType === 'input') {
        return (
            <div className='system'>
                <div className='systemName' onClick={handleToggle}>
                    <span>{name}</span>
                </div>
                {isOpen && (
                    <>
                        {inputType !== 'dropdown' && (<div className='inputFieldContainer'>
                            <input
                                className='inputField'
                                type='text'
                                placeholder={tags}
                                onChange={(event) => passValue(event.target.value)}
                            />
                        </div>)}
                        {inputType === 'dropdown' && (<div className='inputFieldContainer inputFieldContainerDropdown'>
                            <div>
                                <select
                                    className='inputField'
                                    onChange={(event) => passValue(event.target.value)}
                                >
                                    <option
                                        value=""
                                        disabled
                                        selected
                                    >
                                        Select your Background
                                    </option>
                                    {possibleOptions?.map((option, index) => (
                                        <option
                                            value={option}
                                            key={index}
                                        >
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    className='inputField'
                                    type='text'
                                    placeholder={'or create a new one'}
                                    onChange={(event) => passValue(event.target.value)}
                                />
                            </div>
                        </div>)}
                    </>
                )}
            </div>
        )
    }

    if (systemType === 'mount') {
        return <Mount mount={system} toggleSystem={toggleSystem} />
    }

    if (systemType === 'skilltrigger') {
        return (
            <div className={classname}>
                <div className='systemName'>
                    <span>{system} +2</span>
                </div>
            </div>
        )
    }

    if (systemType === 'pilotgear') {
        return (
            <div className={classname}>
                <div className='systemName'>
                    <span>{name}</span>
                    <span className='systemTag smallerFont'>{tags}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: description }} className='systemDescription' />
            </div>
        )
    }

    if (systemType === 'weaponslot') {
        return (
            <div className={classname} onClick={() => toggleSystem && passValue(system)}>
                <div className='systemName'>
                    <span>{name}</span>
                    <span className='systemTag'>{type}</span>
                </div>
                <div className='systemTag'>{tags}{frequency && `${type}, ${frequency}`}</div>
                <div className='systemDescription'>
                    Damage: {damage} - {range && `Range: ${range}`}{range && threat && ', '}{threat && `Threat: ${threat}`}
                </div>
            </div>
        )
    }

    if (systemType === 'trait') {
        return (
            <div className={classname} onClick={() => toggleSystem && passValue(system)}>
                <div className='systemName'>
                    <span>{name}</span>
                    <span className='systemTag'>{type}</span>
                </div>
                <div className='systemDescription'>
                    {description}
                </div>
            </div>
        )
    }

    if (systemType === 'coresystem') {
        return (
            <div className={classname} onClick={() => toggleSystem && passValue(system)}>
                <div className='systemName'>
                    <span>{name}</span>
                    <span className='systemTag'>{type}</span>
                </div>
                <div className='systemDescription'>
                    {description}
                </div>
            </div>
        )
    }

    if (systemType === 'system') {
        return (
            <div className={classname} onClick={() => toggleSystem && passValue(system)}>
                <div className='systemName'>
                    <div style={{ display: "flex", flexFlow: 'column', gap: '5px' }}>
                        <span>{name}</span>
                        <span className='systemTag smallerFont'>{tags}</span>
                    </div>
                    <span className='systemTag alignTextRight smallerFont'>{type}{cost && type && ', '}{cost ? 'Cost: ' + cost : ''}</span>
                </div>
                {isActive &&
                    <div className='systemDescription'>
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                        {extras &&
                            extras.map((extra, index) =>
                                <System systemType={extra.type} system={extra} key={index} />
                            )
                        }
                    </div>}
            </div>
        )
    }

    if (systemType === 'talent') {
        return (
            <div className={classname} onClick={() => toggleSystem && passValue(system)}>
                <div className='systemName'>
                    <span>{name}</span>
                    <span className='systemTag'>{type}</span>
                </div>
                <div className='systemDescription'>
                    <Tier tier={system.tiers[0]} tierLevel={1} />
                    {/* this is for displaying multiple tiers, which is not used in the homebrew atm */}
                    {/* {system.tiers.map((tier, index) => <Tier tier={tier} tierLevel={index + 1} key={index} />)} */}
                </div>
            </div>
        )
    }

    if (systemType === 'weapon') {
        return (
            <div className={classname} onClick={() => toggleSystem && passValue(system)}>
                <div className='systemName'>
                    <span>{name}</span>
                    <span className='systemTag'>{type}</span>
                </div>
                <div className='systemTag'>{tags}{frequency && `${type}, ${frequency}`}</div>
                <div className='systemDescription'>
                    Damage: {damage} - {range && `Range: ${range}`}{range && threat && ', '}{threat && `Threat: ${threat}`}
                </div>
            </div>
        )
    }

    if (systemType === 'hack') {
        return (
            <div className={classname} onClick={() => toggleSystem && passValue(system)}>
                <div className='systemName'>
                    <span>{name}</span>
                    <span className='systemTag'>{type}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: description }} className='systemDescription' />
            </div>
        )
    }

    if (systemType === 'reaction') {
        return (
            <div className={classname} onClick={() => toggleSystem && passValue(system)}>
                <div className='systemName'>
                    <span>{name}</span>
                    <span className='systemTag'>{type}</span>
                </div>
                {reactionTrigger && <div className='triggerDescription'>Trigger: {reactionTrigger} </div>}
                {frequency && <div className='triggerDescription frequencyDescription'>Frequency: {frequency}</div>}
                <div dangerouslySetInnerHTML={{ __html: description }} className='systemDescription' />
            </div>
        )
    }

    return <p>undefined type</p>
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // this is only still here, because I can reuse parts of the original version
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //



    // if (systemType === 'weapodsadadsasdn') {
    //     return (
    //         <div className={'system'} onClick={handleToggle}>
    //             <div className='systemName'>
    //                 <span>{name}</span>
    //                 {mountName && <span className='mountName'>{mountName}</span>} {/* mount name for weapons in the mech page */}
    //                 {cost && <span className='mountName'>Cost: {cost} SP</span>} {/* cost for systems in the character build page */}
    //                 {isCorepower && <span className='mountName'>Core Power</span>} {/* label for core powers */}
    //             </div>
    //             {isOpen && (
    //                 <>
    //                     <div className='systemTag'>{tags}{frequency && `${type}, ${frequency}`}</div> {/* tags for weapons + systems, frequency for reactions */}
    //                     {reactionTrigger && <div className='triggerDescription'>Trigger: {reactionTrigger}</div>} {/* trigger description */}
    //                     {damage ? (
    //                         <div className='systemDescription'>
    //                             Damage: {damage} - {range && `Range: ${range}`}{range && threat && ', '}{threat && `Threat: ${threat}`}
    //                         </div> /* weapon damage + range */
    //                     ) : (
    //                         <>
    //                             <div dangerouslySetInnerHTML={{ __html: description }} className='systemDescription' /> {/* to replace <br> in the json with line breaks */}
    //                             {/* if there are extra informations, like a new reaction */}
    //                             {extras && extras.map((extra, index) => (
    //                                 <Infobox key={index} data={extra} type='system' />
    //                             ))}
    //                         </>
    //                     )}
    //                 </>
    //             )}
    //         </div>)
    // }
    // return (
    // <div className={'system'} onClick={handleToggle}>
    //     <div className='systemName'>
    //         <span> but not defined yet</span>
    //     </div>

    //     <div dangerouslySetInnerHTML={{ __html: description }} className='systemDescription' />
    // </div>
    // )
    // return (
    //     <div className={'system'} onClick={handleToggle}>
    //         <div className='systemName'>
    //             <span>{name}{value !== undefined && ` +${value}`}</span> {/* value for skill triggers */}
    //             {mountName && <span className='mountName'>{mountName}</span>} {/* mount name for weapons in the mech page */}
    //             {cost && <span className='mountName'>Cost: {cost} SP</span>} {/* cost for systems in the character build page */}
    //             {isCorepower && <span className='mountName'>Core Power</span>} {/* label for core powers */}
    //         </div>
    //         {isOpen && (
    //             <>
    //                 <div className='systemTag'>{tags}{frequency && `${type}, ${frequency}`}</div> {/* tags for weapons + systems, frequency for reactions */}
    //                 {reactionTrigger && <div className='triggerDescription'>Trigger: {reactionTrigger}</div>} {/* trigger description */}
    //                 {damage ? (
    //                     <div className='systemDescription'>
    //                         Damage: {damage} - {range && `Range: ${range}`}{range && threat && ', '}{threat && `Threat: ${threat}`}
    //                     </div> /* weapon damage + range */
    //                 ) : (
    //                     <>
    //                         <div dangerouslySetInnerHTML={{ __html: description }} className='systemDescription' /> {/* to replace <br> in the json with line breaks */}
    //                         {/* if there are extra informations, like a new reaction */}
    //                         {extras && extras.map((extra, index) => (
    //                             <Infobox key={index} data={extra} type='system' />
    //                         ))}
    //                     </>
    //                 )}
    //             </>
    //         )}
    //     </div>
    // )
}

export default System

