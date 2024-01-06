import { Skill, SkillType } from "../../../common/types";
import { attentionConcentrate } from "../archer/skills";
import {
  dancingLesson,
  encore,
  longingForFreedom,
  throwArrow,
  uglyDance,
} from "../dancer/skills";

export const showmanship: Skill = {
  name: "Showmanship",
  description:
    "Increases damage dealt with Instruments and improves MATK while wielding Instruments.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/gypsy/showmanship.png",
  preRequisites: [
    { skill: uglyDance, level: 3 },
    { skill: throwArrow, level: 5 },
    { skill: dancingLesson, level: 10 },
  ],
};

export const arrowVulcan: Skill = {
  name: "Arrow Vulcan",
  description:
    "Strike targets multiple times, dealing high damage and increasing the power of subsequent Musical Strikes.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/gypsy/arrow_vulcan.png",
  preRequisites: [{ skill: showmanship, level: 5 }],
};

export const chaoticVoice: Skill = {
  name: "Chaotic Voice",
  description:
    "Causes the active song to deal damage over time within its area of effect.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/gypsy/chaotic_voice.png",
  preRequisites: [{ skill: uglyDance, level: 5 }],
};

export const soundOfDestruction: Skill = {
  name: "Sound of Destruction",
  description:
    "Plays a destructive note, dispelling enemy performances and stunning if used against monsters.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gypsy/sound_of_destruction.png",
  preRequisites: [],
};

export const reverberation: Skill = {
  name: "Reverberation",
  description:
    "Places a musical note on the ground, detonating in a 5x5 aoe for mixed ATK and MATK damage.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gypsy/reverberation.png",
  preRequisites: [{ skill: soundOfDestruction, level: 5 }],
};

export const dominionImpulse: Skill = {
  name: "Dominion Impulse",
  description:
    "Activates all Reverberation notes within 10 cells of the skill's target location.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/gypsy/dominion_impulse.png",
  preRequisites: [{ skill: reverberation, level: 1 }],
};

export const flameTongue: Skill = {
  name: "Flame Tongue",
  description:
    "Strikes the target with the whip, dealing damage and burning them. Damage increased based on duration of the performance.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gypsy/flame_tongue.png",
  preRequisites: [{ skill: encore, level: 1 }],
};

export const moonlitWaterMill: Skill = {
  name: "Moonlit Water Mill",
  description:
    "Create a 9x9 area with a Gypsy that prevents enemies from entering and reduces incoming damage.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/gypsy/moonlit_water_mill.png",
  preRequisites: [{ skill: longingForFreedom, level: 3 }],
};

export const wandOfHermode: Skill = {
  name: "Wand of Hermode",
  description:
    "Protect allies from Magic damage while increasing their vulnerability to Physical damage.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/gypsy/wand_of_hermode.png",
  preRequisites: [{ skill: moonlitWaterMill, level: 1 }],
};

export const tarotCardOfDate: Skill = {
  name: "Tarot Card of Fate",
  description:
    "Up to a 80% chance to cause 1 of 14 random effects on a target. Success rate is halved against players.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/gypsy/tarot_card_of_fate.png",
  preRequisites: [
    { skill: attentionConcentrate, level: 10 },
    { skill: uglyDance, level: 3 },
  ],
};

export const improvisedSong: Skill = {
  name: "Improvised Song",
  description: "Casts a random Mage or Ninja branch spell.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gypsy/improvised_song.png",
  preRequisites: [{ skill: tarotCardOfDate, level: 2 }],
};

export const sirensCall: Skill = {
  name: "Siren's Call",
  description:
    "Performs a chant that captivates all enemies in an area around the user by chance, to prevent them from attacking or targeting the user for a set duration.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/gypsy/sirens_call.png",
  preRequisites: [{ skill: chaoticVoice, level: 5 }],
};

export const perfectRythm: Skill = {
  name: "Perfect Rythm",
  description: "Enables the performer's songs to affect themselves.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/gypsy/perfect_rythm.png",
  preRequisites: [{ skill: showmanship, level: 10 }],
};

export const gypsySkills = [
  showmanship,
  arrowVulcan,
  chaoticVoice,
  soundOfDestruction,
  reverberation,
  dominionImpulse,
  flameTongue,
  moonlitWaterMill,
  wandOfHermode,
  tarotCardOfDate,
  improvisedSong,
  sirensCall,
  perfectRythm,
];
