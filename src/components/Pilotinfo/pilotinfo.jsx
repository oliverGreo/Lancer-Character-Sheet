import React from "react";
import Infobox from "../Infobox/infobox";
import "./pilotinfo.css";
import System from "../System/system";

const Pilotinfo = ({ pilot }) => {
    const {
        name,
        callsign,
        background,
        pilotgear,
        skilltriggers
    } = pilot

    return (
        <>
            <div className="pilotinfoContainer">
                <div className="pilotInfoBox">
                    <span className="pilotInfoBoxValue">
                        Name: <span>{name}</span>
                    </span>
                </div>
                <div className="pilotInfoBox">
                    <span className="pilotInfoBoxValue">
                        Callsign: <span>"{callsign}"</span>
                    </span>
                </div>
                <div className="pilotInfoBox">
                    <span className="pilotInfoBoxValue">
                        Background: <span>{background}</span>
                    </span>
                </div>
            </div>
            <div className="pilotinfoContainer">
                <div className="skilltriggers">
                    <span className="skilltriggerLabel label">
                        Skill Triggers
                    </span>
                    <div className="skilltriggerContainer">
                        {skilltriggers.map((skilltrigger,
                            index) =>
                            <System system={skilltrigger} systemType={'skilltrigger'} key={index} toggleSystem={false} />
                        )}
                    </div>
                </div>
                <div className="pilotgear">
                    <span className="skilltriggerLabel label">
                        Gear:
                    </span>
                    <div className="skilltriggerContainer">
                        {pilotgear.map((gear, index) =>
                            <System system={gear} systemType={'pilotgear'} key={index} toggleSystem={false} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pilotinfo