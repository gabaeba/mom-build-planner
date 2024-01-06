import { Skill, SkillType } from "../../../common/types";
import {
  attentionConcentrate,
  doubleStrafing,
  owlsEye,
  precision,
  vulturesEye,
} from "../archer/skills";
import { ankleSnare, falconMastery, steelCrow } from "../hunter/skills";

export const bowMaster: Skill = {
  name: "Bow Master",
  description:
    "Increases Damage dealt and adds damage resistance while wearing Bows.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/sniper/bow_master.png",
  preRequisites: [{ skill: doubleStrafing, level: 10 }],
};

export const arrowStorm: Skill = {
  name: "Arrow Storm",
  description:
    "Deal high damage to many targets in a wide area, consuming additional arrows.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/sniper/arrow_storm.png",
  preRequisites: [{ skill: bowMaster, level: 5 }],
};

export const windWalk: Skill = {
  name: "Wind Walk",
  description:
    "Increase the entire party's move speed, flee and perfect dodge for the skill's duration.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/sniper/wind_walk.png",
  preRequisites: [{ skill: attentionConcentrate, level: 9 }],
};

export const camouflage: Skill = {
  name: "Camouflage",
  description:
    "Puts the user in a semi-cloaked status, periodically increasing ATK and CRIT, while reducing DEF.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/sniper/camouflage.png",
  preRequisites: [{ skill: windWalk, level: 5 }],
};

export const falconAssault: Skill = {
  name: "Falcon Assault",
  description:
    "Deal a single defense ignoring attack to a target based on casters DEX and INT.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/sniper/falcon_assault.png",
  preRequisites: [{ skill: steelCrow, level: 7 }],
};

export const falconClaws: Skill = {
  name: "Falcon Claws",
  description:
    "Increases the damage of Falcon attacks and causes them to lower the target's DEF.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/sniper/falcon_claws.png",
  preRequisites: [{ skill: falconAssault, level: 3 }],
};

export const trueSight: Skill = {
  name: "True Sight",
  description:
    "Increases all stats by 5 regardless of skill level. Also increases ATK, Hit, and Crit for the skill's duration.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/sniper/true_sight.png",
  preRequisites: [
    { skill: owlsEye, level: 10 },
    { skill: vulturesEye, level: 10 },
    { skill: attentionConcentrate, level: 10 },
    { skill: falconMastery, level: 1 },
  ],
};

export const fearBreeze: Skill = {
  name: "Fear Breeze",
  description:
    "Gives the user a chance to shoot several arrows rapidly by chance when attacking. Increases Blitz Beat damage while active.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/sniper/fear_breeze.png",
  preRequisites: [{ skill: trueSight, level: 5 }],
};

export const sharpShooting: Skill = {
  name: "Sharp Shooting",
  description: "Deal up to 450% damage to all targets in a linear 12x3 area.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/sniper/sharp_shooting.png",
  preRequisites: [
    { skill: precision, level: 5 },
    { skill: doubleStrafing, level: 7 },
    { skill: trueSight, level: 5 },
  ],
};

export const stickyTrap: Skill = {
  name: "Sticky Trap",
  description:
    "Places a trap on the ground that slows enemies' attack and movement speeds.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/sniper/sticky_trap.png",
  preRequisites: [{ skill: ankleSnare, level: 3 }],
};

export const unlimit: Skill = {
  name: "Unlimit",
  description:
    "A short duration self buff that increases Attack Speed and Crit damage while reducing Aftercast Delay.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/sniper/unlimit.png",
  preRequisites: [{ skill: fearBreeze, level: 3 }],
};

export const sniperSkills = [
  bowMaster,
  arrowStorm,
  windWalk,
  camouflage,
  falconAssault,
  falconClaws,
  trueSight,
  fearBreeze,
  sharpShooting,
  stickyTrap,
  unlimit,
];
