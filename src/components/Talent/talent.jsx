import React, { useState } from 'react'
import Tier from '../Tier/tier'
import './talent.css'
import TALENTS from '../../resources/talents'

const Talent = ({
    talent: {
        name,
        tiers
    },
    toggleSystem,
    pickThisItem,
    creationMode
}) => {


    const [isOpen, setIsOpen] = useState(true)

    const talent = TALENTS[name.replace(/ /g, '_').toUpperCase()]

    const handleClick = () => {
        !pickThisItem && toggleSystem && setIsOpen(!isOpen)
    }

    return (
        <div className={'talent'}>
            <div className='talentName' onClick={() => handleClick()}>
                <span>{name}</span>
            </div >
            {isOpen &&
                <div className='talentContent' >
                    {creationMode ?
                        <Tier
                            tier={talent.tiers[0]}
                            tierLevel={1}
                            toggleSystem={toggleSystem}
                            pickThisItem={pickThisItem} />

                        :
                        talent.tiers.map((tier, index) =>
                            <Tier
                                key={index}
                                tier={tier}
                                tierLevel={index + 1}
                                toggleSystem={toggleSystem}
                                pickThisItem={pickThisItem} />
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Talent

