import { Skill, SkillType } from "../../../common/types";
import {
  bash,
  endure,
  magnumBreak,
  spearMastery,
  swordMastery,
} from "../swordsman/skills";

export const twoHandQuicken: Skill = {
  name: "Twohand Quicken",
  description:
    "Temporarily increase Attack Speed when a Two Handed Sword weapon is equipped for the skill's duration.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "",
  preRequisites: [],
};

export const autoCounter: Skill = {
  name: "Auto Counter",
  description:
    "Block an enemy's attack and automatically perform one critical attack on them, ending the Counter Attack stance.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "",
  preRequisites: [{ skill: swordMastery, level: 1 }],
};

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

export const pierce: Skill = {
  name: "Pierce",
  description:
    "Strikes a single target for an amount of hits based on target's size. Requires a Spear class weapon.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: spearMastery, level: 1 }],
};

export const spearStab: Skill = {
  name: "Spear Stab",
  description:
    "Strikes a target enemy and all enemies in a line between the player and the target. Requires a Spear. All struck enemies are knocked back 6 cells.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: pierce, level: 5 }],
};

export const spearBoomerang: Skill = {
  name: "Spear Boomerang",
  description:
    "Must be wielding a Spear weapon. Throws the equipped spear at a single target (the spear does not require retrieval).",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: pierce, level: 3 }],
};

export const bowlingBash: Skill = {
  name: "Bowling Bash",
  description:
    "Knock targets backward, causing up to 800% damage in a 3x3 cell area that hits all enemies in the area.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [
    {
      skill: bash,
      level: 10,
    },
    { skill: magnumBreak, level: 3 },
    { skill: swordMastery, level: 5 },
    { skill: twoHandQuicken, level: 10 },
    { skill: autoCounter, level: 5 },
  ],
};

export const brandishSpear: Skill = {
  name: "Brandish Spear",
  description:
    "Attacks an area of ememies around the caster. Damage for each enemy increases the closer they are to the caster.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [
    { skill: pecoPecoRide, level: 1 },
    { skill: spearStab, level: 3 },
  ],
};

export const chargeAttack: Skill = {
  name: "Charge Attack",
  description:
    "Ranged attack: Rush a target, dealing more damage depending on how far away you are from it.",
  maxLevel: 1,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [],
};
