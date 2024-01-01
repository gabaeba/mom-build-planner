import { Skill, SkillType } from "../../../common/types";

export const hammerFall: Skill = {
  name: "Hammer Fall",
  description:
    "Deals neutral damage with a chance of stunning all enemies within a 5x5 area.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/blacksmith/hammer_fall.png",
  preRequisites: [],
};

export const adrenalineRush: Skill = {
  name: "Adrenaline Rush",
  description:
    "Increases the ASPD of Axe and Mace class weapons across the entire party. Grants flee to the user.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/blacksmith/adrenaline_rush.png",
  preRequisites: [{ skill: hammerFall, level: 2 }],
};

export const hiltBinding: Skill = {
  name: "Hilt Binding",
  description:
    "Increases STR, ATK and the duration of several Blacksmith skills by 10%.",
  maxLevel: 1,
  type: SkillType.passive,
  icon: "./assets/blacksmith/hilt_binding.png",
  preRequisites: [],
};

export const weaponryResearch: Skill = {
  name: "Weaponry Research",
  description: "Increases HIT, ATK of the chance of Forging a weapon.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/blacksmith/hilt_binding.png",
  preRequisites: [{ skill: hiltBinding, level: 1 }],
};

export const overThrust: Skill = {
  name: "Over Thrust",
  description:
    "Increases ATK of party members on screen. Add chance of breaking own weapons when attacking.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/blacksmith/over_thrust.png",
  preRequisites: [{ skill: adrenalineRush, level: 3 }],
};

export const weaponPerfection: Skill = {
  name: "Weapon Perfection",
  description: "Removes size penalties associated with weapons.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/blacksmith/weapon_perfection.png",
  preRequisites: [
    { skill: adrenalineRush, level: 2 },
    { skill: weaponryResearch, level: 2 },
  ],
};

export const maximizePower: Skill = {
  name: "Maximize Power",
  description:
    "Uses maximum weapon damage for skill duration. Higher levels increase Max HP and DEF.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/blacksmith/maximize_power.png",
  preRequisites: [
    { skill: overThrust, level: 2 },
    { skill: weaponPerfection, level: 3 },
  ],
};

export const skinTempering: Skill = {
  name: "Skin Tempering",
  description: "Increases resistance to the Fire and Neutral properties.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/blacksmith/skin_tempering.png",
  preRequisites: [
    { skill: overThrust, level: 2 },
    { skill: weaponPerfection, level: 3 },
  ],
};

export const repairEquipment: Skill = {
  name: "Repair Equipment",
  description: "Returns damaged equipment to usable state.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/blacksmith/repair_equipment.png",
  preRequisites: [{ skill: weaponryResearch, level: 1 }],
};

export const fullAdrenalineRush: Skill = {
  name: "Full Adrenaline Rush",
  description:
    "Increases the attack speed of all party members, except for those wielding long ranged weapons.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/blacksmith/full_adrenaline_rush.png",
  preRequisites: [],
};

export const blacksmithSkills = [
  hammerFall,
  adrenalineRush,
  hiltBinding,
  weaponryResearch,
  overThrust,
  weaponPerfection,
  maximizePower,
  skinTempering,
  repairEquipment,
  fullAdrenalineRush,
];
