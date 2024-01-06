import { Skill, SkillType } from "../../../common/types";

export const doubleAttack: Skill = {
  name: "Double Attack",
  description:
    "Adds a high chance to deal double damage when attacking with a dagger.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/thief/double_attack.png",
  preRequisites: [],
};

export const improveDodge: Skill = {
  name: "Improve Dodge",
  description:
    "Adds up to 30 Flee. Bonus increases when you become a Rogue or Assassin. Also increases Movement Speed if you're an Assassin.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/thief/improve_dodge.png",
  preRequisites: [],
};

export const envenom: Skill = {
  name: "Envenom",
  description:
    "Poison-element melee attack that deals up to 350 additional damage and has a chance of poisoning its target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/thief/envenom.png",
  preRequisites: [],
};

export const detoxify: Skill = {
  name: "Detoxify",
  description: "Cures yourself or a target from being poisoned.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/thief/detoxify.png",
  preRequisites: [{ skill: envenom, level: 3 }],
};

export const steal: Skill = {
  name: "Steal",
  description:
    "Steal items from monsters. Affected monster may still drop the stolen item normally.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/thief/steal.png",
  preRequisites: [],
};

export const hiding: Skill = {
  name: "Hiding",
  description:
    "Hide to protect yourself. Does not work against Boss, Insect and Demon monsters, counterable by some AoE skills and items.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/thief/hiding.png",
  preRequisites: [{ skill: steal, level: 5 }],
};

export const increaseSpeed: Skill = {
  name: "Increase Speed",
  description:
    "Self buff that increases Attack Speed at the cost of reducing DEF.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/thief/increase_speed.png",
  preRequisites: [],
};

export const throwSand: Skill = {
  name: "Throw Sand",
  description:
    "Earth-element attack dealing up to 200% damage with a 15% chance of blinding its target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/thief/throw_sand.png",
  preRequisites: [],
};

export const quickStrike: Skill = {
  name: "Quick Strike",
  description:
    "Melee attack with increased hit rate, dealing up to 275% damage and inflicting Critical Wounds by chance.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/thief/quick_strike.png",
  preRequisites: [],
};

export const backSliding: Skill = {
  name: "Back Sliding",
  description: "Instantly move back 5 cells.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/thief/back_sliding.png",
  preRequisites: [],
};

export const pickStone: Skill = {
  name: "Pick Stone",
  description: "Provide ammunition for Stone Fling or other creative uses.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/thief/pick_stone.png",
  preRequisites: [],
};

export const throwStone: Skill = {
  name: "Throw Stone",
  description:
    "Throw a stone at a target for 50 neutral-element, armor-ignoring damage. Has a 5% chance to blind and/or stun its target.",
  maxLevel: 1,
  type: SkillType.offensive,
  icon: "./assets/thief/throw_stone.png",
  preRequisites: [],
};

export const thiefSkills = [
  doubleAttack,
  improveDodge,
  envenom,
  detoxify,
  steal,
  hiding,
  increaseSpeed,
  throwSand,
  quickStrike,
  backSliding,
  pickStone,
  throwStone,
];
