import React from 'react'
import System from '../../components/System/system'
import actionsPic from '../../resources/actionsDiagram.jpg'
import data from '../../resources/playerResources.json'
import './home.css'

const Home = () => {

    const playerActions = data.actions

    return (
        <>
            <div className='homepage'>
                <h1>Welcome to the Home Page!</h1>
                <p>This app is great and displays information in a truly amazing way. Isn't this exciting? Click on the system boxes to open or close them. Pick your character in the character sheet page to display your information.</p>
                <ul>
                    A little guide:
                    <div>
                        You always have a move action (unless immobilized).
                    </div>
                    <div>
                        You have either 1 <span className='fullaction'>FULL ACTION</span> or 2 <span className='quickaction'>QUICK ACTION</span>s.
                    </div>
                    <div>
                        You can overcharge for an additional <span className='quickaction'>QUICK ACTION</span>.
                    </div>
                    <div>
                        <span className='protocol'>PROTOCOL</span>s happen at the beginning of your turn and don't cost an action to activate.
                    </div>
                    <div>
                        You have one <span className='reaction'>REACTION</span> per turn. Most reactions can only be used once per round.
                    </div>
                    <div>
                        By default you have the OVERWATCH and BRACE reactions, both usable once per round each.
                    </div>
                    <div>
                        <span className='hack'>HACK</span>s are listed at the bottom and can only be used within your Sensor range.
                    </div>
                </ul>
            </div >
            <img className='pic' src={actionsPic} alt="Logo" />
            <div className='actionContainer'>
                {
                    playerActions.map((action, index) => (
                        <System key={index} system={action} systemType={action.type} toggleSystem={false} />
                    ))
                }
            </div>
        </>


    )
}

export default Home