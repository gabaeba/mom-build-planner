import { Skill, SkillType } from "../../../common/types";

export const coldBolt: Skill = {
  name: "Cold Bolt",
  description:
    "Attack a single target with up to 10x MATK Water-element damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [],
};

export const fireBolt: Skill = {
  name: "Fire Bolt",
  description:
    "Attack a single target with up to 10x MATK Fire-element damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [],
};

export const fireBall: Skill = {
  name: "Fire Ball",
  description:
    "Attack a target and enemies in a 5x5 area around it for up to 170% Fire-element damage.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: fireBolt, level: 4 }],
};

export const sight: Skill = {
  name: "Sight",
  description: "Reveal hidden enemies in a 7x7 area around the user.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "",
  preRequisites: [],
};

export const fireWall: Skill = {
  name: "Fire Wall",
  description:
    "Put up a small fire wall that causes 50% Fire-element damage to enemies passing through and pushes them back.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [
    { skill: fireBolt, level: 4 },
    { skill: fireBall, level: 5 },
    { skill: sight, level: 1 },
  ],
};

export const frostDiver: Skill = {
  name: "Frost Diver",
  description:
    "Attack a target for up to 200% Water-element damage with a chance to freeze it, rendering it immobile and turning it to Water 1 element.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: coldBolt, level: 5 }],
};

export const increaseSpRecovery: Skill = {
  name: "Increase SP Recovery",
  description:
    "Passively increases SP recovery speed when not moving. Also increases efficiency of SP-restoring items consumed and thrown by an Alchemist",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "",
  preRequisites: [],
};

export const lightningBolt: Skill = {
  name: "Lightining Bolt",
  description:
    "Attack a single target with up to 10x MATK Wind-element damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [],
};

export const napalmBeat: Skill = {
  name: "Napalm Beat",
  description:
    "Deal up to 275% MATK Ghost-element damage to target and all enemies in a 3x3 area around it.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [],
};

export const soulStrike: Skill = {
  name: "Soul Strike",
  description:
    "Ghost-element attack dealing up to 6x MATK damage to a single target. Does additional damage to Undead-element enemies.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: napalmBeat, level: 4 }],
};

export const safetyWallMage: Skill = {
  name: "Safety Wall",
  description:
    "Use a Blue Gemstone to create a pillar on a cell that protects whoever stands in it from melee attacks.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "",
  preRequisites: [
    { skill: napalmBeat, level: 5 },
    { skill: soulStrike, level: 5 },
  ],
};

export const stoneCurse: Skill = {
  name: "Stone Curse",
  description:
    "Attempt to turn target into stone, rendering it immobile and turning it to Earth 1 element.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "",
  preRequisites: [],
};

export const thunderstorm: Skill = {
  name: "Thunderstorm",
  description:
    "Wind-element AoE attack dealing up to 8x MATK damage to targets in a 5x5 area.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: lightningBolt, level: 4 }],
};

export const energyCoat: Skill = {
  name: "Energy Coat",
  description:
    "Reduces damage from incoming physical attacks while consuming SP.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "",
  preRequisites: [],
};
