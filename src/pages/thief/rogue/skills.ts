import { Skill, SkillType } from "../../../common/types";
import { hiding, steal } from "../thief/skills";

export const swordMastery: Skill = {
  name: "Sword Mastery",
  description: "Increases damage done with Daggers and One-Handed Swords.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/rogue/sword_mastery.png",
  preRequisites: [],
};

export const snatcher: Skill = {
  name: "Snatcher",
  description:
    "Adds a chance of casting Steal automatically when attacking a monster.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/rogue/snatcher.png",
  preRequisites: [{ skill: steal, level: 1 }],
};

export const coinSap: Skill = {
  name: "Coin Sap",
  description:
    "Attempts to steal Zeny from a monster at a distance. If successful, the target is immobilized for 10 sec.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/rogue/coin_sap.png",
  preRequisites: [],
};

export const backStab: Skill = {
  name: "Back Stab",
  description:
    "Appears behind a target to attack from behind, dealing up to 1000% damage that does not miss.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/rogue/back_stab.png",
  preRequisites: [
    { skill: snatcher, level: 4 },
    { skill: coinSap, level: 4 },
  ],
};

export const stripHelm: Skill = {
  name: "Strip Helm",
  description: "Forcibly remove an opponent's upper headgear by chance.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/rogue/strip_helm.png",
  preRequisites: [
    { skill: snatcher, level: 4 },
    { skill: coinSap, level: 2 },
  ],
};

export const stripShield: Skill = {
  name: "Strip Shield",
  description: "Forcibly remove an opponent's shield by chance.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/rogue/strip_shield.png",
  preRequisites: [{ skill: stripHelm, level: 5 }],
};

export const stripArmor: Skill = {
  name: "Strip Armor",
  description: "Forcibly remove an opponent's armor by chance.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/rogue/strip_armor.png",
  preRequisites: [{ skill: stripShield, level: 5 }],
};

export const stripWeapon: Skill = {
  name: "Strip Weapon",
  description: "Forcibly remove an opponent's Weapon by chance.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/rogue/strip_weapon.png",
  preRequisites: [{ skill: stripArmor, level: 5 }],
};

export const vulturesEye: Skill = {
  name: "Vulture's Eye",
  description: "Increases range and HIT when using bows.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/rogue/vultures_eye.png",
  preRequisites: [],
};

export const doubleStrafing: Skill = {
  name: "Double Strafing",
  description: "Deal up to 380% damage to a single target with a bow.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/rogue/double_strafing.png",
  preRequisites: [{ skill: vulturesEye, level: 10 }],
};

export const tunnelDrive: Skill = {
  name: "Tunnel Drive",
  description: "Allows the player to move while in the Hiding state.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/rogue/tunnel_drive.png",
  preRequisites: [{ skill: hiding, level: 1 }],
};

export const raid: Skill = {
  name: "Raid",
  description:
    "Damages all opponents in a 7x7 area around the caster, with a chance to Blind or Stun.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/rogue/raid.png",
  preRequisites: [
    { skill: tunnelDrive, level: 2 },
    { skill: backStab, level: 2 },
  ],
};

export const intimidate: Skill = {
  name: "Intimidate",
  description:
    "Forcibly teleports the player and a non-boss monster to another location on the map.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/rogue/intimidate.png",
  preRequisites: [
    { skill: raid, level: 5 },
    { skill: backStab, level: 4 },
  ],
};

export const plagiarism: Skill = {
  name: "Plagiarism",
  description:
    "Allows the player to use the most recent skill that has damaged them.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/rogue/plagiarism.png",
  preRequisites: [{ skill: intimidate, level: 5 }],
};

export const removeTrap: Skill = {
  name: "Remove Trap",
  description: "Remove a Hunter's trap from the ground.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/rogue/remove_trap.png",
  preRequisites: [{ skill: doubleStrafing, level: 5 }],
};

export const graffiti: Skill = {
  name: "Graffiti",
  description: "Writes text on the ground.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/rogue/graffiti.png",
  preRequisites: [],
};

export const gangstersParadise: Skill = {
  name: "Gangster's Paradise",
  description:
    "Prevents non-boss monsters from attacking the rogue and all surrounding players when sitting down.",
  maxLevel: 1,
  type: SkillType.passive,
  icon: "./assets/rogue/gangsters_paradise.png",
  preRequisites: [],
};

export const preserve: Skill = {
  name: "Preserve",
  description:
    "Prevents a Rogue from learning a new skill from Plagiarism until toggled or dispelled.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/rogue/preserve.png",
  preRequisites: [{ skill: plagiarism, level: 1 }],
};

export const closeConfine: Skill = {
  name: "Close Confine",
  description: "Locks the caster and a target in place for up to 10 seconds.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/rogue/close_confine.png",
  preRequisites: [],
};

export const arrowCrafting: Skill = {
  name: "Arrow Crafting",
  description: "Create arrows from various items.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/rogue/arrow_crafting.png",
  preRequisites: [],
};

export const rogueSkills = [
  swordMastery,
  snatcher,
  coinSap,
  backStab,
  stripHelm,
  stripShield,
  stripArmor,
  stripWeapon,
  vulturesEye,
  doubleStrafing,
  tunnelDrive,
  raid,
  intimidate,
  plagiarism,
  removeTrap,
  graffiti,
  gangstersParadise,
  preserve,
  closeConfine,
  arrowCrafting,
];
