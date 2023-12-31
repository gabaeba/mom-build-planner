import { Skill, SkillType } from "../../../common/types";
import {
  autoCounter,
  brandishSpear,
  movementMastery,
  spearStab,
  twoHandQuicken,
} from "../knight/skills";
import {
  bash,
  endure,
  increaseHpRecovery,
  ironDefense,
  magnumBreak,
  provoke,
  spearMastery,
  swordMastery,
} from "../swordsman/skills";

export const aerialAssault: Skill = {
  name: "Aerial Assault",
  description:
    "A Spear technique. The Lord Knight leaps a great distance, dealing area damage upon landing.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/lord-knight/aerial_assault.png",
  preRequisites: [
    {
      skill: spearMastery,
      level: 10,
    },
    { skill: brandishSpear, level: 7 },
  ],
};

export const auraBlade: Skill = {
  name: "Aura Blade",
  description:
    "Adds Weapon Mastery type ATK based on user's AGI and increases Critical damage.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/lord-knight/aura_blade.png",
  preRequisites: [{ skill: swordMastery, level: 3 }],
};

export const berserk: Skill = {
  name: "Berserk",
  description:
    "Heightens physical power at the cost of the ability to use skills and reduced defenses.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/lord-knight/berserk.png",
  preRequisites: [],
};

export const clashingSpiral: Skill = {
  name: "Clashing Spiral",
  description:
    "Skewers a single target five times with a spiral technique, dealing ranged damage that is affected by the weapon's weight.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/lord-knight/clashing_spiral.png",
  preRequisites: [],
};

export const concentration: Skill = {
  name: "Concentration",
  description:
    "Increases ATK and Accuracy with any weapon while decreasing DEF and reducing the cast time of Bowling Bash and Brandish Spear.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/lord-knight/concentration.png",
  preRequisites: [
    { skill: increaseHpRecovery, level: 5 },
    { skill: endure, level: 5 },
  ],
};

export const defensiveStance: Skill = {
  name: "Defensive Stance",
  description:
    "Increases damage resistance at the cost of attack speed and ATK.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/lord-knight/defensive_stance.png",
  preRequisites: [
    { skill: ironDefense, level: 10 },
    { skill: endure, level: 7 },
    { skill: movementMastery, level: 5 },
  ],
};

export const headCrush: Skill = {
  name: "Head Crush",
  description:
    "An attack that has a chance of inflicting the Bleeding status on a target and lowering their MATK.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/lord-knight/head_crush.png",
  preRequisites: [{ skill: swordMastery, level: 5 }],
};

export const ignitionBreak: Skill = {
  name: "Ignition Break",
  description:
    "Causes explosion that deals damage to all targets nearby. Targets closer to the player receive higher damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/lord-knight/ignition_break.png",
  preRequisites: [
    { skill: bash, level: 10 },
    { skill: magnumBreak, level: 5 },
  ],
};

export const jointBeat: Skill = {
  name: "Joint Beat",
  description:
    "A ranged area attack that can cause various abnormal status effects.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/lord-knight/joint_beat.png",
  preRequisites: [{ skill: spearStab, level: 3 }],
};

export const majesticSword: Skill = {
  name: "Majestic Sword",
  description:
    "A sword skill that lowers the user's attack speed and damage to grant regular attack splash damage.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/lord-knight/majestic_sword.png",
  preRequisites: [{ skill: auraBlade, level: 3 }],
};

export const parry: Skill = {
  name: "Parry",
  description:
    "Must be wielding a Two-Handed sword. Adds a chance to block physical attacks entirely.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/lord-knight/parry.png",
  preRequisites: [
    { skill: provoke, level: 5 },
    { skill: swordMastery, level: 10 },
    { skill: twoHandQuicken, level: 3 },
  ],
};

export const phantomThrust: Skill = {
  name: "Phantom Thrust",
  description:
    "Spear Exclusive Skill. Strikes a target from far away, pulling that target towards the user.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/lord-knight/phantom_thrust.png",
  preRequisites: [{ skill: spearStab, level: 5 }],
};

export const tensionRelax: Skill = {
  name: "Tension Relax",
  description: "Greatly increases HP regeneration while sitting down.",
  maxLevel: 1,
  type: SkillType.passive,
  icon: "./assets/lord-knight/tension_relax.png",
  preRequisites: [{ skill: increaseHpRecovery, level: 10 }],
};

export const vendetta: Skill = {
  name: "Vendetta",
  description:
    "Lashes out at surrounding enemies, dealing critical damage. Critical chance and damage increases the lower the user's health is.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/lord-knight/vendetta.png",
  preRequisites: [
    { skill: autoCounter, level: 5 },
    { skill: headCrush, level: 2 },
  ],
};

export const lordKnightSkills = [
  aerialAssault,
  auraBlade,
  berserk,
  clashingSpiral,
  concentration,
  defensiveStance,
  headCrush,
  ignitionBreak,
  jointBeat,
  majesticSword,
  parry,
  phantomThrust,
  tensionRelax,
  vendetta,
];
