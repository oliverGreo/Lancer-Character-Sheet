import React, { useState } from 'react'
import './tier.css'
import Infobox from '../Infobox/infobox'

const Tier = ({
    tier,
    tierLevel,
    toggleSystem,
    pickThisItem
}) => {

    const {
        name,
        description,
        extras
    } = tier

    const [isOpen, setIsOpen] = useState(true)

    const handleClick = () => {
        if (toggleSystem === false) {
            return
        }
        pickThisItem && pickThisItem(tier)
        toggleSystem && setIsOpen(!isOpen)
    }

    return (
        <div className='tier' onClick={() => handleClick()}>
            <div className='tierName'>
                <span>{name}</span><span>Tier: {tierLevel}</span>
            </div>
            {isOpen &&
                <>
                    <div dangerouslySetInnerHTML={{ __html: description }} className='tierDescription' />
                    {extras && extras.map((extra, index) => (
                        <Infobox key={index} data={extra} type='system' />
                    ))}
                </>
            }
        </div>)
}

export default Tier