import React, { useState } from "react";
import AlertBox from "../../components/AlertBox/alertBox";

const Savepage = (props) => {
    const { player } = props
    const [deletionModalIsOpen, setDeletionModalIsOpen] = useState(false)

    // since the player is created and saved somewhere else, this probably isn't necessary anymore

    const handleSave = (code) => {
        if (code === 'yes') {
            if (localStorage.getItem('lancerPlayer')) {
                alert('Already got a saved player. Delete the entry first')
                return
            }
            localStorage.setItem('lancerPlayer', JSON.stringify(player))
            localStorage.getItem('lancerPlayer') && alert(`Successfully saved player pilot entry locally to your device.`)
            !localStorage.getItem('lancerPlayer') && alert('Something went wrong, ask Oliver.')
        }
        if (code === 'no') {
            alert('Cool, not saved then..')
        }
        if (code === 'delete') {
            if (!localStorage.getItem('lancerPlayer')) {
                alert('Nothing to delete.')
                return
            }
            if (localStorage.getItem('lancerPlayer')) {
                localStorage.removeItem('lancerPlayer')
                !localStorage.getItem('lancerPlayer') && alert(`Successfully removed pilot entry locally from your device.`)
                localStorage.getItem('lancerPlayer') && alert('Something went wrong, ask Oliver.')
                window.location.reload()
                return
            }
        }
    }

    return (
        <div>
            <div className='sheetLabel'>
                Do you want to delete your saved Pilot?
            </div>
            <div className='saveButtonContainer'>
                {/* <button className='answerButton' onClick={() => handleSave('yes')}>Yes</button>
                <button className='answerButton' onClick={() => handleSave('no')}>No</button> */}
                {/* <button className='answerButton deleteButton' onClick={() => handleSave('delete')}>Delete Save</button> */}
                <button className='answerButton deleteButton' onClick={() => setDeletionModalIsOpen(true)}>Delete Save</button>
            </div>
            {deletionModalIsOpen &&
                <AlertBox
                    message={'Do you really want to delete your local entry?'}
                    buttonTextDeny={'Keep Entry'}
                    buttonTextConfirm={'Delete Entry locally'}
                    onDeny={() => setDeletionModalIsOpen(false)}
                    onConfirm={() => handleSave('delete')}
                />}
        </div>
    )

}
export default Savepage