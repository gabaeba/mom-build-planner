import { Skill, SkillType } from "../../../common/types";
import {
  angelus,
  aquaBenedicta,
  heal,
  increaseSpRecovery,
  ruwach,
} from "../acolyte/skills";

export const impositioManus: Skill = {
  name: "Impositio Manus",
  description:
    "Temporarily increase a target's attack power by 9~45 for 60 seconds.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/priest/impositio_manus.png",
  preRequisites: [],
};

export const aspersio: Skill = {
  name: "Aspersio",
  description:
    "Temporarily enchant a target's weapon with the Holy property. Requires a Holy Water.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/priest/aspersio.png",
  preRequisites: [
    { skill: aquaBenedicta, level: 1 },
    { skill: impositioManus, level: 3 },
  ],
};

export const kyrieEleison: Skill = {
  name: "Kyrie Eleison",
  description:
    "Create a barrier around a target player protecting them from physical attacks. Lasts 60 seconds, up to 14~50% of maximum health or 3~12 hits. Can auto-refresh.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/priest/kyrie_eleison.png",
  preRequisites: [{ skill: angelus, level: 2 }],
};

export const magnificat: Skill = {
  name: "Magnificat",
  description:
    "Increases SP regeneration rate of all nearby party members by 10%~50% by 30 seconds. Can auto-refresh.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/priest/magnificat.png",
  preRequisites: [],
};

export const lexDivina: Skill = {
  name: "Lex Divina",
  description: "Silences the target for 30~60 seconds.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/priest/lex_divina.png",
  preRequisites: [{ skill: ruwach, level: 1 }],
};

export const lexAeterna: Skill = {
  name: "Lex Aeterna",
  description:
    "Inflicts a status effect on the target which causes it to recieve 1.5x damage for 1.5sec.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/priest/lex_aeterna.png",
  preRequisites: [{ skill: lexDivina, level: 5 }],
};

export const gloria: Skill = {
  name: "Gloria",
  description:
    "Temporarily increase the luck of all nearby party members by 6~30.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/priest/gloria.png",
  preRequisites: [
    { skill: kyrieEleison, level: 4 },
    { skill: magnificat, level: 3 },
  ],
};

export const bsSacramenti: Skill = {
  name: "B. S. Sacramenti",
  description:
    "Temporarily enchant a target's armor with the Holy property for 20~60 seconds.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/priest/b_s_sacramenti.png",
  preRequisites: [
    { skill: aspersio, level: 1 },
    { skill: gloria, level: 3 },
  ],
};

export const statusRecovery: Skill = {
  name: "Status Recovery",
  description: "Cures the target from Frozen, Stoned and Stun status effects.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/priest/status_recovery.png",
  preRequisites: [],
};

export const resurrection: Skill = {
  name: "Resurrection",
  description:
    "Resurrects a dead player with 10~80% health. Requires a Blue Gemstone.",
  maxLevel: 4,
  type: SkillType.supportive,
  icon: "./assets/priest/resurrection.png",
  preRequisites: [
    { skill: increaseSpRecovery, level: 4 },
    { skill: statusRecovery, level: 1 },
  ],
};

export const sanctuary: Skill = {
  name: "Sanctuary",
  description:
    "Enchants the ground with restorative powers for 4~31 seconds, healing up to 4~13 players who stand in it by 100~1000 health. Requires a Blue Gemstone.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/priest/sanctuary.png",
  preRequisites: [{ skill: heal, level: 1 }],
};

export const suffragium: Skill = {
  name: "Suffragium",
  description:
    "Reduces the cast time of the next spell the target player attempts to cast by 15~45%.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/priest/suffragium.png",
  preRequisites: [{ skill: impositioManus, level: 2 }],
};

export const safetyWallPriest: Skill = {
  name: "Safety Wall",
  description:
    "Create a pillar on a cell that protects whoever stands in it from 2~11 melee attacks, for up to 5~50 seconds. Requires a Blue Gemstone.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/priest/safety_wall.png",
  preRequisites: [
    { skill: aspersio, level: 1 },
    { skill: sanctuary, level: 3 },
  ],
};

export const exorcismus: Skill = {
  name: "Exorcismus",
  description:
    "Damages Demon and Undead race monsters, and Shadow element monsters, with a chance to instantly kill them.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/priest/exorcismus.png",
  preRequisites: [{ skill: resurrection, level: 1 }],
};

export const magnusExorcismus: Skill = {
  name: "Magnus Exorcismus",
  description:
    "Summons a holy cross on the ground that lasts 5~14 seconds, damaging all enemies for 1~10 MATKx1 hits at 2-second intervals. Monsters not of the Demon race, Shadow, Ghost, and Undead element receive greatly reduced damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/priest/magnus_exorcismus.png",
  preRequisites: [{ skill: exorcismus, level: 1 }],
};

export const redemptio: Skill = {
  name: "Redemptio",
  description: "Resurrects all nearby party members with half HP.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/priest/redemptio.png",
  preRequisites: [],
};

export const priestSkills = [
  impositioManus,
  aspersio,
  kyrieEleison,
  magnificat,
  lexDivina,
  lexAeterna,
  gloria,
  bsSacramenti,
  statusRecovery,
  resurrection,
  sanctuary,
  suffragium,
  redemptio,
  safetyWallPriest,
  exorcismus,
  magnusExorcismus,
];
