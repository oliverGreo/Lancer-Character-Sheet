const BASE_SYSTEMS = Object.freeze({
    // COMPCON_CLASS_ASSISTANT_UNIT: {
    //     name: "Comp/Con-Class Assistant Unit",
    //     cost: 2,
    //     description: "Your mech has a basic comp/con unit, granting it the AI tag. The comp/con can speak to you and has a personality, but, unlike an NHP, is not truly capable of independent thought. It is obedient to you alone. You can give control of your mech to its comp/con as a protocol, allowing your mech to act independently on your turn with its own set of actions. Unlike other AIs, a mech controlled by a comp/con has no independent initiative and requires direct input. Your mech will follow basic courses of action (defend this area, attack this enemy, protect me, etc.) to the best of its ability, or will act to defend itself if its instructions are complete or it receives no further guidance. You can issue new commands at the start of your turn as long as you are within 50 range and have the means to communicate with your mech. Comp/con units are not true NHPs and thus cannot enter cascade.",
    //     tags: 'AI, Unique'
    // },
    CUSTOM_PAINT_JOB: {
        name: "Custom Paint Job",
        cost: 1,
        description: "When you take structure damage, roll 1d6. On a 6, you return to 1 HP and ignore the damage– the hit simply ‘scratched your paint’. This system can only be used once before each FULL REPAIR, and is not a valid target for system destruction.",
        tags: 'Unique'
    },
    EXPANDED_COMPARTMENT: {
        name: "Expanded Compartment",
        cost: 1,
        description: "Your mech has space for one additional non MECH character or object of Size 1/2 to ride as a passenger in the cockpit. While inside the mech, they cannot suffer any effect from outside or be targeted by attacks, as if they were a pilot. You can hand over or take back control to or from them as a protocol (following the same rules as pilot and AIs), but if they take over the controls from you, the mech becomes IMPAIRED and SLOWED to reflect the lack of appropriate licenses and integration.",
        tags: 'Unique'
    },
    MANIPULATORS: {
        name: "Manipulators",
        cost: 1,
        description: "Your mech has an extra set of limbs. They are too small to have any combat benefit, but allow the mech to interact with objects that would otherwise be too small or sensitive (e.g., pilot-sized touch pads).",
        tags: 'Unique'
    },
    PATTERN_A_SMOKE_CHARGES: {
        name: "Pattern-A Smoke Charges",
        cost: 2,
        type: "quick action",
        description: "Expend a charge for one of the following effects: <br> Smoke Grenade (Grenade, Range 5, Blast 2): All characters and objects within the blast area benefit from soft cover until the end of your next turn, at which point the smoke disperses. <br> Smoke Mine (Mine, Blast 3): This mine detonates when any allied character moves over or adjacent to it. All characters and objects within the burst area benefit from soft cover until the end of the detonating character’s next turn, at which point the smoke disperses.",
        tags: 'Limited 3, Unique'
    },
    PATTERN_A_JERICHO_DEPLOYABLE_COVER: {
        name: "Pattern-A Jericho Deployable Cover",
        cost: 2,
        type: "quick action",
        description: "Deploy two sections of SIZE 1 hard cover in free spaces adjacent to you and to each other. Each section is an object with 5 EVASION and 10 HP that can be targeted and destroyed individually. Sections of cover can be picked up again as a full action. Repairing the system restores both sections.",
        tags: 'Deployable, Unique, Quick Action'
    },
    PATTERN_B_HEX_CHARGES: {
        name: "Pattern-B HEX Charges",
        cost: 2,
        type: "quick action",
        description: "Expend a charge from this system for one of the following effects: <br> Frag Grenade (Grenade, Range 5, Blast 1): All characters within the affected area must pass an AGILITY save or take 1d6 kinetic damage. On a success, they take half damage. <br> Explosive Mine (Mine, Range 1): All characters within the affected area must pass an AGILITY save or take 2d6 kinetic damage. On a success, they take half damage.",
        tags: 'Limited 3, Unique'
    },
    PERSONALIZATIONS: {
        name: "Personalizations",
        cost: 1,
        description: "You gain +2 HP and, in consultation with the GM, you may establish a minor modification you have made to your mech. This mod has no numerical benefit beyond the additional HP it grants, but could provide other useful effects. If the GM agrees that this mod would help with either a pilot or mech skill check, you gain +1 accuracy for that check.",
        tags: 'Unique'
    },
    STABLE_STRUCTURE: {
        name: "Stable Structure",
        cost: 2,
        description: "You gain +1 accuracy on saves to avoid PRONE or KNOCKBACK.",
        tags: 'Unique'
    },
    TURRET_DRONES: {
        name: "Turret Drones",
        type: "quick action",
        description: "Expend a charge to deploy a turret drone that attaches to any object or surface within Sensors and line of sight. Gain the Turret Attack reaction, which can be taken once for each deployed turret drone. Turret drones cannot be recalled and expire at the end of the scene.",
        cost: 2,
        extras: [
            {
                name: "Turret Attack",
                type: "reaction",
                frequency: "1/round per turret",
                reactionTrigger: "An allied character within Range 10 of a turret drone makes a successful attack.",
                description: "The turret drone deals 3 Kinetic damage to their target, as long as it has line of sight to their target."
            }
        ],
        tags: "Unique, Limited 3, Drone, Quick Action"
    },
    TYPE_3_PROJECTED_SHIELD: {
        name: "Type-3 Projected Shield",
        cost: 2,
        type: "protocol",
        description: "Nominate a character within line of sight: all ranged or melee attacks that they make against you or that you make against them gain +2 difficulty until the start of your next turn.",
        tags: 'Shield, Unique, Protocol, 1 Heat (Self)'
    },
    // EVA_MODULE: {
    //     name: "EVA Module",
    //     cost: 1,
    //     description: "Your mech has a propulsion system suitable for use in low or zero gravity and underwater environments. In those environments, you can fly and are not SLOWED.",
    //     tags: 'Unique'
    // },
    RAPID_BURST_JUMP_JET_SYSTEM: {
        name: "Rapid Burst Jump Jet System",
        cost: 2,
        description: "You can fly when you BOOST; however, you must end the movement on the ground or another solid surface, or else immediately begin falling.",
        tags: 'Unique'
    },
    TYPE_I_FLIGHT_SYSTEM: {
        name: "Type-I Flight System",
        cost: 3,
        description: "You can fly when you BOOST or make a standard move; however, you take SIZE +1 heat at the end of any of your turns in which you fly this way.",
        tags: 'Unique'
    }
})

export default BASE_SYSTEMS