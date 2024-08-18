const FRAMES = {
    EVEREST:
    {
        name: 'Everest',
        manufacturer: 'GMS',
        stats: {
            size: 1,
            armor: 0,
            hp: 10,
            repaircap: 5,
            evasion: 8,
            speed: 4,
            savetarget: 10,
            sensors: 10,
            edefense: 8,
            techattack: 0,
            sp: 6,
            heatcap: 6,
            limitedbonus: 0
            // attackbonus: 0
        },
        traits: [{
            name: 'Initiative',
            type: 'protocol',
            frequency: '1/scene',
            description: 'The Everest may take any quick action as a free action.'
        },
        {
            name: 'Replaceable Parts',
            type: 'passive',
            description: 'While resting, the Everest can be repaired at a rate of 1 REPAIR per 1 structure damage, instead of 2 REPAIRS.'
        }],
        coresystem: {
            name: 'Power Up',
            type: 'protocol',
            isCorepower: true,
            description: 'For the rest of this scene, you gain +1 accuracy on all attacks, checks, and saves; additionally, 1/turn, you can BOOST as a free action.',
        }
        ,
        mounts: [
            {
                name: 'Main',
                weapons: []
            },
            {
                name: 'Flex',
                weapons: []
            },
            {
                name: 'Heavy',
                weapons: []
            }
        ]
    },

}
export default FRAMES