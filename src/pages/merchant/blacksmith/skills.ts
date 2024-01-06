import { Skill, SkillType } from "../../../common/types";

export const hiltBinding: Skill = {
  name: "Hilt Binding",
  description:
    "Increases the user's proficiency with two-handed weapons and decreases the base time between attacks for two-handed weapons.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/blacksmith/hilt_binding.png",
  preRequisites: [],
};

export const weaponryResearch: Skill = {
  name: "Weaponry Research",
  description:
    "Improves weapon knowledge in order to fully utilize higher quality weapons. Passively increases HIT and Mastery ATK of crafted weapons.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/blacksmith/weaponry_research.png",
  preRequisites: [{ skill: hiltBinding, level: 1 }],
};

export const repairEquipment: Skill = {
  name: "Repair Equipment",
  description:
    "Repair damaged weapons and armos using various materials based on what is repaired.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/blacksmith/repair_equipment.png",
  preRequisites: [{ skill: weaponryResearch, level: 1 }],
};

export const skinTempering: Skill = {
  name: "Skin Tempering",
  description: "Increases resistance to Fire and Neutral elemental attacks",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/blacksmith/skin_tempering.png",
  preRequisites: [],
};

export const hammerFall: Skill = {
  name: "Hammer Fall",
  description:
    "Pounds a tageted cell to stun enemies in the impacts vicinity casuing a small amount of damage with a high chance to stun.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/blacksmith/hammer_fall.png",
  preRequisites: [],
};

export const adrenalineRush: Skill = {
  name: "Adrenaline Rush",
  description:
    "Increases the Attack Speed of Axe and Mace weapons by +50% for self and +30% for party members as well as provides additional flee for the caster.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/blacksmith/adrenaline_rush.png",
  preRequisites: [{ skill: hammerFall, level: 2 }],
};

export const powerSwing: Skill = {
  name: "Power Swing",
  description:
    "Strikes a target with an axe dealing damage and causing Stun effect. Additionally, after Power Swing is performed, the caster obtains the Power Swing status which increases damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/blacksmith/power_swing.png",
  preRequisites: [
    { skill: adrenalineRush, level: 2 },
    { skill: weaponryResearch, level: 2 },
  ],
};

export const weaponPerfection: Skill = {
  name: "Weapon Perfection",
  description: "Nullifies any recution in damage resulting from monster size",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/blacksmith/weapon_perfection.png",
  preRequisites: [
    { skill: adrenalineRush, level: 2 },
    { skill: weaponryResearch, level: 2 },
  ],
};

export const overThrust: Skill = {
  name: "Over Thrust",
  description:
    "Enhances the attac power of the equipped weapon while adding a 0.03% chance of breaking the weapon while attacking.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/blacksmith/over_thrust.png",
  preRequisites: [{ skill: adrenalineRush, level: 3 }],
};

export const maximizePower: Skill = {
  name: "Maximize Power",
  description:
    "Amplifies weapon attack power, increases Max HP, and increases DEF/MDEF by continuously draining a specific amount of SP while the skill is active.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/blacksmith/maximize_power.png",
  preRequisites: [
    { skill: weaponPerfection, level: 3 },
    { skill: overThrust, level: 2 },
  ],
};

export const basicMechanics: Skill = {
  name: "Maximize Power",
  description: "Prepares the Blacksmith to forge basic machinery.",
  maxLevel: 1,
  type: SkillType.passive,
  icon: "./assets/blacksmith/basic_mechanics.png",
  preRequisites: [],
};

export const forgeAutomaton: Skill = {
  name: "Forge Automaton",
  description:
    "Places a rudimentary automaton on the selected cell. The level of the skill determines the material consumed and the type of automaton created. Higher level automaton deal more damage.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/blacksmith/forge_automaton.png",
  preRequisites: [{ skill: basicMechanics, level: 1 }],
};

export const destroyMachine: Skill = {
  name: "Maximize Power",
  description:
    "Destroys any active automaton, dealing damage to all enemies in a 9x9 area around the automaton.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/blacksmith/destroy_machine.png",
  preRequisites: [{ skill: forgeAutomaton, level: 3 }],
};

export const blacksmithSkills = [
  hiltBinding,
  weaponryResearch,
  repairEquipment,
  skinTempering,
  hammerFall,
  adrenalineRush,
  powerSwing,
  weaponPerfection,
  overThrust,
  maximizePower,
  basicMechanics,
  forgeAutomaton,
  destroyMachine,
];
