export type PerkCompendiumEntry = {
  name: string;
  category: string;
  description: string;
};

export const perkCompendium = {
  "accelerated heatsink": {
    "name": "Accelerated Heatsink",
    "category": "Weapon Trait",
    "description": "Passively grants +25 Cooling Efficiency stat \u2191and +2 Reload Speed at the downside of 2% decreased damage.\n\nHow do Heat Weapons work?"
  },
  "adagio": {
    "name": "Adagio",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\n30% increased damage, +10 Range, and 1.2x Fire Recovery Delay/Charge Time Multiplier/Draw Time Multiplier for 7 \u21918 seconds.\nBuff is removed on stow.\n\nHand Cannons are granted 27% increased damage.\n\n\u2191Buff duration is increased to 8 seconds."
  },
  "adaptive munitions": {
    "name": "Adaptive Munitions",
    "category": "Weapon Trait",
    "description": "Upon damaging a Non-Matching Shield or a Barrier Champion Shield: \nStacking damage increase against Combatant Shields.\nBuff is removed upon hitting a Matching Shield or an Unshielded Combatant.\n\n???% \u2191???% per hit, up to ???% \u2191???%: Fusion Rifles.\n10% \u219114% per hit, up to 50% \u219169.5%: Auto Rifles, Machine Guns, Pulse Rifles, and Trace Rifles.\n 22% \u219131% per hit, up to 44.5% \u219161.5%: Linear Fusion Rifles.\n25% \u219134.5% per hit, up to 50% \u219169.5%: Bows, Glaives, Hand Cannons, and Scout Rifles.\n\n\u2191Increases Damage Buff by ~40%."
  },
  "adhesive ordnance": {
    "name": "Adhesive Ordnance",
    "category": "Weapon Trait",
    "description": "Upon picking up an Ammo Brick:\nGenerates +1 Ammo.\nThe next shot fired adheres a Sticky Bomb on impact. \n\nSticky Bomb detonates after 0.8 seconds, dealing up to \u2191410 [77] Kinetic Damage and inflicting Exhaust over 6 meters, down to 50% Damage at the furthest point.\nDamage against Combatants scales with Combatant Rank Modifiers and counts as Kinetic Weapon Damage."
  },
  "adrenaline junkie": {
    "name": "Adrenaline Junkie",
    "category": "Weapon Trait",
    "description": "On Weapon or Grenade Kill:\n6.7% | 13.3% | 20% | 26.6% | 33.3% increased damage and +20 Handling for 4.5 \u21915 seconds. Grenade Kills grant 5 stacks, even if stowed.\nAdditional Weapon or Grenade Kills refresh the buff duration.\nBuff persists through stow.\n\n\u2191Buff duration is increased to a maximum of 5 seconds."
  },
  "aggregate charge": {
    "name": "Aggregate Charge",
    "category": "Weapon Trait",
    "description": "Against Elementally-Debuffed Enemies:\n10% \u219111% | 20% \u219122% | 30% \u219133% increased damage. \nEffect scales with the amount of unique debuffs on the enemy, maxing out at 3 unique debuffs.\n\nDebuff List:\nBlind - Jolt | Scorch - Ignition | Suppression - Volatile - Weaken\nSlow - Freeze - Shatter | Sever - Suspend - Unravel\n\n\u2191Damage buff is increased."
  },
  "air assault": {
    "name": "Air Assault",
    "category": "Weapon Trait",
    "description": "Passively grants +10 \u219112 Airborne Effectiveness.\n\nOn Weapon Kill:\n+30 \u219132 Airborne Effectiveness per stack for 5 seconds, up to a maximum of 2 stacks. Airborne Kills grant 2 stacks.\nAdditional Weapon Kills refresh the buff duration.\nBuff is removed on stow.\n\n\u2191Passively grants +12 Airborne Effectiveness. +32 Airborne Effectiveness per Stack."
  },
  "air trigger": {
    "name": "Air Trigger",
    "category": "Weapon Trait",
    "description": "Passively grants +20 \u2191+30 Ammo Generation.\n\nWhile Airborne:\n+30 \u219135? Reload Speed, 0.8x Reload Duration Multiplier, -15?% \u2191-?% Accuracy Cone Size, and -20?% \u2191-?% Auto Aim Cone Size.\n\n\u2191+35? Reload Speed, 0.8?x Reload Duration Multiplier, -15?% Accuracy Cone Size, and -20?% Auto Aim Cone Size while Airborne. +30 Ammo Generation."
  },
  "all star": {
    "name": "All-Star",
    "category": "Weapon Trait",
    "description": "Upon picking up an Ammo Brick:\nRefills Magazine.\n35% [15%] Increased Damage and +100? Reload Speed for 6 \u21917 seconds.\nPicking up additional Ammo Bricks extend the buff duration by 6 \u21917 seconds, up to ? \u219110 seconds.\nTimer only ticks down while the weapon with All-Star is readied.\n\nPicking up a Power Ammo Brick grants 9 \u219110 seconds of All-Star."
  },
  "alloy magazine": {
    "name": "Alloy Magazine",
    "category": "Weapon Trait",
    "description": "Upon starting a reload, while at or below 50% Magazine Capacity:\nLinearly grants up to 0.8x \u21910.75x Reload Duration Multiplier.\nPerk dynamically scales from 0.9x \u21910.85x Reload Duration Multiplier at 50% Magazine, up to 0.8x \u21910.75x Reload Duration Multiplier at 0% Magazine."
  },
  "ancillary ordinance": {
    "name": "Ancillary Ordinance",
    "category": "Weapon Trait",
    "description": "Upon scoring 3 Elemental Kills within 4 seconds of each, or upon killing an Elementally-Debuffed Enemy:\nGrants a stack of Ancillary Ordinance, up to a maximum of ? \u21915 stacks.\nKills can be scored through any means. \nScoring a Kinetic Weapon Kill against an Elementally-Debuffed Enemy will also instantly spawn a Micro-Missile. Try it with Unravel or Scorching Rounds!\n\nUpon scoring a Weapon Kill while having stacks of Ancillary Ordinance:\nConsumes a stack of Ancillary Ordinance to spawn a homing Kinetic Micro-Missile over the Enemy Death Location.\nMicro-missile aggressively tracks the closest enemy within 30 meters, exploding on impact, dealing 330 (At least the Auto Rifle) [100] Kinetic Damage over a tiny radius.\n\n\u2191Increases the maximum amount of stored micro-missiles to 5."
  },
  "ambitious assassin": {
    "name": "Ambitious Assassin",
    "category": "Weapon Trait",
    "description": "Upon finishing a reload after scoring Weapon Kills:\nOverflows Magazine from reserves based on the amount of kills achieved, up to a maximum of 150% Increased Magazine Capacity. \nAlways rounds magazine up. Kill Counter persists through stow.\n\nPrimary Weapons: 20% Increased Magazine Capacity per Kill.\nSpecial Weapons | Power Weapons: 10% Increased Magazine Capacity per Kill.\n\n\u2191Passively grants +5 Reload Speed. Timer between kills is increased to 8 seconds."
  },
  "archer s gambit": {
    "name": "Archer's Gambit",
    "category": "Weapon Trait",
    "description": "On Hipfired Precision Hit:\n+100? Reload Speed, 0.x? Reload Duration Multiplier, and 0.4x Draw Time Multiplier for 4 seconds.\nScoring additional Hipfired Precision Hits extends the buff duration by +4 seconds, up to 8 \u2191? seconds.\nBuff persists through stow.\n\n\u2191Buff duration is increased to 5? seconds?"
  },
  "archer s tempo": {
    "name": "Archer's Tempo",
    "category": "Weapon Trait",
    "description": "On Precision Hit:\n0.75x Draw Time Multiplier for 3 \u21914 seconds.\nBuff is removed on stow.\n\n\u2191Buff duration is increased to 4 seconds."
  },
  "armor piercing rounds": {
    "name": "Armor-Piercing Rounds",
    "category": "Weapon Trait",
    "description": "Grants 5% increased damage against Combatant Elemental Shields and Barrier Champion's Shield.\nPassively grants +5 \u2191+7 Range.\n\nBullets overpenetrate enemies once."
  },
  "assassin s blade": {
    "name": "Assassin's Blade",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\n15% Increased damage and maximizes Movement Speed for 5 \u21915.5 seconds.\nAdditional Weapon Kills refresh the buff duration.\n Buff remains active while stowed.\n\n\u2191Buff duration is increased to 5.5 seconds."
  },
  "attrition orbs": {
    "name": "Attrition Orbs",
    "category": "Weapon Trait",
    "description": "Upon scoring a Magazine-Based amount of damage instances within 5 seconds of each:\nCreates an Orb of Power that grants 0.87% \u21911.1% Super Energy.\n\nHits required to activate:\n55% of Magazine + 2, rounded down.\nBows: 5 | Swords: 6 | Grenade Launchers: 4 | Rocket Launchers: 3 | Area-Denial Grenade Launchers: 27\nSupport Auto Rifles healing hits on injured teammates count as 2 hits. (33.5% of Magazine + 2), rounded down on healing hits on damaged allies.\nScorch ticks from Weapon Perks do not count.\n Incurs a 0.5 second cooldown upon spawning an Orb. Damage instances during the cooldown will not be counted.\nCounter persists through stow.\n\n\u2191Orb of Power grants 1.1% Super Energy."
  },
  "auto loading holster": {
    "name": "Auto-Loading Holster",
    "category": "Weapon Trait",
    "description": "Refills stowed weapon from reserves 3.5 \u21913.3 seconds after stowing.\n\n\u2191Activation timer is decreased to 3.3 seconds."
  },
  "backup plan": {
    "name": "Backup Plan",
    "category": "Weapon Trait",
    "description": "Upon readying:\n20% decreased damage, +100 Handling, and 0.7x Charge Time Multiplier for 2 \u21912.5 seconds.\nLinear Fusion Rifle exclusive: Shooting refreshes the buff duration.\nWeapon must be stowed for 3 seconds before it can be reactivated.\n\n\u2191Buff duration is increased to 2.5 seconds."
  },
  "bait and switch": {
    "name": "Bait and Switch",
    "category": "Weapon Trait",
    "description": "Upon scoring a damage instance with each equipped weapon within 7 seconds of the last damage instance:\n30% increased damage for 10 \u219111 seconds. \nBuff cannot be refreshed until its duration expires. Damage Timer is disabled while the perk is active. Buff persists through stow.\n\n\u2191Buff duration is increased to 11 seconds."
  },
  "barrel constrictor": {
    "name": "Barrel Constrictor",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\n-20% Pellet/Projectile Spread for 7.5 seconds.\nBuff cannot be refreshed. Buff persists through stow.\n\n\u2191Buff Duration is increased to 8.5 seconds."
  },
  "beacon rounds": {
    "name": "Beacon Rounds",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants a stack of Beacon Rounds for 6 \u21917 seconds, up to a maximum of 4 stacks.\nDealing additional damage extends the buff duration to 4 seconds if the duration is <4 seconds.\nBuff can be activated while stowed, and persists through stow.\n\nBeacon Rounds:\n+15 Reload Speed, 0.9x Reload Duration Multiplier, and 45% Increased Projectile Tracking Cone Size.\nAdditional stacks only increase the strength of the projectile tracking. Projectile Tracking is only in effect when the Targeted Reticle is active.\n\n\u2191Initial buff duration is increased to 7 seconds."
  },
  "bewildering burst": {
    "name": "Bewildering Burst",
    "category": "Weapon Trait",
    "description": "Upon finishing a reload within ? seconds of a Kill:\nGrants Bewildering Burst for 6 \u21917 seconds.\n\nThe next direct hit while Bewildering Burst is active launches a Flashbang above the enemy that explodes after 0.85 seconds.\nFlashbang deals 10 [4] Kinetic Damage and inflicts disorient to enemies within 10 meters for 3.5 \u2191? [1 \u21911.25] seconds.\nBuff persists through stow.\n\n\u2191Buff Duration is increased to 7 seconds."
  },
  "binary orbit": {
    "name": "Binary Orbit",
    "category": "Weapon Trait",
    "description": "Upon scoring an Opposing Alignment Elemental Kill:\n25% increased damage for 8.5 \u219110.5 seconds.\nAdditional Kills with Opposing-Alignment sources refresh the buff duration.\nBuff can be activated while stowed, and persists through stow.\n\nArc, Solar, or Void Kill => Kinetic, Stasis and Strand Weapons receive buff.\n Kinetic, Stasis, or Strand Kill =>  Arc, Solar, and Void Weapons receive buff.\n\n\u2191Buff Duration is increased to 10.5 seconds."
  },
  "bipod": {
    "name": "Bipod",
    "category": "Weapon Trait",
    "description": "Passively grants the following:\n+1 Magazine Capacity, +5 Reserves, and 0.75x Fire Recovery Delay\n25% decreased damage, -30 \u2191-25 Blast Radius, and -20 \u2191-15 Reload Speed.\nWolfpack Rounds are affected by the damage penalty.\n\n\u2191Stat Penalties are lowered by +5, down to -25 Blast Radius and -15 Reload Speed."
  },
  "blast distributor": {
    "name": "Blast Distributor",
    "category": "Weapon Trait",
    "description": "Upon dealing Weapon Explosive Damage:\n+10 \u2191+13 Grenade Stat per stack for 5 seconds, up to a maximum of +50 \u2191+65 Grenade Stat at 5 stacks.\nBuff remains active through stow.\n\n\u2191Grants +13 Grenade Stat per stack, up to a maximum of +65 Grenade Stat."
  },
  "blunt execution rounds": {
    "name": "Blunt Execution Rounds",
    "category": "Weapon Trait",
    "description": "Upon dealing Melee Damage while within 15 metres of an enemy:\n500% [100%] increased damage and +100 Handling for the next burst within 10 \u219111 seconds.\nIncurs a 4 second cooldown after buff expires before it can be reactivated. \nBuff can be triggered while stowed, but is removed on stow if active.\n\nAny Powered Melee which requires sprinting, sliding, or performs a slam will not activate Blunt Execution Rounds.\n\n\u2191Buff duration is increased to 11 seconds."
  },
  "bolt scavenger": {
    "name": "Bolt Scavenger",
    "category": "Weapon Trait",
    "description": "Upon picking up a Crossbow Bolt:\n+? Handling and +? Reload Speed for 15 \u2191? seconds.\n\n\u2191Buff duration is increased to ? seconds."
  },
  "bottomless grief": {
    "name": "Bottomless Grief",
    "category": "Weapon Trait",
    "description": "Passively grants +30 Magazine Stat.\n\nWhile Last Guardian Standing:\nOn Weapon Kill:\nRefills Magazine."
  },
  "box breathing": {
    "name": "Box Breathing",
    "category": "Weapon Trait",
    "description": "After 1.5 \u21911.4 seconds of ADS without firing while Magazine is >0:\n10% Increased Aim Assist Falloff Distance and grants 40% increased Precision Damage for the next shot while ADS. \nScout Rifles receive 5% Decreased Precision Damage while Box Breathing is active. Heavy Sniper Rifles only receive 30% increased Precision Damage.\nTimer starts as soon as the Aim Down Sights input is pressed.\n\n\u2191Activation timer is decreased to 1.4 seconds."
  },
  "built to blast": {
    "name": "Built To Blast",
    "category": "Weapon Trait",
    "description": "While Void Overshield, Frost Armor, or Woven Mail are active:\n+30? Stability, +? Aim Assist, and ?% Flinch Resist\n\n\u2191Buff lingers for ? seconds once criteria isn't met."
  },
  "burning ambition": {
    "name": "Burning Ambition",
    "category": "Weapon Trait",
    "description": "Upon scoring a Magazine-based amount of direct hits within 2 seconds of each:\nThe next direct hit inflicts Scorch.\nHit counter persists through stow. Hits do not have to be on the same target.\nScorch inflicted by Burning Ambition counts as Weapon Damage.\n\nHits needed to prepare Scorching Shot:\n55% of Magazine \u2191-1. \nBow: 2? \u21911 | Sword: 3 \u21912\n\nAdditionally, direct hits against Scorched Enemies inflict Scorch.\nPrimary Weapons inflict x10+5 [x4+5? against Scorched Guardians] Scorch.\nSpecial and Power Weapons inflict x20+10 Scorch.\nIncurs a 0.5 second cooldown upon inflicting Scorch before additional Scorch can be inflicted. Cooldown is GLOBAL, not per-enemy.\n\n\u2191Scorching Shot hit requirement is decreased by 1."
  },
  "butterfly": {
    "name": "Butterfly",
    "category": "Weapon Trait",
    "description": "After 1.5 \u21911.4 seconds of ADS without firing while Magazine is >0:\nAiming this weapon for a short period without firing causes your target to explode the next time you deal final blows.\nTimer starts as soon as the Aim Down Sights input is pressed.\n\nBasically No Distractions + Dragonfly, it seems?"
  },
  "cascade point": {
    "name": "Cascade Point",
    "category": "Weapon Trait",
    "description": "Upon scoring multiple Precision Hits within 5 seconds of each with a different weapon or upon scoring a kill with a different weapon:\nGrants Cascade Point Ready for 5 seconds.\n\nUpon readying the weapon while Cascade Point Ready is active:\nGrants Cascade Point for 2.5 \u21912.75 seconds.\nCascade Point grants 0.7x Fire Recovery Delay for Machine Guns and Submachine Guns, and 0.6x Fire Recovery Delay for everything else.\n\nPrecision Hits work on a Counter System, granting Cascade Point Ready upon reaching 100%.\n2 Precision Hits: Bows, Linear Fusion Rifles, Shotguns, and Sniper Rifles.\n4 Precision Hits: Hand Cannons, Scout Rifles, and Sidearms.\n6 Precision Hits: Auto Rifles, Machine Guns, Pulse Rifles, Submachine Guns, and Trace Rifles. \n\n\u2191Buff duration is increased to 2.75 seconds."
  },
  "celerity": {
    "name": "Celerity",
    "category": "Weapon Trait",
    "description": "Passively grants +20 Handling and +20 Reload Speed.\n\nWhile Last Guardian Standing:\n+100 Handling, +100 Reload Speed, +? Aim Assist, 50% Flinch Resist, increased accuracy, stronger scope highlight, and enables radar while ADS."
  },
  "chain reaction": {
    "name": "Chain Reaction",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nPrimary Weapons: Target explodes, dealing up to 84 \u219192.4 [56 \u219162] Weapon-Element Matching Damage in a 3 meter radius. (Craftening lol)\nSpecial Weapons: Up to 67.2 \u219173.9 [44.8 \u219149.3] damage in a 2.4 meter radius. \nPower Weapons: Up to 109 \u2191120 [72.8 \u219180] damage in a 3 meter radius.\n\n\u2191Chain Reaction Damage is increased by 10%."
  },
  "chaos reshaped": {
    "name": "Chaos Reshaped",
    "category": "Weapon Trait",
    "description": "After having maintained a state of dealing or receiving damage every 5 seconds for at least 12 \u219111.5 seconds:\nChaos Reshaped x1 | 20% Increased damage for 7 seconds. \nDealing or receiving damage refreshes the buff duration. \nBuff can be activated while stowed, and persists through stow.\n\nAfter maintaining Chaos Reshaped x1 for an additional 12 \u219111.5 seconds:\nChaos Reshaped x2 | 35% Increased damage for 7 seconds. Periodically releases a healing burst while active.\nHealing burst builds up at a rate of 5 HP/s while readied, up to 35 HP. Healing Burst is triggered after 7 seconds, or upon stowing the weapon, consuming the built-up charge.\nHealing burst additionally begins Critical Health Regeneration, regardless of how much charge it has.\n Dealing or receiving damage refreshes the buff duration. \nBuff can be activated while stowed, and persists through stow.\n\n\u2191Reduces the time needed in-combat to grant a stack of Chaos Reshaped to 11.5 seconds."
  },
  "chill clip": {
    "name": "Chill Clip",
    "category": "Weapon Trait",
    "description": "While at or above 50% \u219140% Magazine Capacity:\nDirect Hits trigger a Stasis Burst, inflicting x60 Slow for 4+4 [1.5+0.5] seconds to enemies within 4? meters.\nRapid-Fire Fusion Rifles and Rocket Sidearms only inflict x40 Slow.\nCan only trigger once per shot.\n\n\u2191Stasis Burst can be triggered while at or above 40% Magazine Capacity."
  },
  "circle of life": {
    "name": "Circle of Life",
    "category": "Weapon Trait",
    "description": "Upon triggering Support Frame Boost:\n25% [12.5%] increased damage for 10 \u219111 seconds.\nBuff persists through stow.\n\n\u2191Buff duration is increased to 11 seconds."
  },
  "close to melee": {
    "name": "Close To Melee",
    "category": "Weapon Trait",
    "description": "Upon scoring a Glaive Projectile Kill:\n60% [30%] increased Glaive Melee Damage for 10 \u219111 seconds.\nBuff persists through stow.\n\nDealing additional Projectile or Melee Damage extends the buff duration by +5 seconds, up to 10 \u219111 seconds.\n\n\u2191Initial and maximum buff duration is increased to 11 seconds."
  },
  "closing time": {
    "name": "Closing Time",
    "category": "Weapon Trait",
    "description": "As Magazine decreases below 50%, down to 0%:\n Grants +10 \u2191+? Range, +30? \u2191+? Handling, 0.9x? Handling Duration Multiplier, and -5%? \u2191-%? Accuracy Cone Size at 50% Magazine.\nDynamically scales up to +20 \u2191+? Range, +50? \u2191+? Handling, 0.8x? Handling Duration Multiplier, and -10%? \u2191-?% Accuracy Cone Size at 0% Magazine.\nSpecial Weapons receive halved benefits, up to a maximum of +10 Range, +25 Handling, 0.9x? Handling Duration Multiplier, and -5?% Accuracy Cone Size at 0% Magazine.\n\n\u2191 +10 Range, +? Handling, ?x Handling Duration Multiplier, and -%? Accuracy Cone Size at 50% Magazine.\nUp to +? Range, +? Handling, ?x Handling Duration Multiplier, and \u2191-?% Accuracy Cone Size at 0% Magazine."
  },
  "clown cartridge": {
    "name": "Clown Cartridge",
    "category": "Weapon Trait",
    "description": "Upon finishing a reload:\nRandomly grants between 10% \u219113% to 50% Increased Magazine Capacity. Always rounds up.\nAverages out to 30% \u219131.5% Increased Magazine Capacity.\n\n\u2191Compresses the effect range to 13% \u2013 50%.\nAverages out to 31.5% Increased Magazine Capacity. \nBetter RNG!  \ud83c\udfb0 \ud83c\udfb0 \ud83c\udfb0"
  },
  "cluster bomb": {
    "name": "Cluster Bomb",
    "category": "Weapon Trait",
    "description": "Releases 8 Cluster Bombs on impact.\nCluster Bombs explode on impact, each dealing up to 150 \u2191165 [11 \u219112] damage with no falloff over 4 meters.\n\n\u2191Cluster Bomb damage is increased by 10%."
  },
  "cold steel": {
    "name": "Cold Steel",
    "category": "Weapon Trait",
    "description": "Powered Sword Hits inflict Slow for 4.25+? [1.5+?] seconds.\n\nLight Attacks inflict x40 Slow.\nHeavy Attacks inflict x60 Slow.\nFlash Counter's disorienting blast inflicts x60 Slow.\n\n\u2191Passively grants +10 Ammo Capacity (Swords) and +10 Magazine Stat (Identical to Tactical Mag)"
  },
  "collective action": {
    "name": "Collective Action",
    "category": "Weapon Trait",
    "description": "On Elemental-Pickup Interaction:\n30% \u219133% [10% \u219111%] increased damage for an Elemental-Pickup based duration.\nAdditional pickups increase the duration by 7 seconds, up to 16 seconds.\nFiresprites, Void Breaches, and Thrown Tangles grant +8 seconds. \nIonic Traces, Stasis Shards, and Shot Tangles grant +4 seconds. \nBuff can be activated while stowed, and persists through stow.\n\nSubclass Pickups: Ionic Traces, Firesprites, Void Breaches, Stasis Shards, and Tangles. Elemental Orbs from Artifact Perks.\n\n\u2191Increased damage buff."
  },
  "collective pugilism": {
    "name": "Collective Pugilism",
    "category": "Weapon Trait",
    "description": "On Elemental-Pickup Interaction:\nScoring hits grants \u2191increased Melee Ability Energy.\nAdditional pickups increase the duration by 8 seconds, up to 16 seconds.\nFiresprites, Void Breaches, and Thrown Tangles grant +8 seconds. \nIonic Traces, Stasis Shards, and Shot Tangles grant +4 seconds. \n\nMelee Ability Gains:\nSpreadshot HC: 0.5% \u21910.55%\nBurst Sidearm: 0.78% \u21910.86%\nFusion Rifle: 1.15% \u21911.27%\nRocket Pulse: 1.95% \u21912.15%\nSidearm: 2.34% \u21912.57%\nScout: 3.34% \u21913.67%\nRocket Launcher: 12.9% \u219114.2%\n\nSubclass Pickups: Ionic Traces, Firesprites, Void Breaches, Stasis Shards, and Tangles. Elemental Orbs from Artifact Perks.\n\u2191Grants 10% Increased Melee Ability Energy."
  },
  "compulsive reloader": {
    "name": "Compulsive Reloader",
    "category": "Weapon Trait",
    "description": "While above 50% Magazine Capacity:\n+50 \u219155 Reload Speed and 0.95x Reload Duration Multiplier.\n\n\u2191Reload Speed is increased to +55."
  },
  "controlled burst": {
    "name": "Controlled Burst",
    "category": "Weapon Trait",
    "description": "Upon scoring a hit with every bolt in the burst, or upon scoring a Weapon Kill:\n20% increased damage and 0.9x Charge Time Multiplier for 2 \u21912.5 seconds.\nBuff persists through stow.\n\n\u2191Buff duration is increased to 2.5 seconds."
  },
  "cooling baubles": {
    "name": "Cooling Baubles",
    "category": "Weapon Trait",
    "description": "Upon collecting an Elemental Pickup or Orb of Power:\nDissipates -33?% \u2191-35% Heat."
  },
  "cornered": {
    "name": "Cornered",
    "category": "Weapon Trait",
    "description": "While within 15 metres of 2 enemies:\n0.85x Charge/Draw Time Multiplier \u2191and +10 Stability.\nBuff lingers for 1.5 seconds once criteria isn't met.\n\n\u2191Passively grants +5 Stability. Grants +10 Stability while buff is active."
  },
  "counterattack": {
    "name": "Counterattack",
    "category": "Weapon Trait",
    "description": "Upon receiving damage within 0.5 seconds of starting to guard:\n50% increased damage for 2 \u21913 seconds.\n\n\u2191Buff duration is increased to 3 seconds."
  },
  "crystalline corpsebloom": {
    "name": "Crystalline Corpsebloom",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants Crystalline Corpsebloom for 4 seconds.\nScoring additional Weapon Kills while Crystalline Corpsebloom is active causes the enemy to release a Stasis Seeker.\nStasis Seeker travels 3? meters in a random direction (and doesn't seek enemies), spawning a Medium? \u2191Large Stasis Crystal upon expiring.\n\n\u2191Stasis Crystal is upgraded to Large Size."
  },
  "danger zone": {
    "name": "Danger Zone",
    "category": "Weapon Trait",
    "description": "While within 15 metres of 3 enemies:\n?% Increased Blast Radius and decreased self damage.\nBuff lingers for 3.5 seconds once criteria isn't met.\n\nGrenade Launchers: 40% Decreased Self Damage.\nRocket Launchers: 99.99% Decreased Self Damage, and allows Rocket Jumping.\n\n\u2191Passively grants +5 Blast Radius."
  },
  "deconstruct": {
    "name": "Deconstruct",
    "category": "Weapon Trait",
    "description": "Upon scoring a Magazine-Based amount of hits within 6 seconds of each:\n40% increased damage against Constructs and Vehicles for 5 \u21916 seconds. Additional hits while the perk is active will refresh the duration of the damage buff.\nRefills 10% Ammo, rounded up.\nAmmo Refill has no cooldown and can be triggered repeatedly by scoring the needed hits again.\n\nHits required to activate:\n50% [25% Primary] of Magazine + 2, rounded down | Bows: 3 Hits\nHits against Constructs/Vehicles progress Primary Weapons by 1.5x and Special Weapons by 2x.\n\nWave Frame Grenade Launchers:\n3 Hits. Direct Hits count as 2 hits. Doesn't receive bonus progress against Constructs/Vehicles.\n\n\u2191Buff Duration is increased to 6 seconds."
  },
  "delicate tuning": {
    "name": "Delicate Tuning",
    "category": "Weapon Trait",
    "description": "As Heat increases from 0%, up to 50%:\nGrants up to +? \u219122? Range, +? \u2191+? Handling, and -?% \u2191-?% Accuracy Cone Growth at 0% Heat.\nBuff dynamically scales from 100% effect at 0% Heat, down to 50% effect at 50% Heat."
  },
  "demolitionist": {
    "name": "Demolitionist",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants 10% \u219111% Grenade Ability Energy. \n Fusion Rifles, Glaives, Shotguns, and Sniper Rifles grant 20% \u219122% Grenade Ability Energy.\n\n Grenade Ability Usage refills Magazine. \nIncurs a 3 second cooldown between Magazine Refills.\n\n\u2191Kills grant 11% and 22% Grenade Ability Energy respectively."
  },
  "demoralize": {
    "name": "Demoralize",
    "category": "Weapon Trait",
    "description": "On Precision Kill: \nTarget triggers a Void Burst, inflicting Weaken to enemies within 7 meters.\nIncurs a 1.5? \u21911 second cooldown between activations.\n\n\u2191Cooldown is decreased to 1 seconds."
  },
  "desperado": {
    "name": "Desperado",
    "category": "Weapon Trait",
    "description": "Upon finishing a reload within 5.2 seconds of a Precision Kill or 3 Kills within ? seconds of each:\n0.7x Fire Recovery Delay for 6 \u21917 seconds.\nBuff can be refreshed by reactivating the perk. Buff is removed on stow.\n\n\u2191Buff Duration is increased to 7 seconds."
  },
  "desperate measures": {
    "name": "Desperate Measures",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nDesperate Measures x1 | 10% increased damage for 7 \u21917.5 seconds. Additional Weapon Kills refresh the buff duration.\n\nOn Grenade or Melee Kill:\nDesperate Measures x2 | 20% increased damage for 7 \u21917.5 seconds. Additional Weapon Kills refresh the buff duration.\n\nUpon scoring an additional Grenade or Melee Kill while Desperate Measures x2 is active:\nDesperate Measures x3 | 30% increased damage for 7 \u21917.5 seconds. Additional Weapon, Grenade, and Melee Kills refresh the buff duration.\n\nBuff can be activated while stowed, and persists through stow.\n\n\u2191Buff Duration is increased to 7.5 seconds."
  },
  "destabilizing rounds": {
    "name": "Destabilizing Rounds",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nTarget triggers a Void Burst, inflicting Volatile to enemies within 7 metres.\nGrants Volatile Rounds for 3 \u21914.5 seconds.\nIncurs a 1.5 second cooldown upon activating.\n\n\u2191Volatile Rounds duration is increased to 4.5 seconds."
  },
  "detonator beam": {
    "name": "Detonator Beam",
    "category": "Weapon Trait",
    "description": "Upon scoring 25 \u219120 hits within ? seconds of each:\nTriggers an explosion around the target, dealing up to 250 [100] Element-Matching Damage over 8 meters.\n\n\u2191Triggers in 20 hits."
  },
  "discord": {
    "name": "Discord",
    "category": "Weapon Trait",
    "description": "Upon readying a weapon within 5 seconds of scoring a kill with a different weapon:\n0.75x ADS Duration Multiplier, -25% Accuracy Cone Size, and +30 Airborne Effectiveness for 7 \u21918 seconds.\nBuff persists through stow.\n\nOn Weapon Kill, while Discord is active:\nRefills Magazine on Primary Weapons | Refunds 1 Ammo per shot on Special and Heavy Weapons.\n\n\u2191Buff Duration is increased to 8? seconds."
  },
  "disorienting grenades": {
    "name": "Disorienting Grenades",
    "category": "Weapon Trait",
    "description": "Passively grants -200 Blast Radius, 25% decreased damage, and 15% decreased explosion damage radius.\n\nRank-and-File, Elite, and Miniboss Combatants within 6 metres of the explosion are disoriented for 4.5 seconds.\nChampions and Bosses are unaffected by disorient. Disorient radius cannot be altered.\n\nGuardians briefly lose their HUD and have their screen distorted for up to ? seconds. Duration varies depending on the distance from the blast."
  },
  "disruption break": {
    "name": "Disruption Break",
    "category": "Weapon Trait",
    "description": "On Elemental, Barrier or Guardian Shield Break:\nInflicts Kinetic Damage Vulnerability on the enemy, increasing Kinetic Damage Taken by 50% for 5.5 \u2191? [5] seconds. Does not affect Stasis or Strand Damage.\nStacks with all other Buffs and Debuffs (including itself).\n Can be applied multiple times on a single enemy, with each stack having its own duration and stacking multiplicatively.\n\n\u2191Debuff Duration is increased to ? seconds against Combatants."
  },
  "dragonfly": {
    "name": "Dragonfly",
    "category": "Weapon Trait",
    "description": "On Precision Kill:\nTarget explodes, dealing 123.89 [95.3] Weapon-Matching Damage over a 8 metre radius.\nDamage against Combatants scales differently by Weapon Type and Combatant Rank :)\n\n\u2191Increases Explosion Damage by 10% to ? [?]."
  },
  "drop mag": {
    "name": "Drop Mag",
    "category": "Weapon Trait",
    "description": "Passively grants +30 Reload Speed, 0.9x Duration Multiplier, and -20 Magazine Size Stat."
  },
  "dual loader": {
    "name": "Dual Loader",
    "category": "Weapon Trait",
    "description": "Reloading refills an extra 1 \u21912 Ammo at a time.\n\n\u2191Reloading refills an extra 2 Ammo at a time."
  },
  "duelist s trance": {
    "name": "Duelist's Trance",
    "category": "Weapon Trait",
    "description": "On Sword Kill:\n+60 \u2191+65 Guard Efficiency, +60 \u2191+65 Guard Resistance, +60 \u2191+60 Guard Endurance, and +60 \u2191+65 Charge Rate.\nBuff is removed on stow.\n\n\u2191Grants +65 Guard Efficiency, +65 Guard Resistance, +60 Guard Endurance, and +65 Charge Rate."
  },
  "dynamic sway reduction": {
    "name": "Dynamic Sway Reduction",
    "category": "Weapon Trait",
    "description": "While holding down the trigger:\n-?% \u2191-?% Accuracy Cone Size, -10% \u2191-12.5% Accuracy Cone Growth, and +1 Stability per shot.\nStacks up to -?% Accuracy Cone Size, -100% Accuracy Cone Growth, and +10 Stability after firing 10 \u21918 shots.\nEffect at maximum strength removes all bullet spread and grants higher than initial accuracy.\n\n\u2191-?% Accuracy Cone Size, and -12.5% Accuracy Cone Growth per shot, reaching full effect after firing 8 shots."
  },
  "eager edge": {
    "name": "Eager Edge",
    "category": "Weapon Trait",
    "description": "Upon readying a Sword:\n80% \u2191100% Increased Lunge Distance for the next swing within 3 seconds. Airborne Lunge Distance is decreased by 20%.\nIncurs a 3 second cooldown after the buff is removed. Buff is removed on stow.\n\n\u2191Lunge Distance is increased to 100%."
  },
  "eddy current": {
    "name": "Eddy Current",
    "category": "Weapon Trait",
    "description": "After sprinting for 1.5 seconds while the weapon is readied:\n+? Handling, 0.95x Handling Animation Multiplier, +20 Reload Speed, and 0.95x Reload Duration Multiplier for 3 \u2191? seconds.\nStarting to sprint refreshes the buff duration.\n\nWhile Amplified:\nGrants the sprint bonuses passively, and increases the Reload Speed buff to +60 \u2191+?.\n\n\u2191Buff Duration after sprinting is increased to ? seconds. Being Amplified now grants +? Reload Speed and 0.?x Reload Duration Multiplier."
  },
  "elemental capacitor": {
    "name": "Elemental Capacitor",
    "category": "Weapon Trait",
    "description": "Passively grants Stat Bonuses depending on the element of the equipped Super Ability.\n\nSolar: +50 \u2191+55 Reload Speed.\nArc: +50 \u2191+55 Handling.\nVoid: +20 \u2191+25 Stability.\n Stasis: +20 \u2191+25 Recoil Direction and 20% Decreased ADS Movement Speed Penalty.\nStrand: +20 \u2191+25 Airborne Effectiveness.\n\n\u2191Adds an additional +5 to the corresponding Subclass Stat Bonus."
  },
  "elemental honing": {
    "name": "Elemental Honing",
    "category": "Weapon Trait",
    "description": "Dealing Elemental Damage grants a stack of Elemental Honing for 20 \u219123 seconds for each unique Element used, up to a maximum of 5 stacks by using 5 unique elements.\nBuff duration is refreshed upon gaining a stack, and cannot be refreshed once 5 stacks have been reached.\nBuff can be activated and persists through stow. Kinetic Damage does not trigger the buff.\n\nElemental Honing x1 | 2.5% [1.25%] Increased Elemental Weapon Damage and 10% Increased Kinetic Weapon Damage.\nElemental Honing x2 | 10% [5%] Increased Elemental Weapon Damage and 20% Increased Kinetic Weapon Damage.\nElemental Honing x3 | 20% Increased Elemental Weapon Damage and 30% Increased Kinetic Weapon Damage.\nElemental Honing x4 | 30% Increased Elemental Weapon Damage and 35% Increased Kinetic Weapon Damage.\nElemental Honing x5 | 35% Increased Elemental Weapon Damage and 40% Increased Kinetic Weapon Damage.\n\n\u2191Buff duration is increased to 23 seconds."
  },
  "en garde": {
    "name": "En Garde",
    "category": "Weapon Trait",
    "description": "Upon readying a Sword:\n30% Increased damage for 1.5 \u21912? seconds.\nIncurs a 2? second cooldown after the buff is removed.\n\n\u2191Buff duration is increased to 2? seconds."
  },
  "encore": {
    "name": "Encore",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\n+5 Range, +8 Stability, and -1.25% Accuracy Cone Size per stack for 7 \u21917.5 seconds, up to a maximum of 4 stacks. Precision Kills grant 2 stacks.\nAdditional Weapon Kills refresh the buff duration.\nBuff persists through stow.\n\n\u2191Buff duration is increased to 7.5 seconds."
  },
  "energy transfer": {
    "name": "Energy Transfer",
    "category": "Weapon Trait",
    "description": "While Guarding with a Sword:\nEvery point of damage taken grants Class Ability Energy.\n1.5% \u21911.55% Class Ability Energy when Melee Damage is blocked.\n1% \u21911.25% Class Ability Energy when Non-Melee Damage is blocked.\n0.5% \u21910.625% Class Ability Energy when receiving Non-Blocked damage.\n\n\u2191Class Ability Energy gains are increased to 1.55% ,1.25%, and 0.625% respectively."
  },
  "enlightened action": {
    "name": "Enlightened Action",
    "category": "Weapon Trait",
    "description": "Upon scoring a hit:\nGrants stacks of Enlightened Action for 2 seconds, up to a maximum of 12.\nEnlightened Action grants an average of +4 Handling and Reload Speed per stack, up to +50 \u2191+55? Handling and +50 \u2191+55? Reload Speed.\n\nEnlightened Action:\n+2 | +5 | +5 | +3 | +5 | +5 | +5 | +5 | +3 | +2 | +5 | +5 Handling and Reload Speed.\n\nHand Cannon hits grant 3 stacks. Bow hits grant ? stacks.\nAutomatic Weapons grant 1 stack per hit.\n\n\u2191Grants up to +55? Handling and +55? Reload Speed."
  },
  "ensemble": {
    "name": "Ensemble",
    "category": "Weapon Trait",
    "description": "While an ally is within 15 metres:\n+30 \u2191+35 Handling and +40 \u2191+45 Reload Speed.\nBuff lingers for 1.5 seconds once criteria isn't met.\n\n\u2191Stronger Effect. +35 Handling and +45 Reload Speed."
  },
  "envious assassin": {
    "name": "Envious Assassin",
    "category": "Weapon Trait",
    "description": "Upon readying the weapon after scoring kills with a different weapon:\nOverflows Magazine from reserves based on the amount of kills achieved, up to 200% Increased Magazine Size.\n\nPrimary Weapons: 10% \u219112.5% Increased Magazine Capacity per Kill.\nSpecial Weapons | Power Weapons: 20% \u219122.5% Increased Magazine Capacity per Kill.\n\nEach activation can grant up to 100% Increased Magazine Capacity if activated with a full magazine. Always rounds magazine up.\n Can overflow based on the magazine size at the moment of swapping, i.e. if empty and after reaching the max bonus, magazine capacity will be fully refilled. \n\n\u2191Primary Weapons grant 12.5% Increased Magazine Capacity per Kill. Special and Power Weapons grant 22.5% Increased Magazine Capacity per Kill."
  },
  "envious arsenal": {
    "name": "Envious Arsenal",
    "category": "Weapon Trait",
    "description": "Upon dealing ANY damage with both other weapons, and then readying the weapon:\nFully refills magazine.\nDamage-Over-Time effects also work.\n\n\u2191Passively grants +10 Ammo Generation."
  },
  "explosive head": {
    "name": "Explosive Head",
    "category": "Weapon Trait",
    "description": "Bows deal 50% of their Non-Precision Direct Impact Damage as an Explosive Payload.\nExplosive Payload detonates after a distance-based timer, damaging enemies within 3 meters.\nExplosive Payload portion deals 30% increased damage and inflicts increased stagger against Combatants.\n\nImpact Damage's Precision Multiplier is increased to offset the Explosive Payload portion lacking the ability to score Precision Hits.\nNew Ratio = (Base Ratio - 50%) / (1 - 50%)\n\nOverall Damage Increase:\nDamage is increased by 15% of the Weapon's Bodyshot Damage. Precision Damage Increase is equal to 15% / Precision Multiplier.\nDamage remains the same.\n\n\u2191Passively grants +5 Accuracy."
  },
  "explosive light": {
    "name": "Explosive Light",
    "category": "Weapon Trait",
    "description": "On Orb of Power Pickup: \nGrants a stack of Explosive Light, up to a maximum of 6 \u21917 stacks.\nStacks can be obtained while stowed, and are lost on death.\n\nFiring consumes a stack of Explosive Light, granting increased damage, and setting the Blast Radius stat to 100.\nGrenade Launchers receive 60% increased explosive damage.\nRocket Launchers receive 25% increased impact and explosive damage. Does not increase Wolfpack Rounds Damage.\n\n\u2191Maximum Explosive Light stacks are increased to 7."
  },
  "explosive payload": {
    "name": "Explosive Payload",
    "category": "Weapon Trait",
    "description": "Weapons deal 50% of their Non-Precision Direct Impact Damage as an Explosive Payload.\nExplosive Payload detonates on impact, damaging enemies within 3 meters.\nExplosive Payload portion deals 30% increased [7% decreased on Hand Cannons, ] damage and inflicts increased stagger.\n\nImpact Damage's Precision Multiplier is increased to offset the Explosive Payload portion lacking the ability to score Precision Hits.\nNew Ratio = (Base Ratio - 50%) / (1 - 50%)\n\nOverall Damage Increase:\nDamage is increased by 15% of the Weapon's Bodyshot Damage. Precision Damage Increase is equal to 15% / Precision Multiplier.\nBodyshot damage remains the same. Precision Damage remains \"roughly\" the same.\n\n\u2191Passively grants +5 Reload Speed."
  },
  "eye of the storm": {
    "name": "Eye of the Storm",
    "category": "Weapon Trait",
    "description": "As Shield HP drops, initially triggering at 40 Shield HP, maxing out in effect at 0 Shield HP:\nLinearly grants up to +30 \u2191+33 Handling, -40% \u2191-44% Accuracy Cone Size, and -17% \u2191-19% Accuracy Cone Growth.\nBuff dynamically scales from 0% effect at 80 Shield HP, up to 100% effect at 0 Shield HP (also known as Critical Health)\n Buff lasts until Shields are restored to 80 Shield HP.\n\n\u2191Grants up to +33 Handling, -44% Accuracy Cone Size, and -19% Accuracy Cone Growth."
  },
  "feeding frenzy": {
    "name": "Feeding Frenzy",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants Reload Speed and Reload Duration Multiplier per stack for 3.5 seconds, up to a maximum of 5 stacks.\nBuff persist through stow.\n\n+8 \u2191+13 | +50 \u2191+55 | +60 \u2191+65 | +75 \u2191+85 | +100 \u2191+100 Reload Speed.\n0.975x | 0.9x | 0.87x | 0.84x | 0.8x Reload Duration Multiplier.\n\n\u2191+13 | +55 | +65 | +85 | +100 Reload Speed. Reload Duration Multipliers are unchanged."
  },
  "field prep": {
    "name": "Field Prep",
    "category": "Weapon Trait",
    "description": "Passively grants +20 \u2191+30 Ammo Generation.\n\nWhile Crouched:\n+50 \u2191+55? Reload Speed, 0.8x Reload Duration Multiplier, and 0.8x Ready/Stow Duration Multiplier.\n\n\u2191+55? Reload Speed. +30 Ammo Generation."
  },
  "firefly": {
    "name": "Firefly",
    "category": "Weapon Trait",
    "description": "On Precision Kill:\nTarget explodes, dealing up to 104 [80] Solar Damage in a 7.5 metre radius, and grants +50 +55 Reload Speed for 6 seconds. \nReload Buff persists through stow. Damage against Combatants scales differently by Weapon Type and Combatant Rank :)\n\n\u2191Reload Buff is increased to +55 Reload Speed."
  },
  "firing line": {
    "name": "Firing Line",
    "category": "Weapon Trait",
    "description": "While within 15 metres of 2 allies:\n20% Increased Precision Damage.\n\n\u2191Grants +10 Handling while perk is active."
  },
  "firmly planted": {
    "name": "Firmly Planted",
    "category": "Weapon Trait",
    "description": "While Crouched:\n+20 \u2191+25 Stability, +30 \u2191+35 Handling, -40% Accuracy Cone Size, -17% Accuracy Cone Growth, and -80% Recoil Yaw (Horizontal Recoil)\n[Fusion Rifles] 10 \u2191+13 Stability, +15 \u2191+18 Handling, -20% Accuracy Cone Size, -8.5% Accuracy Cone Growth, and -40% Recoil Yaw (Horizontal Recoil)\n\n\u2191Grants an additional +5 Handling and +5 Stability while crouched. Fusion Rifles receive +3 Handling and +3 Stability."
  },
  "flash counter": {
    "name": "Flash Counter",
    "category": "Weapon Trait",
    "description": "Upon receiving damage while guarding:\nTriggers a Frontal Blast, dealing up to 110 [?] Weapon-Matching Damage and disorienting Combatants in a large cone up to ~8? meters away for 5 \u21916 seconds.\nDamage scales from 75 [14] at point-blank, up to 110 [45] at ? meters. Concussion strength against Guardians scale similarly with distance.\nDamage against Combatants scales with Combatant Rank Modifiers and counts as Weapon Damage.\nIncurs a 2.5 second cooldown between activations.\n\n\u2191Disorient duration is increased to 6 seconds."
  },
  "focused fury": {
    "name": "Focused Fury",
    "category": "Weapon Trait",
    "description": "Upon scoring 35% of Magazine as Precision Hits:\n25% increased damage for 11 \u219112 seconds. Precision counter is reset on stow or reload.\nBuff can be refreshed while active, and persists through stow. Does not increase the damage of Explosive Damage Perks.\n\n\u2191Buff Duration is increased to 12 seconds."
  },
  "fourth time s the charm": {
    "name": "Fourth Time's The Charm",
    "category": "Weapon Trait",
    "description": "Scoring 4 Precision Hits within 2 \u21913 seconds of each generates 2 Ammo to Magazine.\nAmmo Generation cannot generate ammo past Base Magazine Size.\nTimer between hits persists through stow.\n\n\u2191Timer between Precision Hits increased to 3 seconds."
  },
  "fragile focus": {
    "name": "Fragile Focus",
    "category": "Weapon Trait",
    "description": "Grants +20 Range while Shields are active.\nDeactivates upon reaching Critical Health. Reactivates after 1\u21910.5 seconds of Shield HP being restored to full.\n\n\u2191Reactivation Delay is decreased to 0.5 seconds."
  },
  "frenzy": {
    "name": "Frenzy",
    "category": "Weapon Trait",
    "description": "After having maintained a state of dealing or receiving damage every 5 \u21915.5 seconds for at least 12 seconds:\n15% Increased damage, +100 Handling, and +100 Reload Speed for 7 seconds. \nDealing or receiving damage refreshes the buff duration.\nBuff can be activated while stowed, and persists through stow.\n\n\u2191Damage Timer USED TO BE increased to 5.5 seconds, but is currently not working. \nRetested in Update 9.5.0.5 (Jan 13, 2026) aaaaaand still broken LMAO\nIT ACTUALLY GOT FIXED OMG\n\nRoar of Battle (Crucible Origin Trait) prevents Frenzy from activating on that weapon. Other weapons with Frenzy will still work."
  },
  "full auto trigger system": {
    "name": "Full Auto Trigger System",
    "category": "Weapon Trait",
    "description": "Passively grants 0.9x Fire Recovery Delay on Shotguns."
  },
  "full choke": {
    "name": "Full Choke",
    "category": "Weapon Trait",
    "description": "While ADS:\n-5% Pellet Spread.\nReduces Precision Damage Multiplier from 1.1078x to 1.0294x, or a 7.6% Precision Damage Penalty."
  },
  "full court": {
    "name": "Full Court",
    "category": "Weapon Trait",
    "description": "After 0.2 seconds of the projectile being fired:\nGrants up to 35% Increased Explosive and Burn (DoT) Damage based on the projectile lifetime.\nLinearly scales from 0% increased damage at 0.2 seconds, up to 35% increased damage at 1.1 seconds of projectile lifetime\n\n\u2191Passively grants +5 Blast Radius."
  },
  "genesis": {
    "name": "Genesis",
    "category": "Weapon Trait",
    "description": "Energy Weapons generate 1 Ammo against Matching Combatant Elemental Shields per hit.\n\nUpon breaking a Combatant, Barrier, or Guardian Shield:\n Refills magazine.\n\n\u2191Passively grants +5 Handling."
  },
  "golden tricorn": {
    "name": "Golden Tricorn",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGolden Tricorn x1 | 15% Increased damage for 7 seconds. \nAdditional Weapon Kills refresh the buff duration to 7 \u21918 seconds.\nBuff is removed on stow.\n\nOn Grenade or Powered Melee Kill, while the buff is active, if the Weapon's Element matches the Grenade or Melee Element, respectively:\nGolden Tricorn x2 | 50% increased damage for 10 seconds.\n Additional Grenade or Powered Melee Kills refresh the buff duration to 10 seconds.\nBuff is removed on stow.\n\n\u2191Golden Tricorn x1 damage buff duration is increased to 8 seconds upon scoring additional weapon kills."
  },
  "grave robber": {
    "name": "Grave Robber",
    "category": "Weapon Trait",
    "description": "Upon dealing Powered Melee Damage, or upon scoring a Melee Kill:\nRefills Magazine.\nIncurs a 3 second cooldown between Magazine Refills.\n\n\u2191Passively grants +5 Handling."
  },
  "gutshot straight": {
    "name": "Gutshot Straight",
    "category": "Weapon Trait",
    "description": "While ADS:\n -15% \u2191-10%? Auto Aim Cone Size and increased non-Precision Damage,\n\n20% Increased Non-Precision Damage: Auto Rifles, Bows, Hand Cannons, Scout Rifles, and Sniper Rifles.\n10% Increased Non-Precision Damage: Trace Rifles, Pulse Rifles, Sidearm, Submachine Guns\n\n\u2191Reduces Aim Assistance Cone Size penalty to -10?%."
  },
  "harmony": {
    "name": "Harmony",
    "category": "Weapon Trait",
    "description": "Upon readying a weapon within 3 seconds of getting a kill with a different weapon:\n20% Increased damage and +15 Handling for 7 \u21918 seconds.\nBuff persists through stow.\n\n\u2191Buff duration is increased to 8 seconds."
  },
  "hatchling": {
    "name": "Hatchling",
    "category": "Weapon Trait",
    "description": "Upon scoring a Precision Kill OR 3 kills within 3 seconds of each:\nSpawns 1 \u21912 (at a 10?% chance) Threadling on Enemy Death Location. \n\n\u2191Spawns an additional Threadling at a 10%? chance."
  },
  "headseeker": {
    "name": "Headseeker",
    "category": "Weapon Trait",
    "description": "Upon dealing direct non-Precision Weapon Damage:\nGrants increased Precision Damage and 3?% Increased Auto Aim Cone Size for 0.55 seconds. \nDealing additional Non-Precision Damage refreshes the buff duration.\nThe perk actually multiplies the Precision Bonus by 1.2x, but the actual Precision Damage Increase results are easier to explain.\n\nPrecision Damage Increase per Intrinsic Frame:\nAdaptive Pulse = 7.1% | Aggressive Pulse = 10% | Heavy Burst Pulse = 9.5%\nHigh-Impact Pulse = 8.74% | Lightweight Pulse = 6.3% | Rapid-Fire Pulse = 10.3%\nAdaptive Burst Sidearm = 8.46% | Heavy Burst Sidearm = 7.36%\nHeavy Burst Hand Cannon = 7% increased Weakspot Damage.\n\n\u2191Passively grants +5 Stability.\n\nWhat even is a Weakspot? How is it different from a Precision Hit?\nWeakspot Hits that do not register as a Precision Hit can still benefit or trigger Weakspot effects, such as Headseeker, or Heavy Burst Hand Cannon's intrinsic 9.5% Weakspot Damage Buff.\nSimilarly, Precision Hits are not always scored on Weakspots, and may not trigger Weakspot effects.\nCurrently, the existence of \"Weakspot Modifiers\" is a bug."
  },
  "headstone": {
    "name": "Headstone",
    "category": "Weapon Trait",
    "description": "On Precision Kill:\nCreates a Stasis Crystal on Enemy Death Location. \n\nTier 1 and Tier 2 Combatants = Medium \u2191Large Crystal\n Tier 3 and Tier 4 Combatants = Large Crystal \nGuardians = Large Crystal\n\nIncurs a 5 second cooldown if 5 Stasis Crystals are created within ? seconds of the first.\n\n\u2191Tier 1 and Tier 2 Combatants now spawn a Large Crystal."
  },
  "heal clip": {
    "name": "Heal Clip",
    "category": "Weapon Trait",
    "description": "Upon finishing a reload within 5.3? \u2191? seconds of a Kill:\nGrants x2 Cure.\nAllies within 15 metres receive x1 Cure.\n\n\u2191Reload Window is increased to ? seconds."
  },
  "heating up": {
    "name": "Heating Up",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants a stack of Heating Up for 5.5 \u21916.5 seconds, up to a maximum of 2 stacks. \nBuff persists through stow.\n\nHeating Up x1 | +15 Stability, +20 Recoil Direction, -15% Accuracy Cone Size, and -15% Accuracy Cone Growth.\nHeating Up x2 | +30 Stability, +40 Recoil Direction, -25% Accuracy Cone Size, and -25% Accuracy Cone Growth.\n\n\u2191Buff duration is increased to 6.5 seconds."
  },
  "high ground": {
    "name": "High Ground",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants 1 [2] stacks of High Ground.\n\nUpon dealing damage while 2? [5 on Primaries | 2 on Special and Heavy weapons] meters above an enemy, while grounded:\nGrants 3 [1 on Primary Weapons | 3 on others] stacks of High Ground. \nThe shot that triggers High Ground does receive the damage increase.\n\nHigh Ground:\n10% [5%] | 17.5% [10%] | 25% [15%] Increased Damage for 7 seconds.\nDealing additional damage while above an enemy, or scoring a kill refreshes the buff duration.\nBuff persists through stow.\n\n\u2191Passively grants +5 Reload Speed."
  },
  "high caliber rounds": {
    "name": "High-Caliber Rounds",
    "category": "Weapon Trait",
    "description": "Passively grants +5 \u2191+7 Range.\n\nHits inflict increased Flinch on Enemies.\nTier 1 and Tier 2 Rank-and-File can be repeatedly staggered. Higher Tier Combatants stagger quicker.\n Flinch against Guardians varies based on Weapon Damage and Weapon Archetype. Flinch Increase ranges between 5% to 10%"
  },
  "high impact reserves": {
    "name": "High-Impact Reserves",
    "category": "Weapon Trait",
    "description": "As Magazine decreases below 50% \u219155%, down to maximum effect at 7.5% Magazine:\n12.1% [3%] to 25.6% [6%] Increased damage. \nDoes not increase the damage of Explosive Damage Perks.\n\n\u2191Activates at the 55% Magazine Threshold."
  },
  "hip fire grip": {
    "name": "Hip-Fire Grip",
    "category": "Weapon Trait",
    "description": "While hipfiring:\n20% Increased Aim Assist Falloff Distance, Reticle Stickiness Falloff Distance, and Damage Falloff Distance.\n+15 Aim Assist, +2.7\u00b0 Precision Angle Threshold, -30% Accuracy Cone Size and +25 Stability.\nPrecision Angle Threshold does not prefer Precision Hits over Body Hits if both cones overlap.\n\nShotguns, Sniper Rifles, Fusion Rifles, and The Last Word do not benefit from Damage Falloff Increases.\nPrecision Angle Threshold cannot exceed regular Aim Assist Cone Size.\n\n\u2191Stronger effect. Accuracy Cone Size remains unchanged."
  },
  "immovable object": {
    "name": "Immovable Object",
    "category": "Weapon Trait",
    "description": "While blocking and stationary:\nGlaive Projectile Hits grant +90% \u2191+100% increased Weapon Energy.\nGlaive Projectiles hits grant 25% Weapon Energy by default.\n\n\u2191Grants 100% increased Weapon Energy."
  },
  "impact casing": {
    "name": "Impact Casing",
    "category": "Weapon Trait",
    "description": "Passively grants 10% Increased Impact Damage and +10 \u2191+12 Stability."
  },
  "impromptu ammunition": {
    "name": "Impromptu Ammunition",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants 1.15x Special Ammo Progress and 1.1x Power Ammo Progress for 5 \u21915.5 seconds.\nScoring additional Weapon Kills extend the buff duration to 7 \u21917.5 seconds.\nAmmo Generation Multiplier is additive to Ammo Finder Multipliers.\n\n\u2191Buff duration is increased."
  },
  "impulse amplifier": {
    "name": "Impulse Amplifier",
    "category": "Weapon Trait",
    "description": "Passively grants +20 \u2191+25 Reload Speed, 0.85x Reload Duration Multiplier, and Increased Projectile Velocity,\nRocket Launchers are instead granted 0.8x Reload Duration Multiplier, alongside the usual bonuses.\n\nProjectile Velocity Increase:\nRocket Launchers: 10% Increased Projectile Velocity Speed.\nSupport Auto Rifles: 15% Increased Projectile Velocity Speed.\nRocket Sidearm: 25% Increased Projectile Velocity Speed.\n\n\u2191+25 Reload Speed. Reload Duration Multiplier remains unchanged."
  },
  "incandescent": {
    "name": "Incandescent",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nTarget explodes, dealing up to 30 Solar Damage and inflicting x30+10 \u2191+15 Scorch over 4 meters.\nElite+ Combatants and Guardians trigger a stronger explosion that inflicts x40+10 \u2191x45+15 Scorch over 8 meters.\nDamage from the Scorching Explosion and Scorch can be increased through Weapon Damage Buffs and Debuffs and are unaffected by Combatant Rank Multipliers.\n\n\u2191Increases the number of Scorch Stacks applied."
  },
  "invisible hand": {
    "name": "Invisible Hand",
    "category": "Weapon Trait",
    "description": "Upon consecutively missing multiple shots within 2.5 seconds of each:\nGrants +25? Stability for 2.5 seconds. Additional misses refresh the buff duration.\nBuff is removed after 1? \u2191? seconds of failing to miss.\n\nMisses in a row required:\nAuto Rifles and Submachine Guns: 10 misses.\nPulse Rifle: 9 misses.\nHand Cannons: 4 misses.\nLinear Fusion Rifle: 2 misses.\n\u2191Buff is removed within ? seconds of scoring a hit."
  },
  "iron gaze": {
    "name": "Iron Gaze",
    "category": "Weapon Trait",
    "description": "Passively grants +20 Aim Assist and -20 \u2191-15 Range.\n\n\u2191Reduces Range Penalty to -15."
  },
  "iron grip": {
    "name": "Iron Grip",
    "category": "Weapon Trait",
    "description": "Passively grants +20 Stability and -20 \u2191-15 Reload Speed.\n\n\u2191Reduces Reload Speed Penalty to -15."
  },
  "iron reach": {
    "name": "Iron Reach",
    "category": "Weapon Trait",
    "description": "Passively grants +20 Range and -20 \u2191-15 Stability\n\n\u2191Reduces Stability Penalty to -15."
  },
  "jolting feedback": {
    "name": "Jolting Feedback",
    "category": "Weapon Trait",
    "description": "Upon scoring multiple direct hits within 3 seconds of each:\nThe next direct hit inflicts Jolt.\nBeing Amplified reduces the amount of hits needed to trigger Jolting Feedback.\nHit counter persists through stow. Hits do not have to be on the same target.\n\nHits needed to grant Jolting Shot | Amplified:\nSubmachine Gun and Trace Rifle: 18 \u219117 | 13\nMachine Gun: 16 \u219114 | 11\nAuto Rifle: 15 \u219114 | 11\nPulse Rifles: 14? \u219111 | 9\nSidearm: ? \u21919 | 7\nScout Rifles: ? \u21916 | 4\nBow: ? \u21912 | 1\nRocket Pulse: ?? \u21917 | 5\nSpecial Hand Cannon: ?? \u21916 | 4\nRocket Sidearm: ? \u21913 | 2 \nGlaive: 4 \u21913 | 3\nLinear Fusion Rifle: 4? \u21913 | 2\nHeavy Grenade Launcher: 3 \u21912 | 2\n\n\u2191Non-Amplified Hit requirement is decreased."
  },
  "keep away": {
    "name": "Keep Away",
    "category": "Weapon Trait",
    "description": "While no enemies are within 15 metres:\n+10 Range, +30 \u2191+35 Reload Speed, and -5?% \u2191-?% Accuracy Cone Growth\n\n\u2191+35 Reload Speed, and -?% Accuracy Cone Growth."
  },
  "kickstart": {
    "name": "Kickstart",
    "category": "Weapon Trait",
    "description": "Upon sliding, after sprinting for 1.5 seconds:\n15% Increased damage and 0.8x Charge Time for ? \u2191? seconds. \n\n\u2191Buff duration is increased to ? seconds."
  },
  "kill clip": {
    "name": "Kill Clip",
    "category": "Weapon Trait",
    "description": "Upon finishing a reload within 3.6 seconds of a Weapon Kill:\n25% Increased damage for 5 \u21915.5 seconds. \nBuff can be refreshed through additional activations.\nBuff is removed on stow. Does not increase the damage of Explosive Damage Perks.\n\n\u2191Buff duration is increased to 5.5 seconds."
  },
  "killing tally": {
    "name": "Killing Tally",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants a stack of Killing Tally, up to 3 stacks. \nStacks are removed on stow or reload.\n\nKilling Tally:\n10% | 20% | 30% increased damage\n5% | 10% | 15% increased damage\n\n\u2191Passively grants +10 Magazine Stat (Identical to Tactical Mag)."
  },
  "killing wind": {
    "name": "Killing Wind",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\n+20 Range, +50 Mobility, +40 Handling, and 5% Increased Damage Falloff Distance for 5 \u21915.5 seconds.\nScoring additional Weapon Kills extends the buff duration by +5 seconds, up to 8 seconds.\nBuff is removed on stow.\n\n\u2191Initial buff duration is increased to 5.5 seconds."
  },
  "kinetic tremors": {
    "name": "Kinetic Tremors",
    "category": "Weapon Trait",
    "description": "After 0.25 seconds of scoring multiple direct hits within 3 seconds of each against a single enemy:\nEmits 3 shockwaves underneath the enemy at the place of activation, at a rate of one per second.\nEach Shockwave deals up to 90 [20] Kinetic Damage over a 6 metre radius. Shockwave hits count as weapon damage.\nKinetic Tremors cannot be re-triggered on the same enemy within 2 seconds of the last shockwave.\nHit counter persists through stow.\n\nTremor Damage against Combatants:\nShockwave damage is based off of the Combatant Rank it is initially triggered on. \nDeals 33.3% increased damage if triggered on an Miniboss or Boss.\nDamage is affected by Kinetic Bonus Damage and scales with Combatant Rank Modifiers. \n\nHits needed to activate:\nSubmachine Guns: 14 \u219113\nAuto Rifles: 12 \u219111\n Pulse Rifles: 11 \u219110\nHigh-Impact Auto Rifles: 9 \u21918\nNon-Burst Sidearms: 8 \u21917\n180RPM Hand Cannons and Scout Rifles: 6 \u21915\n120RPM and 150RPM Scout Rifles | 140RPM Hand Cannons : 5 \u21914\n120RPM Hand Cannons: 4 \u21913\nBows and Sniper Rifles: 3 \u21912\n\n\u2191Requires 1 less hit to activate."
  },
  "lasting impression": {
    "name": "Lasting Impression",
    "category": "Weapon Trait",
    "description": "Passively grants +50 Blast Radius.\n\nRockets attach on impact, detonating after 3 seconds, dealing an additional 35% Explosive Damage.\n\n\u2191Passively grants an additional +5 Blast Radius."
  },
  "lead from gold": {
    "name": "Lead from Gold",
    "category": "Weapon Trait",
    "description": "On Heavy Ammo Brick Pickup:\nGrants 25% \u219135% of Special Ammo Reserves.\nEquipping two Special Weapons halves the amount of ammo granted to 12.5% \u219117.5%.\nBuff can be activated while stowed\n\n\u2191Increases the amount of Special Ammo received to 35%."
  },
  "lead from light": {
    "name": "Lead from Light",
    "category": "Weapon Trait",
    "description": "On Orb of Power Pickup: \nGrants a stack of Lead from Light, up to ? stacks.\n\nWeapon Kills consume a stack of Lead From Light to grant 1.25x Special Ammo Generation Multiplier.\n\n\u2191Maximum Lead from Light stacks are increased to 6."
  },
  "lone wolf": {
    "name": "Lone Wolf",
    "category": "Weapon Trait",
    "description": "Passively grants +5 \u2191+6 Aim Assist, 0.9x \u21910.85x ADS Duration Multiplier, and +15 \u2191+16 Airborne Effectiveness.\n\nWhile no allies are within 15 meters:\nBonuses are doubled to +10 \u2191+11 Aim Assist, 0.8x \u21910.75x ADS Duration Multiplier, and +30 \u2191+32 Airborne Effectiveness.\nBuff appears as active on the weapon buff display.\n\n\u2191+6 Aim Assist, 0.85x ADS Duration Multiplier, and +16 Airborne Effectiveness.\n+11 Aim Assist, 0.75x ADS Duration Multiplier, and +32 Airborne Effectiveness while no allies are within 15 meters."
  },
  "loose change": {
    "name": "Loose Change",
    "category": "Weapon Trait",
    "description": "Upon inflicting an Elemental Debuff:\n+50 Reload Speed, +20 Aim Assist, and 20% Decreased ADS Movement Speed Penalty for 9 \u219110 seconds.\nReactivating the perk refreshes the buff duration.\nBuff can be activated while stowed, and persists through stow.\n\n\u2191Buff duration is increased to 5 seconds."
  },
  "magnificent howl": {
    "name": "Magnificent Howl",
    "category": "Weapon Trait",
    "description": "Scoring a Precision Kill grants a stack of Precision Final Blows, up to 10 stacks. \nStacks are consumed on reload, and persist through stow. Cannot gain stacks while Magnificent Howl is active.\n\nUpon finishing a reload while having Precision Final Blows stacks:\nConverts all Precision Final Blow stacks into Magnificent Howl stacks.\nFiring consumes a stack of Magnificent Howl per shot, granting 50% \u219155% increased damage and ?% Increased Damage Falloff Distance.  \nScoring a Precision Kill while Magnificent Howl is active grants x1 Magnificent Howl stacks.\nMagnificent Howl stacks persist through stow.\n\n\u2191Magnificent Howl Damage Buff is increased to 55%."
  },
  "master of arms": {
    "name": "Master of Arms",
    "category": "Weapon Trait",
    "description": "Upon scoring a Weapon Kill with any weapon:\nMaster of Arms x1 | 15% Increased Damage for 7 \u21918? seconds. Timer starts on Weapon Kill.\nBuff persists through stow.\n\nUpon scoring a Weapon Kill with any weapon, while Master of Arms x1 is active:\nMaster of Arms x2 | 25% Increased Damage for 4 \u21915? seconds. Timer starts on Weapon Kill.\nAdditional Kills with any weapon refresh the Master of Arms duration. Buff drops down to x1 Master of Arms upon expiring.\nBuff persists through stow.\n\n\u2191Buff duration is increased. x1 to 8 seconds, and x2 to 5? seconds."
  },
  "meganeura": {
    "name": "Meganeura",
    "category": "Weapon Trait",
    "description": "Upon scoring a Precision Hit:\nGrants a stack of Meganeura for 3.5 \u21914 seconds, increasing up to a maximum of 3 stacks.\nBuff persists through stow.\n\nOn Precision Kill:\nTarget explodes, dealing 123.89 [95.3] Weapon-Matching Damage over a 7.5 meter radius, down to a minimum of 50% Damage at the farthest point.\nExplosion Damage is increased by the amount of Meganeura stacks.\nx1 == Dragonfly | x2 = 40% [?%] | x3 = 67.4% [?%]\nDamage against Combatants scales differently by Weapon Type and Combatant Rank :)"
  },
  "melee momentum": {
    "name": "Melee Momentum",
    "category": "Weapon Trait",
    "description": "On Glaive Melee Kill:\nGrants Weapon Energy and ?% Increased Movement Speed while Blocking for 10 seconds.\nRank-and-File = 16.7% \u2191?% Energy | Elite = ?% \u2191?% | Miniboss = 50% \u2191?% | Guardian = ?% \u2191?%\n\n\u2191Increased Weapon Energy on Melee Kill."
  },
  "moving target": {
    "name": "Moving Target",
    "category": "Weapon Trait",
    "description": "While ADS:\n+10 \u2191+11? Aim Assist. \n10% Decreased ADS Movement Speed Penalty.\n\n\u2191Aim Assist bonus is increased by an unknown amount."
  },
  "mulligan": {
    "name": "Mulligan",
    "category": "Weapon Trait",
    "description": "On Miss:\nPrimary Weapons have a 35% \u219140% chance to generate 1 Ammo.\nSpecial Weapons and Power Weapons have a 20% \u219125%? chance to generate 1 Ammo.\n\n\u2191Primary Weapons have a 40%? chance to generate ammo. \nSpecial Weapons and Power Weapons have a 25%? chance to generate ammo."
  },
  "multikill clip": {
    "name": "Multikill Clip",
    "category": "Weapon Trait",
    "description": "Upon finishing a reload within 3.6 seconds of a Weapon Kill:\n17% | 33% | 50% increased damage for 5 \u21915.5 seconds if 1 | 2 | 3+ enemies were killed within 3.5 seconds of each.\nBuff is overwritten every time it is reactivated.\nBuff is removed on stow. Kill counter persists through stow.\n\n\u2191Buff duration is increased to 5.5 seconds."
  },
  "no distractions": {
    "name": "No Distractions",
    "category": "Weapon Trait",
    "description": "After 1 \u21910.9 seconds of ADS without firing:\n 35% Flinch Resist while ADS.\nTimer starts as soon as the ADS input is pressed.\n\n\u2191ADS timer is decreased to 0.9? seconds."
  },
  "offhand strike": {
    "name": "Offhand Strike",
    "category": "Weapon Trait",
    "description": "On Weapon Kill, and only while hipfiring:\n45% Increased Damage Falloff Start and End Distance, ?% Increased Aim Assist Falloff Start and End Distance.\n+30 Stability, -95%? Accuracy Cone Size, -95%? Accuracy Cone Growth, and +~3\u00b0 Precision Angle Threshold for 7 \u2191+8 seconds.\nPrecision Angle Threshold cannot exceed regular Aim Assist Cone Size.\nBuff is removed on stow.\n\n\u2191Buff duration is increased to 8 seconds."
  },
  "one for all": {
    "name": "One For All",
    "category": "Weapon Trait",
    "description": "Upon damaging 3 separate enemies within 3 seconds of each:\n35% Increased damage for 10 \u219111 seconds.\nBuff cannot be refreshed until its duration expires. Buff persists through stow.\n\n\u2191Buff duration is increased to 11 seconds."
  },
  "one two punch": {
    "name": "One-Two Punch",
    "category": "Weapon Trait",
    "description": "Upon scoring a hit with 12 \u219110 pellets:\nGrants 150% Shotgun | 75% Hand Cannon [100%?] increased Melee Damage for the next Melee Hit within 3 seconds.\nBuff is removed on stow.\n\nOne-Two Punch does not stack with the passive Melee Damage Increase against Frozen non-Boss targets. The higher buff of the two takes precedence.\n\n\u2191Pellet Activation Requirement is decreased from 12 to 10."
  },
  "onslaught": {
    "name": "Onslaught",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants a stack of Onslaught, increasing Fire Rate and Reload Speed per stack for 4.5 \u21915? seconds, up to a maximum of 3 stacks.\nAdditional Weapon Kills refresh the buff duration.\nBuff persists through stow.\n\nOnslaught:\n1.2x | 1.4x | 1.6x Fire Rate.\n+15 | +25 | +35 Reload Speed.\n\n\u2191Buff duration is increased to 5? seconds."
  },
  "opening shot": {
    "name": "Opening Shot",
    "category": "Weapon Trait",
    "description": "Grants the following bonuses for the first shot (of the burst):\nPrimary/Power Weapons: +25 +30 Range, +20 +25 Aim Assist, -5% Accuracy Cone Size, and -10% Accuracy Cone Growth.\nSpecial Weapons: +13 \u2191+15 Range, +10 +13 Aim Assist, -2.5% Accuracy Cone Size, and -5% Accuracy Cone Growth.\nIncurs a 3 second cooldown after shooting.\n\n\u2191Grants additional Aim Assist and Range."
  },
  "osmosis": {
    "name": "Osmosis",
    "category": "Weapon Trait",
    "description": "On Grenade Ability Usage:\nRefills 50% of Magazine\nChanges Weapon Element to match Equipped Grenade-Element until stowed.\nKinetic Damage Weapons lose their Combatant Damage Bonus. Can only refill once per activation until weapon is stowed.\nEffects that replace Grenade Abilities will trigger Osmosis, replacing the weapon's element with the currently equipped grenade.\n\u2191Passively grants +5 Handling."
  },
  "outlaw": {
    "name": "Outlaw",
    "category": "Weapon Trait",
    "description": "On Precision Kill:\n+70 Reload Speed, and 0.9x Reload Duration Multiplier for 6 \u21917 seconds.\nBuff is removed on stow.\n\n\u2191Buff duration is increased to 7 seconds."
  },
  "overclocked heatsink": {
    "name": "Overclocked Heatsink",
    "category": "Weapon Trait",
    "description": "Passively grants 2% increased damage \u2191and +2 Handling at the downside of -10 Cooling Efficiency Stat.\n\nHow do Heat Weapons work?"
  },
  "overflow": {
    "name": "Overflow",
    "category": "Weapon Trait",
    "description": "On Special or Heavy Ammo Brick Pickup:\nRefills Magazine and grants 100 \u2191120% Increased Magazine Capacity. \nBuff can be activated while stowed.\n\n\u2191Ammo Brick Pickup grants 120% Increased Magazine Capacity."
  },
  "paracausal affinity": {
    "name": "Paracausal Affinity",
    "category": "Weapon Trait",
    "description": "Upon scoring an Alignment-matching Elemental Kill:\n20% increased damage for 6 \u21917 seconds.\nAdditional Kills with Alignment-matching sources refresh the buff duration.\nBuff can be activated while stowed, and persists through stow.\n\nLight Alignment = Arc, Solar, and Void.\n Darkness Alignment = Stasis and Strand.\n\n\u2191Buff Duration is increased to 7 seconds."
  },
  "perfect float": {
    "name": "Perfect Float",
    "category": "Weapon Trait",
    "description": "After having maintained a state of dealing or receiving damage every 3 \u21913.5 seconds for at least 6 seconds:\n+30 Airborne Effectiveness and 35% Flinch Resist for 10 \u219112 seconds. \nDealing or receiving damage refreshes the buff duration.\nBuff can be activated while stowed, and persists through stow.\n\n\u2191Damage Timer is increased to 3.5 seconds. Buff duration is increased to 12 seconds."
  },
  "permeability": {
    "name": "Permeability",
    "category": "Weapon Trait",
    "description": "On Class Ability Usage:\nRefills 50% of Magazine and changes Weapon Element to match Super-Element until stowed.\nCan only refill once per activation until weapon is stowed.\n\n\u2191Passively grants +5 Handling."
  },
  "perpetual motion": {
    "name": "Perpetual Motion",
    "category": "Weapon Trait",
    "description": "While maintaining a movement speed of at least 2 meters per second:\nGrants x1 Perpetual Motion after 2 seconds, and x2 Perpetual Motion after 10 \u21919 seconds.\nBuff can be activated while stowed, and persists through stow, as long as criteria is met. Buff lingers for 0.5 seconds once criteria isn't met.\n\nPerpetual Motion x1 | +10 Stability, +10 Handling, and +10 Reload Speed.\nPerpetual Motion x2 | +20 Stability, +20 Handling and +20 Reload Speed.\n\n\u2191Perpetual Motion x2 is activated in 9 seconds."
  },
  "phase magazine": {
    "name": "Phase Magazine",
    "category": "Weapon Trait",
    "description": "Sets the Submachine Gun's Damage and Magazine Profile into that of a Precision Frame's.\nDoes not change the intrinsic Frame bonus."
  },
  "physic": {
    "name": "Physic",
    "category": "Weapon Trait",
    "description": "Upon triggering Support Frame Boost:\nGrants x1 Restoration for 4+2 seconds to the user and the targeted ally.\n\n\u2191Restoration duration is increased to 5+2.5 seconds."
  },
  "precision instrument": {
    "name": "Precision Instrument",
    "category": "Weapon Trait",
    "description": "Upon scoring a Direct Weapon Hit:\nGrants a stack of Precision Instrument, up to a maximum of 6 stacks for 1.1 seconds. Lasts 2.1 seconds on weapons with Draw/Charge Time.\nEach stack grants a 1/6th of the maximum 25% \u219130% increased Precision damage. \nAdditional Direct Weapon Hits refresh the buff duration. All stacks are removed upon missing.\nAdaptive Burst Linear Fusion Rifle exclusive: Requires 2 hits per stack. All stacks are removed upon missing, except when it doesn't :)\nHeavy Burst Frame exclusive: Can only get 1 stack per burst.\nBuff persists through stow.\n\n4.17% | 8.34% | 12.5% | 16.7% | 20.83% | 25% Increased Precision Damage.\n\u21915% | 10% | 15% | 20% | 25% | 30% Increased Precision Damage."
  },
  "proximity power": {
    "name": "Proximity Power",
    "category": "Weapon Trait",
    "description": "On Weapon Kill while within 15 meters of an enemy:\n+15 \u2191+18 Melee Stat per stack for 10 seconds, up to a maximum of +45 \u2191+54 Melee Stat at 3 stacks.\n\n\u2191Grants +18 Melee Stat per stack, up to a maximum of 54 Melee Stat."
  },
  "pugilist": {
    "name": "Pugilist",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants 10% \u219111% Melee Ability Energy.\nFusion Rifles, Glaives, Shotguns, and Sniper Rifles grant 20% \u219122% Melee Ability Energy.\n\nUpon dealing Melee Damage:\nGrants +35 Handling for 3 seconds.\n\n\u2191Kills grant 11% and 22% Melee Ability Energy respectively."
  },
  "pulse monitor": {
    "name": "Pulse Monitor",
    "category": "Weapon Trait",
    "description": "Upon reaching 30% \u219135%? Shield HP:\nRefills Weapon. Grants +50 Handling, and 0.95x Ready/Stow Animation Duration Multiplier.\nBuff lasts until Shield HP is restored above 30% \u219135%?, then lingers for 1 second.\nBuff can be activated while stowed, and persists through stow.\n\n\u2191Trigger Requirement is decreased to 35%? Shield HP."
  },
  "quickdraw": {
    "name": "Quickdraw",
    "category": "Weapon Trait",
    "description": "Upon readying:\n+100 Ready/Stow Handling, and 0.95x Ready Animation Duration Multiplier for 1 second, or until ADS.\n\n\u2191Passively grants +5 Handling."
  },
  "rampage": {
    "name": "Rampage",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\n10% | 21% | 33.1% increased damage for 4.5 \u21915 seconds.\nAdditional Weapon Kills refresh the buff duration. Stacks decay one at a time.\nBuff persists through stow. Does not increase the damage of Explosive Damage Perks.\n\n\u2191Buff Duration is increased to 5 seconds."
  },
  "rangefinder": {
    "name": "Rangefinder",
    "category": "Weapon Trait",
    "description": "While ADS:\n+10 Range, 10% Increased Zoom and 5% Increased Projectile Velocity.\n\n\u2191Passively grants +5 Handling"
  },
  "rapid hit": {
    "name": "Rapid Hit",
    "category": "Weapon Trait",
    "description": "Upon scoring a Precision Hit:\nGrants a stack of Rapid Hit for 2 seconds, up to a maximum of 5 stacks.\nRapid Hit grants Stability, Reload Speed, and Reload Duration Multiplier.\nTriggers on any yellow damage number, such as bodyshots on Weakened Enemies.\nBuff persists through stow.\n\n+2? | +12? | +14? | +18? | +25 Stability\n+5 | +30 | +35 | +42 | +60 Reload Speed\n0.99x | 0.96x | 0.95x | 0.945x | 0.92x Duration Multiplier\n\n\u2191Stronger Effect."
  },
  "reaper s tithe": {
    "name": "Reaper's Tithe",
    "category": "Weapon Trait",
    "description": "Grants stacks of Reaper's Tithe based on the amount of simultaneously killed enemies, up to a maximum of 4 stacks.\n2 enemies = x2 | 3 enemies = x3 | 4 enemies = x4\n\nReaper's Tithe:\n20% | 30% | 40% Increased Weapon Damage for 15 \u219117 seconds. Timer only begins after firing.\nAdditional Weapon Kills extends the buff duration by +6 seconds, up to 15 \u219117 seconds.\nScoring a higher amount of simultaneous kills than the currently active stack amount will not \"upgrade\" the damage buff.\n\n\u2191Initial buff duration is increased to 17 seconds."
  },
  "reciprocity": {
    "name": "Reciprocity",
    "category": "Weapon Trait",
    "description": "Healing Allies restores 3 \u21913.5 HP to the user per healing shot.\n\n\u2191Restores 3.5 HP per healing shot."
  },
  "recombination": {
    "name": "Recombination",
    "category": "Weapon Trait",
    "description": "Upon scoring an Elemental Kill:\nGrants a stack of Recombination, increasing the damage of the next shot of the weapon, up to a maximum of 10 stacks.\nStacks can be obtained while stowed, and persist through stow.\n\nDamage Increase for the next shot:\n10% | 20% | 30% | 40% | 50% | 60% | 70% | 80% | 90% | 100%.\n5% | 10% | 15% | 20% | 25% | 30% | 35% | 40% | 45% | 50%.\n\n\u2191Damage ramps up 25% faster, increasing by 12.5% [6.25%] per kill, up to their maximum of 100% [50%] after 8 kills instead of 10."
  },
  "reconstruction": {
    "name": "Reconstruction",
    "category": "Weapon Trait",
    "description": "Every 6 \u21915.5 seconds, after not shooting for 6 \u21915.5 seconds:\n Refills 25% of Magazine Capacity.\nRefill can overflow magazine up to 100% Increased Magazine Capacity.\nBuff can be activated while stowed, and persists through stow.\n\n\u2191Triggers 0.5 seconds earlier."
  },
  "recycled energy": {
    "name": "Recycled Energy",
    "category": "Weapon Trait",
    "description": "Upon manually loading Ammo within ? seconds of a Weapon Kill:\nGrants Ability Energy to the least-charged Ability based on the amount of kills.\n5.7% | 8% | 9.7% | 13.3% | 20%\n\u21916% | 7.5% | 9.5% | 13.5% | 22%\n\n\u2191Loading ammo reload grants ?% Ability Energy."
  },
  "redirection": {
    "name": "Redirection",
    "category": "Weapon Trait",
    "description": "Upon scoring a hit against Rank-And-File Combatants:\nGrants 2 stacks of Redirection, up to a maximum of 30 stacks.\nStacks persist through stow.\n\nUpon scoring a hit against an Elite, Miniboss, Boss, or Vehicle:\nConsumes up to 3 \u21912 stacks, granting 33% \u219150% increased damage per stack, up to 100% at 3 \u21912 stacks.\n\n\u2191Consumes up to 2 stacks per hit. Each stack grants 25% increased damage."
  },
  "relentless strikes": {
    "name": "Relentless Strikes",
    "category": "Weapon Trait",
    "description": "Upon scoring 3 Powered Sword Hits within 2? \u2191? seconds of each:\nGenerates +1 Ammo.\n\n\u2191Timer between Hits is increased to ? seconds."
  },
  "replenishing aegis": {
    "name": "Replenishing Aegis",
    "category": "Weapon Trait",
    "description": "While guarding with a Glaive:\nRefills 1 Ammo upon receiving damage.\nIncurs a 1 \u2191? second cooldown upon activating.\n\n\u2191Cooldown is decreased to ? seconds."
  },
  "repulsor brace": {
    "name": "Repulsor Brace",
    "category": "Weapon Trait",
    "description": "On Weapon Kill against a Void-Debuffed Enemy:\nGrants Void Overshield for 8+4 \u219110+5? seconds.\n\n\u2191Buff Duration is increased to 10 seconds."
  },
  "reservoir burst": {
    "name": "Reservoir Burst",
    "category": "Weapon Trait",
    "description": "Passively grants +30 Magazine Size.\n\nWhile at or above 100% Magazine Capacity:\nGrants 25% \u219127.5% Increased damage.\nKills cause enemies to explode on death, dealing 162 Elemental Damage in a ? metre radius.\nDamage against Combatants scales with Combatant Rank Modifiers. Linear Fusion Rifles have an additional 1.3x multiplier against Combatants.\n\n\u2191Damage Buff is increased to 27.5%."
  },
  "reverberation": {
    "name": "Reverberation",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants +100 Blast Radius for 5.5 \u21916? seconds. Does not affect Area Denial Frame DoT Fields.\nAdditional Weapon Kills refresh the buff duration.\nBuff is removed on stow? / Buff persists through stow?\n\n\u2191Buff duration is increased to ? seconds."
  },
  "reversal of fortune": {
    "name": "Reversal of Fortune",
    "category": "Weapon Trait",
    "description": "Upon missing twice within 6 seconds of each shot:\nGenerates 1 Ammo."
  },
  "rewind rounds": {
    "name": "Rewind Rounds",
    "category": "Weapon Trait",
    "description": "Upon emptying the Magazine:\nRefills 60% \u219170% of all damage instances scored. Always rounds up. Counter persists through stow.\nRequires shooting at least 28.5% of the Magazine Capacity for refill to activate. Always rounds up.\nHits within 1? seconds of triggering the refill do not count. Displayed by the active buff indicator.\n\nAdaptive Burst Linear Fusion Rifle Behavior:\nCounts each bolt individually. Refill Amount is 14% of damage instances scored.\n\n\u2191Refills 70% of all damage instances scored into the Magazine."
  },
  "ricochet rounds": {
    "name": "Ricochet Rounds",
    "category": "Weapon Trait",
    "description": "Passively grants +5 \u2191+6 Range and +10 \u2191+11 Stability.\n\nBullets are guaranteed to ricochet off of surfaces."
  },
  "rimestealer": {
    "name": "Rimestealer",
    "category": "Weapon Trait",
    "description": "Upon shattering a crystal or killing a Frozen Enemy:\nGrants a stack of Frost Armor.\nCan also trigger with Glaive Melee.\n\n\u2191Grants 2 stacks of Frost Armor."
  },
  "rolling storm": {
    "name": "Rolling Storm",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants x1 Bolt Charge.\n\nOn Weapon Kill, while Amplified:\nGrants x2 Bolt Charge.\n\n\u2191Weapon Kills while Bolt Charge isn't active grant an additional Bolt Charge stack."
  },
  "seraph rounds": {
    "name": "Seraph Rounds",
    "category": "Weapon Trait",
    "description": "Passively grants +3 Range and +7 Stability.\n\nCombines the penetration from Armor-Piercing Rounds, the guaranteed ricochets from Ricochet Rounds, and the flinch increase from High-Caliber Rounds."
  },
  "sharp harvest": {
    "name": "Sharp Harvest",
    "category": "Weapon Trait",
    "description": "Upon scoring 3 Powered Sword Hits within 1.5? \u21912 seconds of each:\n Grants 5% Special Ammo Reserves.\nEquipping two Special Weapons halves the amount of ammo granted to 2.5%.\n\n\u2191Timer between Hits is increased to 2 seconds."
  },
  "shattering blade": {
    "name": "Shattering Blade",
    "category": "Weapon Trait",
    "description": "If Heavy Attack consumes all remaining Heavy Ammo:\n67% Increased damage for Grounded Heavy Attack."
  },
  "shield disorient": {
    "name": "Shield Disorient",
    "category": "Weapon Trait",
    "description": "On Matching Combatant Elemental Shield Break:\nEnemies within 7 metres become disoriented for 5 seconds"
  },
  "shoot to loot": {
    "name": "Shoot to Loot",
    "category": "Weapon Trait",
    "description": "Upon scoring a hit on a Special or Heavy Ammo Brick:\nPicks up Ammo and refills all equipped weapons.\nTriggers Ammo Pickup effects. Only activates if picking up ammo is possible by not having full Ammo.\nCan also pick up Orbs of Power without any additional effect. Splash Damage can also trigger Shoot To Loot.\n\n\u2191Passively grants +5 Range."
  },
  "shot swap": {
    "name": "Shot Swap",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants 2 stacks of Shot Swap, up to a maximum of 6 stacks.\n \nUpon readying or stowing the weapon:\nConsumes a stack on stow.\nGrants +100 Ready/Stow Handling and 0.7x \u21910.65x Ready/Stow Duration Multiplier."
  },
  "sleight of hand": {
    "name": "Sleight of Hand",
    "category": "Weapon Trait",
    "description": "Upon readying the weapon after getting kills with other weapons and abilities while this weapon is stowed:\nGrants a stack of Sleight of Hand for 8.5 \u21919 seconds, up to a maximum of 3 stacks.\nBuff is removed on stow.\n\nSleight of Hand x1 = +10 Stability, +10 Handling, and +10 Reload Speed.\nSleight of Hand x2 = +20 Stability, +20 Handling, and +20 Reload Speed.\nSleight of Hand x3 = +30 Stability, +30 Handling, and +30 Reload Speed."
  },
  "slice": {
    "name": "Slice",
    "category": "Weapon Trait",
    "description": "On Class Ability Usage:\nThe next 5 damage instances on non-Severed Enemies within 8 \u21919 seconds of each inflict sever.\nScoring a damage instance on a non-Severed Enemy refreshes the buff duration.\nBuff can be activated while stowed, and persists through stow. If the severing hit kills an enemy, the perk will not trigger nor consume a stack. Can trigger on Immune Enemies.\n\n\u2191Buff duration is increased to 9 seconds."
  },
  "slickdraw": {
    "name": "Slickdraw",
    "category": "Weapon Trait",
    "description": "Passively grants +100 Handling, 0.95x Ready Animation Duration Multiplier, and -20% \u2191-15%? Auto Aim Cone Size.\n\n\u2191Reduces the Aim Assistance Cone Size Penalty to -15?%."
  },
  "slideshot": {
    "name": "Slideshot",
    "category": "Weapon Trait",
    "description": "Upon Sliding:\nRefills 15% of Magazine, and grants +20 \u2191+22 Range, and +20? +22? Stability for 2.5 seconds. Only affects the first shot.\nIncurs a 0.3 seconds cooldown after activation. Can be activated multiple times in one slide. Buff is removed on stow.\n\n\u2191Buff Effect increased to +22 Range and +22? Stability."
  },
  "slideways": {
    "name": "Slideways",
    "category": "Weapon Trait",
    "description": "Upon Sliding:\nRefills 15% of Magazine, and grants +15? \u2191+17? Stability and +30 \u2191+33? Handling for 3 seconds. \nIncurs a 0.5 seconds cooldown after activation. Buff is removed on stow.\n\n\u2191Buff Effect increased to +17? Stability and +33? Handling."
  },
  "smoothbore": {
    "name": "Smoothbore",
    "category": "Weapon Trait",
    "description": "Passively grants +15 \u2191+17 Range and +7.5% Pellet Spread."
  },
  "snapshot sights": {
    "name": "Snapshot Sights",
    "category": "Weapon Trait",
    "description": "Passively grants an ADS Duration Multiplier.\n\n0.5x ADS Duration Multiplier on Primary Weapons\n0.8x ADS Duration Multiplier on Special Weapons\n\n\u2191Passively grants +5 Stability."
  },
  "sneak bow": {
    "name": "Sneak Bow",
    "category": "Weapon Trait",
    "description": "While Crouched:\nPrevents Radar Ping when firing and increases Arrow Hold Time by 25%.\n+? Reload Speed and 0.8x Reload Duration Multiplier. \n\n\u2191Grants +? Stability and +? Reload Speed while Crouched."
  },
  "spike grenades": {
    "name": "Spike Grenades",
    "category": "Weapon Trait",
    "description": "Grants 12.12% | 12.5% increased Grenade Impact Damage and +10 \u2191+12 Stability.\nDue to the Impact Damage being tied to the Blast Radius Stat on Grenade Launchers, a lower Blast Radius will provide higher overall damage. \nExplosive Light increases Blast Radius to 100, decreasing the effect of Spike Grenades.\n\nBreech-Loaded Grenade Launchers\n0 Blast Radius = ?% total increased damage \n100 Blast Radius = 2.5% total increased damage.\n\nDrum-Loaded Grenade Launchers\n0 Blast Radius = ?% total increased damage\n 100 Blast Radius = 1% total increased damage."
  },
  "stats for all": {
    "name": "Stats for All",
    "category": "Weapon Trait",
    "description": "After Damaging 3 Separate Enemies within 3 seconds of each:\n+10 Range, 5% Increased Damage Falloff Distance, +10 Stability, +35 Handling, +35 Reload Speed, and 0.95x Reload Duration Multiplier for 10 \u2191+11 seconds.\nBuff cannot be refreshed until its duration expires. Buff persists through stow.\n\n\u2191Buff Duration is increased to 11 seconds."
  },
  "sticky grenades": {
    "name": "Sticky Grenades",
    "category": "Weapon Trait",
    "description": "Grenades stick to surfaces for up to ? seconds on impact, and detonate once an enemy is within ? meters.\nExplosive Light increases Blast Radius to 100, increasing the effect of Sticky Grenades.\n\nGrants 30% Increased Explosive Damage and 85% Decreased Impact Damage.\n20 Blast Radius = -6% total decreased damage.\n48 Blast Radius = Unchanged damage.\n100 Blast Radius = 11% total increased damage."
  },
  "stopping power": {
    "name": "Stopping Power",
    "category": "Weapon Trait",
    "description": "Grants increased stagger against Combatants and increased damage against enemies on low health. Shields are ignored.\n\n7% Increased Damage at <34% Health.\n10% Increased Damage at <23% Health.\nDOES NOT WORK AT 18% Health. \u00af\\_.(\u30c4)._/\u00af\n15% Increased Damage at <18% Health."
  },
  "strategist": {
    "name": "Strategist",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants 10% \u219111% Class Ability Energy.\nFusion Rifles, Glaives, Shotguns, and Sniper Rifles grant 20% \u219122% Class Ability Energy.\n\nOn Class Ability Usage:\nGrants +? Stability for ? seconds.\n\n\u2191Kills grant 11?% and 22?% Class Ability Energy respectively."
  },
  "steady hands": {
    "name": "Steady Hands",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\n+100 Handling and 0.825x Handling Duration Multiplier for all equipped weapons for 8.5 \u21919.5 seconds.\nAdditional Weapon Kills refresh the buff duration to 6.5 seconds.\nBuff remains active while stowed.\n\n\u2191Initial Buff Duration is increased to 9.5 seconds."
  },
  "subsistence": {
    "name": "Subsistence",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nRefills 10% \u219120% of Magazine.\nSubmachine Guns and Auto Rifles refill 17% \u219120% of Magazine.\n\n\u2191Refill Amount is increased to 20%."
  },
  "successful warm up": {
    "name": "Successful Warm-Up",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\n0.625x Charge/Draw Time Multiplier for 6 seconds. \nAdditional Weapon Kills extends the buff duration by +4 \u2191+5 seconds, up to 20 seconds.\nBuff is removed on stow.\n\n\u2191Additional Weapon Kills extend the duration by 5 seconds."
  },
  "supercharged magazine": {
    "name": "Supercharged Magazine",
    "category": "Weapon Trait",
    "description": "While Amplified:\nRefills 5% of Magazine every 1.5 seconds.\n\nWhile Speed Booster is active:\nRefills 5% of Magazine every 0.25 seconds. \nCan grant up to 100% Increased Magazine Capacity through refilling.\n\nBoth effects work while stowed.\n\n\u2191Passively grants +15 Magazine Stat."
  },
  "surplus": {
    "name": "Surplus",
    "category": "Weapon Trait",
    "description": "Grants Stat Bonuses based on the amount of Powered Ability Charges.\n\nx1 Ability Charges = +5 Stability, +5 Handling, and +10 Reload Speed.\nx2 Ability Charges = +15 Stability, +25 Handling, and +25 Reload Speed.\nx3 Ability Charges = +25 Stability, +60 Handling, and +60 Reload Speed.\n\n\u2191Stronger Effect."
  },
  "surrounded": {
    "name": "Surrounded",
    "category": "Weapon Trait",
    "description": "While within 15 meters of 3 enemies:\n40% \u219147% Increased Damage. Swords are granted 35% \u219141.8% Increased Damage.\nRocket Launchers and Grenade Launchers are granted 35% \u219141.8% Increased Explosive Damage and 40% \u219147% Increased Impact Damage.\nWolfpack Rounds are granted 35% \u219141.8% Increased Explosive Damage.\n Buff lingers for 1.5 seconds once criteria isn't met.\n\n\u2191Surrounded's damage buff is increased by a multiplicative 5%. | 40% -> 47% | 35% -> 41.8%"
  },
  "swap mag": {
    "name": "Swap Mag",
    "category": "Weapon Trait",
    "description": "Passively grants 0.9x Ready/Stow Duration Multiplier."
  },
  "swashbuckler": {
    "name": "Swashbuckler",
    "category": "Weapon Trait",
    "description": "On Weapon or Melee Kill:\n6.7% | 13.3% | 20% | 26.6% | 33.3% Increased Damage for 4.5 \u21916.5 seconds. Melee Kills grant 5 stacks.\nAdditional Weapon or Melee Kills refresh the buff duration.\nBuff is removed on stow.\n\n\u2191Buff Duration is increased to 6.5 seconds."
  },
  "sword logic": {
    "name": "Sword Logic",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants stacks of Sword Logic. The number of stacks gained is tied to the highest Enemy Rank killed in the current activation of Sword Logic.\nRank-and-File Combatants = x1 | Elite = x2 | Champions, Minibosses = x3 | Boss = x4 | Guardians = x2 | Guardians in Super = x4 \n\nSword Logic x1 | 15% Increased Damage for 5.5 \u21916.5 seconds.\nSword Logic x2 | 25% [15%] Increased Damage for 7.5 \u21918.5 seconds.\nSword Logic x3 | 35% Increased Damage for 10.5 \u219111.5 seconds.\nSword Logic x4 | 50% Increased Damage for 15.5 \u219116.5 seconds.\n\nAdditional Weapon Kills refresh the buff duration to the duration tied to the highest Enemy Rank killed.\nBuff persists through stow. Does not increase the damage of Explosive Damage Perks.\n\n\u2191Buff Duration is increased by 1 second."
  },
  "sympathetic arsenal": {
    "name": "Sympathetic Arsenal",
    "category": "Weapon Trait",
    "description": "Passively grants +20 Reload Speed.\n\nUpon finishing a reload within 3.6 \u2191? seconds of a Weapon Kill:\nRefills stowed weapons.\n\n\u2191Reload Timer Window is increased to ? seconds."
  },
  "tap the trigger": {
    "name": "Tap The Trigger",
    "category": "Weapon Trait",
    "description": "Upon initially firing:\n+40 Stability, -50% Recoil, and -10% Accuracy Cone Size for 0.6 \u21910.76 seconds.\n[Fusion Rifles Only] +10 Stability, -12.5% Recoil, and -2.5% Accuracy Cone Size for 0.6 \u21910.76 seconds.\n\n\u2191Effect is increased to +? Stability, -?% Recoil, -?% Accuracy Cone Size for 0.76 seconds.\n1/4th of the benefits for Fusion Rifles."
  },
  "target lock": {
    "name": "Target Lock",
    "category": "Weapon Trait",
    "description": "Damage instances within 0.2 seconds of each without missing increments a Magazine-capacity based counter towards a damage increase.\n\nUpon scoring >12.5% of Magazine as hits. \nGrants a continuously increasing damage buff as further hits are scored, up to 110.33% of the Magazine capacity.\nVisual Buff Stacks to Magazine Thresholds:\nx2 = >35.5% | x3 = >54.5% | x4 = >74.5% | x5 = >110.33%\n\nInitially grants 16.7% \u219118.8% [10.46% \u219112.54%] increased damage that ramps up to 40% \u219145% [25% \u219130%] increased damage after scoring >110.33% of Magazine as hits\nEmptying a Full Magazine without misses grants an average of 25% \u219128.3% [15.85% \u219119.02%] Increased Damage without the usage of Ammo Generation or Magazine Increasing Perks.\n\n\u2191Damage Increase begins at 18.8% [12.54%] and ends at 45% [30%]. Results in a 28.3% [19.02%] Average Damage Increase over a full Magazine.\n\nTarget Lock Calculator, courtesy of Clarity."
  },
  "tear": {
    "name": "Tear",
    "category": "Weapon Trait",
    "description": "On Precision Kill: \nInflicts sever to enemies within ? meters for ? seconds.\nIncurs a ? \u2191? second cooldown between activations.\n\n\u2191Cooldown is decreased to ? seconds."
  },
  "thermal atomization": {
    "name": "Thermal Atomization",
    "category": "Weapon Trait",
    "description": "As Heat increases from 50%, up to 100%:\n8.25% [3.5?%] to ~14% [?%] Increased Impact Damage.\nDoes not increase the damage of Explosive Damage...High-Impact Reserves | Rev.1\n\nDirect Damage kills cause targets explode on death, dealing Weapon-Matching Damage up to 7.5 meters away, down to a minimum of 0% Damage.\nHC: 74 lmao [77?] Damage | SMG: 289 [?] Damage | Sniper: 552 [?] Damage"
  },
  "threat detector": {
    "name": "Threat Detector",
    "category": "Weapon Trait",
    "description": "Grants a stack of Threat Detector for each enemy within 15 meters, up to a maximum of 2 stacks.\n\nThreat Detector x1 | +15? \u219119? Stability, +25 \u2191+28? Handling, 0.9x Handling Animation Duration Multiplier, and +18 \u2191+19 Reload Speed.\nThreat Detector x2 | +40? \u2191+44? Stability, +100 Handling, 0.81x Handling Animation Duration Multiplier, and +60 \u2191+63 Reload Speed.\n\n\u2191Increases x1 Stat Bonuses to +19? Stability, +28? Handling, and +19 Reload Speed.\nIncreases x2 Stat Bonuses to +44? Stability, +100 Handling, and +63 Reload Speed."
  },
  "threat remover": {
    "name": "Threat Remover",
    "category": "Weapon Trait",
    "description": "Upon scoring a hit with 11 \u219110? pellets:\n+? Stability, +? Handling, 0.x? Handling Duration Multiplier, and +60 Reload Speed for 7 seconds.\n\n\u2191Pellet Activation Requirement is decreased from 11 to 10?."
  },
  "thresh": {
    "name": "Thresh",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants an additional 1% \u21911.33% Super Ability Energy.\n Fusion Rifles, Glaives, Shotguns, and Sniper Rifles grant an additional 1.5% \u21912% Super Ability Energy.\n\n\u2191Bonus Super is increased to an additional 1.33% and 2% Super Ability Energy respectively"
  },
  "tilting at windmills": {
    "name": "Tilting at Windmills",
    "category": "Weapon Trait",
    "description": "Upon blocking damage with the Glaive Shield:\n25?% Increased Movement Speed while Blocking for 4 \u21915? seconds until no longer blocking, or when Weapon Energy depletes.\n\n\u2191Buff Duration is increased to 5? seconds."
  },
  "timed payload": {
    "name": "Timed Payload",
    "category": "Weapon Trait",
    "description": "Weapons deal 55% of their Non-Precision Direct Impact Damage as a Timed Payload.\nTimed Payload detonates after 0.6 seconds of impact, damaging enemies within ? meters.\nTimed Payload portion deals 30% increased damage and inflicts increased stagger against Combatants.\n\nImpact Damage's Precision Multiplier is increased to offset the Timed Payload portion lacking the ability to score Precision Hits.\nNew Ratio = (Base Ratio - 55%) / (1 - 55%)\n\nOverall Damage Increase:\nDamage is increased by 16.5% of the Weapon's Bodyshot Damage. Precision Damage Increase is equal to 16.5% / Precision Multiplier.\nBodyshot damage remains the same. Precision Damage remains \"roughly\" the same.\n\n\u2191Passively grants +5 Stability."
  },
  "tireless blade": {
    "name": "Tireless Blade",
    "category": "Weapon Trait",
    "description": "Upon scoring 2 Powered Sword Kills:\nGenerate +1 Ammo \u2191with a ?% chance of granting +2 Ammo.\nThe first kill upon spawning will trigger the buff. Counter persists through stow.\n\n\u2191?% Chance to grant +2 Ammo instead of +1 Ammo."
  },
  "to the pain": {
    "name": "To The Pain",
    "category": "Weapon Trait",
    "description": "While this weapon is readied:\nGrants a stack of To The Pain for every 30 damage taken, up to 10 stacks after receiving 300 damage.\nStacks are removed on stow.\n\nTo The Pain grants +? Handling and +2 Aim Assist per stack, up to +? Handling and +20 Aim Assist at 10 stacks.\n+? | +? | +? | +? | +? | +? | +? | +? | +? | +? Handling\n+2 | +4 | +6 | +8 | +10 | +12 | +14 | +16 | +18 | +20 Aim Assist\n\n\u2191+? Handling and +? Aim Assist per stack, up to +? Handling and +? Aim Assist at 10 stacks."
  },
  "tracking module": {
    "name": "Tracking Module",
    "category": "Weapon Trait",
    "description": "While ADS and targeting an enemy:\nRockets track enemies [with diminshed effectiveness]\n\nTracking persists for 1 second after not aiming at the enemy.\n\n\u2191Passively grants +5 Blast Radius."
  },
  "transcendent moment": {
    "name": "Transcendent Moment",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants Transcendent Moment for ? \u2191? seconds.\nAdditional Kills refresh the buff duration.\nBuff can be activated while stowed, and persists through stow.\n\nTranscendent Moment | Grants Weapon Stats based on the weapon's alignment. \n+? Stability and +? Handling | +? Range and +? Aim Assist\nBoth bonuses are active while Transcendence is active.\n\nLight Alignment = Arc, Solar, and Void.\n Darkness Alignment = Kinetic, Stasis and Strand.\n\n\u2191Buff Duration is increased to ? seconds."
  },
  "trench barrel": {
    "name": "Trench Barrel",
    "category": "Weapon Trait",
    "description": "Upon dealing Melee Damage:\n50% Increased damage, +30 \u2191+35? Handling, and +30? \u2191+35? Reload Speed for the next 3 shots within 5 seconds.\nBuff is removed on stow.\n\n\u2191Buff Effect is increased to +35? Reload and +35? Handling."
  },
  "trickle charge": {
    "name": "Trickle Charge",
    "category": "Weapon Trait",
    "description": "Upon receiving a Bolt Charge stack:\nRefills ?% \u219110% of Magazine.\nDoes NOT dissipate heat.\n\nUpon discharging Bolt Charge:\nRefills ?% \u219120% of Magazine / Dissipates \u2191100% Heat.\nTrickle Charge will refill/dissipate stowed weapons."
  },
  "triple tap": {
    "name": "Triple Tap",
    "category": "Weapon Trait",
    "description": "Scoring 3 Precision Hits within 2 \u21913 seconds of each generates 1 Ammo to Magazine.\nAmmo Generation cannot generate ammo past Base Magazine Size.\nTimer between hits persists through stow.\n\n\u2191Timer between Precision Hits is increased to 3 seconds."
  },
  "tunnel vision": {
    "name": "Tunnel Vision",
    "category": "Weapon Trait",
    "description": "Upon finishing a reload within 3.6 seconds of a Weapon Kill:\nGrants +20 Aim Assist, -?% Accuracy Cone Growth, and +? ADS Handling for 5 seconds.\nBuff duration can be refreshed through additional activations.\n\n\u2191Buff Duration is increased to ? seconds."
  },
  "turnabout": {
    "name": "Turnabout",
    "category": "Weapon Trait",
    "description": "Upon breaking a Combatant's Elemental Shield or a Guardian's Shield while in Super:\nGrants a 30 HP Overshield for 10 \u219111.4 seconds.\n\n\u2191Increases the Overshield duration to 11.4 seconds."
  },
  "under pressure": {
    "name": "Under Pressure",
    "category": "Weapon Trait",
    "description": "As Magazine decreases below 50%, down to 0%:\n Linearly grants -12.5% to -25% \u2191-30%? Accuracy Cone Size, and up to +30? Stability.\n\n\u2191Buff Effect is increased up to -30%? Accuracy Cone Size, and +? Stability."
  },
  "under over": {
    "name": "Under-Over",
    "category": "Weapon Trait",
    "description": "Passively increases damage against shielded enemies.\nDoes not increase the damage of Explosive Damage Perks.\n\n50% \u219155% Increased Damage against Combatant Elemental Shields and Barrier Champion Shields.\n125% \u2191140% Increased Damage against Combatant Overshields.\n\n20% \u219122% Increased Damage against Guardian Overshields.\n20% \u219122% Increased Bodyshot Damage against Guardians with Woven Mail.\n\n\u2191Further increased damage to Shields and Overshields."
  },
  "unrelenting": {
    "name": "Unrelenting",
    "category": "Weapon Trait",
    "description": "Upon reaching 100% Counter Progress through Weapon Kills within 5 seconds of each:\nRank-And-File = 34% | Elites/Minibosses/Bosses = 100% | Guardians = 67%.\n\nBegins Health Regeneration and restores 65 \u219170 HP.\n\n\u2191Restores an additional +5 HP."
  },
  "unstoppable force": {
    "name": "Unstoppable Force",
    "category": "Weapon Trait",
    "description": "Upon blocking damage with Glaive Shield:\n20% increased projectile damage for 4 seconds, or until no longer blocking.\nBlocking additional damage refreshes the buff duration.\n\n\u2191Buff Duration is increased to 5 seconds."
  },
  "valiant charge": {
    "name": "Valiant Charge",
    "category": "Weapon Trait",
    "description": "Upon guarding against a hit...or receiving healing from an ally while guarding?:\n80% Increased Lunge Distance for the next swing within 1 \u21911.5 second.\nGuarding against additional hits refreshes the buff duration.\n\n\u2191Buff Duration is increased to 1.5 seconds."
  },
  "voltshot": {
    "name": "Voltshot",
    "category": "Weapon Trait",
    "description": "Upon finishing a reload within 5.3 seconds of a Weapon Kill:\nThe next Weapon Hit within 7 seconds inflicts jolt. \nReload timer and buff both persist through stow. Jolt is not counted as Weapon Damage.\n\n\u2191Buff Duration is increased to 8 seconds."
  },
  "vorpal weapon": {
    "name": "Vorpal Weapon",
    "category": "Weapon Trait",
    "description": "Passively increases damage dealt towards Miniboss, Champion, Boss, and Vehicle Combatants, as well as Guardians in their Super Ability.\n\nDamage Increases:\nPrimary Weapons: 20% | 60%\nSpecial Weapons: 15% | 20%\nPower Weapons: 10% | 20%\n\n\u2191Passively grants +5 Stability and +5 Guard Resistance (Swords)."
  },
  "well rounded": {
    "name": "Well-Rounded",
    "category": "Weapon Trait",
    "description": "Grenade Ability Usage and Powered Melee Hits grants a stack of Well-Rounded for 15 seconds, up to a maximum of 2 stacks. Super Ability Cast grants two stacks.\nAdditional Grenade Ability Usage, Powered Melee Hits, or Super Ability Casts refresh the buff duration.\nBuff persists through stow.\n\nWell-Rounded:\nx1 = +10 \u2191+12? Range, +10 \u2191+12? Stability, and +10 \u2191+12? Handling.\nx2 =  +20 \u2191+24? Range, +20 \u2191+24? Stability, and +20 \u2191+24? Handling.\n\n\u2191Increases Stat Bonuses to +12? per stack."
  },
  "wellspring": {
    "name": "Wellspring",
    "category": "Weapon Trait",
    "description": "On Weapon Kill:\nGrants 8% \u21919% Ability Energy split equally amongst all uncharged abilities.\nOn Abilities with multiple charges, once the ability has at least one full charge it will count as charged and will only receive a third of the regular Ability Energy per kill.\n\n\u2191Grants 9% Ability Energy split equally amongst all uncharged abilities."
  },
  "whirlwind blade": {
    "name": "Whirlwind Blade",
    "category": "Weapon Trait",
    "description": "On Powered Sword Hit:\n3% | 6% | 9% | 12% | 15% | 18% | 21% | 24% | 27% | 30% Increased damage for 3.5 \u21914 seconds.\nAdditional Powered Sword Hits refresh the buff duration.\nBlocking or stowing removes all stacks.\n\n\u2191Buff duration is increased to 4 seconds."
  },
  "withering gaze": {
    "name": "Withering Gaze",
    "category": "Weapon Trait",
    "description": "After 1.5 \u21911.4 seconds of ADS without firing while Magazine is >0:\nThe next direct damage shot fired while ADS inflicts weaken.\nTimer starts as soon as the Aim Down Sights input is pressed, and is reset upon scoring a hit.\n\n\u2191Activation timer is decreased to 1.4 seconds."
  },
  "zen moment": {
    "name": "Zen Moment",
    "category": "Weapon Trait",
    "description": "On Hit:\n Grants ?% Flinch Resist, -15?% Visual Weapon Shake and -15?% Reticle Bounce per stack for 1 second, up to 5? stacks. \nHas no effect on actual recoil/camera movement, despite the in-game perk description.\n\nPulse Rifles and Sidearms grant 1.5x as many stacks per hit, only needing ? hits to be at maximum effect.\n Hand Cannons and Scout Rifles grant 2x as many stacks per hit, only needing ? hits to be at maximum effect.\n\n\u2191Passively grants +5 Stability."
  },
  "for in depth damage stacking info check out court s modifier database": {
    "name": "For in-depth Damage Stacking info, check out Court's Modifier Database",
    "category": "Weapon Trait",
    "description": "Reload Perk Notes:\n\nGenerate = Grants Ammo to Magazine out of thin air, up to its Base Magazine Size. Does not work with Overflown Magazines.\n\nOverflow = Increases Base Magazine Capacity by a certain amount, rounded up.\n\nRefill = Reload, but does not have an animation and doesn't proc on-reload perks. Pulls from reserves on Special and Power Weapons.\nFor Heat Weapons, it will instead be \"Dissipates X Heat\" to discern it from manual venting\n\nReload = Procs on-reload perks. Manual Reload, Marksman's Dodge, and Dragon's Shadow all count as regular reloads.\nFor Heat Weapons, finishing a manual vent will count as a regular reload."
  },
  "calm amidst chaos": {
    "name": "Calm Amidst Chaos",
    "category": "Weapon Mod",
    "description": "After not receiving damage for 5 \u21914 seconds:\n+35? Handling, 0.75?x ADS Duration Multiplier, and ?% Flinch Resist until the next shot is fired."
  },
  "kill shot": {
    "name": "Kill Shot",
    "category": "Weapon Mod",
    "description": "Upon finishing a reload within 5 seconds of a kill:\nThe impact from the first shot fired deals an additional instance of 230 \u2191250 [10 \u219112] Weapon-Matching Splash Damage over ~2 meters, removing Combatant Shields on hit.\n Also removes Barrier Champion's Barrier Shield, even with a different Breaker Effect active. Ignores Bane Damage Resist. Does NOT remove Ablative Shields. \nSplash Damage is not affected by Weapon Damage Increases, Power Delta, or Combatant Scalars, but does count as Weapon Damage.\nBuff persists through stow. Can be triggered multiple times from a single kill. Removes SOME immune shields :)\n\nPicking up a Special/Power Ammo Bricks grants Kill Shot to all weapons with the mod equipped."
  },
  "opening salvo": {
    "name": "Opening Salvo",
    "category": "Weapon Mod",
    "description": "After not receiving damage for 5 seconds:\nGrants Opening Salvo Ready until firing.\nOnce Opening Salvo expires, Opening Salvo Ready can be reobtained after 5 seconds of not receiving damage.\n\nOpening Salvo | +20 Range, ?% Increased Flinch, and damage staggers Unstoppable Champions for ? \u21914 seconds.\nStaggers Unstoppable Champions even while a different Breaker Effect is active.\nBoth buffs persist and remain active through stow."
  },
  "overpressured munitions": {
    "name": "Overpressured Munitions",
    "category": "Weapon Mod",
    "description": "Passively deals ?15 \u219117% increased damage towards Cabal Combatants."
  },
  "stay in the fight": {
    "name": "Stay in the Fight",
    "category": "Weapon Mod",
    "description": "While at Critical Health:\n+? Stability and +? Ammo Generation.\nBuff lingers for 6 \u21917 seconds after regenerating Shields."
  },
  "abundant ammo": {
    "name": "Abundant Ammo",
    "category": "Weapon Mod",
    "description": "+10 \u2191+12 Ammo Generation."
  },
  "aerodynamics": {
    "name": "Aerodynamics",
    "category": "Weapon Mod",
    "description": "+6 \u2191+7 Blast Radius and +6 \u2191+7 Velocity."
  },
  "anti flinch": {
    "name": "Anti-Flinch",
    "category": "Weapon Mod",
    "description": "15% \u219120%? Flinch Resist."
  },
  "backup mag": {
    "name": "Backup Mag",
    "category": "Weapon Mod",
    "description": "+30 \u2191+40 Magazine Stat.\nComplicated, think of it as an equivalent to Extended Mag \u2191+Tactical Mag."
  },
  "ballistics": {
    "name": "Ballistics",
    "category": "Weapon Mod",
    "description": "+6 \u2191+7 Range and +6 \u2191+7 Stability."
  },
  "bandolier": {
    "name": "Bandolier",
    "category": "Weapon Mod",
    "description": "+5 \u2191+7 Ammo Generation and +15 \u2191+17 Magazine Stat."
  },
  "counterbalance stock": {
    "name": "Counterbalance Stock",
    "category": "Weapon Mod",
    "description": "+15 \u2191+35 Recoil Direction."
  },
  "edge": {
    "name": "Edge",
    "category": "Weapon Mod",
    "description": "+6 \u2191+7 Charge Rate and +6 \u2191+7 Guard Resistance."
  },
  "enhanced charge time": {
    "name": "Enhanced Charge Time",
    "category": "Weapon Mod",
    "description": "-40ms Charge Time.\nDoes not reduce damage. Does not display in the stats."
  },
  "flight": {
    "name": "Flight",
    "category": "Weapon Mod",
    "description": "+6 \u2191+7 Persistence and +6 \u2191+7 Velocity."
  },
  "freehand grip": {
    "name": "Freehand Grip",
    "category": "Weapon Mod",
    "description": "-30% \u2191-30% Hipfire Accuracy Cone Size.\n0.95x \u21910.?x Ready Animation Duration Multiplier."
  },
  "icarus grip": {
    "name": "Icarus Grip",
    "category": "Weapon Mod",
    "description": "+15 Airborne Effectiveness \u2191and +5 Handling."
  },
  "quick access sling": {
    "name": "Quick Access Sling",
    "category": "Weapon Mod",
    "description": "0.9x \u21910.?x Ready/Stow Animation Duration Multiplier."
  },
  "radar booster": {
    "name": "Radar Booster",
    "category": "Weapon Mod",
    "description": "Maximum Radar Distance increased by 8 metres.\nIncreases the radar range from 48 meters to 56 meters."
  },
  "radar tuner": {
    "name": "Radar Tuner",
    "category": "Weapon Mod",
    "description": "Radar returns instantly after no longer ADS.\nRadar normally returns after 1.5 seconds.\n\u2191Adds the benefits of Radar Booster."
  },
  "sprint grip": {
    "name": "Sprint Grip",
    "category": "Weapon Mod",
    "description": "After sprinting for 1.5 seconds:\n+35 \u2191+? ADS and Ready Speed Handling until no longer sprinting."
  },
  "stunloader": {
    "name": "Stunloader",
    "category": "Weapon Mod",
    "description": "Upon stunning a Champion:\nRefills 50% \u219160% of Magazine."
  },
  "synergy": {
    "name": "Synergy",
    "category": "Weapon Mod",
    "description": "Scoring 12 \u21918 [6 \u21914?] Weapon Kills spawns a Weapon Element-Matching Subclass Pickup.\n Kinetic Weapons instead spawn an Orb of Power that grants 7.15% Super Energy.\nKill counter persists through stow.\n\nSynergy ignores the global cooldown for Pickups, but will trigger the global cooldown upon spawning one.\nSynergy has its own cooldown depending on the spawned Pickup:\nIonic Traces = 0 seconds\nFiresprites, Void Breaches, and Stasis Shards = 5 seconds.\nTangles = 12 seconds\nCan spawn 2 Pickups simultaneously if the 12th kill would also trigger a different Pickup spawner.\n\nKills during Synergy's cooldown do not contribute to the activation."
  },
  "tactical": {
    "name": "Tactical",
    "category": "Weapon Mod",
    "description": "+6 \u2191+7 Handling and +6 \u2191+7 Reload Speed."
  },
  "tension": {
    "name": "Tension",
    "category": "Weapon Mod",
    "description": "+6 \u2191+7 Draw Time and +6 \u2191+7 Accuracy."
  },
  "adaptive frame": {
    "name": "Adaptive Frame",
    "category": "Intrinsic Trait",
    "description": "Deals 10% increased damage over High-Impact Rocket Launchers.\n1 Impact : 3.5 Explosive Damage Ratio. 50.5 RPM"
  },
  "aggressive frame": {
    "name": "Aggressive Frame",
    "category": "Intrinsic Trait",
    "description": "Upon scoring a Kill:\n0.75x Fire Recovery Delay for 4 seconds."
  },
  "area denial frame": {
    "name": "Area Denial Frame",
    "category": "Intrinsic Trait",
    "description": "Shoots a burst of 5 projectiles at the cost of 1 Ammo.\n\nProjectiles create a lingering damage field after 0.5 seconds of impacting.\n\nDamaging Field deals damage every 0.25 seconds for 5.65 seconds, dealing 52.5 [?] damage up to 22 times per field.\nEnemies can only receive damage from a single field at a time."
  },
  "balanced heat weapon": {
    "name": "Balanced Heat Weapon",
    "category": "Intrinsic Trait",
    "description": "Firing generates Heat equal to the Heat Generated stat. \nPassively dissipates Heat equal to the displayed Cooling Efficiency value each second, even while stowed.\nReaching 1000 Heat triggers Overheat, forcing a Manual Vent and rendering the weapon unusable until its Heat is \u2264150.\n\nUpon beginning a Manual Vent while Heat is \u2265875:\n2x Vent Rate Multiplier.\n\nPrimary Ammo Balanced Heat Weapons intrinsically deal 20% Increased Impact Damage to Elites, Mini-bosses, Bosses, and Vehicles.\n\nAdditional information regarding Heat Weapons."
  },
  "double fire": {
    "name": "Double Fire",
    "category": "Intrinsic Trait",
    "description": "Fires 2 rounds at a slight offset from the reticle at the cost of 1 Ammo."
  },
  "dynamic heat weapon": {
    "name": "Dynamic Heat Weapon",
    "category": "Intrinsic Trait",
    "description": "Firing generates Heat equal to the Heat Generated stat. \nPassively dissipates Heat equal to the displayed Cooling Efficiency value each second, even while stowed.\nReaching 1000 Heat triggers Overheat, forcing a Manual Vent and rendering the weapon unusable until its Heat is \u2264150.\n\nUpon cancelling a Manual Vent while Heat is \u2264125:\nDynamic Heat Limiter | -50% Heat Generation for 5 seconds or until stowing the weapon.\nTriggering Dynamic Heat Limiter through reload or sprint after having dealt damage will freeze the timer until shooting.\n\nPrimary Ammo Dynamic Heat Weapons intrinsically deal 15% Increased Impact Damage to Rank-and-File, and 38% Increased Impact Damage to Elites, Mini-bosses, Bosses, and Vehicles.\nAdditionally, they deal 2.5% increased direct damage to Guardians.\n\nAdditional information regarding Heat Weapons."
  },
  "heavy burst": {
    "name": "Heavy Burst",
    "category": "Intrinsic Trait",
    "description": "Fires a 2-round burst that deals 9.5% Increased Weakspot Damage. \nNot to be confused with Precision Damage, as they are independent of each other, such as shooting a Divinity Cage, or scoring a hit on a weakspot while not being within the Precision Angle Cone.\nGrants 10% Flinch Resist when ADS."
  },
  "high impact frame": {
    "name": "High-Impact Frame",
    "category": "Intrinsic Trait",
    "description": "Baseline damage for Rocket Launchers.\n1 Impact : 8.7 Explosive Damage Ratio. 46.5 RPM"
  },
  "legacy pr 55 frame": {
    "name": "Legacy PR-55 Frame",
    "category": "Intrinsic Trait",
    "description": "While hipfiring:\n+30? Stability, +1? Precision Angle Threshold, -70?% Accuracy Cone Size, and -?% Accuracy Cone Growth."
  },
  "lightweight frame": {
    "name": "Lightweight Frame",
    "category": "Intrinsic Trait",
    "description": "Passively grants +20 Mobility, and 6.25% Forward Movement Speed Bonus."
  },
  "micro missile frame": {
    "name": "Micro-Missile Frame",
    "category": "Intrinsic Trait",
    "description": "Uses Special Ammo. \nShoots micro-missiles that track locked-on enemies."
  },
  "mida synergy": {
    "name": "MIDA Synergy",
    "category": "Intrinsic Trait",
    "description": "SMG: Behaves like a Lightweight SMG | Shotgun: Behaves like a Precision Shotgun\nForward Movement Speed Bonus is increased to 10% while MIDA Multi-Tool is equipped."
  },
  "precision frame": {
    "name": "Precision Frame",
    "category": "Intrinsic Trait",
    "description": "+25 Airborne Effectiveness, 10% Decreased ADS Movement Speed Penalty, and -20% Recoil Yaw (Horizontal Recoil)."
  },
  "rapid fire frame": {
    "name": "Rapid-Fire Frame",
    "category": "Intrinsic Trait",
    "description": "Passively grants 0.8x Reload Duration Multiplier."
  },
  "spread shot": {
    "name": "Spread Shot",
    "category": "Intrinsic Trait",
    "description": "Fires a spread of 12 pellets, each dealing ? [10] damage with a 1.2x Precision Multiplier.\nPellets disappear after 25 meters, and deal a minimum of 0.33x damage at Maximum Damage Falloff."
  },
  "support frame": {
    "name": "Support Frame",
    "category": "Intrinsic Trait",
    "description": "Shoots slow, tracking projectiles that travel at a speed of 40m/s. Projectiles do not have a distance limit, but will eventually lose their tracers.\n Has 50% Increased Aim Assist Falloff Distance at 0 Range, down to 25% at 100 Range, compared to a regular Auto Rifle.\n\nDealing ANY (really, ANY!) damage generates Weapon Energy, at a rate of 1% Energy for every 4 [3.6] damage dealt, reaching 100% Charge after dealing 400 [360] damage.\nDealing damage with the Support Auto Rifle doubles the Weapon Energy gains, generating 1% Energy for every 2 [1.8] damage, requiring 200 [180] damage to fully charge.\n\nLooking near an ally within range widens the reticle. Hipfiring while an ally is in healing range will shoot healing projectiles that have much stronger tracking.\nConsumes 2% Weapon Energy per healing shot fired towards an ally, restoring 13.3 HP to them on impact.\nTargeting Range = 28 + (0.1 x Range Stat) meters, up to 38 Meters at 100 Range.\nIf multiple allies are targeted, then the healing shots will alternate between allies.\n\nUpon scoring 5 healing hits within 1 second of each on allies:\nThe next healing hits within 1 seconds of each on allies bestows them with an Element-Matching Effect, and applies Support Frame Boost to the user and the targeted ally.\nSupport Frame Boost grants 10% increased weapon damage for 6 seconds. Stacks with everything.\nStrand Support Frames cause the targeted ally to release 4 Unraveling Projectiles.\nSolar Support Frames bestow Restoration x1 for 4+2 seconds to the targeted ally.\nVoid Support Frames bestow 15 Void Overshield for 10+5 seconds to the targeted ally. \n\nOnly triggers On-Heal Effects upon applying Rapid Healing. Shots that restore missing health count for \"on-hit\" related interactions.\nIncurs a 1.5 second cooldown upon applying Support Frame Boost before additional healing hits are counted on the same ally."
  },
  "together forever": {
    "name": "Together Forever",
    "category": "Intrinsic Trait",
    "description": "Weapon Kills refill Sturm and grant it an Overcharged Bullet with increased damage, up to 25 Sturm Overcharge stacks.\nScoring an additional Weapon Kill within 3 seconds of the first grants 3 Sturm Overcharge stacks.\nFurther Weapon Kills within ? seconds of the last grant 5 Sturm Overcharge stacks."
  },
  "bolts": {
    "name": "Bolts",
    "category": "Intrinsic Trait",
    "description": "Bolts deal 1192 [?] damage with a 1.34x Precision Multiplier.\nBolts embed themselves on impact for a Persistence-stat based duration and can be picked up to recover 1 Ammo.\nPicking up a Bolt also picks up all other bolts within 2? meters of the Guardian.\n\nBolt Pickupable Duration = 20 + (Stat * 0.3) seconds"
  },
  "charged bolts": {
    "name": "Charged Bolts",
    "category": "Intrinsic Trait",
    "description": "Bolts attached to targets deal 55 [?] Damage every ? seconds up to 19 times, dealing up to 1102 [?] damage over ? seconds.\nDamage does not stack with additional bolts.\n\n\u2191Passively grants +2 Handling."
  },
  "explosive bolts": {
    "name": "Explosive Bolts",
    "category": "Intrinsic Trait",
    "description": "Bolts deal 548 [?] Impact Damage with a 1.34x Precision Multiplier and explode after 1 second, dealing up to 736 [?] Explosive Damage over 5? meters.\n\n\u2191Passively grants +2 Ammo Generation."
  },
  "heavy bolts": {
    "name": "Heavy Bolts",
    "category": "Intrinsic Trait",
    "description": "Bolts deal 10% increased damage, but are slower and have a heavily arced trajectory.\nHeavily limits the ability to score a Precision Hit on distant enemies due to Aim Assist altering the trajectory.\n\n\u2191Passively grants +2 Velocity."
  },
  "serrated bolts": {
    "name": "Serrated Bolts",
    "category": "Intrinsic Trait",
    "description": "Recovering a bolt embedded in an enemy deals 303 [?] damage.\n\n\u2191Passively grants +2 Persistence."
  },
  "spring auger bolts": {
    "name": "Spring-Auger Bolts",
    "category": "Intrinsic Trait",
    "description": "Bolts release an impulse after 1? second of impacting, dealing 16 [?] Damage and staggering enemies within 2.5 meters.\n\n\u2191Passively grants +2 Reload Speed."
  },
  "sword guarding": {
    "name": "Sword Guarding",
    "category": "Intrinsic Trait",
    "description": "[Guard] projects an energy shield in front of the user that constantly drains over time, the rate of which is determined by Guard Endurance.\nApplies a 0.85x Movement Speed Multiplier while guarding.\n\nAttacks that strike the shield deal decreased damage, with the damage resistance being determined by Guard Resistance.\nScales from 82.5% [52.5%] to 95% [65%] Damage Resist based on the Guard Resistance stat."
  },
  "charge rate": {
    "name": "Charge Rate",
    "category": "Intrinsic Trait",
    "description": "Charge Rate determines the delay before Sword Energy is regenerated, and the rate at which it is regenerated.\n Using any Sword Energy restarts Energy Regeneration Delay, regardless of which equipped Sword drained it.\n\nSword Energy Regeneration Delay, in seconds:\n10 CR = 2.65s | 30 CR = 2.45s | 40 CR = 2.25s | 70 CR = 1.65s | 100 CR = 1.05s\n\nSword Energy Regeneration Rate = 1.35 - (Charge Rate x 0.01)"
  },
  "guard endurance": {
    "name": "Guard Endurance",
    "category": "Intrinsic Trait",
    "description": "Sword Guard passively drains Sword Energy. Guarding against any damage pauses passive drain for ? seconds.\n\nSword Energy Drain, in seconds:\n0 GE = 2.5s | 40 GE = 5s | 60 GE = 6.35s | 90 GE = 9s | 100 GE = 12.5s\nStronghold and Infinite Guard Swords do not drain any Sword Energy."
  },
  "guard resistance": {
    "name": "Guard Resistance",
    "category": "Intrinsic Trait",
    "description": "Guard Resistance determines the amount of Damage Resist the Sword Guard provides against blocked attacks.\nInternally, this is the Stability stat, which means that effects that increase Stability, such as Rally Barricade, will increase the Damage Resist.\n\nGuard Damage Resist = 82.5% [52.5%] at 0 Resistance to 95% [65%] at 100 Resistance. \nDamage Resist = ???????? | 52.5 + (0.125 x Stat)"
  },
  "melee attacks": {
    "name": "Melee Attacks",
    "category": "Intrinsic Trait",
    "description": "[Melee] while a Glaive is readied lunges towards enemies up to 7 meters away, dealing 227 [69] damage. \nCan be chained into a 3-hit combo with a 0.467s delay between hits. Animation delay after combo ends can be skipped by [ADS]\nThe final hit of the combo deals 78.5% [88.8%] increased damage.\n\nGlaive Melee Attacks are treated as Kinetic damage type Unpowered Melee Attacks.\nGlaive Melee Kills count towards Ammo Finders as regular Primary Weapons."
  },
  "projectile attacks": {
    "name": "Projectile Attacks",
    "category": "Intrinsic Trait",
    "description": "Glaive Projectile Attacks are treated as Weapon Damage, and will benefit from any generic or weapon-specific damage increases.\n\nPrevents Melee Attacks for 0.2 seconds after shooting."
  },
  "weapon energy shield": {
    "name": "Weapon Energy & Shield",
    "category": "Intrinsic Trait",
    "description": "Scoring a Ranged Projectile Hit grants 25% Weapon Energy by default.\nGlaives passively generate 1% Weapon Energy per second while readied.\n\n[ADS] with a Glaive projects a frontal shield that grants Damage Resist against attacks that strike it, at the cost of draining Weapon Energy and a Movement Speed Penalty.\nBase Glaive Block Movement is normally 0.85x without Weapon Energy, and 0.66x with Weapon Energy.\nThe time to raise the shield is based off of Handling and ADS Speed values.\n\nGlaive Shield:\nGrants 97.5% Damage Resist against Combatants.\nGrants 50% Damage Resist against Guardians. Primary Ammo Weapons and Melee Attacks are only granted 30% Damage Resist.\nVexcalibur uniquely has 50% Damage Resist against all damage from Guardians.\n\nWeapon Energy Drain Rate:\n0 SD = 6.5s | 50 SD = 12s | 100 SD = 18? seconds\nDrain Rate = 6.5 + (Shield Duration x ~0.1)"
  },
  "air cooled core": {
    "name": "Air-Cooled Core",
    "category": "Origin Trait",
    "description": "While at Full Magazine or Heat <=10%?:\n+? \u2191+? Handling and ?% \u2191?% Decreased ADS Movement Speed Penalty.\n\nUpon sprinting for 0.5 seconds:\nGrants +? Reload/Vent Speed for 6? seconds"
  },
  "accelerated assault": {
    "name": "Accelerated Assault",
    "category": "Origin Trait",
    "description": "Upon scoring a total of 3 hits, with a maximum of 1.2 seconds between each hit:\nRefills 10% of Magazine/Dissipates 10% Heat.\n5% \u21916% [?%] increased damage for 4 seconds.\nOnly counts a hit up to once every 0.8s, meaning the perk takes AT LEAST 1.6 seconds to trigger.\n\nFor Single-Shot Weapon | Upon scoring a total of 3 hits, with a maximum of 4 seconds between each hit:\n 5% \u21916% [?%] increased damage and +? Reload Speed for 8 seconds.\nDealing Additional Damage extends the buff duration by +4 seconds, up to 4 seconds. Cannot extend beyond 4s timer left.\nOnly counts a hit up to once every 1.2?s, meaning the perk takes AT LEAST ? seconds to trigger.\n\nDealing damage extends the duration to 2 seconds if the Accelerated Assault buff timer is \u22642 seconds."
  },
  "advanced reflexes": {
    "name": "Advanced Reflexes",
    "category": "Origin Trait",
    "description": "Upon ADS or Guarding within 1 second of receiving damage:\nGrants 5% increased damage, +30 Mobility, +40 Handling, and +35 Charge Rate for 7.5 seconds.\nBuff cannot be refreshed until its duration expires. Buff persists through stow."
  },
  "alacrity": {
    "name": "Alacrity",
    "category": "Origin Trait",
    "description": "While 1 ally is dead:\n+10 Range, +10 Stability, +25 Reload Speed, and +5 Aim Assist.\n\nWhile 2 allies are dead or while Solo:\n+20 Range, +20 Stability, +50 Reload Speed, and +10 Aim Assist.\nDoes not work in the Rumble Crucible Playlist."
  },
  "ambush": {
    "name": "Ambush",
    "category": "Origin Trait",
    "description": "After having maintained a state of not dealing or receiving damage for at least 5 seconds:\n+20 Range, +20 Handling, and Increased Damage against Combatants for 2 seconds after dealing or receiving any damage.\nBows additionally receive a 0.85x \u21910.7x Draw Time Multiplier while active.\n\nDamage Increase:\nLinear Fusion: 8.88%\nBow, Glaive, Machine Gun, Pulse Rifle, and Trace Rifle: 10.78%"
  },
  "bitterspite": {
    "name": "Bitterspite",
    "category": "Origin Trait",
    "description": "While this weapon is readied:\nGrants a stack of Bitterspite for every 20 damage taken, up to 5 stacks after receiving 100 damage.\n\nBitterspite:\n+10 | +20 | +30 | +40 | +50 Reload Speed.\n0.97x | 0.96x | 0.95x | 0.92x | 0.9x Reload Duration Multiplier.\nStacks are consumed upon reloading."
  },
  "bray inheritance": {
    "name": "Bray Inheritance",
    "category": "Origin Trait",
    "description": "Grants Grenade, Melee, and Class Ability Energy per damage instance.\n\nPosterity: 0.45% | Trustee: 0.35%\nHeritage: 0.85% | Succession: 1.5%\nBequest: 2% | Commemoration: 0.4%\n\n\u2191Increased amount of Energy gained."
  },
  "bray legacy": {
    "name": "Bray Legacy",
    "category": "Origin Trait",
    "description": "Grants Ability Energy to the most-charged Ability per damage instance. Excludes instances from Explosive Perks/Micro Missiles.\nDoes not grant any Ability Energy to abilities with multiple charges if they have at least 1 charge readied. \n\nAbility Energy Gains per damage instance:\n\nVesper's Host Weapons\nAdaptive Auto Rifle (VS Pyroelectric Propellant) = 0.25%\nArea-Denial Grenade Launcher (VS Velocity Baton) = 0.36%\nAdaptive Fusion Rifle (VS Gravitic Arrest) = 0.429%\nRapid-Fire Grenade Launcher (VS Chill Inhibitor) = 5.8%\n\nSeasonal Weapons\nRapid-Fire Auto Rifle (Ahab Char) = 0.19% \u21910.24%\nHigh-Impact Scout Rifle (Jurisprudent) = ?% \u2191?%\nLightweight Sidearm (Faustus Decline) = 0.75% \u21910.94%\nRapid-Fire Sniper Rifle (Shortline Dissident) = ?% \u2191?%\nRocket Launcher (Haliaetus) + Sword (Eighty-Six)= 11.6% \u219114.5%\n\n\u219125% Increased Ability Energy."
  },
  "cast no shadows": {
    "name": "Cast No Shadows",
    "category": "Origin Trait",
    "description": "Upon dealing Melee Damage:\nGrants +? Handling for ? seconds and refills 20% of Magazine."
  },
  "classy contender": {
    "name": "Classy Contender",
    "category": "Origin Trait",
    "description": "On Weapon Kill:\nGrants 5% \u21916%? Class Ability Energy."
  },
  "collective purpose": {
    "name": "Collective Purpose",
    "category": "Origin Trait",
    "description": "Grants a stack of Collective Purpose per ally within 15 meters.\n\nCollective Purpose grants +5? Range, +5 Handling, 0.97x Draw Time Multiplier, and +5 Charge Rate per stack.\n+? | +? | +? | +? | +? Range\n+5? | +15 | +20? | +? | +? Handling\n0.97x | 0.95x | 0.925x | +? | +? Draw Time Multiplier\n+5 | +10 | +15 | +? | +? Charge Rate"
  },
  "contending cascade": {
    "name": "Contending Cascade",
    "category": "Origin Trait",
    "description": "Grants a stack of Contending Cascade for each kill scored within 4 seconds of each from any source, up to a maximum of 12 \u219110 stacks.\nRenames to Crowning Cascade upon reaching 12 \u219110 stacks.\nStacks are lost on death.\n\nContending Cascade grants increased Handling and Reload Speed, up to a maximum of +? Handling and +? Reload Speed at 12 \u219110 stacks.\nScoring a Weapon Kill while Crowning Cascade is active triggers an Elemental Explosion, dealing up to ? [?] Damage over ? meters.\n\n\u2191The requirement to be impressed is lowered to 10 rapid kills."
  },
  "crossing over": {
    "name": "Crossing Over",
    "category": "Origin Trait",
    "description": "For the top 50% of the Magazine:\nLinearly grants +10 Range and +? Handling, down to +5 Range and +? Handling.\n\nFor the bottom 50% of the Magazine:\nLinearly grants 1.5% increased damage, up to +3% increased damage."
  },
  "cursed thrall": {
    "name": "Cursed Thrall",
    "category": "Origin Trait",
    "description": "On Melee Kill:\nWeapon Kills cause the enemy to explode, dealing up to 123.5 [?] Weapon-Element Matching damage over a 4.5? metre radius for 7.5 seconds.\nDamage against Combatants scales with Combatant Rank Modifiers."
  },
  "dark ether reaper": {
    "name": "Dark Ether Reaper",
    "category": "Origin Trait",
    "description": "Upon reaching 100% Counter Progress by scoring Weapon Kills:\nRank-And-File = 25% | Elites = ?% | Minibosses+ = 100% | Guardians = 25%\nCounter persists through stow.\n\n Spawns an Element-Matching Dark Ether Charge that floats in the air for 5? seconds before expiring.\nDark Ether Charges can be detonated by either shooting or coming into contact with them.\nDark Ether Charges deal up to 386 [50] Element-Matching Damage over 3? meters. \nDamage against Combatants scales with Combatant Rank Modifiers.\nDark Ether Charge damage counts as Weapon Damage. Damage is always attributed to the creator, regardless of who destroys the Dark Ether Charge.\n \nInteracting with a Dark Ether Charge refills the Magazine, and grants 40% Increased Magazine Capacity of all equipped Dark Ether Reaper Weapons.\nMagazine increases are rounded up.\n\nIncurs a ? second cooldown upon spawning a Dark Ether Charge before additional kills count."
  },
  "dawning surprise": {
    "name": "Dawning Surprise",
    "category": "Origin Trait",
    "description": "Upon reaching 100% Counter Progress by scoring Weapon Kills:\nRank-And-File = 16.7% \u219120% | Elites, Minibosses, and Bosses = 50% | Guardians = 16.7% \u219120%\n\nSpawns a \ud83d\udce6Box-Shaped Dawning Gift for the user and their allies, which remains on the ground for up to 10 seconds.\n\nDawning Gift:\nGrants 10% Grenade, Melee, and Class Ability Energy, restores 22 HP and begins Health Regeneration on pickup."
  },
  "dealer s choice": {
    "name": "Dealer's Choice",
    "category": "Origin Trait",
    "description": "Weapon Kills grant additional Super Ability Energy.\nEquipping additional Dealer's Choice Weapons increases the amount of Super Ability Energy gained.\n\nx1 = +0.3% | x2 = +1.6% | x3 = +3% Super Ability Energy.\n\nThe following Exotic Weapons count as additional Dealer's Choice Weapons, but do not benefit from the Super Ability Energy gains.\nAce of Spades | Khvostov 7G-0X | Still Hunt"
  },
  "disaster plan": {
    "name": "Disaster Plan",
    "category": "Origin Trait",
    "description": "Upon firing/swinging, after picking up an Ammo Brick:\nGrants +15 Range and 15% Flinch Resist for 1.5 seconds. \nSwords receive +100 Charge Rate for 1.5 seconds."
  },
  "dragon s vengeance": {
    "name": "Dragon's Vengeance",
    "category": "Origin Trait",
    "description": "Upon reaching Critical Health, or on Ally Death:\nRefills magazine. \nGrants +5 Range, +10? Handling, and 0.975x Charge/Draw Time Multiplier for 11 seconds."
  },
  "dream work": {
    "name": "Dream Work",
    "category": "Origin Trait",
    "description": "Upon scoring an assist, or scoring a kill on an enemy damaged by an ally, up to once per reload:\nRefills 66% of Magazine and grants +? Reload Speed for ? seconds. \nBows are additionally granted 0.?x Draw Time Multiplier.\nRefill can overflow, up to 66% Increased Magazine Capacity. \nBuff can be triggered while stowed if the weapon did damage."
  },
  "eyes up": {
    "name": "Eyes Up",
    "category": "Origin Trait",
    "description": "After having maintained a state of not dealing or receiving damage for at least 5 seconds:\n+? Range, +? Reload Speed, and Increased Damage against Combatants for ? seconds after dealing or receiving any damage.\n\nDamage Increase:\n\nAdditional Weapons Kills while Eyes Up is active extend the buff duration by +? seconds and increase its effects."
  },
  "exhaustive research": {
    "name": "Exhaustive Research",
    "category": "Origin Trait",
    "description": "While ADS near an enemy within 60 meters:\nLoads up a Micro-Rocket over 0.6 seconds.\n\nMicro-Rocket replaces a regular bullet, releasing a Weapon-Matching Missile that deals up to ? [50 Primary | 75 Special | 62.5 Heavy] Explosive Damage over ? meters.\nIncurs a 5.5 second cooldown after firing a missile before it is able to load another rocket.\n\n\u2191Rocket Damage is improved. Damage seems to vary?"
  },
  "explosive pact": {
    "name": "Explosive Pact",
    "category": "Origin Trait",
    "description": "Grenade Ability Usage or scoring a Grenade Kill grants a stack of Explosive Pact, up to 5 stacks for 7.5 seconds\nHealing Grenades grant a stack each time the Healing Orb is picked up, either by allies or the caster.\n\n Each stack of Explosive Pact grants +Stability, +Reload Speed, and Reload Duration Multiplier for 7.5 seconds.\nBuff can be activated while stowed, and persists through stow.\n\nExplosive Pact:\n+? | +? | +? | +? | +? Stability\n+8 | +16 | +20 | +24 | +44 Reload Speed\n0.98x | 0.98x | 0.975x | 0.96x | 0.945x Reload Duration Multiplier"
  },
  "extrovert": {
    "name": "Extrovert",
    "category": "Origin Trait",
    "description": "After 0.25 seconds of scoring a Weapon Kill while within 15 metres of 3 enemies or a Nightmare:\nRestores 60 HP.\nGlaive Melee Kills can also trigger the effect.\n\nIncurs a 3 second cooldown after activation."
  },
  "field tested": {
    "name": "Field-Tested",
    "category": "Origin Trait",
    "description": "Scoring Hits and Kills progress a Counter, which grants stacks of Field Test at certain thresholds, up to a maximum of 5 stacks. \n\nField Test grants +Range, +Stability, +Handling, and +Reload Speed, or +Charge Rate and +Guard Resistance for Swords.\nBuff is only removed on death.\n\nField Test Stat Bonuses:\n+3 | +6 | +9 | +12 | +20 Range\n+? | +? | +? | +? | +30? Stability\n+? | +? | +? | +? | +? Handling\n+5 | +10 | +20 | +35 | +50 Reload Speed\n+5 | +10 | +20 | +35 | +55 Charge Rate\n+5 | +10 | +20 | +30 | +40 Guard Resistance\n\nCounter Points needed to reach x1 | x2 | x3 | x4 | x5 Stacks:\n x51 | x151 | x351 | x651 | x1001 \nx26 | x76 | x176 | x326 | x501\nx11 | x31 | x71 | x131 | x201\n\nCounter Information:\nEach damage instance counts as 1 hit. Kills count as multiple hits, with the amount varying across Weapon Archetypes and Combatant Rank.\n\nKills for Counter:\nTier 1 and T2 Rank-and-File = x1 | T3+ Combatants = x4 | T1 Elites = x5 | Guardians = x10\n\nPrimary Weapons and Shotguns receive x5 Points from kills.\nSnipers receive x4 Points from hits, and 2.5x from kills.\nBreech-Loaded Grenade Launchers receive x2 Points from kills."
  },
  "fleet footed": {
    "name": "Fleet Footed",
    "category": "Origin Trait",
    "description": "Upon dealing damage:\nFleet Footed x1 | +15 Airborne Effectiveness and ?% Increased Movement Speed for 5 \u21916 seconds.\nDealing additional Weapon Damage refreshes the buff duration.\n\nOn Weapon Kill:\nFleet Footed x2 | +30 Airborne Effectiveness and ?% Increased Movement Speed for 5 \u21916 seconds.\nDealing additional Weapon Damage refreshes the buff duration.\nBuff is removed on stow.\n\n\u2191Buff duration is increased to 6 seconds."
  },
  "frame of reference": {
    "name": "Frame of Reference",
    "category": "Origin Trait",
    "description": "On Weapon Kill:\nGrants a stack of Frame of Reference for 8 seconds, up to a maximum of 5 stacks.\nAdditional Weapon Kills refresh the buff duration.\nFrame of Reference timer is paused while stowed. Remaining duration is rounded up to the nearest second.\n\nFrame of Reference x1 | 1.45% Increased Weapon Damage, +? Range, and +? Reload Speed.\nFrame of Reference x2 | 2.8% Increased Weapon Damage, +? Range, and +? Reload Speed.\nFrame of Reference x3 | 4.2% Increased Weapon Damage, +? Range, and +? Reload Speed.\nFrame of Reference x4 | 5.6% Increased Weapon Damage, +? Range, and +? Reload Speed.\nFrame of Reference x5 | 7% Increased Weapon Damage, +? Range, and +? Reload Speed."
  },
  "gravity well": {
    "name": "Gravity Well",
    "category": "Origin Trait",
    "description": "Upon finishing a reload:\nPick ups Ammo Bricks within 15 meters.\nTriggers On-Ammo Pickup Synergies. Also works on Motes and Crests."
  },
  "gun and run": {
    "name": "Gun and Run",
    "category": "Origin Trait",
    "description": "Kills grant a stack of Gun and Run for ? seconds, up to a maximum of ? stacks.\n\nSprinting for ? seconds consumes a stack, refilling ?% of Magazine. \nBows receive 0.?x Draw Time Multiplier for ? seconds."
  },
  "hakke breach armaments": {
    "name": "Hakke Breach Armaments",
    "category": "Origin Trait",
    "description": "Passively grants increased damage against Vehicles, Turrets, and Constructs.\n\n15% \u219120% Increased Damage against Vehicles (such as Cyclops, Shriekers, and Tanks).\n30% \u2191?% Increased Damage against Turrets and Constructs.\n45?% Increased Damage against Stasis Crystals.\n\n\u2191Increased Damage Bonus.\n20% against Vehicles | 60% against Turrets and Constructs"
  },
  "harmonic resonance": {
    "name": "Harmonic Resonance",
    "category": "Origin Trait",
    "description": "Equipping more than one Root of Nightmares Weapon grants increased Handling, Reload Speed, and damage towards enemies wielding Light and Darkness.\nList of enemies affected: \nDread Combatants (+Nezarec) and Lucent Hive Lightbearers | Guardians in their Super Ability or Transcending?. DOES NOT DO ANYTHING TO GUARDIANS.\n\nx1 = +10 Handling, 0.95x Reload Duration Multiplier, and 3.33% increased damage.\nx2 = +20 Handling, +20 Reload Speed, 0.95x Reload Duration Multiplier, and 10% increased damage."
  },
  "head rush": {
    "name": "Head Rush",
    "category": "Origin Trait",
    "description": "Upon standing up, after crouching for 2 seconds:\n+? Handling and +10 Reload Speed for 5 seconds."
  },
  "hot swap": {
    "name": "Hot Swap",
    "category": "Origin Trait",
    "description": "Upon readying the gun after receiving any damage within ? seconds:\n+30 Handling for 4 seconds.\nSwords are granted +100 Guard Resistance, +100? Guard Endurance, and +100 Charge Rate for 4 seconds.\nBuff persists through stow."
  },
  "indomitability": {
    "name": "Indomitability",
    "category": "Origin Trait",
    "description": "While a Light Super Ability is equipped:\nWeapon Kills grant 5% Grenade Ability Energy.\n\nWhile a Darkness Super Ability is equipped:\nWeapon Kills grant 5% Melee Ability Energy."
  },
  "imperial allegiance": {
    "name": "Imperial Allegiance",
    "category": "Origin Trait",
    "description": "Grants a stack of Imperial Allegiance per ally within 15 meters, up to a maximum of 3 stacks.\n\nImperial Allegiance grants 1.035x Cooling Multiplier, and +? Charge Rate per stack.\nAdditonally, each stack grants 3.5% [?%] increased damage while above 50% Heat/below ?% Sword Energy.\n\nImperial Allegiance x1 | 1.035x Cooling Multiplier, +? Charge Rate, and 3.5% [?%] increased damage.\nImperial Allegiance x2 | 1.07x Cooling Multiplier, +? Charge Rate, and 7% [?%] increased damage.\nImperial Allegiance x3 | 1.105x Cooling Multiplier, +? Charge Rate, and 10.5% [?%] increased damage."
  },
  "land tank": {
    "name": "Land Tank",
    "category": "Origin Trait",
    "description": "On Weapon Kill:\n+10 Health and 5% Damage Resist against Combatants per stack for 5 seconds, up to a maximum of 3 stacks.\nBuff remains active while stowed."
  },
  "nadir focus": {
    "name": "Nadir Focus",
    "category": "Origin Trait",
    "description": "Upon firing a weapon or swinging a sword:\nGrants stacks of Nadir Focus for 2 seconds.\nNadir Focus grants up to +10 Range, -7.5%? Accuracy Cone Size, ?% Increased Projectile Velocity, and ?% Increased Sword Lunge Distance at max stacks.\nFiring or swinging refreshes the buff duration. \nBuff is removed on stow. Stack amount varies \n\nNADIR Focus\nAuto Rifles | Submachine Guns? =  Reach maximum stacks after 11 shots.\n+? | +? | +? | +? | +? | +? | +? | +? | +? | +? | +? | +10 Range\n-?% | -?% | -?% | -?% | -?% | -?% | -?% | -?% | -?% | -?% | -?% | -?% Accuracy Cone Size\n\nSidearms = Reach maximum stacks after 5 shots.\n+? | +? | +? | +? | +10 Range\n-?% | -?% | -?% | -?% | -?% Accuracy Cone Size\n\nHand Cannons | Scout Rifles = Reach maximum stacks after 4 shots.\n+? | +? | +? | +10 Range\n-?% | -?% | -?% | -?% Accuracy Cone Size\n\nSwords = Reach maximum stacks after 5 swings.\n20% | 40% | 60% | 80% | 100% Increased Sword Lunge Distance\n\nGrenade Launchers = Reach maximum stacks after ? shots.\n?% | ?% | ?% | ?% Increased Projectile Velocity"
  },
  "nail meet hammer": {
    "name": "Nail, Meet Hammer",
    "category": "Origin Trait",
    "description": "Passively grants 8% increased damage towards Combatant Shields.\n\nUpon breaking a Combatant Shield:\nPrimary and Power Weapons grant 8% Special Ammo Progress.\nSpecial Weapons grant 8% Power Ammo Progress."
  },
  "nano munitions": {
    "name": "Nano-Munitions",
    "category": "Origin Trait",
    "description": "While within 15 metres of an ally:\nGrants a stack of 1 Nano-Munitions every 3 seconds, up to x7 Nano-Munitions after 21 \u219110.5 seconds. \nConsumes a stack of 1 Nano-Munitions to grant a 25% Emergency Refill. Consuming a stack restarts the timer. Magazine Refill is rounded up.\nReadying a Power Weapon consumes all stacks, refilling the magazine by 25% per stack consumed."
  },
  "nanotech tracer missiles": {
    "name": "Nanotech Tracer Missiles",
    "category": "Origin Trait",
    "description": "Upon scoring a Magazine-based amount of hits within 6 seconds of each:\nAutomatically shoots a Tracking Missile that matches Weapon's Damage Type. \nMissile deals 22.4 [14] Impact Damage and 24  [15] Explosive Damage on hit.\nDamage against Combatants scales with the Weapon Type, as well as Combatant Rank Multipliers.\nGrenade Launcher: 25% Increased Damage\n Machine Gun: 50% Increased Damage \nSniper Rifle: 100% Increased Damage\nFusion Rifle and Shotgun: 150% Increased Damage\n\nHits required to trigger Tracking Missile:\nHand Cannon, Pulse Rifle, and Submachine Gun: 45% of Magazine.\nFusion Rifle: ?% of Magazine.\nSniper Rifle: 50?% of Magazine.\nGrenade Launcher: 30% of Magazine.\nMachine Gun: 25% of Magazine.\nIncurs a 1 second cooldown between firing a missile and additional hits counting towards the next missile."
  },
  "noble deeds": {
    "name": "Noble Deeds",
    "category": "Origin Trait",
    "description": "Upon buffing an ally through Healing, Revives, Empowerment, or with a Subclass Verb:\nGrants x10 Noble Deeds, up to a maximum of 10 stacks. \nScoring a kill consumes 1 [2] stacks of Noble Deeds.\nBuff can be activated while stowed, and persists through stow.\n\nNoble Deeds grants +30 Handling and +30 Reload Speed. Swords receive +20 Charge Rate."
  },
  "omolon fluid dynamics": {
    "name": "Omolon Fluid Dynamics",
    "category": "Origin Trait",
    "description": "For the top 50% of the Magazine:\n Up to +20 Stability and +30 Reload Speed.\nBenefits are linearly decreased as Magazine reaches 50%."
  },
  "one quiet moment": {
    "name": "One Quiet Moment",
    "category": "Origin Trait",
    "description": "After having maintained a state of not dealing or receiving damage for 1 seconds:\nOne Quiet Moment x1 | +10 Handling, +20 Reload Speed, and 0.975x Reload Duration Multiplier. \nSwords grant up to 12.5% Increased Movement Speed.\n\nAfter having maintained a state of not dealing or receiving damage for 2 seconds:\nOne Quiet Moment x2 | +20 Handling, +40 Reload Speed, and 0.95x Reload Duration Multiplier. \nSwords grant up to 25% Increased Movement Speed.\n\nOne Quiet Moment stacks disappear upon stowing."
  },
  "paracausal fluid": {
    "name": "Paracausal Fluid",
    "category": "Origin Trait",
    "description": "Upon dealing damage:\nGrants 2 stacks of Paracausal Fluid for 3 seconds.\nBuff remains active through stow, lingering at 1 stack. \nSwapping back to the Paracausal Fluid weapon will return to 2 stacks.\n\nParacausal Fluid x1 | +? Mobility\nParacausal Fluid x2 | +? Handling, +50 Mobility, and +90 Charge Rate."
  },
  "photoinhibition": {
    "name": "Photoinhibition",
    "category": "Origin Trait",
    "description": "Passively increases damage against shielded enemies.\n\n34.3% Increased Damage against Combatant Elemental Shields and Barrier Champion Shields.\n21.6% Increased Damage against Combatant Overshields.\n15.6% Increased Damage against Guardian Overshields.\n\nUpon breaking a Combatant Shield:\nDisorients for ? seconds.\n\nUpon breaking a Matching Combatant Shield:\nDisorients enemies within ? meters for ? seconds."
  },
  "problem solver": {
    "name": "Problem Solver",
    "category": "Origin Trait",
    "description": "Upon scoring multiple direct hits within 5 seconds of each against a Champion, Miniboss, or Boss Combatant:\nInflicts Exhaust for 5 seconds.\n+50? Reload Speed and +50? Handling for 10 \u219112.5 seconds.\nExhaust and buff can be refreshed by retriggering the perk. Buff persists through stow.\n\n\u2191Buff duration is increased to 12.5 seconds."
  },
  "psychohack": {
    "name": "Psychohack",
    "category": "Origin Trait",
    "description": "Upon scoring multiple hits within 3 seconds of each against an enemy:\nInflicts Exhaust. Guardians additionally deal 10% decreased damage.\nEffect cannot be refreshed.\n\nHit Requirement:\n3 Hits: Bow, Glaive (Projectile/Melee), Grenade Launcher, Rocket Launcher, Sniper Rifle\n7 Hits: Scout Rifle\n12 Hits: Sidearm\n13 Hits: Submachine Gun\n14 Hits: Fusion Rifle\n16 Hits: Auto Rifle"
  },
  "radiolaria transposer": {
    "name": "Radiolaria Transposer",
    "category": "Origin Trait",
    "description": "Upon reaching 100% Counter Progress by scoring Weapon Kills within 8 seconds of each:\nRank-And-File = 34% | Elite+ = 100% | Guardians = ?%\nStowing the weapon resets the Counter.\n\nTarget explodes, dealing up to 67.5 [?] damage over 3? meters, and creating a Radiolaria Pool under them.\nRadiolaria Pools deal 15 [?] Arc Damage every 0.65 seconds over ? meters for ? seconds, up to 3? times.\nDamage against Combatants scales with Combatant Rank Modifiers. Counts as Weapon Damage, and is affected by Damage Buffs."
  },
  "rasputin s arsenal": {
    "name": "Rasputin's Arsenal",
    "category": "Origin Trait",
    "description": "On Elemental, Barrier Champion, or Guardian Shield Break:\nRefills 50% of Magazine."
  },
  "restoration ritual": {
    "name": "Restoration Ritual",
    "category": "Origin Trait",
    "description": "On Ally Revival or Finisher:\nRefills Magazine.\nGrants Restoration Ritual.\nConsumes Restoration Ritual when Magazine reaches 0 Ammo, refilling the magazine.\nBuff persists through stow."
  },
  "right hook": {
    "name": "Right Hook",
    "category": "Origin Trait",
    "description": "Upon dealing Melee Damage:\n +10 Range and +10 Aim Assistance for 10 seconds\nAdditional Melee Damage extends the duration by +10 seconds, up to 20 seconds.\nBuff persists through stow."
  },
  "roar of battle": {
    "name": "Roar of Battle",
    "category": "Origin Trait",
    "description": "After having maintained a state of dealing or receiving damage every 0.65 seconds for 2 seconds:\n+10? Stability and +10? Handling for 6 \u21917 seconds.\nDealing or receiving additional damage refreshes the buff duration.\n\n\u2191Buff duration is increased to 7 seconds."
  },
  "runneth over": {
    "name": "Runneth Over",
    "category": "Origin Trait",
    "description": "Upon finishing a reload while within 15 metres of allies:\nIncreases Magazine Capacity by 10% for each ally nearby.\nBows receive 0.925x | 0.85x | 0.825x | 0.8x | 0.75x Draw Time Multiplier based on the amount of allies.\nSwords receive +? | +? | +? | +? | +? Charge Rate based on the amount of allies."
  },
  "search party": {
    "name": "Search Party",
    "category": "Origin Trait",
    "description": "While no allies are within 15 metres: \n0.85x \u2191? ADS Duration Multiplier and 10% \u2191?% Decreased ADS Movement Penalty.\n\n\u2191? ADS Duration Multiplier and % Decreased ADS Movement Penalty."
  },
  "skulking wolf": {
    "name": "Skulking Wolf",
    "category": "Origin Trait",
    "description": "Upon scoring a Weapon Kill while HP \u226490: \nGrants Enhanced Radar, combatants become less accurate at targeting the user, and prevents passively pinging enemy radar for 10 \u2191? seconds. \nShooting will ping enemy radar for 2 seconds. Blue Radar Blip inaccurately shows that it's only visible for 0.75 seconds.\nBuff remains active while stowed.\n\n\u2191Buff duration is increased to ? seconds."
  },
  "splicer surge": {
    "name": "Splicer Surge",
    "category": "Origin Trait",
    "description": "Upon finishing a reload after having dealt damage:\nGrants a stack of Splicer Surge, up to 3 stacks.\nBuff is removed on stow.\n\nSplicer Surge:\nx1 = +10? Handling, +10 Reload Speed, and 0.967x Reload Duration Multiplier.\nx2 = +20? Handling, +20 Reload Speed, and 0.934x Reload Duration Multiplier.\nx3 = +45? Handling, +45 Reload Speed, and 0.9x Reload Duration Multiplier."
  },
  "souldrinker": {
    "name": "Souldrinker",
    "category": "Origin Trait",
    "description": "Upon finishing a reload:\nRestores Health based on the amount of hits scored, relative to the Magazine Size.\n Scoring 100% of Magazine as Hits restores 50 HP.\n Each Grenade Launcher hit counts as 50% of Magazine. Glaive Melee Attacks do not count.\nHit counter persists through stow."
  },
  "stunning recovery": {
    "name": "Stunning Recovery",
    "category": "Origin Trait",
    "description": "Upon Stunning a Champion:\nRefills Magazine, restores 60 HP, begins Health Regeneration, and grants +40 Recovery for 3 seconds."
  },
  "subjugation": {
    "name": "Subjugation",
    "category": "Origin Trait",
    "description": "Perk behavior changes depending on the enemy rank when dealing damage:\n\nAgainst Rank-and-File and Elite Combatants: \nShots explode on hit, dealing 6.5 (32.5 on Shotgun) additional damage as an Explosive Payload, damaging enemies within 3? meters.\nTrace Rifle: Once every 4 hits, after 4 hits.\nDamage against Combatants scales with Combatant Rank Modifiers and counts as Weapon Damage.\n\nAgainst Miniboss+:\nInflicts exhaustion for 5 seconds on hit.\n\nGuardians:\n?% Flinch Resist for ? seconds."
  },
  "sundering": {
    "name": "Sundering",
    "category": "Origin Trait",
    "description": "Upon destroying a Vehicle Combatant, Construct, or breaking a Shield:\nGrants +40 Reload Speed, 0.95x Reload Duration Multiplier, and 0.9x Draw Time Multiplier for 7 seconds.\nBuff persists through stow."
  },
  "suros synergy": {
    "name": "Suros Synergy",
    "category": "Origin Trait",
    "description": "Upon finishing a reload:\n+40 Handling and 20% Flinch Resist for 6 seconds.\nBuff cannot be refreshed until its duration expires. Buff persists through stow."
  },
  "tenacity": {
    "name": "Tenacity",
    "category": "Origin Trait",
    "description": "On Weapon Kill, while within 15 meters of an enemy:\nGrants a stack of Tenacity, up to a maximum of 20 stacks.\nStacks persist until death.\n\nEach Tenacity stack grants 0.5% increased damage, Handling and Reload Speed.\nGrants up to 10% increased damage, +50 \u2191+? Handling, and +50 \u2191+? Reload Speed at 20 stacks.\n\n\u2191Handling and Reload Speed is increased. Damage buff is unchanged."
  },
  "tex balanced stock": {
    "name": "Tex Balanced Stock",
    "category": "Origin Trait",
    "description": "Upon scoring 4 Hipfire Hits within 4? seconds of each:\nGrants Tex Balanced Stock for 4 seconds. Scoring additional hipfired hits refresh the buff duration.\n\nTex Balanced Stock:\n+20 Range, +20 Handling, +20 Reload Speed, 0.9x Reload Duration Multiplier, +1.5\u00b0 Hip-Fire Precision Angle Threshold, and 10% Decreased ADS Movement Speed Penalty.\nBuff persists through stow."
  },
  "timelost magazine": {
    "name": "Timelost Magazine",
    "category": "Origin Trait",
    "description": "Weapon Kills grant additional +1?% Super Ability Energy.\n\nOn Super Ability End:\nRefills Magazine.\n100% Increased Base Magazine Capacity for 20 seconds. Found Verdict reloads 2 shells at a time.\nBase Magazine Increases change the base value, meaning it stacks with Increased Magazine Capacity effects like Overflow.\nThis also means it changes mag-based effects such as gaining Bolt Charge.\nBuff can be activated while stowed, and persists through stow."
  },
  "to excess": {
    "name": "To Excess",
    "category": "Origin Trait",
    "description": "Upon scoring a Weapon Kill while Super Ability is charged:\n+20 Grenade and +20 Melee for 12 seconds.\nBuff persists through stow."
  },
  "unsated hunger": {
    "name": "Unsated Hunger",
    "category": "Origin Trait",
    "description": "While Grenade, Melee, and Class Abilities are all uncharged:\n+20 Stability, +60 Handling, +60 Reload Speed. \n\nSwords: +50 Charge Rate and +40 Guard Endurance"
  },
  "vanguard determination": {
    "name": "Vanguard Determination",
    "category": "Origin Trait",
    "description": "Upon scoring a Weapon Kill within 20 seconds of Class Ability Usage:\nGrants a stack of Vanguard's Determination for 10 \u219112.5 seconds, up to a maximum of 3 stacks.\nScoring additional Weapon Kills within 20 seconds of Class Ability Usage refreshes the buff duration.\nBuff remains active through stow, and stacks are shared across different weapons with the Vanguard's Determination trait.\n\nVanguard's Determination:\n2% | 4% | 6% Damage Resist.\n\n\u2191Buff duration is increased to 12.5 seconds."
  },
  "vanguard s vindication": {
    "name": "Vanguard's Vindication",
    "category": "Origin Trait",
    "description": "On Weapon Kill:\nRestores 10 HP."
  },
  "veist stinger": {
    "name": "Veist Stinger",
    "category": "Origin Trait",
    "description": "Hits have a chance to activate Veist Stinger for 7 seconds, granting different bonuses based on the Weapon Archetype.\n\nVeist Stinger:\nRefills 25% of Magazine and 10% Decreased ADS Movement Speed Penalty.\nBows are additionally granted 0.85x Draw Time Multiplier, but do not receive the Magazine Refill.\nSwords are granted +? Charge Rate.\n\nVeist Stinger Activation Chances:\n2%: Auto Rifles and Submachine Guns.\n4%: Sidearms\n10%: Bows, Linear Fusion Rifles, and Sniper Rifles\n\nIncurs a 4 second cooldown between reactivations.\n\n\u2191???."
  },
  "wild card": {
    "name": "Wild Card",
    "category": "Origin Trait",
    "description": "Kills release a varying amount of Telesto Bolts on top of where the enemy died. Bolt Quantity is tied to Enemy Rank.\nRank-and-File = 1 | Elites = 3 | Minibosses = ? | Bosses and Champions = 7 | Guardians = 3\nIncurs a 6? second cooldown between additional Bolt spawns. \n\nBolts:\nIdentical to Telesto Bolts in behavior, exploding on proximity or contact, dealing up to 39.5 damage and last up to 10.5 seconds after embedding onto a surface.\nDamage against Combatants scales with Combatant Rank Modifiers."
  },
  "willing vessel": {
    "name": "Willing Vessel",
    "category": "Origin Trait",
    "description": "Dealing damage or scoring kills increments a Damage based counter towards stat bonuses.\n100% Counter is displayed as x5 Willing Vessel. Counter constantly decreases by 2.2?% every 1? seconds.\n\nVisual Buff Stacks to Damage Thresholds:\nAuto: ? | ? | ? | ? | ?\nBow: ~180 | ~750 | ? | ? | ?\nSidearm: ? | ? | ? | ? | ?\nSMG : ? | ? | ? | ? | ?\nFusion Rifle: ? | ? | ? | ? | ?\nGlaive: ? | ? | ? | ? | ?\nGL: I | don't | think | so | lmao\nLFR: ~380 | ~1750 | ~3450 | ~4150 | ~6200\nMG: ~385 | ? | ? | ? | ?\nSword: ? | ? | ? | ? | ?\n\nGrants a continuously increasing Stability, Handling, Reload Speed, and Charge Rate stat bonus as more damage/kills are scored.\nStat Bonuses (at the start of the stack):\nx1 = +? Stability, +? Handling, +2? Reload Speed, 0.?x Draw/Charge Time Multiplier, and +20 Charge Rate\nx2 = +? Stability, +? Handling, +5 Reload Speed, 0.?x Draw/Charge Time Multiplier, and +40 Charge Rate\nx3 = +? Stability, +? Handling, +10 Reload Speed, 0.?x Draw/Charge Time Multiplier, and +50 Charge Rate\nx4 = +? Stability, +? Handling, +25 Reload Speed, 0.?x Draw/Charge Time Multiplier, and +70 Charge Rate\nx5 = +20? Stability, +30? Handling, +30 Reload Speed, 0.85x Draw/Charge Time Multiplier, and +80 Charge Rate\n\nThis is basically Target Lock's S Curve mixed with Field-Tested on top of being actually damage based, so it is much harder to test, sorry!"
  },
  "winterized gear": {
    "name": "Winterized Gear",
    "category": "Origin Trait",
    "description": "After having maintained a state of not dealing or receiving damage for at least ? seconds:\nGrants ? stacks of Winterized Gear. \nStacks begin decaying after having dealt or received damage.\nStacks are reacquired after having maintained a state of not dealing or receiving damage for at least ? seconds\n\nWinterized Gear x3 = +? Stability, +? Handling, and +? Reload Speed for ? seconds.\nWinterized Gear x2 = +? Stability, +? Handling, and +? Reload Speed for ? seconds.\nWinterized Gear x1 = +? Stability, +? Handling, and +? Reload Speed for ? seconds."
  },
  "aion renewal": {
    "name": "AION Renewal",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Force Converter\n\nUpon scoring a Micro-Missile, Rocket Launcher or Grenade Launcher Kill:\nGrants Force Converter.\n\nSprinting while Force Converter is active grants Speed Booster.\n\nMissiles:\nQuicksilver Storm's Rocket Tracer, Nanotech Tracer Rounds, Exhaustive Research Rockets, Rocket Frames, Grand Overture Missiles, and Hazardous Propulsion's Exodus Rockets."
  },
  "aion adapter": {
    "name": "AION Adapter",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Force Absorption\n\nUpon scoring a Missile, Rocket Launcher or Grenade Launcher Kill:\nGrants 20% Area-of-Effect Damage Resist and 60% Explosive Self-Damage Resist for 15 seconds.\n\nMissiles:\nQuicksilver Storm's Rocket Tracer, Nanotech Tracer Round, Exhaustive Research Rockets, Rocket Frames, Grand Overture Missiles, and Hazardous Propulsion's Exodus Rockets."
  },
  "bushido": {
    "name": "Bushido",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Iaido\n\nScoring a Weapon Kill within ? seconds of reloading or readying a gun restores 35 HP.\nIncurs a ~3 second cooldown upon triggering. Must reload or swap weapons after the cooldown is over for the effect to trigger on kill."
  },
  "collective psyche": {
    "name": "Collective Psyche",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Accretion\n\nOn Ammo Brick Pickup:\nGrants stacks of Accretion, up to a maximum of 20 stacks. Stacks persist until death.\nSpecial Ammo Bricks grant 1 stack of Accretion. Heavy Ammo Bricks grant 3 stacks of Accretion.\n\nAccretion:\nGrants a Ready/Stow Animation Duration Multiplier per stack, up to a maximum of 0.8x Ready/Stow Animation Duration at 20 stacks."
  },
  "cruel electrum": {
    "name": "Cruel Electrum",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Primary Survivor\n\nOn Ally Death:\nGrants a stack of Primary Survivor for ? seconds.\nGrants Primary Survivor x? while solo.\n\nPrimary Survivor x1 | Primary Weapons are granted +? Handling, +? Reload Speed, +? Aim Assist, and ?% Flinch Resist.\nPrimary Survivor x2 | Primary Weapons are granted +? Handling, +? Reload Speed, +? Aim Assist, and ?% Flinch Resist."
  },
  "disaster corps": {
    "name": "Disaster Corps",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Pleas Heard\n\nUpon finishing an Auto Rifle, Scout Rifle, or Sidearm reload within 3 seconds of a kill:\nRestores 20HP/s until firing any weapon, casting Grenade, Melee, Class, or Super Ability, or upon taking damage from an enemy. \n\nCan be triggered multiple times from a single kill if another reload is performed within the time window.\nReceiving Environmental Damage, or dealing damage through other means does not stop the health regen."
  },
  "exodus down": {
    "name": "Exodus Down",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Emergency Electromagnet\n\nUpon reaching Critical Health:\nPicks up Ammo Bricks and Orbs of Power within ? meters."
  },
  "ferropotent": {
    "name": "Ferropotent",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Rapid Repair\n\n Upon healing Shield HP:\n 10% [2.5%] Damage Resist (Resist x1) and ?% Flinch Resist for 7 seconds."
  },
  "iron batallion": {
    "name": "Iron Batallion",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Primary Honing\n\nFor Primary Ammo Weapons:\n+? Handling, +? Reload Speed.\nIncreased Damage against Non-Boss Combatants based on the Weapons stat."
  },
  "iron panoply": {
    "name": "Iron Panoply",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Vigilant Watch\n\nAs Shield HP drops, initially triggering at ? Shield HP, maxing out in effect at ? Shield HP:\nLinearly? grants up to +? Stability and +? Handling\n\nWhile at Critical Health:\nWeapon Kills restore 30HP.\nIncurs a 5 second cooldown between triggers."
  },
  "last discipline": {
    "name": "Last Discipline",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Terminal Velocity\n\nUpon scoring a Primary Weapon Kill:\n+20 Reload Speed and 0.95x Reload Duration Multiplier for Primary Weapons for 6 seconds.\nAlso triggers from destroying Constructs."
  },
  "lustrous": {
    "name": "Lustrous",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Photogalvanic\n\nUpon receiving ANY healing while not at Full HP:\n+20? Handling, +10 Reload Speed, 0.85x Reload Duration Multiplier, and ?% Flinch Resist for Solar Weapons for 4 seconds.\nWorks with ANY source of healing, such as Orb Pickups. Restoration constantly refreshes it"
  },
  "per audacia": {
    "name": "Per Audacia",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Primary Chain\n\nOn Primary Ammo Weapon Kill:\nGrants a stack of Primary Chain, up to a maximum of ? stacks.\n\nPrimary Chain grants +? Mobility, as well as +? Range and +? Handling for Primary Ammo per stack.\nMaxes out at +? Mobility, +? Range, and +? Handling."
  },
  "new demotic": {
    "name": "New Demotic",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Paroli\n\nUpon sliding:\n?% Flinch Resist for ? seconds."
  },
  "sage protector": {
    "name": "Sage Protector",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Combat Meditation\n\nOn Sword Hit:\nGrants 3% Grenade and Class Ability Energy. \nIncreased to 8% Grenade and Class Ability Energy while Blade Focus is active."
  },
  "shrewd survivor": {
    "name": "Shrewd Survivor",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Reflex Action\n\nUpon readying a Heat Weapon, Submachine Gun, or Hand Cannon:\nGrants Reflex Action for 1.5 seconds.\n Dealing Additional Weapon Damage refreshes the buff duration.\n\nReflex Action | +50? Handling, 0.6?x Ready Duration Multiplier, and -2.5% Accuracy Cone Size for 1.5 seconds."
  },
  "smoke jumper": {
    "name": "Smoke Jumper",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Ride Together, Die Together\n\nOn Orb of Power Pickup:\nGrants Ride Together, Die Together for 3 seconds.\nRide Together, Die Together initially grants 40% [5%] Damage Resist.\nDamage Resist scales down to ~37.5% with 1.5 seconds left, further reduced to 30% with 1 second left, decreasing down to 0% over the remaining second."
  },
  "swordmaster": {
    "name": "Swordmaster",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Balestra\n\n Upon damaging an enemy with a Sword, Glaive, or Melee Attack:\nInflicts Exhaustion for ? seconds."
  },
  "techeun s regalia": {
    "name": "Techeun's Regalia",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Queensfoil Rush\n\nFinishers grant a 200 HP Overshield for the duration of the finisher (+0.3s).\n\nOn Finisher:\nInflicts x? Slow to enemies within ? meters."
  },
  "techsec": {
    "name": "Techsec",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Wrecker\n\nPassively grants increased Kinetic Damage towards Combatant Shields, Overshields, Vehicles, and Constructs.\n200% increased Kinetic Damage towards Combatant Shields and Combatant Overshields. Damage shows up as Yellow Numbers.\n15% increased Kinetic Damage towards Constructs. Koregos is not a Construct lol\nIt's ALL Kinetic Damage, including Poison, Praxic Blade, and Unpowered/Glaive Melee!"
  },
  "thriving survivor": {
    "name": "Thriving Survivor",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Opening Act\n\nUpon scoring a Grenade Kill:\nGrants Opening Act for 15 seconds.\n\nOpening Act | +? Stability and +? Vent Speed to Heat Weapons. Primary Weapons are instead granted +? Stability and +? Reload Speed."
  },
  "triumphal anthem": {
    "name": "Triumphal Anthem",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Scoot to Loot\n\nUpon scooting:\nPick ups Ammo Bricks within 15 meters.\nGrants +? Handling and +? Reload Speed for ? seconds."
  },
  "twofold crown": {
    "name": "Twofold Crown",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Crook and Flail\n\nOn Ammo Brick Pickup:\nRestores 70 HP."
  },
  "uncaged deviants": {
    "name": "Uncaged Deviants",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Special Relativity\n\nOn Ammo Brick Pickup:\nRefills stowed Special Weapons."
  },
  "veritas": {
    "name": "Veritas",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Lucent Transmutation\n\nUpon scoring ? successive Powered Melee Kills or a finisher:\nGenerates a Light-Subclass Super-Matching Elemental Pickup."
  },
  "wild anthem": {
    "name": "Wild Anthem",
    "category": "Armor Set Bonus",
    "description": "2 Piece | Fanfare\n\nWhile Ammo = \u226450% of Magazine AND Ammo \u2260 0:\n+15 Reload Speed and 0.95x Reload Duration Multiplier.\n\nDoes not trigger at 0 Ammo. rip bows and GLs"
  }
} as const satisfies Record<string, PerkCompendiumEntry>;

export function normalizePerkCompendiumKey(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function getPerkCompendiumEntry(name: string) {
  const entries: Record<string, PerkCompendiumEntry> = perkCompendium;
  return entries[normalizePerkCompendiumKey(name)];
}
