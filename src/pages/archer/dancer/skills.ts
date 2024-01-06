import { Skill, SkillType } from "../../../common/types";

export const adaptionToCircumstances: Skill = {
  name: "Adaption to Circumstances",
  description:
    "Cancels active Performance Skill the caster is performing. If a song is canceled, buffs the dancer's movespeed and SP regen.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/dancer/adaption_to_circumstances.png",
  preRequisites: [],
};

export const encore: Skill = {
  name: "Encore",
  description:
    "Recast the last Performance Skill that was cast at half of the SP cost.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/dancer/encore.png",
  preRequisites: [{ skill: adaptionToCircumstances, level: 1 }],
};

export const scream: Skill = {
  name: "Scream",
  description:
    "Inflicts Confuse effect on monsters and party members within caster's view by chance.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/dancer/scream.png",
  preRequisites: [{ skill: encore, level: 1 }],
};

export const dancingLesson: Skill = {
  name: "Dancing Lesson",
  description:
    "Increases the damage inflicted with Whip class weapons, and enhance the quality of Dance and Ensemble skills.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/dancer/dancing_lesson.png",
  preRequisites: [],
};

export const throwArrow: Skill = {
  name: "Throw Arrow",
  description: "Slings an arrow at an enemy with a whip.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/dancer/throw_arrow.png",
  preRequisites: [{ skill: dancingLesson, level: 3 }],
};

export const uglyDance: Skill = {
  name: "Ugly Dance",
  description: "Deplete SP of all targets within the 11x11 area of effect.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/dancer/ugly_dance.png",
  preRequisites: [
    { skill: dancingLesson, level: 1 },
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
    { skill: uglyDance, level: 3 },
    { skill: dancingLesson, level: 10 },
  ],
};

export const humming: Skill = {
  name: "Humming",
  description:
    "Improves HIT and Ranged Physical Damage of all players within the 9x9 area of effect.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/dancer/humming.png",
  preRequisites: [{ skill: uglyDance, level: 3 }],
};

export const serviceForYou: Skill = {
  name: "Service for You",
  description:
    "Increase max SP and SP regeneration while reducing the SP consumption of all players within the 9x9 area of effect.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/dancer/service_for_you.png",
  preRequisites: [{ skill: uglyDance, level: 3 }],
};

export const fortunesKiss: Skill = {
  name: "Fortune's Kiss",
  description:
    "Improves CRIT rate of all players within the 9x9 area of effect.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/dancer/fortunes_kiss.png",
  preRequisites: [{ skill: uglyDance, level: 3 }],
};

export const pleaseDontForgeMe: Skill = {
  name: "Please Don't Forget Me",
  description:
    "Decrease attack and movement speed of all enemies within the 9x9 area of effect.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/dancer/please_dont_forget_me.png",
  preRequisites: [{ skill: uglyDance, level: 3 }],
};

export const invulnerableSiegfried: Skill = {
  name: "Invulnerable Siegfried",
  description:
    "Increases the effectiveness of the Healing skills for party members in the 9x9 area of effect.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/dancer/invulnerable_siegfried.png",
  preRequisites: [{ skill: fortunesKiss, level: 10 }],
};

export const aDrumOnTheBattlefield: Skill = {
  name: "A Drum on the Battlefield",
  description:
    "Increases the attack for all other party members in the 9x9 area of effect.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/dancer/a_drum_on_the_battlefield.png",
  preRequisites: [{ skill: serviceForYou, level: 10 }],
};

export const theRingOfNibelungen: Skill = {
  name: "The Ring of Nibelungen",
  description:
    "Adds DEF piercing ATK to party members that are wielding level 3 and 4 weapons.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/dancer/the_ring_of_nibelungen.png",
  preRequisites: [{ skill: aDrumOnTheBattlefield, level: 3 }],
};

export const lokisVeil: Skill = {
  name: "Loki's Veil",
  description:
    "Casts a 9x9 area around the caster where all skills are disabled.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/dancer/lokis_veil.png",
  preRequisites: [{ skill: pleaseDontForgeMe, level: 10 }],
};

export const eternalChaos: Skill = {
  name: "Eternal Chaos",
  description:
    "Reduces the DEF and vit-type DEF by for all enemies in the 9x9 area of effect.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/dancer/eternal_chaos.png",
  preRequisites: [{ skill: lokisVeil, level: 1 }],
};

export const lullaby: Skill = {
  name: "Lullaby",
  description: "Sing a dreamy song to put enemies in a 15x15 area to sleep.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/dancer/lullaby.png",
  preRequisites: [{ skill: humming, level: 10 }],
};

export const intoTheAbyss: Skill = {
  name: "Into the Abyss",
  description:
    "Cast a 15x15 cell area around the casters that nullifies item costs for most skills.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/dancer/into_the_abyss.png",
  preRequisites: [{ skill: lullaby, level: 1 }],
};

export const winkOfCharm: Skill = {
  name: "Wink of Charm",
  description:
    "Wink at a small group of enemies, dealing some magical damage and attempting to inflict Silence status effect.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/dancer/wink_of_charm.png",
  preRequisites: [],
};

export const dancerSkills = [
  adaptionToCircumstances,
  encore,
  scream,
  dancingLesson,
  throwArrow,
  uglyDance,
  longingForFreedom,
  humming,
  serviceForYou,
  fortunesKiss,
  pleaseDontForgeMe,
  invulnerableSiegfried,
  aDrumOnTheBattlefield,
  theRingOfNibelungen,
  lokisVeil,
  eternalChaos,
  lullaby,
  intoTheAbyss,
  winkOfCharm,
];
