import { Skill, SkillType } from "../../../common/types";
import {
  bullsEye,
  chainAction,
  coinFlip,
  desperado,
  fullBuster,
  gatlingFever,
  groundDrift,
  spreadAttack,
} from "../gunslinger/skills";

export const richsCoin: Skill = {
  name: "Rich's Coin",
  description:
    "Consume 100 zeny to generate 10 coins. Coin Flip no longer fails.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/rebel/richs_coin.png",
  preRequisites: [{ skill: coinFlip, level: 5 }],
};

export const heatBarrel: Skill = {
  name: "Heat Barrel",
  description:
    "Consume all coins to increase APM and ATK while decreasing Hit rate.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/rebel/heat_barrel.png",
  preRequisites: [{ skill: richsCoin, level: 1 }],
};

export const flicker: Skill = {
  name: "Flicker",
  description:
    "Activate all Ground Drift shells, Howling Mines, and Binding Traps on screen.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/rebel/flicker.png",
  preRequisites: [{ skill: coinFlip, level: 1 }],
};

export const bindingTrap: Skill = {
  name: "Binding Trap",
  description:
    "Ground area trap that slows enemies in AoE. Flicker consumes the trap to deal damage to affected enemies. Max of 1 trap at a time.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/rebel/binding_trap.png",
  preRequisites: [{ skill: flicker, level: 1 }],
};

export const fallenAngel: Skill = {
  name: "Fallen Angel",
  description:
    "Jump to a targeted location immediately, gaining temporary bonus damage for Fire Dance and Desperado.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/rebel/fallen_angel.png",
  preRequisites: [{ skill: desperado, level: 5 }],
};

export const fireDance: Skill = {
  name: "Fire Dance",
  description:
    "Deal damage to all enemies in 7x7 around caster. Each cast increases the damage of the next Desperado.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/rebel/fire_dance.png",
  preRequisites: [{ skill: desperado, level: 1 }],
};

export const shatteringStorm: Skill = {
  name: "Shattering Storm",
  description:
    "Shoots a target enemy, dealing 7x7 splash damage and stripping their weapons.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/rebel/shattering_storm.png",
  preRequisites: [{ skill: spreadAttack, level: 5 }],
};

export const banishingBuster: Skill = {
  name: "Banishing Buster",
  description:
    "Shoots a target enemy, dealing 7x7 splash damage and removes certain APM related buffs while also decreasing APM.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/rebel/banishing_buster.png",
  preRequisites: [{ skill: shatteringStorm, level: 1 }],
};

export const slugShot: Skill = {
  name: "Slug Shot",
  description:
    "Blasts the target with devastating ranged physical attack. Accuracy and damage dealt is lessened by increased range.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/rebel/slug_shot.png",
  preRequisites: [{ skill: banishingBuster, level: 3 }],
};

export const massSpiral: Skill = {
  name: "Mass Spiral",
  description:
    "Fires special bullet to deal more damage based on target's defense.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/rebel/mass_spiral.png",
  preRequisites: [{ skill: bullsEye, level: 5 }],
};

export const antiMaterialBlast: Skill = {
  name: "Anti-Material Blast",
  description:
    "Deals ranged burst damage to a single target, leaving them more vulnerable to further ranged damage.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/rebel/anti_material_blast.png",
  preRequisites: [{ skill: massSpiral, level: 1 }],
};

export const hammerOfGod: Skill = {
  name: "Hammer of God",
  description:
    "Call down God's Hammer in a 9x9 targeted area, consuming all coins and dealing increased damage to enemies marked with Crimson Marker.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/rebel/hammer_of_god.png",
  preRequisites: [
    { skill: antiMaterialBlast, level: 3 },
    { skill: richsCoin, level: 1 },
  ],
};

export const snipersPerch: Skill = {
  name: "Sniper's Perch",
  description:
    "Dramatically slows the user's movement in order to enable Critical hits on select skills. Each passing second increases critical damage and critical rate.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/rebel/snipers_perch.png",
  preRequisites: [{ skill: hammerOfGod, level: 3 }],
};

export const quickDrawShot: Skill = {
  name: "Quick Draw Shot",
  description:
    "Shoot all targets on screen affected by Crimson Marker, cast after any Double Attack effect, including Chain Action.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/rebel/quick_draw_shot.png",
  preRequisites: [{ skill: chainAction, level: 1 }],
};

export const howlingMine: Skill = {
  name: "Howling Mine",
  description:
    "Attach sticky bomb to a target that detonates after a short delay or with Flicker, blowing up in an 7x7 area around the target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/rebel/howling_mine.png",
  preRequisites: [{ skill: groundDrift, level: 1 }],
};

export const crimsonMarker: Skill = {
  name: "Crimson Marker",
  description:
    "Mark an enemy for 20 seconds that reduces Flee and tracks the enemy on the minimap.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/rebel/crimson_marker.png",
  preRequisites: [{ skill: coinFlip, level: 1 }],
};

export const dragonTail: Skill = {
  name: "Dragon Tail",
  description:
    "Sends seeking missles to all targets marked with Crimson Markers within the Rebel's sight. If no targets are marked, strikes the nearest enemy.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/rebel/dragon_tail.png",
  preRequisites: [
    { skill: crimsonMarker, level: 1 },
    { skill: howlingMine, level: 3 },
  ],
};

export const fireRain: Skill = {
  name: "Fire Rain",
  description:
    "Fire a barrage of bullets in a 3x10 cone in front of caster, removing certain ground-based effects.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/rebel/fire_rain.png",
  preRequisites: [{ skill: gatlingFever, level: 1 }],
};

export const roundTrip: Skill = {
  name: "Round Trip",
  description:
    "Fires a spray of bullets around the user, damaging and knocking back all enemies in an area.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/rebel/round_trip.png",
  preRequisites: [{ skill: fireRain, level: 1 }],
};

export const platinumAlter: Skill = {
  name: "Platinum Alter",
  description:
    "Consume all coins to increase ATK, creating a protective barrier and reducing incoming damage from Shadow. Undead, and Demon enemies.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/rebel/platinum_alter.png",
  preRequisites: [{ skill: richsCoin, level: 1 }],
};

export const lockAndLoad: Skill = {
  name: "Lock and Load",
  description:
    "Readies the weapon for up to 5 skill uses, drastically reducing cast times, cast delays, and cooldowns. Increases the damage of certain Shotgun skills.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/rebel/lock_and_load.png",
  preRequisites: [{ skill: fullBuster, level: 1 }],
};

export const overheat: Skill = {
  name: "Overheat",
  description:
    "Ramps up non-skill normal attack damage with each hit, refreshing duration. When the buff expires, enters a lengthy cooldown.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/rebel/overheat.png",
  preRequisites: [{ skill: gatlingFever, level: 3 }],
};

export const bandolier: Skill = {
  name: "Bandolier",
  description: "Increases carrying capacity by up to 2000.",
  maxLevel: 1,
  type: SkillType.passive,
  icon: "./assets/rebel/bandolier.png",
  preRequisites: [],
};

export const rebelSkills = [
  richsCoin,
  heatBarrel,
  flicker,
  bindingTrap,
  fallenAngel,
  fireDance,
  shatteringStorm,
  banishingBuster,
  slugShot,
  massSpiral,
  antiMaterialBlast,
  hammerOfGod,
  snipersPerch,
  quickDrawShot,
  howlingMine,
  crimsonMarker,
  dragonTail,
  fireRain,
  roundTrip,
  platinumAlter,
  lockAndLoad,
  overheat,
  bandolier,
];
