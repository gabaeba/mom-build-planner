import { acolyteSkills } from "../../pages/acolyte/acolyte/skills";
import { championSkills } from "../../pages/acolyte/champion/skills";
import { highPriestSkills } from "../../pages/acolyte/high-priest/skills";
import { monkSkills } from "../../pages/acolyte/monk/skills";
import { priestSkills } from "../../pages/acolyte/priest/skills";
import { archerSkills } from "../../pages/archer/archer/skills";
import { highWizardSkills } from "../../pages/mage/high-wizard/skills";
import { mageSkills } from "../../pages/mage/mage/skills";
import { professorSkills } from "../../pages/mage/professor/skills";
import { sageSkills } from "../../pages/mage/sage/skills";
import { wizardSkills } from "../../pages/mage/wizard/skills";
import { alchemistSkills } from "../../pages/merchant/alchemist/skill";
import { blacksmithSkills } from "../../pages/merchant/blacksmith/skills";
import { merchantSkills } from "../../pages/merchant/merchant/skills";
import { superNoviceSkills } from "../../pages/super-novice/super-novice/skills";
import { crusaderSkills } from "../../pages/swordsman/crusader/skills";
import { knightSkills } from "../../pages/swordsman/knight/skills";
import { lordKnightSkills } from "../../pages/swordsman/lord-knight/skills";
import { paladinSkills } from "../../pages/swordsman/paladin/skills";
import { swordsmanSkills } from "../../pages/swordsman/swordsman/skills";
import { assassinCrossSkills } from "../../pages/thief/assassin-cross/skills";
import { assassinSkills } from "../../pages/thief/assassin/skills";
import { rogueSkills } from "../../pages/thief/rogue/skills";
import { thiefSkills } from "../../pages/thief/thief/skills";

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
  ...thiefSkills,
  ...assassinSkills,
  ...rogueSkills,
  ...assassinCrossSkills,
  ...merchantSkills,
  ...blacksmithSkills,
  ...alchemistSkills,
  ...acolyteSkills,
  ...priestSkills,
  ...monkSkills,
  ...highPriestSkills,
  ...championSkills,
  ...archerSkills,
  ...superNoviceSkills,
];
