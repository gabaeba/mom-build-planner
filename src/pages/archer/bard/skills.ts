import { Skill, SkillType } from "../../../common/types";

export const adaptionToCircumstances: Skill = {
  name: "Adaption to Circumstances",
  description:
    "Cancels active Performance Skill the caster is performing. If a song is canceled, buffs the bard's movespeed and SP regen.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/bard/adaption_to_circumstances.png",
  preRequisites: [],
};

export const encore: Skill = {
  name: "Encore",
  description:
    "Recast the last Performance Skill that was cast at half of the SP cost.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/bard/encore.png",
  preRequisites: [{ skill: adaptionToCircumstances, level: 1 }],
};

export const frostJoker: Skill = {
  name: "Frost Joker",
  description:
    "Freeze monsters and party members within caster's view by chance.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/bard/frost_joker.png",
  preRequisites: [{ skill: encore, level: 1 }],
};

export const musicLessons: Skill = {
  name: "Music Lessons",
  description:
    "Increases damage with Instruments, Movement Speed while singing and the effect of certain Performance Skills.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/bard/music_lessons.png",
  preRequisites: [],
};

export const dissonance: Skill = {
  name: "Dissonance",
  description:
    "Hits enemies in a 11x11 area with a slow sonic attack, piercing their defense.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/bard/dissonance.png",
  preRequisites: [
    { skill: musicLessons, level: 1 },
    { skill: adaptionToCircumstances, level: 1 },
  ],
};

export const longingForFreedom: Skill = {
  name: "Longing for Freedom",
  description:
    "Allows the user to move, attack and use skills while performing an ensemble.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/bard/longing_for_freedom.png",
  preRequisites: [
    { skill: dissonance, level: 3 },
    { skill: musicLessons, level: 10 },
  ],
};

export const musicalStrike: Skill = {
  name: "Musical Strike",
  description:
    "Use an instrument-class weapon to do ranged damage to a single target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/bard/musical_strike.png",
  preRequisites: [{ skill: musicLessons, level: 3 }],
};

export const assassinCrossOfSunset: Skill = {
  name: "Assassin Cross of Sunset",
  description: "Increases ASPD of all players in the 9x9 area of effect.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/bard/assassin_cross_of_sunset.png",
  preRequisites: [{ skill: dissonance, level: 3 }],
};

export const aPoemOfBragi: Skill = {
  name: "A Poem of Bragi",
  description:
    "Reduces Cast Time and Cast Delay of skills used inside the 7x7 area of effect.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/bard/a_poem_of_bragi.png",
  preRequisites: [{ skill: dissonance, level: 3 }],
};

export const aWhistle: Skill = {
  name: "A Whistle",
  description:
    "Raises Flee Rate and Perfect Dodge of all players in the 9x9 area of effect.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/bard/a_whistle.png",
  preRequisites: [{ skill: dissonance, level: 3 }],
};

export const appleOfIdun: Skill = {
  name: "Apple of Idun",
  description:
    "Increases the the Max HP of all players in the area of effect. Heals over time.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/bard/a_whistle.png",
  preRequisites: [{ skill: dissonance, level: 3 }],
};

export const aDrumOnTheBattlefield: Skill = {
  name: "A Drum on the Battlefield",
  description:
    "Increases the attack for all other party members in the 9x9 area of effect.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/bard/a_drum_on_the_battlefield.png",
  preRequisites: [{ skill: appleOfIdun, level: 10 }],
};

export const theRingOfNibelungen: Skill = {
  name: "The Ring of Nibelungen",
  description:
    "Adds DEF piercing ATK to party members that are wielding level 3 and 4 weapons.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/bard/the_ring_of_nibelungen.png",
  preRequisites: [{ skill: aDrumOnTheBattlefield, level: 3 }],
};

export const lokisVeil: Skill = {
  name: "Loki's Veil",
  description:
    "Casts a 9x9 area around the caster where all skills are disabled.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/bard/lokis_veil.png",
  preRequisites: [{ skill: assassinCrossOfSunset, level: 10 }],
};

export const eternalChaos: Skill = {
  name: "Eternal Chaos",
  description:
    "Reduces the DEF and vit-type DEF by for all enemies in the 9x9 area of effect.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/bard/eternal_chaos.png",
  preRequisites: [{ skill: lokisVeil, level: 1 }],
};

export const invulnerableSiegfried: Skill = {
  name: "Invulnerable Siegfried",
  description:
    "Increases the effectiveness of the Healing skills for party members in the 9x9 area of effect.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/bard/invulnerable_siegfried.png",
  preRequisites: [{ skill: aPoemOfBragi, level: 10 }],
};

export const lullaby: Skill = {
  name: "Lullaby",
  description: "Sing a dreamy song to put enemies in a 15x15 area to sleep.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/bard/lullaby.png",
  preRequisites: [{ skill: aWhistle, level: 10 }],
};

export const intoTheAbyss: Skill = {
  name: "Into the Abyss",
  description:
    "Cast a 15x15 cell area around the casters that nullifies item costs for most skills.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/bard/into_the_abyss.png",
  preRequisites: [{ skill: lullaby, level: 1 }],
};

export const pangVoice: Skill = {
  name: "Pang Voice",
  description:
    "The Bard screams out at a small group of enemies, dealing some magical damage and attempting to inflict Silence status effect.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/bard/pang_voice.png",
  preRequisites: [],
};

export const bardSkills = [
  adaptionToCircumstances,
  encore,
  frostJoker,
  musicLessons,
  dissonance,
  longingForFreedom,
  musicalStrike,
  assassinCrossOfSunset,
  aPoemOfBragi,
  aWhistle,
  appleOfIdun,
  aDrumOnTheBattlefield,
  theRingOfNibelungen,
  lokisVeil,
  eternalChaos,
  invulnerableSiegfried,
  lullaby,
  intoTheAbyss,
  pangVoice,
];
