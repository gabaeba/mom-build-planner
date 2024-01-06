import { Skill, SkillType } from "../../../common/types";
import { attentionConcentrate } from "../archer/skills";

export const skidTrap: Skill = {
  name: "Skid Trap",
  description:
    "Set a trap that will cause an enemy to slide in a certain direction once it is triggered.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/hunter/skid_trap.png",
  preRequisites: [],
};

export const ankleSnare: Skill = {
  name: "Ankle Snare",
  description:
    "Use 1 Trap item to set a trap that will immobilize an enemy for a set duration.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/hunter/ankle_snare.png",
  preRequisites: [{ skill: skidTrap, level: 1 }],
};

export const beastBane: Skill = {
  name: "Beast Bane",
  description: "Increases damage when using bow class weapons.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/hunter/beast_bane.png",
  preRequisites: [],
};

export const falconMastery: Skill = {
  name: "Falcon Mastery",
  description:
    "Enables Hunters to rent and command a Falcon, an exclusive sub-character for the Hunter class.",
  maxLevel: 1,
  type: SkillType.passive,
  icon: "./assets/hunter/falcon_mastery.png",
  preRequisites: [{ skill: beastBane, level: 1 }],
};

export const blitzBeat: Skill = {
  name: "Blitz Beat",
  description:
    "Your Falcon attacks an enemy and all surrounding foes within a 3x3 area. Can also go off passively while attacking.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/hunter/blitz_beat.png",
  preRequisites: [{ skill: falconMastery, level: 1 }],
};

export const detect: Skill = {
  name: "Detect",
  description:
    "Your Falcon attacks an enemy and all surrounding foes within a 3x3 area. Can also go off passively while attacking.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/hunter/detect.png",
  preRequisites: [
    { skill: falconMastery, level: 1 },
    { skill: attentionConcentrate, level: 1 },
  ],
};

export const flasher: Skill = {
  name: "Flasher",
  description: "Set a trap that will emit bright light that can Blind enemies.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/hunter/flasher.png",
  preRequisites: [{ skill: skidTrap, level: 1 }],
};

export const freezingTrap: Skill = {
  name: "Freezing Trap",
  description:
    "Do Water damage and possibly freeze to enemies in a 5x5 area when triggered.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/hunter/freezing_trap.png",
  preRequisites: [{ skill: flasher, level: 1 }],
};

export const landMine: Skill = {
  name: "Land Mine",
  description:
    "A trap that explodes when triggered, inflicting Earth damage with a chance to Stun enemies in a 5x5 area.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/hunter/land_mine.png",
  preRequisites: [],
};

export const removeTrap: Skill = {
  name: "Remove Trap",
  description: "Remove a trap laid by yourself, recovering the Trap item.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/hunter/remove_trap.png",
  preRequisites: [{ skill: landMine, level: 1 }],
};

export const shockwaveTrap: Skill = {
  name: "Shockwave Trap",
  description: "Set a trap to drain SP from enemies when triggered.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/hunter/shockwave_trap.png",
  preRequisites: [{ skill: ankleSnare, level: 1 }],
};

export const sandman: Skill = {
  name: "Sandman",
  description:
    "Set a trap that can put enemies to Sleep within a 7x7 area once triggered.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/hunter/sandman.png",
  preRequisites: [{ skill: flasher, level: 1 }],
};

export const blastMine: Skill = {
  name: "Blast Mine",
  description: "Set a trap that does Wind damage in a 5x5 area when triggered.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/hunter/blast_mine.png",
  preRequisites: [
    { skill: freezingTrap, level: 1 },
    { skill: landMine, level: 1 },
    { skill: sandman, level: 1 },
  ],
};

export const claymoreTrap: Skill = {
  name: "Claymore Trap",
  description:
    "Set a trap that will explode, causing Fire property damage in a 7x7 area.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/hunter/claymore_trap.png",
  preRequisites: [
    { skill: shockwaveTrap, level: 1 },
    { skill: blastMine, level: 1 },
  ],
};

export const springTrap: Skill = {
  name: "Spring Trap",
  description:
    "Commands your Falcon to remove a set enemy or friendly trap from a distance.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/hunter/spring_trap.png",
  preRequisites: [
    { skill: falconMastery, level: 1 },
    { skill: removeTrap, level: 1 },
  ],
};

export const steelCrow: Skill = {
  name: "Steel Crow",
  description: "Increase damage inflicted by your Falcon.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/hunter/steel_crow.png",
  preRequisites: [{ skill: blitzBeat, level: 5 }],
};

export const talkieBox: Skill = {
  name: "Talkie Box",
  description:
    "Set a trap that will display a user-set text message to whoever steps on it.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/hunter/talkie_box.png",
  preRequisites: [
    { skill: removeTrap, level: 5 },
    { skill: shockwaveTrap, level: 5 },
  ],
};

export const beastStrafing: Skill = {
  name: "Beast Strafing",
  description:
    "Sends the falcon to a target, dealing damage based on STR and INT as well as inflicting various status effects.",
  maxLevel: 1,
  type: SkillType.offensive,
  icon: "./assets/hunter/beast_strafing.png",
  preRequisites: [],
};

export const hunterSkills = [
  skidTrap,
  ankleSnare,
  beastBane,
  falconMastery,
  blitzBeat,
  detect,
  flasher,
  freezingTrap,
  landMine,
  removeTrap,
  shockwaveTrap,
  sandman,
  blastMine,
  claymoreTrap,
  springTrap,
  steelCrow,
  talkieBox,
  beastStrafing,
];
