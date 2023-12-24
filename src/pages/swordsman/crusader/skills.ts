import { Skill, SkillType } from "../../../common/types";
import { endure, spearMastery } from "../swordsman/skills";

export const pecoPecoRide: Skill = {
  name: "Peco Peco Ride",
  description: "Enables Knights or Crusaders to ride a Peco Peco.",
  maxLevel: 1,
  type: SkillType.passive,
  icon: "",
  preRequisites: [{ skill: endure, level: 1 }],
};

export const movementMastery: Skill = {
  name: "Movement Mastery",
  description:
    "At maximum level removes the 50% ASPD penalty when riding a PecoPeco.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "",
  preRequisites: [{ skill: pecoPecoRide, level: 1 }],
};

export const autoGuard: Skill = {
  name: "Auto Guard",
  description:
    "Blocks physical attacks with a Shield by chance for 300 seconds.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "",
  preRequisites: [],
};

export const shieldCharge: Skill = {
  name: "Shield Charge",
  description:
    "Hurl your shield at an enemy, dealing damage based on ATK and knocking them back.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: autoGuard, level: 5 }],
};

export const shieldBoomerang: Skill = {
  name: "Shield Boomerang",
  description:
    "Throw your shield at an enemy, dealing damage based on ATK and the shield's properties.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: shieldCharge, level: 3 }],
};

export const holyCross: Skill = {
  name: "Holy Cross",
  description:
    "Summon a holy cross that inflicts Holy damage on a target, blinding it by chance.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [],
};

export const cure: Skill = {
  name: "Cure",
  description: "Cures the target from Silence, Chaos and Blind status effects.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "",
  preRequisites: [],
};

export const defender: Skill = {
  name: "Defender",
  description:
    "Reduce incoming ranged damage; protects party members via Sacrifice.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "",
  preRequisites: [{ skill: shieldBoomerang, level: 1 }],
};

export const repelEvil: Skill = {
  name: "Repel Evil",
  description:
    "Increases attack and defence against against Demon and Undead monsters by up to 15%.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "",
  preRequisites: [],
};

export const faith: Skill = {
  name: "Faith",
  description: "Increases Max HP and resistance to Holy-property attacks.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "",
  preRequisites: [],
};

export const grandCross: Skill = {
  name: "Grand Cross",
  description:
    "Summons a Grand Cross around the caster, damaging the caster and enemies with Holy property waves.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: holyCross, level: 6 }],
};

export const heal: Skill = {
  name: "Heal",
  description: "Restore a target's HP, or damage Undead targets.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "",
  preRequisites: [
    { skill: grandCross, level: 5 },
    { skill: cure, level: 1 },
  ],
};

export const providence: Skill = {
  name: "Providence",
  description:
    "Buff that allows def piercing. Effect is greater against undead and demon monsters.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "",
  preRequisites: [],
};

export const reflectShield: Skill = {
  name: "Reflect Shield",
  description: "Reflect a fraction of the damage received back at an enemy.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "",
  preRequisites: [{ skill: shieldBoomerang, level: 3 }],
};

export const devotion: Skill = {
  name: "Devotion",
  description:
    "Protects a party member by taking all of the damage inflicted on said party member.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "",
  preRequisites: [{ skill: reflectShield, level: 5 }],
};

export const spearQuicken: Skill = {
  name: "Spear Quicken",
  description:
    "Temporarily increase Attack Speed, Flee and Critical rate when using a Spear.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "",
  preRequisites: [{ skill: spearMastery, level: 10 }],
};

export const shrink: Skill = {
  name: "Shrink",
  description:
    "Adds a chance to knock back opponents when you successfully block an attack with Guard.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "",
  preRequisites: [],
};
