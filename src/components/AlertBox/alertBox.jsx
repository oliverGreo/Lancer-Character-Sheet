import React from 'react'
import './alertBox.css'

const AlertBox = ({ message, buttonTextDeny, buttonTextConfirm, onDeny, onConfirm, closeModal }) => {
    return (
        <div className="alertModal" >
            <div className="alertModalcontent" onClick={closeModal}>
                <p>{message}</p>
                <div className='modalButtonContainer'>
                    {buttonTextDeny && <button className="tierLabel" onClick={onDeny}>{buttonTextDeny}</button>}
                    {buttonTextConfirm && <button className="tierLabel selectedTierLabel" onClick={onConfirm}>{buttonTextConfirm}</button>}
                </div>
            </div>
        </div>
    );
};

export default AlertBox;

