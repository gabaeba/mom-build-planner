import { Skill, SkillType } from "../../../common/types";
import { envenom, hiding } from "../thief/skills";

export const cloaking: Skill = {
  name: "Cloaking",
  description:
    "Allows the character to disappear instantaneously and still move. Movement Speed is dependant on skill level.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/assassin/cloaking.png",
  preRequisites: [{ skill: hiding, level: 2 }],
};

export const enchantPoison: Skill = {
  name: "Enchant Poison",
  description:
    "Forces the character's weapon to neutral element, increasing damage dealt and causes each attack to have a chance to inflict the Poison status.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/assassin/enchant_poison.png",
  preRequisites: [{ skill: envenom, level: 1 }],
};

export const katarMastery: Skill = {
  name: "Katar Mastery",
  description: "Increases the damage done with Katar weapons by up to 30.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/assassin/katar_mastery.png",
  preRequisites: [],
};

export const sonicBlow: Skill = {
  name: "Sonic Blow",
  description:
    "Deal up to 1800% physical damage with a katar weapon with up to a 30% chance to Stun the target.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/assassin/sonic_blow.png",
  preRequisites: [{ skill: katarMastery, level: 4 }],
};

export const grimtooth: Skill = {
  name: "Grimtooth",
  description:
    "An attack using a katar that hits a 3x3 area from up to 7 cells away while Hidden.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/assassin/grimtooth.png",
  preRequisites: [
    { skill: cloaking, level: 2 },
    { skill: sonicBlow, level: 5 },
  ],
};

export const rightHandMastery: Skill = {
  name: "Right Hand Mastery",
  description:
    "Recovers up to 100% of the dual wielding damage penalty for the right hand. Increases Enchant Poison effect chance.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/assassin/right_hand_mastery.png",
  preRequisites: [],
};

export const leftHandMastery: Skill = {
  name: "Left Hand Mastery",
  description:
    "Recovers up to 100% of the dual wielding damage penalty for the left hand. Increases Enchant Poison effect chance.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/assassin/left_hand_mastery.png",
  preRequisites: [{ skill: rightHandMastery, level: 2 }],
};

export const poisonReact: Skill = {
  name: "Poison React",
  description:
    "Grants a chance to counter a physical attack with an enhanced Envenom for up to 400% damage up to 11 times.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/assassin/poison_react.png",
  preRequisites: [{ skill: enchantPoison, level: 3 }],
};

export const venomDust: Skill = {
  name: "Venom Dust",
  description: "Create a 2x2 Poison cloud for up to 120 seconds.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/assassin/venom_dust.png",
  preRequisites: [{ skill: enchantPoison, level: 5 }],
};

export const venomSplasher: Skill = {
  name: "Venom Splasher",
  description:
    "Use a Poisoned Gemstone to turn the target into a 'Poison Bomb' to deal up to 1100% AoE damage after a delay.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/assassin/venom_splasher.png",
  preRequisites: [
    { skill: poisonReact, level: 5 },
    { skill: venomDust, level: 5 },
  ],
};

export const sonicAcceleration: Skill = {
  name: "Sonic Acceleration",
  description: "Increases damage and hit rate of Sonic Blow.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/assassin/sonic_acceleration.png",
  preRequisites: [],
};

export const venomKnife: Skill = {
  name: "Venom Knife",
  description:
    "Throws a venom knife at a target, slowing them and inflicting the poison status ailment.",
  maxLevel: 1,
  type: SkillType.offensive,
  icon: "./assets/assassin/venom_knife.png",
  preRequisites: [],
};

export const assassinSkills = [
  cloaking,
  enchantPoison,
  katarMastery,
  sonicBlow,
  grimtooth,
  rightHandMastery,
  leftHandMastery,
  poisonReact,
  venomDust,
  venomSplasher,
  sonicAcceleration,
  venomKnife,
];
