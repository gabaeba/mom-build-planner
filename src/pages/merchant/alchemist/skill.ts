import { Skill, SkillType } from "../../../common/types";

export const pharmacy: Skill = {
  name: "Pharmacy",
  description: "Create potions from herbs and various other ingredients.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/alchemist/pharmacy.png",
  preRequisites: [],
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
