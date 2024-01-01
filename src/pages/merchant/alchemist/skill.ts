import { Skill, SkillType } from "../../../common/types";

export const pharmacy: Skill = {
  name: "Pharmacy",
  description: "Create potions from herbs and various other ingredients.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/alchemist/pharmacy.png",
  preRequisites: [],
};

export const potionPitcher: Skill = {
  name: "Potion Pitcher",
  description:
    "Throw a Condensed Red, Orange, Condensed Yellow, Condensed White or Blue potion at a friendly target or yourself for up to 150% effectiveness of it's HP or SP recovery.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/alchemist/potion_pitcher.png",
  preRequisites: [{ skill: pharmacy, level: 3 }],
};

export const acidTerror: Skill = {
  name: "Acid Terror",
  description:
    "Throw an Acid bottle to deal up to 1100% armour-ignoring, always-hitting damage to a single target. Also, strip their armour and/or cause Bleeding with a chance.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/alchemist/acid_terror.png",
  preRequisites: [{ skill: pharmacy, level: 5 }],
};

export const demonstration: Skill = {
  name: "Demonstration",
  description:
    "Throw a Bottle grenade at the ground to create a 5*5 cell fire damaging enemies that step into it and stripping their weapons with a chance.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/alchemist/demonstration.png",
  preRequisites: [{ skill: pharmacy, level: 4 }],
};

export const learningPotion: Skill = {
  name: "Learning Potion",
  description:
    "Increases your chance to successfully make a potion. Also, increases effectiveness of potions you drink.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/alchemist/learning_potion.png",
  preRequisites: [],
};

export const bioCannibalize: Skill = {
  name: "Bio Cannibalize",
  description:
    "Create up to 6 friendly plant-type monsters with a Plant bottle.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/alchemist/bio_cannibalize.png",
  preRequisites: [{ skill: pharmacy, level: 6 }],
};

export const sphereMine: Skill = {
  name: "Sphere Mine",
  description:
    "Use a Marine Sphere bottle to create a marine sphere that will explode on taking damage.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/alchemist/sphere_mine.png",
  preRequisites: [{ skill: pharmacy, level: 6 }],
};

export const bioethics: Skill = {
  name: "Bioethics",
  description: "Allows the learning of Homunculus Skills.",
  maxLevel: 1,
  type: SkillType.passive,
  icon: "./assets/alchemist/bioethics.png",
  preRequisites: [],
};

export const berserkPitcher: Skill = {
  name: "Berserk Pitcher",
  description:
    "Throw a Berserk Potion at a target, granting its effect for 15 minutes.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/alchemist/berserk_pitcher.png",
  preRequisites: [],
};

export const twilightAlchemy1: Skill = {
  name: "Twilight Alchemy I",
  description: "Attempt to rapidly brew 100 white potions.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/alchemist/twilight_alchemy_i.png",
  preRequisites: [],
};

export const twilightAlchemy2: Skill = {
  name: "Twilight Alchemy II",
  description: "Attempt to rapidly brew 200 condensed white potions.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/alchemist/twilight_alchemy_ii.png",
  preRequisites: [],
};

export const twilightAlchemy3: Skill = {
  name: "Twilight Alchemy III",
  description:
    "Attempt to rapidly brew 100 acid bottles, and 100 bottle grenades.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/alchemist/twilight_alchemy_iii.png",
  preRequisites: [],
};

export const rest: Skill = {
  name: "Rest",
  description: "Stores the caster's Homunculus.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/alchemist/rest.png",
  preRequisites: [],
};

export const callHomunculus: Skill = {
  name: "Call Homunculus",
  description:
    "Summon an existing Homunculus that was stored by using the Vaporize skill.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/alchemist/call_homunculus.png",
  preRequisites: [{ skill: rest, level: 1 }],
};

export const ressurrectHomunculus: Skill = {
  name: "Ressurrect Homunculus",
  description: "Revive a Homunculus that has been defeated in battle.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/alchemist/re_homunculus.png",
  preRequisites: [{ skill: callHomunculus, level: 1 }],
};

export const alchemistSkills = [
  pharmacy,
  potionPitcher,
  acidTerror,
  demonstration,
  learningPotion,
  bioCannibalize,
  sphereMine,
  bioethics,
  berserkPitcher,
  twilightAlchemy1,
  twilightAlchemy2,
  twilightAlchemy3,
  rest,
  callHomunculus,
  ressurrectHomunculus,
];
