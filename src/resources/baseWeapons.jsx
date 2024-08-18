const BASE_WEAPONS = Object.freeze({
    ANTI_MATERIEL_RIFLE: {
        name: "Anti-Materiel Rifle",
        size: "Heavy",
        type: "Rifle",
        tags: 'Accurate, Armor Piercing, Loading, Ordnance',
        range: "20",
        damage: "2d6"
    },
    ASSAULT_RIFLE: {
        name: "Assault Rifle",
        size: "Main",
        type: "Rifle",
        tags: "Reliable 2",
        range: "10",
        damage: "1d6"
    },
    CHARGED_BLADE: {
        name: "Charged Blade",
        size: "Main",
        type: "Melee",
        tags: "Armor Piercing",
        threat: "1",
        damage: "1d3+3"
    },
    CYCLONE_PULSE_RIFLE: {
        name: "Cyclone Pulse Rifle",
        size: "Superheavy",
        type: "Rifle",
        tags: "Accurate, Loading, Reliable 5",
        range: "15",
        damage: "3d6+3"
    },
    HEAVY_CHARGED_BLADE: {
        name: "Heavy Charged Blade",
        size: "Heavy",
        type: "Melee",
        tags: "Armor Piercing",
        threat: "1",
        damage: "1d6+3"
    },
    HEAVY_MACHINE_GUN: {
        name: "Heavy Machine Gun",
        size: "Heavy",
        type: "Cannon",
        tags: "Inaccurate",
        range: "8",
        damage: "2d6+4"
    },
    HEAVY_MELEE_WEAPON: {
        name: "Heavy Melee Weapon",
        size: "Heavy",
        type: "Melee",
        tags: null,
        threat: "1",
        damage: "2d6+1"
    },
    HOWITZER: {
        name: "Howitzer",
        size: "Heavy",
        type: "Cannon",
        tags: "Arcing, Inaccurate, Loading, Ordnance",
        range: "20",
        damage: "2d6 (Blast 2)"
    },
    MISSILE_RACK: {
        name: "Missile Rack",
        size: "Auxiliary",
        type: "Launcher",
        tags: "Loading",
        range: "10",
        damage: "1d3+1 (Blast 1)"
    },
    MORTAR: {
        name: "Mortar",
        size: "Main",
        type: "Cannon",
        tags: "Arcing, Inaccurate",
        range: "15",
        damage: "1d6+1 (Blast 1)"
    },
    NEXUS_HUNTER_KILLER: {
        name: "Nexus (Hunter-Killer)",
        size: "Main",
        type: "Nexus",
        tags: "Smart",
        range: "10",
        damage: "1d6"
    },
    NEXUS_LIGHT: {
        name: "Nexus (Light)",
        size: "Auxiliary",
        type: "Nexus",
        tags: "Smart",
        range: "10",
        damage: "1d3"
    },
    PISTOL: {
        name: "Pistol",
        size: "Auxiliary",
        type: "CQB",
        tags: "Reliable 1",
        range: "5",
        threat: "3",
        damage: "1d3"
    },
    SEGMENT_KNIFE: {
        name: "Segment Knife",
        size: "Auxiliary",
        type: "Melee",
        tags: "Overkill",
        range: "1",
        damage: "1d3+1"
    },
    ROCKET_PROPELLED_GRENADE: {
        name: "Rocket-Propelled Grenade",
        size: "Main",
        type: "Launcher",
        tags: "Loading, Ordnance",
        range: "10",
        damage: "1d6+1 (Blast 2)"
    },
    SHOTGUN: {
        name: "Shotgun",
        size: "Main",
        type: "CQB",
        tags: null,
        range: "5",
        threat: "3",
        damage: "1d6"
    },
    TACTICAL_KNIFE: {
        name: "Tactical Knife",
        size: "Auxiliary",
        type: "Melee",
        tags: "Thrown 3",
        threat: "1",
        damage: "1d3+1"
    },
    TACTICAL_MELEE_WEAPON: {
        name: "Tactical Melee Weapon",
        size: "Main",
        type: "Melee",
        tags: null,
        threat: "1",
        damage: "1d6+2"
    },
    THERMAL_LANCE: {
        name: "Thermal Lance",
        size: "Heavy",
        type: "Cannon",
        tags: "Heat 2 (self)",
        range: "Line 10",
        damage: "1d6+3"
    },
    THERMAL_PISTOL: {
        name: "Thermal Pistol",
        size: "Auxiliary",
        type: "CQB",
        tags: null,
        range: "Line 5",
        damage: "2"
    },
    THERMAL_RIFLE: {
        name: "Thermal Rifle",
        size: "Main",
        type: "Rifle",
        tags: "Armor Piercing",
        range: "5",
        damage: "1d3+2"
    }
})

export default BASE_WEAPONS