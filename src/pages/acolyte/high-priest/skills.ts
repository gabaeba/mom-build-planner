import { Skill, SkillType } from "../../../common/types";
import {
  angelus,
  blessing,
  heal,
  increaseAgi,
  increaseSpRecovery,
} from "../acolyte/skills";
import {
  gloria,
  impositioManus,
  kyrieEleison,
  lexAeterna,
  magnificat,
  sanctuary,
  statusRecovery,
  suffragium,
} from "../priest/skills";

export const clementia: Skill = {
  name: "Clementia",
  description: "Increases the potency of the attributes boosted by Blessing.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/highPriest/clementia.png",
  preRequisites: [{ skill: blessing, level: 10 }],
};

export const ancilla: Skill = {
  name: "Ancilla",
  description:
    "Creates 1 Ancilla used for several other Arch Bishop skills. Ancilla recovers 15% SP when used. Consumes a Blue Gemstone. Maximum of 3 Ancillas can be carried and are character bound.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/highPriest/ancilla.png",
  preRequisites: [{ skill: clementia, level: 2 }],
};

export const assumptio: Skill = {
  name: "Assumptio",
  description: "Halves damage taken on the target for a short duration.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/highPriest/assumptio.png",
  preRequisites: [
    { skill: angelus, level: 5 },
    { skill: increaseSpRecovery, level: 5 },
    { skill: impositioManus, level: 3 },
  ],
};

export const basilica: Skill = {
  name: "Basilica",
  description:
    "Enchants a targeted location that prevents entities within a 5x5 area from attacking or being attacked for 20~40 seconds. Heals allies inside the area.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/highPriest/basilica.png",
  preRequisites: [
    { skill: gloria, level: 3 },
    { skill: sanctuary, level: 5 },
  ],
};

export const cantoCandidus: Skill = {
  name: "Canto Candidus",
  description:
    "Increases the potency of the attributes boosted by Increase AGI.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/highPriest/canto_candidus.png",
  preRequisites: [{ skill: increaseAgi, level: 10 }],
};

export const vituperatum: Skill = {
  name: "Vituperatum",
  description: "Casts Lex Aeterna in a wide area around the target.",
  maxLevel: 3,
  type: SkillType.active,
  icon: "./assets/highPriest/vituperatum.png",
  preRequisites: [{ skill: lexAeterna, level: 1 }],
};

export const clearance: Skill = {
  name: "Clearance",
  description:
    "Removes several negative and positive status effects from a friendly target. Cannot target self.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/highPriest/clearance.png",
  preRequisites: [
    { skill: statusRecovery, level: 1 },
    { skill: sanctuary, level: 3 },
    { skill: vituperatum, level: 1 },
  ],
};

export const coluceoHeal: Skill = {
  name: "Coluceo Heal",
  description:
    "Casts Heal (at the highest level learned on said skill) on party members in a 3~15-cell radius around you.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/highPriest/coluceo_heal.png",
  preRequisites: [
    { skill: heal, level: 10 },
    { skill: angelus, level: 3 },
  ],
};

export const convenio: Skill = {
  name: "Convenio",
  description:
    "Warps all party members to the High Priest's current location. Requires 1 Ancilla.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/highPriest/convenio.png",
  preRequisites: [{ skill: clementia, level: 2 }],
};

export const highHeal: Skill = {
  name: "High Heal",
  description:
    "Heals target with 2~3.2x heal power. Has a cast time and cooldown.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/highPriest/convenio.png",
  preRequisites: [{ skill: coluceoHeal, level: 3 }],
};

export const epiclesis: Skill = {
  name: "Epiclesis",
  description:
    "Resurrect friendly dead players in a 5x5 area on the ground. Enchants that area with a holy tree for 18~30 seconds: Increase maximum HP by 5~15%; Restore 2~6% HP and 1~5% SP every 3 seconds. Requires 1 Holy Water and 1 Ancilla.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/highPriest/epiclesis.png",
  preRequisites: [
    { skill: ancilla, level: 1 },
    { skill: highHeal, level: 3 },
  ],
};

export const meditatio: Skill = {
  name: "Meditatio",
  description:
    "Increases Heal effectiveness by 1~10%, Max SP by 1~10%, and SP Recovery by 3~30%.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/highPriest/meditatio.png",
  preRequisites: [
    { skill: increaseSpRecovery, level: 7 },
    { skill: magnificat, level: 3 },
  ],
};

export const offertorium: Skill = {
  name: "Offertorium",
  description:
    "Increases the efficiency of High Heal, Coluseo Heal, Sanctuary, and Heal while increasing SP Cost of all skills.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/highPriest/offertorium.png",
  preRequisites: [{ skill: highHeal, level: 2 }],
};

export const praefatio: Skill = {
  name: "Praefatio",
  description:
    "Casts Kyrie Eleison on party members in a 18-cell radius around you.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/highPriest/praefatio.png",
  preRequisites: [{ skill: kyrieEleison, level: 10 }],
};

export const sacrament: Skill = {
  name: "Sacrament",
  description:
    "Causes Suffragium to also provide a bonus 15~45% aftercast delay reduction.",
  maxLevel: 3,
  type: SkillType.passive,
  icon: "./assets/highPriest/sacrament.png",
  preRequisites: [{ skill: suffragium, level: 3 }],
};

export const highPriestSkills = [
  clementia,
  ancilla,
  assumptio,
  basilica,
  cantoCandidus,
  vituperatum,
  clearance,
  coluceoHeal,
  convenio,
  highHeal,
  epiclesis,
  meditatio,
  offertorium,
  praefatio,
  sacrament,
];
