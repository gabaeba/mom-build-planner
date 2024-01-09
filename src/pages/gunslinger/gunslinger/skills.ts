import { Skill, SkillType } from "../../../common/types";

export const singleAction: Skill = {
  name: "Single Action",
  description: "Increases Critical Damage when wielding Rifles.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/gunslinger/single_action.png",
  preRequisites: [],
};

export const coinFlip: Skill = {
  name: "Coin Flip",
  description:
    "Turns 1z into a coin, providing +1LUK per coin with a maximum of 10.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/gunslinger/coin_flip.png",
  preRequisites: [],
};

export const coinFling: Skill = {
  name: "Coin Fling",
  description:
    "Use a coins to deal damage to an enemy while reducing the target's DEF stat.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gunslinger/coin_fling.png",
  preRequisites: [{ skill: coinFlip, level: 1 }],
};

export const lastStand: Skill = {
  name: "Last Stand",
  description:
    "Places a buff which instantly revives the gunslinger when defeated, with a massive temporary movement speed increase.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/gunslinger/last_stand.png",
  preRequisites: [
    { skill: coinFlip, level: 5 },
    { skill: coinFling, level: 1 },
  ],
};

export const gatlingFever: Skill = {
  name: "Gatling Fever",
  description:
    "Greatly boosts ASPD and ATK when cast, at the cost of immobilizing the user. Must be used with a Gatling-type weapon.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gunslinger/gatling_fever.png",
  preRequisites: [],
};

export const disarm: Skill = {
  name: "Disarm",
  description:
    "Aim at an enemy's appendages to reduce their offensive capabilities.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gunslinger/disarm.png",
  preRequisites: [],
};

export const cripplingShot: Skill = {
  name: "Crippling Shot",
  description: "Aim at the target's legs to slow their movement speed.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gunslinger/crippling_shot.png",
  preRequisites: [],
};

export const dust: Skill = {
  name: "Dust",
  description: "Deals damage in a small area and knocks back all enemies.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gunslinger/dust.png",
  preRequisites: [],
};

export const spreadAttack: Skill = {
  name: "Spread Attack",
  description: "Cover a wide area around the target with intense shotgun fire.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gunslinger/spread_attack.png",
  preRequisites: [],
};

export const fullBuster: Skill = {
  name: "Full Buster",
  description: "Deals damage with a massive shotgun blast to one target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gunslinger/full_buster.png",
  preRequisites: [
    { skill: dust, level: 3 },
    { skill: spreadAttack, level: 3 },
  ],
};

export const gunmanInsignia: Skill = {
  name: "Gunman Insignia",
  description:
    "Unlocks the true potential of the equipped firearm. Changing weapons cancels the effect.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/gunslinger/gunman_insignia.png",
  preRequisites: [],
};

export const groundDrift: Skill = {
  name: "Ground Drift",
  description:
    "Launches a grenade onto the ground that acts like a mine. (Grenade Launcher Only)",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gunslinger/ground_drift.png",
  preRequisites: [{ skill: gunmanInsignia, level: 5 }],
};

export const chainAction: Skill = {
  name: "Chain Action",
  description:
    "When normally attacking, adds the chance of dealing double damage.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/gunslinger/chain_action.png",
  preRequisites: [{ skill: gunmanInsignia, level: 5 }],
};

export const bullsEye: Skill = {
  name: "Bull's Eye",
  description:
    "The Gunslinger takes aim, dealing 200% Damage, which is multiplied by 5 when scoring a precision shot based on CRIT.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gunslinger/bulls_eye.png",
  preRequisites: [],
};

export const magicBullet: Skill = {
  name: "Magic Bullet",
  description:
    "Fires a bullet that deals both physical and magical damage, harming all enemies in a line from the target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gunslinger/magic_bullet.png",
  preRequisites: [],
};

export const rapidShower: Skill = {
  name: "Rapid Shower",
  description:
    "Rapidly fires 5 bullets at an enemy, dealing up to 750% damage.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gunslinger/rapid_shower.png",
  preRequisites: [],
};

export const desperado: Skill = {
  name: "Desperado",
  description:
    "Sprays a surrounding area full of lead, hitting enemies anywhere from 1 to 5 times while slowing and bleeding enemies.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gunslinger/desperado.png",
  preRequisites: [{ skill: rapidShower, level: 5 }],
};

export const adjustment: Skill = {
  name: "Adjustment",
  description:
    "Decreases the Gunslinger's Attack Speed to increase DEX and Critical Damage.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/gunslinger/adjustment.png",
  preRequisites: [],
};

export const scavenger: Skill = {
  name: "Scavenger",
  description:
    "A temporary buff that adds a chance of obtaining bullets with each non-area of effect attack performed by the Gunslinger.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/gunslinger/scavenger.png",
  preRequisites: [],
};

export const manufacture: Skill = {
  name: "Manufacture",
  description: "Creates bullets by consuming certain materials.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/gunslinger/manufacture.png",
  preRequisites: [],
};

export const gunslingerSkills = [
  singleAction,
  coinFlip,
  coinFling,
  lastStand,
  gatlingFever,
  disarm,
  cripplingShot,
  dust,
  spreadAttack,
  fullBuster,
  gunmanInsignia,
  groundDrift,
  chainAction,
  bullsEye,
  magicBullet,
  rapidShower,
  desperado,
  adjustment,
  scavenger,
  manufacture,
];
