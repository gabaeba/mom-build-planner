import { Skill, SkillType } from "../../../common/types";
import { coldBolt, fireBolt, lightningBolt } from "../mage/skills";
import {
  advancedBook,
  autoSpell,
  deluge,
  dragonology,
  earthSpike,
  flameLauncher,
  frostWeapon,
  heavensDrive,
  lightningLoader,
  magicRod,
  seismicWeapon,
  violentGale,
  volcano,
} from "../sage/skills";

export const doubleCasting: Skill = {
  name: "Double Casting",
  description:
    "A Buff that increases the power of Mage's Bolt skills by instantly casting an additional Bolt at half of the learned skill level.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/professor/double_casting.png",
  preRequisites: [
    { skill: coldBolt, level: 2 },
    { skill: fireBolt, level: 2 },
    { skill: lightningBolt, level: 2 },
    { skill: earthSpike, level: 2 },
  ],
};

export const diamondDust: Skill = {
  name: "Diamond Dust",
  description:
    "Blasts freezing winds to deal Water property magic damage to all enemies in a 7x7~9x9 area and has a 5~25% chance to inflict Chilled",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/professor/diamond_dust.png",
  preRequisites: [{ skill: deluge, level: 3 }],
};

export const earthGrave: Skill = {
  name: "Earth Grave",
  description:
    "Fires land spikes from underneath to deal Earth property magic damage to all enemies in a 7x7~9x9 area and has a 5~25% chance to leave them Grounded.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/professor/earth_grave.png",
  preRequisites: [{ skill: heavensDrive, level: 3 }],
};

export const varetyrSpear: Skill = {
  name: "Varetyr Spear",
  description:
    "Calls forth a lightning spear to deal Wind property physical and magic damage to all enemies in a 3x3~7x7 area around the target and has a 5~25% chance to Shock them.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/professor/varetyr_spear.png",
  preRequisites: [{ skill: violentGale, level: 3 }],
};

export const electricWalk: Skill = {
  name: "Electric Walk",
  description:
    "Creates a lightning trail behind the user that deals Wind property damage in contact and has a 1~5% chance to Shock them.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/professor/electric_walk.png",
  preRequisites: [{ skill: violentGale, level: 1 }],
};

export const fireWalk: Skill = {
  name: "Fire Walk",
  description:
    "Creates a blazing trail behind the user that deals Fire property damage in contact and has a 1~5% chance to Burn them.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/professor/fire_walk.png",
  preRequisites: [{ skill: volcano, level: 1 }],
};

export const loremaster: Skill = {
  name: "Loremaster",
  description:
    "Increases MATK and MDEF while wielding Book type weapons. Additionally increases movement speed while casting.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/professor/loremaster.png",
  preRequisites: [{ skill: advancedBook, level: 5 }],
};

export const elementalAura: Skill = {
  name: "Elemental Aura",
  description:
    "Consumes the active Endow, creating a damaging elemental field around the Professor, while providing different benefits based on the consumed endow element.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/professor/elemental_aura.png",
  preRequisites: [{ skill: loremaster, level: 7 }],
};

export const mindBreaker: Skill = {
  name: "Mind Breaker",
  description:
    "Increases the target's MATK by 20%~100% while decreasing its Soft MDEF by 12~60.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/professor/mind_breaker.png",
  preRequisites: [{ skill: magicRod, level: 5 }],
};

export const soulBurn: Skill = {
  name: "Soul Burn",
  description:
    "Grants a 15%~75% chance to fully drain the SP amount of a target while changing their element to Elementless.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/professor/soul_burn.png",
  preRequisites: [{ skill: mindBreaker, level: 1 }],
};

export const spiderWeb: Skill = {
  name: "Spider Web",
  description:
    "Shoot a spider web to immobilize a target for 8 seconds (4 against players). Reduces target's flee and increases elemental damage received.",
  maxLevel: 2,
  type: SkillType.active,
  icon: "./assets/professor/spider_web.png",
  preRequisites: [{ skill: dragonology, level: 4 }],
};

export const spellFist: Skill = {
  name: "Spell Fist",
  description:
    "Converges Bolt damage into the user's hands for the next 1~6 Melee attacks, dealing MATK +50~250% extra damage.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/professor/spell_fist.png",
  preRequisites: [{ skill: autoSpell, level: 10 }],
};

export const volcanicTome: Skill = {
  name: "Volcanic Tome",
  description:
    "Imbues the user's Book with the power of Fire, applying Fire damage on every hit and reducing the Cast Delay of fire magic.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/professor/volcanic_tome.png",
  preRequisites: [{ skill: flameLauncher, level: 1 }],
};

export const blizzardTome: Skill = {
  name: "Blizzard Tome",
  description:
    "Imbues the user's Book with the power of Water, applying Water damage on every hit and reducing the Cast Delay of water magic.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/professor/blizzard_tome.png",
  preRequisites: [{ skill: frostWeapon, level: 1 }],
};

export const cycloneTome: Skill = {
  name: "Cyclone Tome",
  description:
    "Imbues the user's Book with the power of Wind, applying Wind damage on every hit and reducing the Cast Delay of wind magic.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/professor/cyclone_tome.png",
  preRequisites: [{ skill: lightningLoader, level: 1 }],
};

export const tremorTome: Skill = {
  name: "Tremor Tome",
  description:
    "Imbues the user's Book with the power of Earth, applying Earth damage on every hit and reducing the Cast Delay of earth magic.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/professor/tremor_tome.png",
  preRequisites: [{ skill: seismicWeapon, level: 1 }],
};

export const professorSkills = [
  doubleCasting,
  diamondDust,
  earthGrave,
  varetyrSpear,
  electricWalk,
  fireWalk,
  loremaster,
  elementalAura,
  mindBreaker,
  soulBurn,
  spiderWeb,
  spellFist,
  volcanicTome,
  blizzardTome,
  cycloneTome,
  tremorTome,
];
