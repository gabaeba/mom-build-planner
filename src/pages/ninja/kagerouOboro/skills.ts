import { Skill, SkillType } from "../../../common/types";
import { coinFlip } from "../../gunslinger/gunslinger/skills";
import {
  castOffCicadaShell,
  coinTrick,
  illusionThrust,
  ninpouTraining,
  shadowSlash,
  throwKunai,
} from "../ninja/skills";

export const earthCharm: Skill = {
  name: "Earth Charm",
  description:
    "Summon up to 10 earth charms, increasing ATK, DEF, and damage to Wind property enemies.",
  maxLevel: 2,
  type: SkillType.supportive,
  icon: "./assets/kagerouOboro/earth_charm.png",
  preRequisites: [],
};

export const fireCharm: Skill = {
  name: "Fire Charm",
  description:
    "Summon up to 10 fire charms, increasing fire property magic attacks and damage to Earth property enemies.",
  maxLevel: 2,
  type: SkillType.supportive,
  icon: "./assets/kagerouOboro/fire_charm.png",
  preRequisites: [],
};

export const iceCharm: Skill = {
  name: "Ice Charm",
  description:
    "Summon up to 10 ice charms, increasing ice property Magic attacks and damage to Fire property enemies.",
  maxLevel: 2,
  type: SkillType.supportive,
  icon: "./assets/kagerouOboro/ice_charm.png",
  preRequisites: [],
};

export const windCharm: Skill = {
  name: "Wind Charm",
  description:
    "Summon up to 10 wind charms, increasing wind property Magic attacks and damage to Water property enemies.",
  maxLevel: 2,
  type: SkillType.supportive,
  icon: "./assets/kagerouOboro/wind_charm.png",
  preRequisites: [],
};

export const kaihou: Skill = {
  name: "Kaihou",
  description: "Release the summoned Charms to deal damage to the target.",
  maxLevel: 1,
  type: SkillType.offensive,
  icon: "./assets/kagerouOboro/kaihou.png",
  preRequisites: [
    { skill: fireCharm, level: 1 },
    { skill: iceCharm, level: 1 },
    { skill: windCharm, level: 1 },
    { skill: earthCharm, level: 1 },
  ],
};

export const zenkai: Skill = {
  name: "Zenkai",
  description:
    "Embue the ground with Earth, Fire, Wind or Water Property. Each element gives different effects.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/kagerouOboro/zenkai.png",
  preRequisites: [{ skill: kaihou, level: 1 }],
};

export const crossStrike: Skill = {
  name: "Cross Strike",
  description:
    "Deal damage to an enemy and inflict the Cross Wound status. Enemies in Cross Wound status take more damage from physical Ninja tree skills.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/kagerouOboro/cross_strike.png",
  preRequisites: [{ skill: illusionThrust, level: 10 }],
};

export const bewitchedCicada: Skill = {
  name: "Bewitched Cicada",
  description: "Deals damage to attacks who trigger Cast-off Cicada Shell.",
  maxLevel: 3,
  type: SkillType.active,
  icon: "./assets/kagerouOboro/bewitched_cicada.png",
  preRequisites: [{ skill: castOffCicadaShell, level: 3 }],
};

export const shockIllusion: Skill = {
  name: "Shock Illusion",
  description:
    "Temporarily reduces the target's attack speed, flee, and attack.",
  maxLevel: 3,
  type: SkillType.active,
  icon: "./assets/kagerouOboro/shock_illusion.png",
  preRequisites: [{ skill: bewitchedCicada, level: 2 }],
};

export const deathIllusion: Skill = {
  name: "Death Illusion",
  description: "Curses the target with a chance of also inflicting Coma.",
  maxLevel: 3,
  type: SkillType.active,
  icon: "./assets/kagerouOboro/death_illusion.png",
  preRequisites: [{ skill: shockIllusion, level: 2 }],
};

export const makibishi: Skill = {
  name: "Makibishi",
  description:
    "Throw Makibishi on the ground. Enemies that step on the effected area have a chance to become immobilized and stunned.",
  maxLevel: 3,
  type: SkillType.active,
  icon: "./assets/kagerouOboro/makibishi.png",
  preRequisites: [
    { skill: coinFlip, level: 1 },
    { skill: coinTrick, level: 1 },
  ],
};

export const izayoi: Skill = {
  name: "Izayoi",
  description: "Drains SP to improve MATK and cast times.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/kagerouOboro/izayoi.png",
  preRequisites: [{ skill: ninpouTraining, level: 5 }],
};

export const pureSoul: Skill = {
  name: "Pure Soul",
  description:
    "The caster is immobilized and prevented from using skills while rapidly regenerating HP and SP.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/kagerouOboro/pure_soul.png",
  preRequisites: [{ skill: izayoi, level: 3 }],
};

export const ninjaShroud: Skill = {
  name: "Ninja Shroud",
  description:
    "Puts the caster in a state similar to the Assassin skill Cloaking.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/kagerouOboro/ninja_shroud.png",
  preRequisites: [{ skill: shadowSlash, level: 3 }],
};

export const soulCutter: Skill = {
  name: "Soul Cutter",
  description:
    "Deals damage to the target. If the target is under the effect of a Soul Linker Spirit buff, it is forcibly removed and the target takes additional damage.",
  maxLevel: 3,
  type: SkillType.offensive,
  icon: "./assets/kagerouOboro/soul_cutter.png",
  preRequisites: [{ skill: crossStrike, level: 3 }],
};

export const kunaiExplode: Skill = {
  name: "Kunai Explode",
  description:
    "Throw an explosive Kunai at the ground, dealing area damage with a chance of inflicting Burning.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/kagerouOboro/kunai_explode.png",
  preRequisites: [{ skill: throwKunai, level: 5 }],
};

export const kunaiSplash: Skill = {
  name: "Kunai Splash",
  description:
    "Inflict damage with a kunai to all enemies within a radius around the caster.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/kagerouOboro/kunai_splash.png",
  preRequisites: [{ skill: kunaiExplode, level: 3 }],
};

export const swirlingPetal: Skill = {
  name: "Swirling Petal",
  description: "Throw the Huuma to deal damage to all enemies in a 7x7 area.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/kagerouOboro/swirling_petal.png",
  preRequisites: [{ skill: kunaiExplode, level: 3 }],
};

export const rightHandMastery: Skill = {
  name: "Right Hand Mastery",
  description: "Recovers the damage lost from dual wielding.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/kagerouOboro/right_hand_mastery.png",
  preRequisites: [],
};

export const leftHandMastery: Skill = {
  name: "Left Hand Mastery",
  description:
    "Recovers the damage lost from dual wielding. At max level there is no penalty for dual wielding.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/kagerouOboro/left_hand_mastery.png",
  preRequisites: [],
};

export const shadowDance: Skill = {
  name: "Shadow Dance",
  description:
    "Creates a Shinobi clone and causes the caster to backslide a certain number of cells depending on the skill level.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/kagerouOboro/shadow_dance.png",
  preRequisites: [],
};

export const trampleShadows: Skill = {
  name: "Trample Shadows",
  description:
    "Slowstargets using specific hiding skills temporarily and forcibly reveals them.",
  maxLevel: 3,
  type: SkillType.active,
  icon: "./assets/kagerouOboro/trample_shadows.png",
  preRequisites: [{ skill: shadowDance, level: 2 }],
};

export const shadowWarrior: Skill = {
  name: "Shadow Warrior",
  description:
    "Imbues skill: Double Attack to a target for a period of time. When used on Ninja classes, also increases flee.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/kagerouOboro/shadow_warrior.png",
  preRequisites: [{ skill: trampleShadows, level: 1 }],
};

export const ominousMoonlight: Skill = {
  name: "Ominous Moonlight",
  description:
    "The target will take damage when it receives certain HP increasing skills.",
  maxLevel: 3,
  type: SkillType.active,
  icon: "./assets/kagerouOboro/ominous_moonlight.png",
  preRequisites: [],
};

export const moonlightFantasy: Skill = {
  name: "Moonlight Fantasy",
  description:
    "Causes single-target magic damage received by the target to spread to others nearby while reducing damage inflicted.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/kagerouOboro/moonlight_fantasy.png",
  preRequisites: [{ skill: ominousMoonlight, level: 3 }],
};

export const kagerouOboroSkills = [
  earthCharm,
  fireCharm,
  iceCharm,
  windCharm,
  kaihou,
  zenkai,
  crossStrike,
  bewitchedCicada,
  deathIllusion,
  shockIllusion,
  makibishi,
  izayoi,
  pureSoul,
  ninjaShroud,
  soulCutter,
  kunaiExplode,
  kunaiSplash,
  swirlingPetal,
  rightHandMastery,
  leftHandMastery,
  shadowDance,
  trampleShadows,
  shadowWarrior,
  ominousMoonlight,
  moonlightFantasy,
];
