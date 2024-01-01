import { Skill, SkillType } from "../../../common/types";
import { hammerFall } from "../blacksmith/skills";
import {
  cartRevolution,
  cursedTomahawk,
  mammonite,
  pushcartMastery,
} from "../merchant/skills";

export const weaponTraining: Skill = {
  name: "Weapon Training",
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
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/whitesmith/axe_tornado.png",
  preRequisites: [{ skill: axeBoomerang, level: 3 }],
};

export const cartBoost: Skill = {
  name: "Cart Boost",
  description:
    "Increases a Whitesmith's move speed for 180 seconds. Increases Perfect Dodge by 5 and Enables use of Cart Termination.",
  maxLevel: 5,
  type: SkillType.passive,
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
  icon: "./assets/whitesmith/cart_boost.png",
  preRequisites: [
    { skill: mammonite, level: 10 },
    { skill: hammerFall, level: 5 },
    { skill: cartBoost, level: 1 },
  ],
};
