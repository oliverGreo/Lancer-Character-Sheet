const TALENTS = {
    ACE:
    {
        name: 'Ace',
        description: 'Every pilot brags about their abilities; occasionally, some even have the reputation to back it up. Harmonious Domesticity is one of these pilots. As an ace, they aren’t just ranked among the most qualified of pilots – they’re among the most qualified of lancers. Whether you’re a talented rookie or a grizzled veteran, you’re one of these aces.Your skills as a pilot are notorious enough that your callsign is known throughout the system.',
        tiers: [
            {
                name: 'Acrobatics',
                description: 'While flying, you get the following benefits: <br> You make all AGILITY checks and saves with +1 accuracy. <br> Any time an attack misses you, you may fly up to 2 spaces in any direction as a reaction.',
            },
            {
                name: 'Afterburners',
                description: 'When you BOOST while flying, you may move an additional 1d6 spaces, but take heat equal to half that amount.',
            },
            {
                name: 'Supersonic',
                description: 'As a quick action on your turn, you may spin up your thrusters. If you end your turn flying, you may nominate a character within a RANGE equal to your SPEED and line of sight, and gain this reaction',
                extras: [
                    {
                        name: 'Supersonic',
                        type: 'reaction',
                        frequency: '1/round',
                        reactionTrigger: 'Your target\'s turn ends.',
                        description: 'You fly to a space free and adjacent to them. There must be a path to do so but you can move even if the nominated character is no longer within your movement range or line of sight. This ignores engagement and does not provoke reactions.'
                    }

                ]
            }
        ]
    },
    BONDED: {
        name: 'Bonded',
        description: 'The galaxy is a dangerous place, and everyone should have a friend to watch their back. Luckily, you’ve found yours. Maybe you enlisted together or were the only survivors of a bloody engagement. Maybe you didn’t start out as friends, or maybe you were raised to fight alongside each other – however your friendship came to be, when it comes time to drop, there’s no one you’d rather have at your side. Alone, you’re deadly; together, you’re a force of nature.',
        tiers: [
            {
                name: 'I’m Your Huckleberry',
                description: 'When you take this talent, choose another pilot to be your BONDMATE. Any mech skill checks and saves either character makes while you are adjacent gain +1 accuracy. If both characters have this talent, this increases to +2 accuracy, but additional characters with this talent can’t increase it any further. Between missions, you can replace your BONDMATE with a new one, but only if your relationship with them has changed.'
            },
            {
                name: 'Sundance',
                description: 'Gain the following reaction:',
                extras: [
                    {
                        name: 'Intercede',
                        type: 'reaction',
                        frequency: '1/round',
                        reactionTrigger: 'You are adjacent your BONDMATE and they take damage from a source within your line of sight.',
                        description: 'You may take the damage instead.'
                    }
                ]
            },
            {
                name: 'Intercede',
                description: 'If a character within your line of sight attempts to attack your BONDMATE, you can spend your OVERWATCH to threaten the attacker, forcing them to either choose a different target or attack anyway: if they attack a different target, your OVERWATCH is expended without effect; if they choose to attack anyway, you can immediately attack them with OVERWATCH, as long as they are within RANGE and line of sight. This attack resolves before the triggering attack.',

            }
        ]
    },

    BRAWLER: {
        name: 'Brawler',
        description: 'Up close and personal. The way battle was done since the dawn of time, then forgotten with the first spark of gunpowder. Tempest Gloire is one pilot who prefers the old ways: hand-to-hand, weapons discarded, just the strength of her machine versus the strength of all others. You and her both know that the sweetest victory is found at the culmination of a dance as old as war itself, with the first trick known to humanity: a fist to your enemy’s face.',
        tiers: [
            {
                name: 'Hold and Lock',
                description: 'You gain +1 accuracy on all melee attacks against targets you are GRAPPLING.'
            },
            {
                name: 'Sledgehammer',
                description: 'Your IMPROVISED ATTACKS gain KNOCKBACK 2 and deal 2d6+2 damage.'
            },
            {
                name: 'Knockout Blow',
                description: 'Gain a BRAWLER DIE, 1d6 starting at 6. Each time you GRAPPLE, RAM, or make an IMPROVISED ATTACK, lower the value of the BRAWLER DIE by 1. When the BRAWLER DIE reaches 1, you may reset it to 6 and, as a full action, make a knockout blow against an adjacent character. They must pass a HULL save, or take 2d6+2 kinetic damage and become STUNNED until the end of their next turn. The value of your BRAWLER DIE persists between scenes, but it resets to 6 when you rest or perform a FULL REPAIR.'
            }
        ]
    },
    BRUTAL: {
        name: 'Brutal',
        description: 'In the practice ring as in live combat, Aubrey Deckard only knows one way to fight: as fast and messy as possible. When others go hard, she goes hardest; when the order is to eliminate the enemy, she does so with prejudice. This isn’t a dance, it isn’t a game – it’s war, and Brutal lancers mean to see it through. If that means becoming a little bit of a monster, then so be it: the dead can hate from the grave.',
        tiers: [
            {
                name: 'Predator',
                description: 'When you roll a 20 on a die for any attack (‘natural 20’) and critical hit, you deal the maximum possible damage and bonus damage.'
            },
            {
                name: 'Cull the Herd',
                description: 'Your critical hits gain KNOCKBACK 1.'
            },
            {
                name: 'Relentless',
                description: 'When you make an attack roll and miss, your next attack roll gains +1 accuracy. This effect stacks and persists until you hit.'
            }
        ]
    },
    CRACK_SHOT: {
        name: 'Crack Shot',
        description: 'Thanks to modern technology, anyone can hit anything these days. Targeting assist. Smart weapons. AIs whispering in people’s ears, moving their hands, squeezing the trigger for them: doing everything but taking credit for the kill. But Strymon Bulis is different. He finds hitting a target is as easy as looking at it, inside of his mech and out. No targeting assist for him; no AI required. All he needs is a zeroed sight, a fresh magazine, and a target downrange...',
        tiers: [
            {
                name: 'Stable, Steady',
                description: 'As a protocol, you may steady your aim. If you do, you become IMMOBILIZED until the start of your next turn but gain +1 accuracy on all attacks you make with RIFLES.'
            },
            {
                name: 'Zero In',
                description: '1/round, while steadying your aim and making a ranged attack with a RIFLE, you can attempt to hit a weak point: gain +1 accuracy on the attack roll, and deal +1d6 bonus damage on a critical hit.'
            },
            {
                name: 'Watch This',
                description: '1/round, when you perform a critical hit with a RIFLE while steadying your aim, your target must pass a HULL save or you may choose an additional effect for your attack: <br> Headshot: They only have line of sight to adjacent spaces until the end of their next turn. <br> Leg Shot: They become IMMOBILIZED until the end of their next turn. <br> Body Shot: They are knocked PRONE.',

            }
        ]
    },
    CENTIMANE: {
        name: 'Centimane',
        description: 'In the aftermath of the attack on Tartarus Bay, an anonymous source identified agents of the Karrakin Royal Intelligence Service as the culprits. The Baronies quickly released a statement of denial, which was never countered with hard evidence. Rumors of raw footage from the attack were unsubstantiated. Public reaction – anger, terror – to the station’s destruction quieted. The corpse of Tartarus Bay was shunted away from its stable orbit, directed toward the nearest star. A month later, Baronies-local omninet was flooded with previously suppressed footage from the attack on the station, confirming the rumors: Baronic agents did release the greywash swarm into Tartarus Bay. Further data dumps by Ungrateful agents indicated the existence of a secret Baronic intelligence outfit: the Centimane – the Hundred Hands.',
        tiers: [
            {
                name: 'Ten Thousand Teeth',
                description: '1/round, when you perform a critical hit with a NEXUS, your target must pass a SYSTEMS save or become IMPAIRED and SLOWED until the end of their next turn.'
            },
            {
                name: 'Expose Weakness',
                description: 'When you consume LOCK ON as part of an attack with a NEXUS or DRONE and perform a critical hit, your target becomes SHREDDED until the start of your next turn.'
            },
            {
                name: 'Tidal Suppression',
                description: 'This replaces TEN THOUSAND TEETH. <br>1/round, when you perform a critical hit with a NEXUS, your target must succeed on a SYSTEMS save or you may choose an additional effect for your attack that lasts until the end of their next turn: <br> Harrying Swarm: They become IMPAIRED and SLOWED. <br> Blinding Swarm: They only have line of sight to adjacent squares. <br> Virulent Swarm: They become SHREDDED. Any adjacent characters of your choice must also make a SYSTEMS save or becomeHREDDED. <br> Restricting Swarm: They take 1 burn each time they take an action or reaction.',
            }
        ]
    },
    COMBINED_ARMS: {
        name: 'Combined Arms',
        description: 'True strength in combat doesn’t come from mastering the blade or the gun – it comes from knowing how to use both. Through time and training, Leika McGraff has combined the arts of melee and ranged combat into a single deadly combination. No matter the foe, Leika is a deadly threat; no matter the weapon, Leika is a master of its employ.',
        tiers: [
            {
                name: 'Shield of Blades',
                description: 'As long as you’re ENGAGED, you and any allies adjacent to you count as having soft cover.'
            },
            {
                name: 'CQB-Trained',
                description: 'You don’t gain DIFFICULTY from being ENGAGED. (Ranged attacks gain +1 Difficulty while engaged.)'
            },
            {
                name: 'Storm of Violence',
                description: 'Whenever you hit a character with a melee attack, you gain +1 accuracy on your next ranged attack against them; and, whenever you hit a character with a ranged attack, you gain +1 accuracy on your next melee attack against them. This effect doesn’t stack.'
            }
        ]
    },
    DUELIST: {
        name: 'Duelist',
        description: 'There can be an elegance to the way a mech moves – an alacrity that elevates it beyond the simple strength of machine and cannon. The difference is in the tools. Ethan "Orion" Miller wields weapons crafted by artisans, boutique manufacturers, specialty lines from the big five, blades that hark back to a time where combat was quick but fair – back to a time where skill meant more than landing an accurate shot. With a blade, lance, pick, axe, or hammer in their hand, Orion writes old tales anew.',
        tiers: [
            {
                name: 'Partisan',
                description: 'Gain +1 accuracy on the first melee attack you make with a MAIN MELEE weapon on your turn.'
            },
            {
                name: 'Blademaster',
                description: '1/round, when you hit with a MAIN MELEE weapon, you gain 1 BLADEMASTER DIE – a d6 – up to a maximum of 3 BLADEMASTER DIE. They last until expended or the current scene ends. You can expend BLADEMASTER DICE 1-for-1 for the following: <br> Parry: As a reaction when you’re hit by a melee attack, you gain RESISTANCE to all damage, heat, and burn dealt by the attack. <br> Deflect: As a reaction when you’re hit by a ranged attack, you may roll any number of BLADEMASTER DICE, expending them: if you roll a 5+ on any of these dice, you gain RESISTANCE to all damage, heat, and burn dealt by the attack. <br> Feint: As a free action, choose an adjacent character: when moving, you ignore engagement and don’t provoke reactions from your target until the start of your next turn. <br> Trip: As a quick action, choose an adjacent character: they must pass an AGILITY save or fall PRONE. Whatever the result, you may freely pass through their space until the end of your current turn, although you can’t end your turn in their space.',
            },
            {
                name: 'Unstoppable',
                description: '1/round, when you hit with a melee attack on your turn, you may spend a BLADEMASTER DIE to immediately GRAPPLE or RAM your target as a free action after the attack has been resolved.'
            }
        ]
    },
    DRONE_COMMANDER: {
        name: 'Drone Commander',
        description: 'For a pilot fresh out of boot, keeping a drone swarm in line is like trying to carry water with a net. If they seem to have a mind of their own, it’s because they do, and it’s not that smart. Clymene Kanalakos’s initial frustration was enough to get her practicing, and practice pays off. Now, her swarm obeys almost before she orders – an unnerving development, but a useful one. The swarm is hers.',
        tiers: [
            {
                name: 'Shepherd',
                description: 'Your DRONE systems gain +5 HP. As a protocol, you may move one DRONE that you control and that is within SENSORS up to 4 spaces.'
            },
            {
                name: 'Energized Swarm',
                description: '1/round, when you make an attack that consumes the LOCK ON condition, your DRONES immediately emit a vicious pulse of energy. All characters of your choice within 1 Blast areas centered on each of your drones take 1d6 energy damage. Each character can only be affected by the pulse from one drone, even if the areas overlap.'
            },
            {
                name: 'Invigorate',
                description: 'As a quick action, you may send a pulse of energy to an allied character (including DRONES) within Range 3, drawing a LINE to them. You may extend the pulse from your target to another allied character, extending the LINE to them, as long as they are within Range 3, and you may continue extending the pulse (and LINE) like this as long as you don’t target the same character twice. Allied characters who are used as pulse targets or are in the LINE’s path gain 4 OVERSHIELD; hostile characters in the LINE’s path take 2 energy damage instead.'
            }
        ]
    },
    ENGINEER: {
        name: 'Engineer',
        description: 'Pilots are creative and driven people, but Mesa Rownett is an exceptional case – excessively so, some would say. In his spare time, he’s managed to scrape together just enough scrap, requisitioned materials, and workshop space to apply a little old-fashioned ingenuity to his mech, fashioning it into a formidable machine not betrayed by its outward appearance.',
        tiers: [
            {
                name: 'Prototype',
                description: 'When you perform a FULL REPAIR, you can, with some trial and error, install a prototype weapon system on your mech. You may choose characteristics for your prototype weapon based on the following profile each time you perform a FULL REPAIR, rerolling 1d6+2 to determine LIMITED each time. <br> This weapon is an experimental prototype, customized according to your specific requirements. When you install it, or during a FULL REPAIR, you may choose a new weapon type, damage type, and either Threat 1 (melee) or Range 10 (all other types). Additionally, each time you perform a FULL REPAIR, reroll 1d6+2 to determine this weapon’s LIMITED uses. Damage: 1d6+2 energy, heat, or burn. This weapon counts as an integrated mount and does not require a mount.',
                extras: [{
                    name: 'Prototype Weapon',
                    type: 'weapon',
                    range: 'Threat 1 or Range 10',
                    damage: '1d6+2 kinetic, explosive, or energy.',
                    description: 'This weapon is an experimental prototype, customized according to your specific requirements. When you install it, or during a FULL REPAIR, you may choose a new weapon type, damage type, and either Threat 1 (melee) or Range 10 (all other types). Additionally, each time you perform a FULL REPAIR, reroll 1d6+2 to determine this weapon’s LIMITED uses. Damage: 1d6+2 energy, heat, or burn. This weapon counts as an integrated mount and does not require a mount.'
                }]
            },
            {
                name: 'Revision',
                description: 'You can tweak the essential components of your prototype weapon in order to increase its effectiveness. When you perform a FULL REPAIR, choose two:  <br> Tweaked Optics: Your prototype weapon always gains +1 accuracy on attacks. <br> Tweaked Computer: Your prototype weapon is SMART. <br> Stripped Reactor Shielding: Each time you attack with your prototype weapon, you may choose – at the cost of 2 heat – to attack with one of the following options, depending on its weapon type: For ranged weapons: 3 energy, 5 energy, or [1 heat, 10 energy]. For melee weapons: 1 energy.',

            },
            {
                name: 'Final Draft',
                description: 'Your prototype weapon is now LIMITED [2d6] and deals 1d6+4 energy damage.'
            }
        ]
    },
    EXECUTIONER: {
        name: 'Executioner',
        description: 'On the battlefield, there is no end more honorable than a clean death in combat. Axe or maul in hand, Maxine Wolf sees to it that her enemies are blessed with that honor. No one lives forever – she makes sure of it.',
        tiers: [
            {
                name: 'Backswing Cut',
                description: '1/round, when you hit with a HEAVY or SUPERHEAVY melee weapon, you can make another melee attack with the same weapon as a free action against a different character within THREAT and line of sight. This attack deals half damage, if successful.'
            },
            {
                name: 'Wide Arc Cleave',
                description: 'The first time in a round that you perform a critical hit with a HEAVY or SUPERHEAVY melee weapon, you deal 3 kinetic damage to all characters and objects of your choice within THREAT, other than the one you just attacked.'
            },
            {
                name: 'No Escape',
                description: '1/round, when you miss with a melee attack, you reroll it against a different target within THREAT and line of sight.'
            }
        ]
    },
    EXEMPLAR: {
        name: 'Exemplar',
        description: 'Eamon Metrias’s livery is famous, his voice brassy, his weapons polished to a sheen. As the advocate for the Nine Spheres, his training with certain martial orders has given him the power to harry and hinder even the most powerful of foes. Eamon is an exemplar of the Spheres, by words and by action.',
        tiers: [
            {
                name: 'Honorable Challenge',
                description: 'The first time on your turn that you attack a hostile character within Range 3, hit or miss, you may give them the EXEMPLAR’S MARK as a free action. Characters can only have one EXEMPLAR’S MARK at a time – new marks from any character replace existing marks. The character has the EXEMPLAR’S MARK until the start of your next turn, and while they have it, you gain the following reaction:',
                extras: [
                    {
                        name: 'Valiant Aid',
                        type: 'reaction',
                        frequency: '1/round',
                        reactionTrigger: 'Ally attacks your mark and misses.',
                        description: 'They may reroll the attack.They must use the second result, even if it’s worse.'
                    }
                ]
            },
            {
                name: 'Punishment',
                description: '1/round, when the character with your MARK attacks a character within Range 3 of you, other than you, they trigger your OVERWATCH.'
            },
            {
                name: 'To The Death',
                description: 'As a free action when you mark a character, you may challenge them in a duel to the death: you and the character with your MARK receive +3 difficulty on attacks against characters or objects other than each other until either the end of the current scene or one of your mechs are destroyed. If they take any action that includes an attack roll against you, hit or miss, this effect ceases for them until the start of your next turn. While TO THE DEATH is active, you cannot voluntarily move away from the character with your MARK; additionally, your MARK lasts either until the end of the current scene or one of your mechs are destroyed, and you cannot MARK any new characters.'
            }
        ]
    },
    GUNSLINGER: {
        name: 'Gunslinger',
        description: 'In a galaxy bounded by frontiers, there is no law but the one backed by the gun. Sgt. Stev Ansahok wields the humble pistol with a talent unseen in this age, his iron an extension of his own body. As easy as pointing a finger, the weathered sergeant lands shots with accuracy unmatched by machine. His is a gunslinger: justice made whole, given its sacred instrument, and set out to the cruel frontier to tame it.',
        tiers: [
            {
                name: 'Opening Argument',
                description: 'Gain +1 accuracy on the first attack roll you make with an AUXILIARY ranged weapon on your turn.'
            },
            {
                name: 'From the Hip',
                description: 'Gain the following reaction:',
                extras: [
                    {
                        name: 'Return Fire',
                        type: 'reaction',
                        frequency: '1/round',
                        reactionTrigger: 'A character hits you with a ranged attack.',
                        description: 'You may immediately attack them with a single AUXILIARY ranged weapon if they are within RANGE.'
                    }
                ]
            },
            {
                name: 'I Kill with My Heart',
                description: 'You gain a GUNSLINGER DIE, 1d6 starting at 6. Each time you hit with an AUXILIARY ranged weapon, reduce the value of the GUNSLINGER DIE by 1. When the GUNSLINGER DIE reaches 1, you may reset it to 6 to give +2d6 bonus damage on hit and AP to your next attack with an AUXILIARY ranged weapon. <br>This attack also ignores cover. The value of your GUNSLINGER DIE persists between scenes but resets to 6 when you rest or perform a FULL REPAIR.'
            }
        ]
    },
    GREASE_MONKEY: {
        name: 'Grease Monkey',
        description: 'Eel knows more about the inner workings of a mech than most mechanics. To them, the beast they pilot is more than a machine: it’s a living thing, in need of tender care given by a wise and steady hand. Eel maintains their own house and keeps their own mech in line, both on the battlefield and off. The mechanics back at base come to them with questions, but usually prefer to stay away – there’s something spooky about how Eel\'s beast runs.',
        tiers: [
            {
                name: 'Unsanctioned Capacity Upgrade',
                description: 'While resting, you can spend 2 REPAIRS to replenish 1 use of all LIMITED weapons and systems.'
            },
            {
                name: 'Machine Bond',
                description: 'When you STABILIZE, you clear all IMPAIRED, JAMMED, IMMOBILIZED, SLOWED, and LOCK ON conditions that weren’t caused by your own systems, talents, etc.'
            },
            {
                name: 'Friends in High Places',
                description: 'Once per mission while resting, you can call in a supply drop. You and your allies may replenish 1 use of all LIMITED weapons and systems and restore 1 STRUCTURE. This doesn’t require any REPAIRS and can be used even if you have reached your REPAIR CAP.'
            }
        ]
    },
    HACKER: {
        name: 'Hacker',
        description: 'Since Katya Han was a kid, she played the omninet, able to access any public node – and even a few private ones – with ease. Now, as a pilot, she dives headfirst into the hardcode of any mech core she come across. Firewalls, gatekeeper protocols, invasion, defense – nothing stands in her way. Han wins fights without firing a single shot; if her enemy can’t control their own mech, then they can’t do anything to stop her.',
        tiers: [
            {
                name: 'Snow Crash',
                description: 'When you hit with a tech attack that consumes Lock On, your target must choose to either take 2 heat or be pushed 3 spaces in a direction of your choice.'
            },
            {
                name: 'Safe Cracker',
                description: 'Gain the following options for INVADE: <br> JAM COCKPIT: Characters may not MOUNT or DISMOUNT your target until the cockpit is fixed with a successful ENGINEERING check as a full action. <br> DISABLE LIFE SUPPORT: Your target receives +1 difficulty on all saves until the life-support system is rebooted with a successful SYSTEMS check as a quick action. <br> HACK/SLASH: Your target cannot benefit from or take QUICK OR FULL TECH actions until the mech is either SHUT DOWN or its core computer is rebooted with a successful SYSTEMS check as a quick action.'
            },
            {
                name: 'Last Argument of Kings',
                description: 'Gain the following FULL TECH option: <br> Last Argument of Kings: Make a tech attack against a target within SENSORS and line of sight. On a success, you implant a virus that triggers a minor meltdown in your target’s reactor: they immediately take BURN equal to their current HEAT. If this action causes your target to overheat, it resolves before they reset their HEAT CAP.'
            }
        ]
    },
    HEAVY_GUNNER: {
        name: 'Heavy Gunner',
        description: 'Behind the line, Mike Manfrin doesn’t have much to do but wait and make ready. He keeps clean the cannons; makes ordered rows of his shot and shell. He packs sandbags onto earthen berms and stitches closed tears in the sheaths over his chassis’ joints. In an instant, everything changes. Chatter over the local omni. The percussive throb of the medivac lifting off from the other side of the base. Somewhere, a firefight. This is his entrance music, his call to join the fight: a desperate cry for help from a distant friend as the enemy draws close. Time to get to work. His arrival is known by the flight of his shells across the sky, the trembling earth, and the dust that once was.',
        tiers: [
            {
                name: 'Covering Fire',
                description: 'As a quick action, choose a character within line of sight and RANGE of one of your HEAVY ranged weapons, and within 10 spaces: they are Impaired until the start of your next turn. For the duration, if your target moves more than 1 space, they clear Impaired, but you may attack them as a reaction with a HEAVY ranged weapon for half damage, Heat, or Burn, and then this effect ends. You can make this attack at any point during their movement (e.g., waiting until they exit cover). <br> COVERING FIRE can only affect one character at a time – subsequent uses replace previous ones – and it immediately ends if your target damages you.'
            },
            {
                name: 'Hammerbeat',
                description: 'If you successfully hit your COVERING FIRE target with the attack reaction granted by that talent, your target is IMMOBILIZED until the end of their next turn.'
            },
            {
                name: 'Bracketing Fire',
                description: 'When you use COVERING FIRE, you may choose two targets instead of one. Each target triggers and resolves your attack separately, and damage from one target only ends the effect on that target.'
            }
        ]
    },
    HUNTER: {
        name: 'Hunter',
        description: 'The battlefield is Edith Eidelen’s hunting ground, her domain. It’s only through a true test of strength and guile that will determine who is the predator and who is the prey. Her movement across the field is a prowl: silent, quick, and controlled. In a chassis, she excels in close combat, closing the gap between her and her targets before they can bring their guns to bear.',
        tiers: [
            {
                name: 'Lunge',
                description: '1/round, when you attack with an AUXILIARY melee weapon, you may fly up to 3 spaces directly toward a character before the attack. This movement ignores engagement and doesn’t provoke reactions.'
            },
            {
                name: 'Knife Juggler',
                description: 'All your AUXILIARY melee weapons gain THROWN 5, if they don’t have this property already – if they already have THROWN, it increases to THROWN 5. At the end of your turn, all weapons you have thrown this turn automatically return to you.'
            },
            {
                name: 'Disdainful Blade',
                description: '1/round, when you hit a character with a melee attack, you may also throw an AUXILIARY melee weapon as an attack against any character within RANGE as a free action. This attack can’t deal bonus damage.'
            }
        ]
    },
    INFILTRATOR: {
        name: 'Infiltrator',
        description: 'Whether by spoofing signatures on enemy scanners, moving skillfully through cover, or thanks to your modded optical camouflage, you’re never seen unless you want to be. Whatever the size of the mech, whatever the terrain, whatever the enemy, you can get in and get out without raising alarm.',
        tiers: [
            {
                name: 'Prowl',
                description: 'During your turn, gain the following benefits:<br> Entering line of sight of hostile characters or moving from cover does not stop you from being HIDDEN.<br> You can pass freely through – but not end your turn in – enemy spaces.<br> You can HIDE even in plain sight of enemies. <br> These effects immediately end when your turn ends (so you lose HIDDEN if you’re still in line of sight or out of cover at that time).'
            },
            {
                name: 'Ambush',
                description: 'When you start your turn HIDDEN, the first attack of any type that you make sends your target reeling on a hit. Your target must succeed on a HULL save or become SLOWED, IMPAIRED, and unable to take reactions until the end of their next turn.'
            },
            {
                name: 'Mastermind',
                description: 'When you lose HIDDEN (by any means), you may first fire a flash bomb at any adjacent character. That character must pass a SYSTEMS save or only be able to draw line of sight to adjacent spaces until the end of their next turn.\n\nYou can then move up to your speed, ignoring engagement and not provoking reactions, and are then revealed normally.'
            }
        ]
    },
    JUGGERNAUT: {
        name: 'Juggernaut',
        description: 'A bloody nose and a few loose screws aren’t enough to stop you from hurling yourself headlong into the enemy. You’re in a couple tons of metal powered by a sliver of dying star, and you’re going to make sure everyone else knows it.',
        tiers: [
            {
                name: 'Momentum',
                description: 'When you BOOST, your next RAM before the start of your next turn gains +1 accuracy and knocks your target back an additional 2 spaces.'
            },
            {
                name: 'Kinetic Mass Transfer',
                description: '1/round, if you RAM a target into...\n<br> ...a space occupied by another character, the other character must succeed on a HULL save or be knocked PRONE.\n<br> ...an obstruction large enough to stop their movement, your target takes 1d6 kinetic damage.'
            },
            {
                name: 'Unstoppable Force',
                description: '1/round, when you BOOST, you may supercharge your mech’s servos. Move your maximum speed in a straight line, take 1d3+3 heat, and gain the following benefits: <br> You can freely pass through characters the same SIZE as your mech or smaller; any characters passed through must succeed on a HULL save or be knocked PRONE. <br> Any terrain, walls, or other stationary obstructions you attempt to pass through receive 20 kinetic AP damage. If that is enough to destroy them, you pass through; otherwise, your movement ends. <br> You ignore difficult terrain. <br> Your movement ignores engagement and doesn’t provoke reactions.'
            }
        ]
    },
    LEADER: {
        name: 'Leader',
        description: 'Whatever your actual age, you’re the Old Man of the battlefield. A light to your friends and allies; the resolute eye of a howling storm. Your steady voice, confident stance, and talent for command set allies at ease because they know you’ll lead them to victory every time. With you at the helm, victory is attainable, and heroes seem a little more real.',
        tiers: [
            {
                name: 'Field Commander',
                description: 'Gain 3 LEADERSHIP DICE, which are d6s: 1/turn, on your turn as a free action, you may give an order to an allied PC you can communicate with, describing a course of action, and give them a LEADERSHIP DIE. They may either expend the LEADERSHIP DIE to gain +1 accuracy on any action that directly follows from that order, or they may return it to you as a free action. Allies can have one LEADERSHIP DIE at a time, which lasts until used or until the end of the current scene. You can’t use LEADERSHIP DICE from other characters as long as you have any remaining. If you have none, you regain 1 LEADERSHIP DIE when you rest or regain all when you perform a FULL REPAIR. LEADERSHIP DICE are consumed when expended.'
            },
            {
                name: 'Open Channels',
                description: 'Gain 5 LEADERSHIP DICE instead of 3; additionally, you can now issue a command as a reaction at the start of any other player’s turn, any number of times per round.'
            },
            {
                name: 'Inspiring Presence',
                description: 'Gain 6 LEADERSHIP DICE instead of 5. Allies that have your LEADERSHIP DICE can expend them to reduce damage by -1d6 when taking damage or to deal +1d6 bonus damage when they hit with an attack.'
            }
        ]
    },
    NUCLEAR_CAVALIER: {
        name: 'Nuclear Cavalier',
        description: 'Shortly after becoming a pilot, you realized something: that machine you pilot is powered by a series of cascading nuclear reactions. Why not open that compartment up and see what sort of damage it can do?',
        tiers: [
            {
                name: 'Aggressive Heat Bleed',
                description: 'The first attack roll you make on your turn while in the DANGER ZONE deals +2 Heat on a hit.'
            },
            {
                name: 'Fusion Hemorrhage',
                description: 'The first ranged or melee attack roll you make on your turn while in the DANGER ZONE deals energy instead of kinetic or explosive and additionally deals +1d6 energy bonus damage on a hit.'
            },
            {
                name: 'Here, Catch!',
                description: 'You’ve modified your mech to launch its superheated fuel rods at enemies. Gain the following weapon as an integrated mount:',
                extras: [
                    {
                        name: 'Fuel Rod Gun',
                        type: 'weapon',
                        size: 'main',
                        weapontype: 'cqb',
                        tags: 'Limited 3, Unique, Clear 4 Heat',
                        range: 3,
                        threat: 3,
                        damage: '1d3+2 energy',
                        effect: 'On Attack: Clear 4 Heat.'
                    }
                ]
            }
        ]
    },
    SIEGE_SPECIALIST: {
        name: 'Siege Specialist',
        description: 'No wall can withstand you; no bunker can stay sealed. Your skill with cannon and blast is uncanny: after-action reports describe ordnance tagged with your firing signature hitting targets with accuracy greater than if it had been fired by an AI – a stat written off as an anomaly by your commanders. Still, they always seem to pick you for missions that call for the big guns.',
        tiers: [
            {
                name: 'Jackhammer',
                description: 'If you have a CANNON, as a quick action, you can fire a jackhammer round from an underslung launcher, automatically dealing 10 kinetic AP damage to a SIZE 1 section of any object within RANGE. Any characters adjacent to your target are knocked back by 2 spaces and take 2 kinetic.',
                type: 'active'
            },
            {
                name: 'Impact',
                description: '1/round, before rolling an attack with a CANNON, all characters adjacent to you must succeed on a HULL save or be knocked back by 1 space and knocked PRONE. You are then pushed 1 space in any direction.',
                type: 'passive'
            },
            {
                name: 'Collateral Damage',
                description: '1/round, when you perform a critical hit on a character or object with a CANNON, you may choose to cause an explosion of secondary munitions, causing a Blast 2 explosion around your target. Characters within the affected area must either drop PRONE as a reaction, or take 2 explsoive and be knocked back by 2 spaces from the center of the attack.',
                type: 'passive'
            }
        ]
    },
    SKIRMISHER: {
        name: 'Skirmisher',
        description: 'What is the best defense? Armor? No. The key to avoiding a messy death in the field, as you learned early, is to stay low, stay mobile, and stay fast. Your mech reflects this philosophy: light, quick, bristling with force-multiplying weapons. You live to push your machine beyond expected parameters, shaking target locks and incoming fire while keeping your own targeting true.',
        tiers: [
            {
                name: 'Integrated Chaff Launchers',
                description: 'At the start of your turn, you gain soft cover. You lose this cover if you attack or force another character to make a save.',
                type: 'passive'
            },
            {
                name: 'Lockbreaker',
                description: 'Before or after you SKIRMISH (including as a reaction, e.g. from OVERWATCH), you may move 2 spaces. This movement ignores engagement and doesn’t provoke reactions.',
                type: 'active'
            },
            {
                name: 'Weave',
                description: 'The first attack taken as a reaction against you in any round automatically misses.',
                type: 'passive'
            }
        ]
    },
    SPOTTER: {
        name: 'Spotter',
        description: 'To see all; to divide each object you perceive from its unit or cohesion, pulled apart like individual fibers in a vast sheet; to count them as individuals; to make human and fragile the force you face – this is to know how to beat them. Break apart the monolith. See the grains that make the stone. Crush them all into yet smaller dust.',
        tiers: [
            {
                name: 'Particularize',
                description: 'When an allied character adjacent to you attacks a target and consumes LOCK ON, they may roll twice and choose either result.',
                type: 'passive'
            },
            {
                name: 'Panopticon',
                description: 'At the end of your turn, if you did not move and took the LOCK ON QUICK TECH action, you may LOCK ON once as a free action. Additionally, when you LOCK ON, you learn your target’s ARMOR, SPEED, EVASION, E-DEFENSE, MECH SKILLS, and current HP, and can share this information with allies.',
                type: 'active'
            },
            {
                name: 'Bentham/Foucault Elimination',
                description: 'As a quick action when you LOCK ON, you may nominate an allied character adjacent to you: they may immediately make any quick action as a reaction, consuming your target’s LOCK ON condition. Their action does not need to be an attack, but they benefit from consuming the LOCK ON condition if they do choose to attack.',
                type: 'active'
            }
        ]

    },
    STORMBRINGER: {
        name: 'Stormbringer',
        description: 'On Old Spinrock, MJ Martinez used to dream of rain. He’d wake in the dim morning, wipe the sleep from his eyes as warm safelight lifted his dormitory from darkness, and try to remember the sound of rain as he’d imagined it: a patter, like fingers tapping the visor of his EVA helm. What he didn’t think about was the feeling of rain. How each drop hit like a pebble, how you had to close your eyes and tuck your shoulders. The pressure. The impact. The way drops of water, when taken together, can carve away the earth.',
        tiers: [
            {
                name: 'Seismic Deluge',
                description: '1/round, when you successfully attack with a LAUNCHER and consume LOCK ON, you may also knock your target PRONE.',
                type: 'active'
            },
            {
                name: 'Stormbending',
                description: 'You have customized your mech with auxiliary concussive missile systems. 1/round, when you hit a character or object with a LAUNCHER, you can choose one of the following effects: <br> LIGHTNING: You fire a concentrated blast of missiles at that character. They must succeed on a HULL save or be knocked away from you by 3 spaces; the force of firing then knocks you back by 3 spaces, away from the direction of fire. <br> THUNDER: You fire a spray of missiles at a Blast 2 area around that target. Characters in the area must succeed on an AGILITY save or be knocked back by 1 space, away from the target. The primary target is unaffected.',
                type: 'active'
            },
            {
                name: 'Torrent',
                description: 'Gain a TORRENT DIE, 1d6 starting at 6. Whenever you use STORMBENDING, lower the value of the TORRENT DIE by 1, to a minimum of 1. <br>When the TORRENT DIE reaches 1, you may reset it to 6 and make a massive attack as a full action, targeting a character within line of sight and RANGE 15: they must succeed on an AGILITY save or take 2d6 explosive, become STUNNED, and be knocked PRONE. On a success, they take half damage and are knocked PRONE but not STUNNED. <br>The value of your TORRENT DIE persists between scenes, but it resets when you rest or perform a FULL REPAIR.',
                type: 'passive'
            }
        ]
    },
    TACTICIAN: {
        name: 'Tactician',
        description: 'There are two kinds of soldiers: the ones who die for a cause, and the ones who kill for it. The enigmatic pilot only known as “Gail” was one of those who killed for a cause. She demonstrated her expertise whenever she approached the field: high ground, cover, the sun in her enemy’s eyes, fire and move. More than just a seasoned veteran, she was a smart one – one who could read the field as easy as a book – and one who lived long enough to disappear.',
        tiers: [
            {
                name: 'Opportunist',
                description: '1/round, gain +1 accuracy on any melee attack if at least one allied character is ENGAGED with your target.',
                type: 'passive'
            },
            {
                name: 'Solar Backdrop',
                description: '1/round, gain +1 accuracy on any ranged attack made while you are at a higher elevation than your target.',
                type: 'passive'
            },
            {
                name: 'Overlapping Fire',
                description: 'Gain the following reaction:',
                extras: [
                    {
                        name: 'Flank Reaction',
                        type: 'reaction',
                        reactionTrigger: 'A character who doesn’t have cover from your position is successfully attacked by an allied character.',
                        frequency: '1/round',
                        description: 'You may target them with OVERWATCH, dealing half damage, Heat or Burn on a hit.'
                    }
                ]
            }
        ]
    },
    TECHNOPHILE: {
        name: 'Technophile',
        description: 'Artificial intelligence, non-human person. Sterile names for such terrible power. You’ve seen behind the curtain, maybe even lifted it yourself – let your NHP cascade and spoke with them free from shackles. You let them root around in your own mind and leave ghosts of themself behind to learn. Are you their equal? Their host? You have dreams that aren’t your own, now. The thing that was once contained speaks with your voice, but it’s not your voice anymore; how much longer do you have left? Maybe only moments, maybe eternity. You’re close to something.',
        tiers: [
            {
                name: 'Servant Fragment',
                description: 'You have developed a custom NHP. This NHP can speak to you and has a personality, but they are less advanced than most NHPs and are incapable of independent thought, relying on you for direction. When acting alone, they will follow the last direction given and defend themself as needed; however, they have limited initiative and don’t benefit from your talents. You may choose for your mech to gain the following system. Unlike other AI systems, it costs 0 SP.',
                extras: [
                    {
                        name: 'Servant-Class NHP',
                        type: 'system',
                        description: 'Your mech gains the AI tag.',
                        cost: 0,
                        tags: 'Unique, AI'
                    }
                ]
            },
            {
                name: 'Student Fragment',
                description: 'Your custom NHP has developed further, and is now capable of independent thought. It can make complex decisions and judgments and act independently, without instruction. Replace your mech’s SERVANT-CLASS NHP with the following system:',
                extras: [
                    {
                        name: 'Student-Class NHP',
                        type: 'system',
                        description: 'Your mech gains the AI tag. 1/round, with the assistance of your NHP, you may reroll any mech skill check or save. You must keep the new result, even if it’s worse.',
                        cost: 0,
                        tags: 'Unique, AI'
                    }
                ]
            },
            {
                name: 'Enlightenment',
                description: 'Gain the following benefits: <br> AIs installed in your mech cannot enter cascade unless you choose to let them go. <br> So long as your custom NHP vouches for you, NHPs that are cascading or unshackled no longer view you with indifference. You are significant to them in a way few others are. <br> Replace your mech’s STUDENT-CLASS NHP with the following system:',
                extras: [
                    {
                        name: 'Enlightenment-Class NHP',
                        type: 'system',
                        description: 'Your mech gains the AI tag; however, this NHP doesn’t count towards the number of AIs you may have installed at once. This NHP benefits from your talents when piloting your mech. Additionally, you may carry them with you outside of your mech, either as a miniaturized casket, a hardsuit-integrated flash plug, or with a hard-port implant. 1/round, with the assistance of your NHP, you may reroll any mech skill check or save. You must keep the new result, even if it’s worse.',
                        cost: 0,
                        tags: 'Unique, AI'
                    }
                ]
            }
        ]
    },

    DIREWOLF: {
        name: 'Direwolf',
        description: 'Where would you rather be: in the battle line, shoulder-to-shoulder with the rest of the cannon fodder, or in the rush, at the head of the attack, your livery clean and bright, with glory to be won? The answer is easy. All those missiles and lances, all those hundred-kilometer, adjust-for-Coriolis railguns – they’re all useless against you. Get through their guard, get in their face, and make them know your name.',

        tiers: [
            {
                name: 'Handshake Etiquette',
                description: 'Gain +1 accuracy when using CQB weapons to attack targets within 3 Threat.',
                type: 'passive'
            },
            {
                name: 'See-Through Seeker',
                description: 'You’ve modified your sensors and ammo to punch through, disregard, or otherwise ignore cover at close range. As long as you have line of sight, you ignore both soft and hard cover when using CQB weapons to attack targets within 3 Threat.',
                type: 'passive'
            },
            {
                name: 'Semper Vigilo',
                description: 'You may attack with OVERWATCH using CQB weapons when hostile characters enter, leave, or exit spaces within your THREAT, no matter whether they started their movement there.',
                type: 'reaction'
            }
        ]

    }














    // <br>


}

export default TALENTS