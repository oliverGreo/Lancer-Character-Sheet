
import React, { useState } from 'react'
import './navigationbar.css'
import AlertBox from '../AlertBox/alertBox'

const Navigationbar = () => {
    const [navbarModalIsOpen, setNavbarModalIsOpen] = useState(false)

    return (
        <div className='navigationbar'>
            <a href='/'>Home</a>
            <a href='/charactersheet'>Character Sheet</a>
            <a href='/npcs'>NPCs</a>
            {localStorage.getItem('lancerPlayer') && <button className='navbarDeleteButton' type='button' onClick={() => setNavbarModalIsOpen(true)}>x</button>}
            {navbarModalIsOpen && localStorage.getItem('lancerPlayer') && (
                <AlertBox
                    message="Do you want to delete the saved entry?"
                    buttonTextDeny="No"
                    buttonTextConfirm="Yes"
                    onDeny={() => setNavbarModalIsOpen(!navbarModalIsOpen)}
                    onConfirm={() => {
                        setNavbarModalIsOpen(!navbarModalIsOpen)
                        if (localStorage.getItem('lancerPlayer')) {
                            localStorage.removeItem('lancerPlayer')
                            !localStorage.getItem('lancerPlayer') && alert(`Successfully deleted entry locally from your device.`)
                            localStorage.getItem('lancerPlayer') && alert('Something went wrong, ask Oliver.')
                            window.location.reload()
                            return
                        }
                    }}
                />
            )}
        </div>
    )
}

export default Navigationbar;