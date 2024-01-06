import { Skill, SkillType } from "../../../common/types";
import {
  cloaking,
  enchantPoison,
  grimtooth,
  katarMastery,
  sonicBlow,
} from "../assassin/skills";
import { detoxify, doubleAttack, envenom } from "../thief/skills";

export const advancedKatarMastery: Skill = {
  name: "Advanced Katar Mastery",
  description:
    "Increases Katar damage by 12~30%. Provides up to 20 Perfect Dodge when wielding a Katar.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/assassinCross/advanced_katar_mastery.png",
  preRequisites: [
    { skill: doubleAttack, level: 5 },
    { skill: katarMastery, level: 10 },
  ],
};

export const createDeadlyPoison: Skill = {
  name: "Create Deadly Poison",
  description:
    "Attempt to create 5 Poison Bottles. Requires 1 of each: Berserk Potion, Venom Canine, Cactus Needle, Bee Stinger, Poison Spore, Empty Bottle, Karvonidailrol.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/assassinCross/create_deadly_poison.png",
  preRequisites: [
    { skill: envenom, level: 3 },
    { skill: detoxify, level: 1 },
    { skill: enchantPoison, level: 5 },
  ],
};

export const enchantDeadlyPoison: Skill = {
  name: "Enchant Deadly Poison",
  description:
    "For 120~60 seconds, drastically increase damage dealt. Has a chance of causing severe Poison status on each attack. Consumes one Poison Bottle.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/assassinCross/enchant_deadly_poison.png",
  preRequisites: [{ skill: createDeadlyPoison, level: 1 }],
};

export const cloakingExceed: Skill = {
  name: "Cloaking Exceed",
  description:
    "Prevents detection from Insect and Demon type monsters. Not released until the caster is hit 3 times. Increase Movement Speed according to Skill Level.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/assassinCross/cloaking_exceed.png",
  preRequisites: [{ skill: cloaking, level: 7 }],
};

export const darkIllusion: Skill = {
  name: "Dark Illusion",
  description:
    "Instantly move to target foe, 4~9-cell range. Dealing critical damage. Increases attack speed by up to 10% when used.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/assassinCross/dark_illusion.png",
  preRequisites: [{ skill: sonicBlow, level: 7 }],
};

export const darkClaw: Skill = {
  name: "Dark Claw",
  description:
    "Strikes a target, inflicting them with a debuff that increases all melee damage received as well as reducing their CRIT shield (Perfect Dodge against players).",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/assassinCross/dark_claw.png",
  preRequisites: [{ skill: darkIllusion, level: 3 }],
};

export const phantomMenace: Skill = {
  name: "Phantom Menace",
  description:
    "Reveals all hidden enemies in a 7x7 Area around the SinX, dealing damage to them.",
  maxLevel: 1,
  type: SkillType.offensive,
  icon: "./assets/assassinCross/phantom_menace.png",
  preRequisites: [{ skill: cloakingExceed, level: 3 }],
};

export const hallucinationWalk: Skill = {
  name: "Hallucination Walk",
  description:
    "For a short period, Drastically increases Flee and grants a 50% chance to avoid Magic damage. Temporarily lowers attack and movement speed after the skill ends.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/assassinCross/hallucination_walk.png",
  preRequisites: [{ skill: phantomMenace, level: 1 }],
};

export const siphoningBlades: Skill = {
  name: "Siphoning Blades",
  description:
    "Causes single target attacks and skills heal the Assassin Cross for a small portion of the inflicted damage.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/assassinCross/siphoning_blades.png",
  preRequisites: [{ skill: katarMastery, level: 10 }],
};

export const soulDestroyer: Skill = {
  name: "Soul Destroyer",
  description:
    "Ranged Attack that deals ATK + MATK damage. This skill is also capable of being a critical hit.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/assassinCross/soul_destroyer.png",
  preRequisites: [
    { skill: cloaking, level: 5 },
    { skill: enchantPoison, level: 5 },
  ],
};

export const rollingCutter: Skill = {
  name: "Rolling Cutter",
  description:
    "Katar Attack. Hits foes within a 3x3~5x5-cell AoE. Each rotation increases your rotation counter, which increases the damage of Cross Ripper Slasher and Cross Cutter.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/assassinCross/rolling_cutter.png",
  preRequisites: [
    { skill: katarMastery, level: 10 },
    { skill: grimtooth, level: 3 },
  ],
};

export const crossRipperSlasher: Skill = {
  name: "Cross Ripper Slasher",
  description:
    "Deals long ranged damage to target foe. Each Rolling Cutter counter adds to damage multiplier. Consumes 3 Rolling Cutter counters when used. Slows the target on hit.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/assassinCross/cross_ripper_slasher.png",
  preRequisites: [{ skill: rollingCutter, level: 5 }],
};

export const crossCutter: Skill = {
  name: "Cross Cutter",
  description:
    "Katar Attack. Deals Critical damage to foes in a 5x5 area around the SinX. Damage is increased based on AGI and Rolling Cutter counters consumed.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/assassinCross/cross_cutter.png",
  preRequisites: [{ skill: rollingCutter, level: 5 }],
};

export const assassinCrossSkills = [
  advancedKatarMastery,
  createDeadlyPoison,
  enchantDeadlyPoison,
  cloakingExceed,
  darkIllusion,
  darkClaw,
  phantomMenace,
  hallucinationWalk,
  siphoningBlades,
  soulDestroyer,
  rollingCutter,
  crossRipperSlasher,
  crossCutter,
];
