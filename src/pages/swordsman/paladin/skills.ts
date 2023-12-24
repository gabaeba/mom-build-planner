import { Skill, SkillType } from "../../../common/types";
import {
  faith,
  grandCross,
  repelEvil,
  shieldCharge,
  spearQuicken,
} from "../crusader/skills";
import { endure, magnumBreak } from "../swordsman/skills";

export const banishingPoint: Skill = {
  name: "Banishing Point",
  description: "A spear attack with a much greater reach than normal attacks.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: spearQuicken, level: 10 }],
};

export const pinpointAttack: Skill = {
  name: "Pinpoint Attack",
  description:
    "Rush against a target, dealing damage and inflicting a negative status effect.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: banishingPoint, level: 2 }],
};

export const cannonSpear: Skill = {
  name: "Cannon Spear",
  description:
    "Attack all enemies in a 3 cell radius of an 11 cell line from the caster.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: pinpointAttack, level: 2 }],
};

export const inspiration: Skill = {
  name: "Inspiration",
  description:
    "Increases ATK, Accuracy, and maximum HP. Cleanses negative status effects on use.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "",
  preRequisites: [
    { skill: faith, level: 5 },
    { skill: repelEvil, level: 3 },
  ],
};

export const divineGlyph: Skill = {
  name: "Divine Glyph",
  description:
    "Conjure a holy symbol on the Paladin's Shield, healing nearby allies and damaging foes while draining the user's HP.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "",
  preRequisites: [{ skill: inspiration, level: 1 }],
};

export const divinePunishment: Skill = {
  name: "Divine Punishment",
  description: "Attacks a target enemy with long distance hybrid Holy damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: divineGlyph, level: 3 }],
};

export const exceedBreak: Skill = {
  name: "Exceed Break",
  description:
    "Gather all of your strength into the tip of your weapon, imbuing it with enhanced damage on regular attacks.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "",
  preRequisites: [{ skill: pinpointAttack, level: 2 }],
};

export const gospel: Skill = {
  name: "Gospel",
  description:
    "Begins a chant that inflicts a random status ailment on enemies within range, while also endowing party members with random buffs.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "",
  preRequisites: [
    { skill: faith, level: 5 },
    { skill: repelEvil, level: 3 },
  ],
};

export const moonSlasher: Skill = {
  name: "Moon Slasher",
  description:
    "Damages surrounding enemies, marking them to increase their damage taken from Paladin and Crusader skills.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: magnumBreak, level: 5 }],
};

export const overbrand: Skill = {
  name: "Overbrand",
  description:
    "Brand all enemies in a wide area in front of the caster, knocking them back a great distance.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: moonSlasher, level: 3 }],
};

export const pressure: Skill = {
  name: "Pressure",
  description:
    "Crush a target with a huge cross from the sky, dealing Ghost element hybrid damage.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [
    { skill: endure, level: 5 },
    { skill: faith, level: 5 },
    { skill: shieldCharge, level: 2 },
  ],
};

export const rayOfGenesis: Skill = {
  name: "Ray of Genesis",
  description:
    "Call upon the wrath of God to smite enemies with Holy hybrid damage in a wide area.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: grandCross, level: 5 }],
};
