import { Skill, SkillType } from "../../../common/types";
import {
  hammerFall,
  overThrust,
  skinTempering,
  weaponPerfection,
  weaponryResearch,
} from "../blacksmith/skills";
import {
  cartRevolution,
  cursedTomahawk,
  mammonite,
  pushcartMastery,
} from "../merchant/skills";

export const weaponTraining: Skill = {
  name: "Weapon Traning",
  description: "Increases Damage and Hit rate with Axe and Mace type weapons.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/whitesmith/weapon_training.png",
  preRequisites: [],
};

export const axeBoomerang: Skill = {
  name: "Axe Boomerang",
  description:
    "Throws an axe at long range, dealing damage. The weight of your axe increases your damage.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/whitesmith/axe_boomerang.png",
  preRequisites: [
    { skill: cursedTomahawk, level: 5 },
    { skill: weaponTraining, level: 5 },
  ],
};

export const axeTornado: Skill = {
  name: "Axe Tornado",
  description:
    "Spins rapidly like a whirlwind with an axe striking all targets around you. The VIT stat increases your damage.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/whitesmith/axe_tornado.png",
  preRequisites: [{ skill: axeBoomerang, level: 3 }],
};

export const bodyTempering: Skill = {
  name: "Body Tempering",
  description:
    "Increases DEF and resistance to Neutral, Earth, and Fire element attacks.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/whitesmith/body_tempering.png",
  preRequisites: [{ skill: skinTempering, level: 5 }],
};

export const cartBoostWhitesmith: Skill = {
  name: "Cart Boost",
  description:
    "Increases a Whitesmith's move speed for 180 seconds. Increases Perfect Dodge by 5 and Enables use of Cart Termination.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/whitesmith/cart_boost.png",
  preRequisites: [
    { skill: pushcartMastery, level: 5 },
    { skill: cartRevolution, level: 10 },
  ],
};

export const cartTermination: Skill = {
  name: "Cart Termination",
  description:
    "Smash your pushcart into a target enemy, dealing heavy melee damage and bypassing select defensive abilities.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/whitesmith/cart_termination.png",
  preRequisites: [
    { skill: mammonite, level: 10 },
    { skill: hammerFall, level: 5 },
    { skill: cartBoostWhitesmith, level: 1 },
  ],
};

export const cartSlide: Skill = {
  name: "Cart Slide",
  description:
    "Uses the wheels of the cart to slide forward 12 cells, damaging enemies in a 5x5 area at the end of the slide.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/placeholder.png",
  preRequisites: [{ skill: cartTermination, level: 5 }],
};

export const explosiveCart: Skill = {
  name: "Explosive Cart",
  description:
    "When the user casts Cart Slide, small explosives are left along the path, dealing 5x5 area damage to enemies in the caster's path.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/placeholder.png",
  preRequisites: [{ skill: cartSlide, level: 5 }],
};

export const createAugment: Skill = {
  name: "Create Augment",
  description:
    "Creates various Weapon augments used in special Whitesmith crafting.",
  maxLevel: 3,
  type: SkillType.active,
  icon: "./assets/whitesmith/create_augment.png",
  preRequisites: [{ skill: weaponryResearch, level: 5 }],
};

export const lavaFlow: Skill = {
  name: "Lava Flow",
  description:
    "Causes Lava to erupt at a target location, inflicting stun and burning while dealing damage.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/whitesmith/lava_flow.png",
  preRequisites: [{ skill: bodyTempering, level: 5 }],
};

export const maximumOverThrust: Skill = {
  name: "Maximum Over Thrust",
  description:
    "Causes Lava to erupt at a target location, inflicting stun and burning while dealing damage.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/whitesmith/maximum_over_thrust.png",
  preRequisites: [{ skill: overThrust, level: 5 }],
};

export const fullAdrenalineRush: Skill = {
  name: "Full Adrenaline Rush",
  description:
    "Places a temporary buff on the user and all party members that increases their Attack Speed by 10% with any weapon except long range weapons.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/whitesmith/full_adrenaline_rush.png",
  preRequisites: [],
};

export const meltDown: Skill = {
  name: "Melt Down",
  description:
    "For up to 60 seconds, grants each attack a chance to damage enemy's armor and weapon.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/whitesmith/melt_down.png",
  preRequisites: [
    { skill: overThrust, level: 5 },
    { skill: weaponPerfection, level: 5 },
    { skill: weaponryResearch, level: 5 },
  ],
};

export const supernaturalWeaponcraft: Skill = {
  name: "Supernatural Weaponcraft",
  description: "Allows altering forged weapons into Holy or Shadow element.",
  maxLevel: 2,
  type: SkillType.passive,
  icon: "./assets/whitesmith/supernatural_weaponcraft.png",
  preRequisites: [{ skill: createAugment, level: 1 }],
};

export const weaponAugmentation: Skill = {
  name: "Weapon Augmentation",
  description:
    "Allows use of Augments to alter the properties of forged weaponry.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/whitesmith/weapon_augmentation.png",
  preRequisites: [{ skill: createAugment, level: 1 }],
};

export const whitesmithSkills = [
  weaponTraining,
  axeBoomerang,
  axeTornado,
  bodyTempering,
  cartBoostWhitesmith,
  cartTermination,
  cartSlide,
  explosiveCart,
  createAugment,
  lavaFlow,
  maximumOverThrust,
  fullAdrenalineRush,
  meltDown,
  supernaturalWeaponcraft,
  weaponAugmentation,
];
