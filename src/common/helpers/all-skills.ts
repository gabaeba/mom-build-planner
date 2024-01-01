import { highWizardSkills } from "../../pages/mage/high-wizard/skills";
import { mageSkills } from "../../pages/mage/mage/skills";
import { professorSkills } from "../../pages/mage/professor/skills";
import { sageSkills } from "../../pages/mage/sage/skills";
import { wizardSkills } from "../../pages/mage/wizard/skills";
import { alchemistSkills } from "../../pages/merchant/alchemist/skill";
import { blacksmithSkills } from "../../pages/merchant/blacksmith/skills";
import { merchantSkills } from "../../pages/merchant/merchant/skills";
import { crusaderSkills } from "../../pages/swordsman/crusader/skills";
import { knightSkills } from "../../pages/swordsman/knight/skills";
import { lordKnightSkills } from "../../pages/swordsman/lord-knight/skills";
import { paladinSkills } from "../../pages/swordsman/paladin/skills";
import { swordsmanSkills } from "../../pages/swordsman/swordsman/skills";

export const allSkills = [
  ...swordsmanSkills,
  ...knightSkills,
  ...crusaderSkills,
  ...lordKnightSkills,
  ...paladinSkills,
  ...mageSkills,
  ...wizardSkills,
  ...sageSkills,
  ...highWizardSkills,
  ...professorSkills,
  ...merchantSkills,
  ...blacksmithSkills,
  ...alchemistSkills,
];
