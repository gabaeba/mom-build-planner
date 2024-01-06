import { Skill, SkillType } from "../../../common/types";

export const owlsEye: Skill = {
  name: "Owl's Eye",
  description: "Increases DEX by up to 10.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/archer/owls_eye.png",
  preRequisites: [],
};

export const vulturesEye: Skill = {
  name: "Vulture's Eye",
  description: "Increases range and HIT when using bows.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/archer/vultures_eye.png",
  preRequisites: [{ skill: owlsEye, level: 3 }],
};

export const attentionConcentrate: Skill = {
  name: "Attention Concentrate",
  description:
    "Increase DEX and AGI by up to 12% for a duration. Uncovers hidden enemies in a 3x3 area when activated.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/archer/attention_concentrate.png",
  preRequisites: [{ skill: vulturesEye, level: 1 }],
};

export const doubleStrafing: Skill = {
  name: "Double Strafing",
  description: "Deal up to 380% damage to a single target.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/archer/double_strafing.png",
  preRequisites: [],
};

export const arrowShower: Skill = {
  name: "Arrow Shower",
  description: "Deal up to 125% damage to targets in a 5*5 area around target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/archer/arrow_shower.png",
  preRequisites: [{ skill: doubleStrafing, level: 5 }],
};

export const chargeArrow: Skill = {
  name: "Charge Arrow",
  description:
    "Shoot a target to inflict up to 200% damage and push it back 6 cells.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/archer/charge_arrow.png",
  preRequisites: [],
};

export const precision: Skill = {
  name: "Precision",
  description:
    "A precise attack, usable with many different weapons, that ignores evasion. Can deal up to 400% damage with a chance for a critical hit.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/archer/precision.png",
  preRequisites: [],
};

export const heavyArrow: Skill = {
  name: "Heavy Arrow",
  description:
    "Uses a heavy arrow to inflict up to 200% damage on the enemy while slowing them down and having a chance to stun.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/archer/heavy_arrow.png",
  preRequisites: [],
};

export const arrowCrafting: Skill = {
  name: "Arrow Crafting",
  description: "Create arrows from various items.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/archer/arrow_crafting.png",
  preRequisites: [],
};

export const archerSkills = [
  owlsEye,
  vulturesEye,
  attentionConcentrate,
  doubleStrafing,
  arrowShower,
  chargeArrow,
  precision,
  heavyArrow,
  arrowCrafting,
];
