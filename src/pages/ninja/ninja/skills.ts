import { Skill, SkillType } from "../../../common/types";

export const crimsonFireBlossom: Skill = {
  name: "Crimson Fire Blossom",
  description:
    "Attack a single target with up to 10x MATK Fire-element damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/ninja/crimson_fire_blossom.png",
  preRequisites: [],
};

export const dragonFireFormation: Skill = {
  name: "Dragon Fire Formation",
  description:
    "Summon a flaming dragon to deal Fire-element damage to all enemies in the 5x5 area around the target, and making them more vulnerable to single target Ninja magic.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/ninja/dragon_fire_formation.png",
  preRequisites: [{ skill: crimsonFireBlossom, level: 1 }],
};

export const crimsonFireFormation: Skill = {
  name: "Crimson Fire Formation",
  description:
    "Create a 5x5 field of fire that knocks back enemies and rapidly deals Fire-element damage.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/ninja/crimson_fire_formation.png",
  preRequisites: [{ skill: dragonFireFormation, level: 1 }],
};

export const lightningSpearOfIce: Skill = {
  name: "Lightning Spear of Ice",
  description:
    "Attack a single target with up to 10x MATK Water-element damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/ninja/lightning_spear_of_ice.png",
  preRequisites: [],
};

export const fallingIcePillar: Skill = {
  name: "Falling Ice Pillar",
  description:
    "Summon down a block of ice to deal Water-element damage to all enemies in the 5x5 area around the target, and making them more vulnerable to single target Ninja magic.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/ninja/falling_ice_pillar.png",
  preRequisites: [{ skill: lightningSpearOfIce, level: 1 }],
};

export const waterEscapeTechnique: Skill = {
  name: "Water Escape Technique",
  description: "Create a field of water that slows down all enemies.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/ninja/water_escape_technique.png",
  preRequisites: [{ skill: fallingIcePillar, level: 1 }],
};

export const windBlade: Skill = {
  name: "Wind Blade",
  description:
    "Attack a single target with up to 10x MATK Wind-element damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/ninja/wind_blade.png",
  preRequisites: [],
};

export const lightningCrash: Skill = {
  name: "Lightning Crash",
  description:
    "Summon down a bolt of lightning to deal Wind-element damage to all enemies in the 5x5 area around the target, and making them more vulnerable to single target Ninja magic.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/ninja/lightning_crash.png",
  preRequisites: [{ skill: windBlade, level: 1 }],
};

export const illusionThrust: Skill = {
  name: "Illusion Thrust",
  description: "Teleport to the target from a short distance, dealing damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/ninja/illusion_thrust.png",
  preRequisites: [],
};

export const mistSlash: Skill = {
  name: "Mist Slash",
  description: "Strike a target and temporarily enter the Cloaking status.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/ninja/mist_slash.png",
  preRequisites: [{ skill: illusionThrust, level: 5 }],
};

export const shadowJump: Skill = {
  name: "Shadow Jump",
  description: "Teleport to a target location from the Cloaking status.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/ninja/shadow_jump.png",
  preRequisites: [{ skill: mistSlash, level: 1 }],
};

export const zephyrStrike: Skill = {
  name: "Zephyr Strike",
  description:
    "Strike targets in a small area with physical damage, moving backwards a few cells.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/ninja/zephyr_strike.png",
  preRequisites: [{ skill: mistSlash, level: 1 }],
};

export const shadowSlash: Skill = {
  name: "Shadow Slash",
  description:
    "From the Cloaking status, instantly move to target enemy and strike them, dealing DEF ignoring damage multiplied by the distance traveled.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/ninja/shadow_slash.png",
  preRequisites: [{ skill: shadowJump, level: 1 }],
};

export const illusionaryShadow: Skill = {
  name: "Illusionary Shadow",
  description:
    "Completely evade up to 50 physical attacks over a short duration.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/ninja/illusionary_shadow.png",
  preRequisites: [],
};

export const soul: Skill = {
  name: "Soul",
  description: "Increase all Stats and provides a large boost to max HP.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/ninja/soul.png",
  preRequisites: [
    { skill: shadowSlash, level: 1 },
    { skill: dragonFireFormation, level: 1 },
    { skill: fallingIcePillar, level: 1 },
    { skill: lightningCrash, level: 1 },
  ],
};

export const finalStrike: Skill = {
  name: "Final Strike",
  description:
    "Reduce the Ninja's HP to 1 in order to deal a strong blow to a single target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/ninja/final_strike.png",
  preRequisites: [{ skill: soul, level: 1 }],
};

export const flipTatami: Skill = {
  name: "Flip Tatami",
  description:
    "Deal damage and knockback nearby enemies, and create the Pneuma effect on one cell of the ground.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/ninja/flip_tatami.png",
  preRequisites: [],
};

export const bladeMastery: Skill = {
  name: "Blade Mastery",
  description: "Gives bonus damage when wielding Daggers or Huuma.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/ninja/blade_mastery.png",
  preRequisites: [],
};

export const throwKunai: Skill = {
  name: "Throw Kunai",
  description:
    "Throw a Kunai at an enemy, dealing damage with a chance of stunning them.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/ninja/throw_kunai.png",
  preRequisites: [],
};

export const throwHuumaShuriken: Skill = {
  name: "Throw Huuma Shuriken",
  description:
    "Throw a Huuma Shuriken a target, spinning out and dealing damage to all enemies in the area.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/ninja/throw_huuma_shuriken.png",
  preRequisites: [{ skill: throwKunai, level: 3 }],
};

export const coinTrick: Skill = {
  name: "Coin Trick",
  description:
    "Consume a small amount of Zeny to inflict damage and swap places with the target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/ninja/coin_trick.png",
  preRequisites: [],
};

export const castOffCicadaShell: Skill = {
  name: "Cast-off Cicada Shell",
  description:
    "Evade up to three physical attacks, with each trigger moving the Ninja away from the attacker.",
  maxLevel: 3,
  type: SkillType.active,
  icon: "./assets/ninja/cast_off_cicada_shell.png",
  preRequisites: [],
};

export const ninpouTraining: Skill = {
  name: "Ninpou Training",
  description: "Passively increases SP recovery.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/ninja/ninpou_training.png",
  preRequisites: [],
};

export const ninjaSkills = [
  crimsonFireBlossom,
  dragonFireFormation,
  crimsonFireFormation,
  lightningSpearOfIce,
  fallingIcePillar,
  waterEscapeTechnique,
  windBlade,
  lightningCrash,
  illusionThrust,
  mistSlash,
  shadowJump,
  zephyrStrike,
  shadowSlash,
  illusionaryShadow,
  soul,
  finalStrike,
  flipTatami,
  bladeMastery,
  throwKunai,
  throwHuumaShuriken,
  coinTrick,
  castOffCicadaShell,
  ninpouTraining,
];
