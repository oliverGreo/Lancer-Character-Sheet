import React from "react";
import BASE_WEAPONS from '../../resources/baseWeapons';
import System from "../System/system";
import "./mechinfo.css";

const Mechinfo = ({ mech }) => {

    const weaponsArray = []

    const mounts = mech.frame.mounts
    mounts.map(mount => mount.weapons.forEach(weaponName => {
        weaponsArray.push(BASE_WEAPONS[weaponName])
    }))

    return (
        <div className="mechinfoContainer">
            <div className="mechNameBox">
                <div className="mechName">
                    {mech.frame.manufacturer} {mech.frame.name} - {mech.name}
                </div>
            </div>
            <div className="mechinfoMountContainer">
                {mech.frame.mounts.map((mount, index) => (
                    <System key={index} system={mount} systemType={'mount'} toggleSystem={false} />
                ))
                }
            </div>
            <System system={mech.frame.coresystem} systemType={'coresystem'} toggleSystem={false} />
            {mech.frame.traits.map((trait, index) => (
                <System key={index} system={trait} systemType={'trait'} toggleSystem={false} />
            ))
            }
        </div>
    )
}

export default Mechinfo