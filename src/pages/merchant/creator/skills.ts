import { Skill, SkillType } from "../../../common/types";
import {
  acidTerror,
  bioCannibalize,
  chemicalProtectArmor,
  chemicalProtectHelm,
  chemicalProtectShield,
  chemicalProtectWeapon,
  demonstration,
  pharmacy,
} from "../alchemist/skills";
import { cartRevolution, pushcartMastery } from "../merchant/skills";

export const acidDemonstration: Skill = {
  name: "Acid Demonstration",
  description:
    "Consume 1 Fire Bottle and 1 Acid Bottle to hurl the contents of both items at a targeted enemy to inflict an amount of damage affected by this skill's level, the caster's ATK and MATK, which is then modified by the target's VIT and DEF.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/creator/acid_demonstration.png",
  preRequisites: [
    { skill: demonstration, level: 5 },
    { skill: acidTerror, level: 5 },
  ],
};

export const cartRemodeling: Skill = {
  name: "Cart Remodeling",
  description:
    "Increases the Cart Weight by 500~2500 and Hit rate of Cart Skills. Also increases the damage with Cart Skills.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/creator/cart_remodeling.png",
  preRequisites: [{ skill: pushcartMastery, level: 5 }],
};

export const cartBoostCreator: Skill = {
  name: "Cart Boost",
  description:
    "Uses the cart's new Engine to increase the Creator's ATK and Movement speed.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/creator/cart_boost.png",
  preRequisites: [
    { skill: cartRemodeling, level: 5 },
    { skill: cartRevolution, level: 10 },
  ],
};

export const cartCannon: Skill = {
  name: "Cart Cannon",
  description:
    "Uses the cart's new Cannon to fire a cannon ball at the target, dealing wide area damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/creator/cart_cannon.png",
  preRequisites: [
    { skill: cartRemodeling, level: 5 },
    { skill: cartRevolution, level: 10 },
  ],
};

export const cartTornado: Skill = {
  name: "Cart Tornado",
  description:
    "Wildly swings the cart around, dealing the damage and knocking enemies back.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/creator/cart_tornado.png",
  preRequisites: [{ skill: cartBoostCreator, level: 3 }],
};

export const changeMaterial: Skill = {
  name: "Change Material",
  description: "Transmutes various item combinations into other items.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/creator/change_material.png",
  preRequisites: [],
};

export const demonicFire: Skill = {
  name: "Demonic Fire",
  description:
    "Throws a Fire Bottle at the ground to create a sea of fire to continually deal Fire property damage to all enemies in a 5x5 area and causing Burning status by chance.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/creator/demonic_fire.png",
  preRequisites: [{ skill: acidDemonstration, level: 5 }],
};

export const fireExpansion: Skill = {
  name: "Fire Expansion",
  description:
    "Throws an item on an area with Demonic Fire active, which causes various effects depending on the thrown item.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/creator/fire_expansion.png",
  preRequisites: [{ skill: demonicFire, level: 5 }],
};

export const fullChemicalProtection: Skill = {
  name: "Full Chemical Protection",
  description:
    "Protects the armor, weapon, helmet and shield of a party member from being destroyed or stripped for the skill's duration.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/creator/full_chemical_protection.png",
  preRequisites: [
    { skill: chemicalProtectHelm, level: 5 },
    { skill: chemicalProtectShield, level: 5 },
    { skill: chemicalProtectArmor, level: 5 },
    { skill: chemicalProtectWeapon, level: 5 },
  ],
};

export const plantCultivation: Skill = {
  name: "Plant Cultivation",
  description:
    "Attempt to create a random type of Mushroom (Lv.1) or Plant (Lv.2) with a 50% success rate. Disabled in WoE.",
  maxLevel: 2,
  type: SkillType.active,
  icon: "./assets/creator/plant_cultivation.png",
  preRequisites: [],
};

export const specialPharmacy: Skill = {
  name: "Special Pharmacy",
  description:
    "Creates various new potions as well as items that can be thrown via Sling Item.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/creator/special_pharmacy.png",
  preRequisites: [{ skill: pharmacy, level: 1 }],
};

export const slingItem: Skill = {
  name: "Sling Item",
  description:
    "Flings various manufactured items at a target, for effects ranging from Damage to status effects and debuffs.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/creator/sling_item.png",
  preRequisites: [{ skill: specialPharmacy, level: 7 }],
};

export const illusionDoping: Skill = {
  name: "Illusion Doping",
  description:
    "Consumes 1 Acid Bottle to Inflict Blind, Hallucination, and an attack speed debuff in an targeted AoE. Additionally increases damage taken from Acid Terror on affected targets.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/creator/illusion_doping.png",
  preRequisites: [{ skill: specialPharmacy, level: 3 }],
};

export const thornTrap: Skill = {
  name: "Thorn Trap",
  description:
    "Throws a thorny trap onto a cell which binds the enemy's feet, preventing movement and dealing damage over time. Requires a Plant Bottle.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/creator/thorn_trap.png",
  preRequisites: [{ skill: bioCannibalize, level: 3 }],
};

export const creatorSkills = [
  acidDemonstration,
  cartRemodeling,
  cartCannon,
  cartBoostCreator,
  cartTornado,
  changeMaterial,
  demonicFire,
  fireExpansion,
  fullChemicalProtection,
  plantCultivation,
  specialPharmacy,
  slingItem,
  illusionDoping,
  thornTrap,
];
