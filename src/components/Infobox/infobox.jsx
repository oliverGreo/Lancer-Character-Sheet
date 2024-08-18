import React from "react"
import './infobox.css'

const Infobox = ({ type, name, flavortext, handleClick, pickedSkillValue }) => {

    let description = ''
    switch (name) {
        case 'hull':
            description = `+${pickedSkillValue * 2} HP <br>+${Math.floor(pickedSkillValue / 2)} Repair Hull`
            break
        case 'agility':
            description = `+${pickedSkillValue} Evasion<br>+${Math.floor(pickedSkillValue / 2)} Speed`
            break
        case 'systems':
            description = `+${pickedSkillValue} E-Defense<br>+${pickedSkillValue} Tech Attack<br>+${Math.floor(pickedSkillValue / 2)} System Point`
            break
        case 'engineering':
            description = `+${pickedSkillValue} Heat Cap<br>+${Math.floor(pickedSkillValue / 2)} Limited System use`
            break
        default:
            description = ''
    }

    const renderButton = (value, extraClass = '') => (
        <p
            className={`${(pickedSkillValue >= value) && value !== 0 ? "mechskillButton highlighted" : "mechskillButton"} ${extraClass}`}
            onClick={() => handleClick(name, value)}
        >
            {value}
        </p>
    )

    if (type === 'pointPicker') {
        return (
            <div className={'infobox system'}>
                <div className='systemName mechskillName'>
                    <span>{name}</span>
                </div>
                <div>
                    <div className='mechskillFlavortext'>
                        {flavortext}
                    </div>
                    <div className='systemDescription mechskillDescriptionContainer'>
                        <div>
                            {renderButton(0, 'buttonZero')}
                            {renderButton(1)}
                            {renderButton(2)}
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: description }} className='mechskillDescription' />
                    </div>
                </div>
            </div>
        )
    }

    return null
}

export default Infobox