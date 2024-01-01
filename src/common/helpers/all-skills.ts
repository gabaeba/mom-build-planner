import { crusaderSkills } from "../../pages/swordsman/crusader/skills";
import { knightSkills } from "../../pages/swordsman/knight/skills";
import { lordKnightSkills } from "../../pages/swordsman/lord-knight/skills";
import { paladinSkills } from "../../pages/swordsman/paladin/skills";
import { swordsmanSkills } from "../../pages/swordsman/swordsman/skills";

export const allSkills = [
  ...swordsmanSkills,
  ...knightSkills,
  ...lordKnightSkills,
  ...crusaderSkills,
  ...paladinSkills,
];
