import React, { useEffect, useState } from "react"
import Frame from "../../components/Frame/frame"
import Infobox from "../../components/Infobox/infobox"
import System from "../../components/System/system"
import BASE_SYSTEMS from "../../resources/baseSystems"
import FRAMES from "../../resources/frames"
import PILOT_OPTIONS from "../../resources/pilotOptions"
import TALENTS from "../../resources/talents"
import "./characterCreationPage.css"
import Talent from "../../components/Talent/talent"
import AlertBox from "../../components/AlertBox/alertBox"

const CharacterCreationPage = () => {
    const [showSaveModal, setShowSaveModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    // required values for comparison
    const [newPilot, setNewPilot] = useState({
        mechInformation: {
            frame: {
            },
            skills: {
                hull: 0,
                agility: 0,
                systems: 0,
                engineering: 0
            },
        }
    })

    // handle which component is visible
    const [openComponent, setOpenComponent] = useState(null)

    // skill trigger
    const [chosenSkilltriggers, setChosenSkilltriggers] = useState([])

    // talents
    const [chosenTalents, setChosenTalents] = useState([])

    // mech skills
    const [chosenMechskills, setChosenMechskills] = useState({ hull: 0, agility: 0, systems: 0, engineering: 0 })

    // systems
    const [chosenSystems, setChosenSystems] = useState([])
    const [totalSystemPoints, setTotalSystemPoints] = useState(6)
    const [systemPointsleft, setSystemPointsLeft] = useState(6)

    // pilot gear
    const [chosenPilotgear, setChosenPilotgear] = useState([])

    useEffect(() => {
        const mechSystemSkill = newPilot.mechInformation?.skills?.systems || 0
        const totalSystemPoints = 6 + Math.floor(mechSystemSkill / 2)

        const totalCost = chosenSystems.reduce((acc, entry) => acc + entry.cost, 0)

        if (totalCost > totalSystemPoints) {
            const updatedChosenSystems = chosenSystems.slice(0, -1)
            setChosenSystems(updatedChosenSystems)
            setNewPilot(prevPilot => ({
                ...prevPilot,
                mechInformation: {
                    ...prevPilot.mechInformation,
                    systems: updatedChosenSystems
                }
            }))
            const updatedTotalCost = updatedChosenSystems.reduce((acc, entry) => acc + entry.cost, 0)

            setTotalSystemPoints(totalSystemPoints)
            setSystemPointsLeft(totalSystemPoints - updatedTotalCost)
        } else {
            setTotalSystemPoints(totalSystemPoints)
            setSystemPointsLeft(totalSystemPoints - totalCost)
        }
    }, [chosenSystems, newPilot.mechInformation?.skills?.systems])

    // todo save button add validation (kinda done) to save and correct error msg

    // todo add missing stats: attack bonus, limited bonus, techattack (kinda done?)

    // todo add change character options
    // app js passes a parameter down to character sheet, receives info, enables menus


    const handleOpen = (componentName) => {
        setOpenComponent(prevComponent => prevComponent === componentName ? null : componentName);
    }

    const showEverything = () => {
        setNewPilot({
            pilotinformation: {
                name: 'Pilotname McPilotface',
                callsign: 'P-Callsign',
                background: 'P-Background',
                skilltriggers: ['Sleep', 'Rest', 'Complain'],
                pilotgear: [{
                    name: 'Corrective',
                    tags: 'Limited 1 use',
                    description: 'This clear, plastic-like sheet can be placed over the wounds of severely injured pilots. It instantly begins to stabilize them, injecting medicine and deploying nanites to stitch wounds shut.'
                },
                {
                    name: 'Patch',
                    tags: 'Limited 1 use',
                    description: '“Patch” is pilot slang for any kind of modern first aid gear, including sprayable medi-gel and instant-acting medical patches.'
                },
                {
                    name: 'Stims',
                    tags: 'Limited 3 uses',
                    description: 'These chemical stimulants are sometimes administered automatically by injectors built into a pilot’s suit, or even implanted within their body. Uncontrolled use can be addictive and dangerous to health in the long-term and is a problem for some pilots.'
                }],
                talents: [{
                    "name": "Ace",
                    "description": "this is how it works, but will prob be removed",
                    "tiers": [
                        {
                            "name": "Acrobatics",
                            "tier": 1,
                            "description": "While flying, you get the following benefits: You make all Agility checks and saves with +1 Accuracy. Any time an attack misses you, you may fly up to 2 spaces in any direction as a reaction."
                        },
                        {
                            "name": "Afterburners",
                            "tier": 2,
                            "description": "When you Boost while flying, you may move an additional 1d6 spaces, but take heat equal to half that amount."
                        },
                        {
                            "name": "Supersonic",
                            "tier": 3,
                            "description": "As a quick action on your turn, you may spin up your thrusters. If you end your turn flying, you may nominate a character within a Range equal to your Speed and within line of sight, and gain the Supersonic Reaction."
                        }
                    ]
                }, {
                    "name": "Ace",
                    "description": "this is how it works, but will prob be removed",
                    "tiers": [
                        {
                            "name": "Acrobatics",
                            "tier": 1,
                            "description": "While flying, you get the following benefits: You make all Agility checks and saves with +1 Accuracy. Any time an attack misses you, you may fly up to 2 spaces in any direction as a reaction."
                        },
                        {
                            "name": "Afterburners",
                            "tier": 2,
                            "description": "When you Boost while flying, you may move an additional 1d6 spaces, but take heat equal to half that amount."
                        },
                        {
                            "name": "Supersonic",
                            "tier": 3,
                            "description": "As a quick action on your turn, you may spin up your thrusters. If you end your turn flying, you may nominate a character within a Range equal to your Speed and within line of sight, and gain the Supersonic Reaction."
                        }
                    ]
                }, {
                    "name": "Ace",
                    "description": "this is how it works, but will prob be removed",
                    "tiers": [
                        {
                            "name": "Acrobatics",
                            "tier": 1,
                            "description": "While flying, you get the following benefits: You make all Agility checks and saves with +1 Accuracy. Any time an attack misses you, you may fly up to 2 spaces in any direction as a reaction."
                        },
                        {
                            "name": "Afterburners",
                            "tier": 2,
                            "description": "When you Boost while flying, you may move an additional 1d6 spaces, but take heat equal to half that amount."
                        },
                        {
                            "name": "Supersonic",
                            "tier": 3,
                            "description": "As a quick action on your turn, you may spin up your thrusters. If you end your turn flying, you may nominate a character within a Range equal to your Speed and within line of sight, and gain the Supersonic Reaction."
                        }
                    ]
                }]
            },
            mechInformation: {
                name: 'Mech-Name 1',
                frame: {
                    name: 'Scooter',
                    manufacturer: 'Walmart',
                    stats: {
                        size: 11,
                        armor: 10,
                        hp: 110,
                        repaircap: 15,
                        evasion: 18,
                        speed: 14,
                        savetarget: 110,
                        sensors: 110,
                        edefense: 18,
                        techattack: 0,
                        sp: 16,
                        heatcap: 16,
                        limitedbonus: 10
                        // attackbonus: 0
                    },
                    traits: [{
                        name: 'Initiative',
                        type: 'protocol',
                        frequency: '1/scene',
                        description: 'The Everest may take any quick action as a free action.'
                    },
                    {
                        name: 'Replaceable Parts',
                        type: 'passive',
                        description: 'While resting, the Everest can be repaired at a rate of 1 REPAIR per 1 structure damage, instead of 2 REPAIRS.'
                    }],
                    coresystem: {
                        name: 'Power Up',
                        type: 'protocol',
                        isCorepower: true,
                        description: 'For the rest of this scene, you gain +1 accuracy on all attacks, checks, and saves; additionally, 1/turn, you can BOOST as a free action.',
                    }
                    ,
                    mounts: [
                        {
                            name: 'Main',
                            weapons: [{
                                name: "Charged Blade",
                                size: "Main",
                                type: "Melee",
                                tags: "Armor Piercing",
                                threat: "1",
                                damage: "1d3+3"
                            }]
                        },
                        {
                            name: 'Flex',
                            weapons: [{
                                name: "Missile Rack",
                                size: "Auxiliary",
                                type: "Launcher",
                                tags: "Loading",
                                range: "10",
                                damage: "1d3+1 (Blast 1)"
                            }, {
                                name: "Missile Rack",
                                size: "Auxiliary",
                                type: "Launcher",
                                tags: "Loading",
                                range: "10",
                                damage: "1d3+1 (Blast 1)"
                            }]
                        },
                        {
                            name: 'Heavy',
                            weapons: [{
                                name: "Thermal Lance",
                                size: "Heavy",
                                type: "Cannon",
                                tags: "Heat 2 (self)",
                                range: "Line 10",
                                damage: "1d6+3"
                            }]
                        }
                    ]
                },
                skills: {
                    hull: 0,
                    agility: 2,
                    systems: 0,
                    engineering: 0
                },
                systems: [
                    {
                        name: "Personalizations",
                        cost: 1,
                        description: "You gain +2 HP and, in consultation with the GM, you may establish a minor modification you have made to your mech. This mod has no numerical benefit beyond the additional HP it grants, but could provide other useful effects. If the GM agrees that this mod would help with either a pilot or mech skill check, you gain +1 accuracy for that check.",
                        tags: 'Unique'
                    },
                    {
                        name: "Stable Structure",
                        cost: 2,
                        description: "You gain +1 accuracy on saves to avoid PRONE or KNOCKBACK.",
                        tags: 'Unique'
                    },
                    {
                        name: "Turret Drones",
                        type: "quick action",
                        description: "Expend a charge to deploy a turret drone that attaches to any object or surface within Sensors and line of sight. Gain the Turret Attack reaction, which can be taken once for each deployed turret drone. Turret drones cannot be recalled and expire at the end of the scene.",
                        cost: 2,
                        extras: [
                            {
                                name: "Turret Attack",
                                type: "reaction",
                                frequency: "1/round per turret",
                                reactionTrigger: "An allied character within Range 10 of a turret drone makes a successful attack.",
                                description: "The turret drone deals 3 Kinetic damage to their target, as long as it has line of sight to their target."
                            }
                        ],
                        tags: "Unique, Limited 3, Drone, Quick Action"
                    },
                    {
                        name: "Pattern-A Smoke Charges",
                        cost: 2,
                        type: "quick action",
                        description: "Expend a charge for one of the following effects: <br> Smoke Grenade (Grenade, Range 5, Blast 2): All characters and objects within the blast area benefit from soft cover until the end of your next turn, at which point the smoke disperses. <br> Smoke Mine (Mine, Blast 3): This mine detonates when any allied character moves over or adjacent to it. All characters and objects within the burst area benefit from soft cover until the end of the detonating character’s next turn, at which point the smoke disperses.",
                        tags: 'Limited 3, Unique'
                    },
                    {
                        name: "Manipulators",
                        cost: 1,
                        description: "Your mech has an extra set of limbs. They are too small to have any combat benefit, but allow the mech to interact with objects that would otherwise be too small or sensitive (e.g., pilot-sized touch pads).",
                        tags: 'Unique'
                    }
                ]
            }
        })
    }

    const handleSelection = (item, chosenItems, setChosenItems, maxItems, updateField, fieldName) => {
        let updatedArray = [...chosenItems]
        const alreadyPicked = updatedArray.includes(item)

        if (!alreadyPicked && updatedArray.length < maxItems) {
            updatedArray.push(item)
        } else if (alreadyPicked) {
            updatedArray = updatedArray.filter(pickedItem => pickedItem !== item)
        }

        setChosenItems(updatedArray)
        updateField(updatedArray, fieldName)
    }

    const handleSkillTrigger = (skilltrigger) => {
        handleSelection(skilltrigger, chosenSkilltriggers, setChosenSkilltriggers, 4, updatePilotInfoField, 'skilltriggers')
    }

    const handleTalent = (talent) => {
        handleSelection(talent, chosenTalents, setChosenTalents, 3, updatePilotInfoField, 'talents')
    }

    const handlePilotgear = (gear) => {
        handleSelection(gear, chosenPilotgear, setChosenPilotgear, 3, updatePilotInfoField, 'pilotgear')
    }

    const updatePilotInfoField = (value, field) => {
        const updatedPilotinformation = {
            ...newPilot.pilotinformation,
            [field]: value
        }
        const updatedPilot = {
            ...newPilot,
            pilotinformation: updatedPilotinformation
        }
        setNewPilot(updatedPilot)
    }

    const updateMechInfoField = (value, field) => {
        const updatedMechinformation = {
            ...newPilot.mechInformation,
            [field]: value
        }
        const updatedPilot = {
            ...newPilot,
            mechInformation: updatedMechinformation
        }
        setNewPilot(updatedPilot)
    }

    const handleSystem = (system) => {
        let totalCost = 0
        chosenSystems.map(entry => totalCost += entry.cost)
        if (totalCost + system.cost > totalSystemPoints) {
            return
        }
        let SystemArray = [...chosenSystems]
        const alreadyPicked = SystemArray.includes(system)
        if (!alreadyPicked) {
            SystemArray.push(system)
        }
        if (alreadyPicked) {
            SystemArray = SystemArray.filter(pickedTalent => pickedTalent !== system)
        }
        setChosenSystems(SystemArray)
        updateMechInfoField(SystemArray, 'systems')
    }


    const handleMechMount = (weaponsArray, mounttype) => {
        const updatedMounts = newPilot.mechInformation.frame.mounts.map(mount => {
            if (mount.name === mounttype) {
                return {
                    ...mount,
                    weapons: [...weaponsArray]
                }
            }
            return mount
        })
        const updatedMechinformation = {
            ...newPilot.mechInformation,
            frame: {
                ...newPilot.mechInformation.frame,
                mounts: updatedMounts
            }
        }
        const updatedPilot = {
            ...newPilot,
            mechInformation: updatedMechinformation
        }
        setNewPilot(updatedPilot)
    }

    const handleMechskill = (mechskillName, value) => {
        const mechskillObject = { ...chosenMechskills }
        const totalPointsSpent = chosenMechskills.hull + chosenMechskills.agility + chosenMechskills.systems + chosenMechskills.engineering
        if (value !== 0) {
            if (
                (totalPointsSpent === 1 && value === 2 && mechskillObject[mechskillName] === 0) ||
                (totalPointsSpent === 2 && (value === 2 || (value === 1 && mechskillObject[mechskillName] !== 2)))
            ) {
                return
            }
        }
        mechskillObject[mechskillName] = value
        setChosenMechskills(mechskillObject)
        updateMechInfoField(mechskillObject, 'skills')
    }

    // todo add custom error message and make this readable
    const spentAllMechSkillPoints = newPilot.mechInformation.skills.hull + newPilot.mechInformation.skills.agility + newPilot.mechInformation.skills.systems + newPilot.mechInformation.skills.engineering === 2
    const everythingIsFilledOut =
        newPilot?.pilotinformation?.name !== '' &&
        newPilot?.pilotinformation?.callsign !== '' &&
        newPilot?.pilotinformation?.background !== '' &&
        newPilot?.pilotinformation?.skilltriggers?.length !== 0 &&
        newPilot?.mechInformation?.frame?.manufacturer !== '' &&
        newPilot?.pilotinformation?.talents?.length !== '' &&
        spentAllMechSkillPoints &&
        newPilot?.mechInformation?.systems?.length !== 0 &&
        newPilot?.pilotinformation?.pilotgear?.length !== 0

    // todo highlight not fully picked categories


    return (
        <div className="characterCreationPage">
            <div className='sheetLabel'>
                No pilot found! Create a new one!
                <p onClick={() => showEverything()}>show me all info</p>
            </div>

            {/* name, callsign, background */}
            <div>
                <div className='sheetLabel' onClick={() => handleOpen('pilotInfo')} >
                    Pick a Name, Callsign, and Background:
                </div>
                {openComponent === 'pilotInfo' &&
                    <div className="pilotinformationContainer creationContainer">
                        <System
                            system={{ name: 'Pilot Name', tags: 'Pick a name for your Pilot' }}
                            systemType={'input'}
                            passValue={(value) => updatePilotInfoField(value, 'name')}
                            toggleSystem={false}
                        />
                        <System
                            system={{ name: 'Call Sign', tags: 'Pick a Call Sign for your Pilot' }}
                            systemType={'input'}
                            passValue={(value) => updatePilotInfoField(value, 'callsign')}
                            toggleSystem={false}
                        />
                        <System
                            system={{ name: 'Background', tags: 'Pick a Background for your Pilot (dropdown coming)' }}
                            systemType={'input'}
                            possibleOptions={PILOT_OPTIONS.BACKGROUNDS}
                            inputType={'dropdown'}
                            passValue={(value) => updatePilotInfoField(value, 'background')}
                            toggleSystem={false}
                        />
                    </div>
                }
            </div>

            {/* skill triggers */}
            <div>
                <div className='sheetLabel' onClick={() => handleOpen('skilltrigger')} >
                    Pick four Skill Trigger:
                </div>
                <div className="creationSkilltriggerContainer creationContainer">
                    {openComponent === 'skilltrigger' &&
                        Object.entries(PILOT_OPTIONS.SKILL_TRIGGER).map((skilltrigger, index) =>
                            <div className={chosenSkilltriggers.includes(skilltrigger[1]) ? 'highlighted' : ''} onClick={() => handleSkillTrigger(skilltrigger[1])} key={index}>
                                <System system={skilltrigger[1]} key={index} systemType={'skilltrigger'} />
                            </div>
                        )}
                </div>
            </div>

            {/* frame */}
            <div>
                <div className='sheetLabel' onClick={() => handleOpen('frames')} >
                    Pick a Frame:
                </div>
                <div className="creationContainer">
                    {openComponent === 'frames' &&
                        Object.entries(FRAMES).map((frame, index) =>
                            <div className={newPilot?.mechInformation?.frame?.name === frame[1].name ? 'highlighted' : ''} onClick={() => newPilot?.mechInformation?.frame?.name !== frame[1].name ? updateMechInfoField(frame[1], 'frame') : null} key={index}>
                                <Frame
                                    frame={frame[1]}
                                    key={index}
                                    creationMode={
                                        {
                                            isInCreationMode: true,
                                            pickedFrame: newPilot?.mechInformation?.frame?.name !== '' && newPilot?.mechInformation?.frame
                                        }
                                    }
                                    passMechName={(value) => updateMechInfoField(value, 'name')}
                                    passMechWeaponslotEntry={(array, type) => handleMechMount(array, type)}
                                />
                            </div>
                        )}
                </div>
            </div>

            {/* talents */}
            <div>
                <div className='sheetLabel' onClick={() => handleOpen('talents')} >
                    Pick three Talents:
                </div>
                <div className="creationTalentContainer creationContainer">
                    {openComponent === 'talents' &&
                        Object.entries(TALENTS).map((talent, index) =>
                            <div className={chosenTalents.includes(talent[1]) ? 'highlighted' : ''} onClick={() => handleTalent(talent[1])} key={index}>
                                <Talent talent={talent[1]} key={index} tiers={1} creationMode={true} />
                            </div>
                        )}
                </div>
            </div>

            {/* mech skills */}
            <div>
                <div className='sheetLabel' onClick={() => handleOpen('mechskill')} >
                    Place two Mech Skills points:
                </div>
                <div className="creationContainer">
                    {openComponent === 'mechskill' &&
                        <>
                            <Infobox
                                type={'pointPicker'}
                                name={'hull'}
                                flavortext={'Your HULL skill describes your ability to build and pilot durable, heavy mechs that can take punches and keep going.'}
                                handleClick={(mechskillName, value) => handleMechskill(mechskillName, value)}
                                pickedSkillValue={newPilot.mechInformation.skills.hull}
                            />
                            <Infobox
                                type={'pointPicker'}
                                name={'agility'}
                                flavortext={'Your AGILITY skill describes your ability to build and pilot fast, evasive mechs.'}

                                handleClick={(mechskillName, value) => handleMechskill(mechskillName, value)}
                                pickedSkillValue={newPilot.mechInformation.skills.agility}
                            />
                            <Infobox
                                type={'pointPicker'}
                                name={'systems'}
                                flavortext={'Your SYSTEMS skill describes your ability to build and pilot technical mechs with powerful electronic warfare tools.'}

                                handleClick={(mechskillName, value) => handleMechskill(mechskillName, value)}
                                pickedSkillValue={newPilot.mechInformation.skills.systems}
                            />
                            <Infobox
                                type={'pointPicker'}
                                name={'engineering'}
                                flavortext={'Your ENGINEERING skill describes your ability to build and pilot mechs with powerful reactors, supplies and support systems.'}

                                handleClick={(mechskillName, value) => handleMechskill(mechskillName, value)}
                                pickedSkillValue={newPilot.mechInformation.skills.engineering}
                            />
                        </>
                    }
                </div>
            </div>

            {/* systems  */}
            <div>
                <div className='sheetLabel' onClick={() => handleOpen('systems')} >
                    Pick your Systems: {systemPointsleft}/{totalSystemPoints}
                </div>
                <div className="creationContainer">
                    {openComponent === 'systems' &&
                        Object.entries(BASE_SYSTEMS).map((system, index) =>
                            <div className={chosenSystems.includes(system[1]) ? 'highlighted' : ''} onClick={() => handleSystem(system[1], 'system')} key={index}>
                                <System system={system[1]} key={index} systemType={'system'} toggleSystem={false} showCost={true} />
                            </div>
                        )}

                </div>
            </div>

            {/* pilot gear, limited + MISCELLANEOUS  */}
            <div>
                <div className='sheetLabel' onClick={() => handleOpen('pilotgear')} >
                    Pick up to three items:
                </div>
                <div className="creationContainer">
                    {openComponent === 'pilotgear' &&
                        Object.entries(PILOT_OPTIONS.PILOT_GEAR).map((pilotgear, index) =>
                            <div className={chosenPilotgear.includes(pilotgear[1]) ? 'highlighted' : ''} onClick={() => handlePilotgear(pilotgear[1], 'pilotgear')} key={index}>
                                <System system={pilotgear[1]} key={index} systemType={'pilotgear'} toggleSystem={false} />
                            </div>
                        )}

                </div>
            </div>


            <div className='confirmationButtonContainer'>
                <button className="tierLabel" type='button' onClick={() => setShowDeleteModal(!showDeleteModal)}>
                    reset values
                </button>
                <button className={"tierLabel selectedTierLabel"} type='button' onClick={() => setShowSaveModal(!showSaveModal)}>
                    save pilot and mech
                </button>
            </div>
            {showSaveModal && everythingIsFilledOut && (
                <AlertBox
                    message="Do you want to save the current pilot?"
                    buttonTextDeny="No"
                    buttonTextConfirm="Yes"
                    onDeny={() => setShowSaveModal(!showSaveModal)}
                    onConfirm={() => {
                        setShowSaveModal(!showSaveModal)
                        localStorage.setItem('lancerPlayer', JSON.stringify(newPilot))
                        localStorage.getItem('lancerPlayer') && alert(`Successfully saved pilot ${newPilot.name} locally to your device.`)
                        window.location.reload()
                    }}
                />
            )}
            {showSaveModal && !everythingIsFilledOut && (
                <AlertBox
                    message="Some information is missing."
                    closeModal={() => setShowSaveModal(!showSaveModal)}
                />
            )}
            {showDeleteModal && (
                <AlertBox
                    message="Do you want clear the form?"
                    buttonTextDeny="Keep Entry"
                    buttonTextConfirm="Clear Form"
                    onDeny={() => setShowDeleteModal(!showDeleteModal)}
                    onConfirm={() => {
                        setShowDeleteModal(!showDeleteModal)
                        window.location.reload()
                    }}
                />
            )}

        </div>
    )

}
export default CharacterCreationPage