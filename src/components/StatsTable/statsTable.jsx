import React from "react";
import './statsTable.css'

const StatsTable = (props) => {
    const { stats } = props

    return (
        <div className="statsContainer">
            <div className="label">
                CORE STATS
            </div>
            <div className='statTable'>
                <div className='stat'>
                    <span className='statLabel'>HP</span>
                    <span className='statValue'>{stats.hp}</span>
                </div>
                <div className='stat'>
                    <span className='statLabel'>Heatcap</span>
                    <span className='statValue'>{stats.heatcap}</span>
                </div>
                <div className='stat'>
                    <span className='statLabel'>Evasion</span>
                    <span className='statValue'>{stats.evasion}</span>
                </div>
                <div className='stat'>
                    <span className='statLabel'>E-Defense</span>
                    <span className='statValue'>{stats.edefense}</span>
                </div>
                {stats.structure ?
                    <div className='stat'>
                        <span className='statLabel'>Structure</span>
                        <span className='statValue'>{stats.structure}</span>
                    </div>
                    : null}
                {stats.stress ?
                    <div className='stat'>
                        <span className='statLabel'>Stress</span>
                        <span className='statValue'>{stats.stress ? stats.stress : 1}</span>
                    </div>
                    : null}
                <div className='stat'>
                    <span className='statLabel'>Armor</span>
                    <span className='statValue'>{stats.armor}</span>
                </div>
                <div className='stat'>
                    <span className='statLabel'>Speed</span>
                    <span className='statValue'>{stats.speed}</span>
                </div>

                <div className='stat'>
                    <span className='statLabel'>Sensors</span>
                    <span className='statValue'>{stats.sensors}</span>
                </div>
                <div className='stat'>
                    <span className='statLabel'>Size</span>
                    <span className='statValue'>{stats.size}</span>
                </div>
                <div className='stat'>
                    <span className='statLabel'>Save</span>
                    <span className='statValue'>{stats.savetarget}</span>
                </div>
                {stats.repaircap ?
                    <div className='stat'>
                        <span className='statLabel'>Repair Cap</span>
                        <span className='statValue'>{stats.repaircap}</span>
                    </div>
                    : null}
                {stats.attackbonus ?
                    <div className='stat'>
                        <span className='statLabel'>Attack +</span>
                        <span className='statValue'>{stats.attackbonus ? stats.attackbonus : 0}</span>
                    </div>
                    : null}
                {stats.techattack ?
                    <div className='stat'>
                        <span className='statLabel'>Tech +</span>
                        <span className='statValue'>{stats.techattack != null ? stats.techattack : 0}</span>
                    </div>
                    : null}
                {stats.limitedbonus ?
                    <div className='stat'>
                        <span className='statLabel'>Limited +</span>
                        <span className='statValue'>{stats.limitedbonus ? stats.limitedbonus : 0}</span>
                    </div>
                    : null}
            </div>
        </div >
    )
}

export default StatsTable