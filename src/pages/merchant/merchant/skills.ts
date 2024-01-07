import { Skill, SkillType } from "../../../common/types";

export const axeMastery: Skill = {
  name: "Axe Mastery",
  description: "Increase physical damage while wielding axes.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/merchant/axe_mastery.png",
  preRequisites: [],
};

export const enlargeWeightLimit: Skill = {
  name: "Enlarge Weight Limit",
  description:
    "Increase your character's maximum Weight Limit by up to 2000 points.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/merchant/enlarge_weight_limit.png",
  preRequisites: [],
};

export const itemAppraisal: Skill = {
  name: "Item Appraisal",
  description: "Identify items without a magnifier.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/merchant/item_appraisal.png",
  preRequisites: [],
};

export const mammonite: Skill = {
  name: "Mammonite",
  description:
    "Powerful melee attack dealing up to 600% damage that costs up to Base Level x 10 Zeny.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/merchant/mammonite.png",
  preRequisites: [],
};

export const pushcartMastery: Skill = {
  name: "Pushcart Mastery",
  description: "Restore lost movement speed from carrying a Pushcart.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/merchant/pushcart_mastery.png",
  preRequisites: [],
};

export const cartRevolution: Skill = {
  name: "Cart Revolution",
  description: "Melee AoE attack that knocks targets back with your cart.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/merchant/cart_revolution.png",
  preRequisites: [],
};

export const cursedTomahawk: Skill = {
  name: "Cursed Tomahawk",
  description:
    "Throw a tomahawk from a distance with a small chance to curse the target.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/merchant/cursed_tomahawk.png",
  preRequisites: [],
};

export const efficiency: Skill = {
  name: "Efficiency",
  description: "Reduces the Zeny cost of Mammonite by up to 25%",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/merchant/efficiency.png",
  preRequisites: [],
};

export const crazyUproar: Skill = {
  name: "Crazy Uproar",
  description: "A self-buff that grants +4 Strength.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/merchant/crazy_uproar.png",
  preRequisites: [],
};

export const findersFee: Skill = {
  name: "Finder's Fee",
  description:
    "A passive ability which grants the merchant a chance to obtain Zeny when killing monsters.",
  maxLevel: 1,
  type: SkillType.passive,
  icon: "./assets/merchant/finders_fee.png",
  preRequisites: [],
};

export const merchantSkills = [
  axeMastery,
  enlargeWeightLimit,
  itemAppraisal,
  mammonite,
  pushcartMastery,
  cartRevolution,
  cursedTomahawk,
  efficiency,
  crazyUproar,
  findersFee,
];
