import { Skill, SkillType } from "../../../common/types";

export const repelEvil: Skill = {
  name: "Repel Evil",
  description:
    "Increases attack and Resistance against against Demons and Undead monsters by 6~15%.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/acolyte/repel_evil.png",
  preRequisites: [],
};

export const maceMastery: Skill = {
  name: "Mace Mastery",
  description:
    "Increases damage done with Mace type weapons as well as providing bonus damage to Signum Crucis.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/acolyte/mace_mastery.png",
  preRequisites: [],
};

export const ruwach: Skill = {
  name: "Ruwach",
  description:
    "Reveal hidden enemies in a 5x5 area around the user and deal 145% MATK damage to revealed enemies.",
  maxLevel: 1,
  type: SkillType.offensive,
  icon: "./assets/acolyte/ruwach.png",
  preRequisites: [],
};

export const increaseSpRecovery: Skill = {
  name: "Increase SP Recovery",
  description:
    "Recover 3~30 SP + 0.2~2.0% of Maximum SP every 10 seconds when not moving. Also increases efficiency of SP-restoring items consumed or thrown by an Alchemist by 10~100%.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/acolyte/increase_sp_recovery.png",
  preRequisites: [],
};

export const holyLight: Skill = {
  name: "Holy Light",
  description:
    "Holy-element attack that deals 50~275% MATK damage to a single target. Cancels Kyrie Eleison on target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/acolyte/holy_light.png",
  preRequisites: [],
};

export const signumCrucis: Skill = {
  name: "Signum Crucis",
  description:
    "Deals up to 250% holy property damage to all enemies within a 3 cell radius of the caster. Consumes 35 SP regardless of skill level.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/acolyte/signum_crucis.png",
  preRequisites: [],
};

export const angelus: Skill = {
  name: "Angelus",
  description:
    "Increase VIT DEF of the user and all party members nearby for 10~100% for 30~300 seconds. Also increases MaxHP.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/acolyte/angelus.png",
  preRequisites: [{ skill: repelEvil, level: 3 }],
};

export const blessing: Skill = {
  name: "Blessing",
  description:
    "Blesses all targets in a 7x7 area on cast, increasing HIT by +2~20 while decreasing Cast Time and Cast Delay by 2~20%.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/acolyte/blessing.png",
  preRequisites: [{ skill: repelEvil, level: 5 }],
};

export const heal: Skill = {
  name: "Heal",
  description:
    "Restore a target's HP, or damage Undead and Demon race targets. (Base factor 12~84)",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/acolyte/heal.png",
  preRequisites: [],
};

export const cure: Skill = {
  name: "Cure",
  description: "Cures a target from Silence, Blind and Chaos statuses.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/acolyte/cure.png",
  preRequisites: [{ skill: heal, level: 2 }],
};

export const increaseAgi: Skill = {
  name: "Increase AGI",
  description:
    "Grants +2~20 FLEE and +1~10 Perfect Dodge for all targets in a 7x7 area when cast.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/acolyte/increase_agi.png",
  preRequisites: [{ skill: heal, level: 3 }],
};

export const decreaseAgi: Skill = {
  name: "Decrease AGI",
  description:
    "Attempts to lower a target's AGI by 3~12 with 42~60% chance of success. (30~120 seconds vs. monsters, 20~65 seconds vs. players)",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/acolyte/decrease_agi.png",
  preRequisites: [{ skill: increaseAgi, level: 1 }],
};

export const teleport: Skill = {
  name: "Teleport",
  description:
    "Instantly move to a random spot on the map or the user's save spot. Does not work in PvP environments.",
  maxLevel: 2,
  type: SkillType.supportive,
  icon: "./assets/acolyte/teleport.png",
  preRequisites: [{ skill: ruwach, level: 1 }],
};

export const pneuma: Skill = {
  name: "Pneuma",
  description: "Protects a 3x3 area from incoming ranged attacks.",
  maxLevel: 2,
  type: SkillType.supportive,
  icon: "./assets/acolyte/teleport.png",
  preRequisites: [{ skill: teleport, level: 2 }],
};

export const aquaBenedicta: Skill = {
  name: "Aqua Benedicta",
  description:
    "Create 1 Holy Water while standing in shallow water. Each use consumes an Empty Bottle.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/acolyte/aqua_benedicta.png",
  preRequisites: [],
};

export const acolyteSkills = [
  repelEvil,
  maceMastery,
  ruwach,
  increaseSpRecovery,
  holyLight,
  signumCrucis,
  angelus,
  blessing,
  heal,
  cure,
  increaseAgi,
  decreaseAgi,
  teleport,
  pneuma,
  aquaBenedicta,
];
