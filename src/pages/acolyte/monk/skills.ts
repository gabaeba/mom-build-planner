import { Skill, SkillType } from "../../../common/types";
import { maceMastery, repelEvil } from "../acolyte/skills";

export const ironHand: Skill = {
  name: "Iron Hand",
  description: "Increases damage done with knuckle class weapons.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/monk/iron_hand.png",
  preRequisites: [
    { skill: repelEvil, level: 10 },
    { skill: maceMastery, level: 10 },
  ],
};

export const callSpirits: Skill = {
  name: "Call Spirits",
  description:
    "Allows the Monk to summon 1~5 spirit spheres which enable many powerful attacks.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/monk/call_spirits.png",
  preRequisites: [{ skill: ironHand, level: 2 }],
};

export const absorbSpirits: Skill = {
  name: "Absorb Spirits",
  description:
    "Allows the Monk to recover SP by absorbing previously summoned spirit spheres.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/monk/absorb_spirits.png",
  preRequisites: [{ skill: callSpirits, level: 5 }],
};

export const dodge: Skill = {
  name: "Dodge",
  description: "Adds 4~20 Flee.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/monk/dodge.png",
  preRequisites: [
    { skill: callSpirits, level: 5 },
    { skill: ironHand, level: 5 },
  ],
};

export const fury: Skill = {
  name: "Fury",
  description:
    "Gradually increases Combo damage. Also enables use of Asura Strike.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/monk/fury.png",
  preRequisites: [{ skill: absorbSpirits, level: 1 }],
};

export const investigate: Skill = {
  name: "Investigate",
  description:
    "Consumes a single spirit sphere to attack a single target (ATKx3.5~9.5), damage is higher based on the target's DEF.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/monk/finger_offensive.png",
  preRequisites: [{ skill: callSpirits, level: 5 }],
};

export const fingerOffensive: Skill = {
  name: "Finger Offensive",
  description:
    "Throws numerous spirit spheres at a single target to deal up to 5 hits of 1.5~3.5x damage each, depending on number of spirit spheres on the character.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/monk/finger_offensive.png",
  preRequisites: [{ skill: investigate, level: 3 }],
};

export const asuraStrike: Skill = {
  name: "Asura Strike",
  description:
    "Deals a single attack consuming all of the caster's SP to deal massive damage.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/monk/asura_strike.png",
  preRequisites: [
    { skill: fury, level: 3 },
    { skill: fingerOffensive, level: 3 },
  ],
};

export const tripleAttack: Skill = {
  name: "Triple Attack",
  description:
    "Enables regular melee attacks to hit a target three times instead of once by 12~30% chance.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/monk/triple_attack.png",
  preRequisites: [{ skill: dodge, level: 5 }],
};

export const chainCombo: Skill = {
  name: "Chain Combo",
  description:
    "Deals 4 hits in rapid succession to a single target at ATKx2~4, this kill is only usable in the delay after Triple Attack.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/monk/chain_combo.png",
  preRequisites: [{ skill: tripleAttack, level: 5 }],
};

export const comboFinish: Skill = {
  name: "Combo Finish",
  description:
    "Deals up to 3~5.4x damage to a single target, but is only usable in the delay after Chain Combo.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/monk/combo_finish.png",
  preRequisites: [{ skill: chainCombo, level: 3 }],
};

export const steelBody: Skill = {
  name: "Steel Body",
  description:
    "For 30~150 seconds, increases and multiply the user's hard defense and set magical defense to 90.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/monk/steel_body.png",
  preRequisites: [{ skill: comboFinish, level: 3 }],
};

export const bladeStop: Skill = {
  name: "Blade Stop",
  description:
    "Catch an enemy's sword mid-attack in 0.5~1.3 seconds, locking the Monk and the attacker in place for 20~60 seconds.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/monk/blade_stop.png",
  preRequisites: [{ skill: dodge, level: 5 }],
};

export const spiritsRecovery: Skill = {
  name: "Spirits Recovery",
  description:
    "Enables the Monk to regenerate HP and SP at anytime by sitting even if over 50% weight.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/monk/spirits_recovery.png",
  preRequisites: [{ skill: bladeStop, level: 2 }],
};

export const bodyRelocation: Skill = {
  name: "Body Relocation",
  description:
    "Instantly transports the Monk to a targeted cell as long as a direct path to that cell exists.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/monk/body_relocation.png",
  preRequisites: [
    { skill: spiritsRecovery, level: 2 },
    { skill: asuraStrike, level: 3 },
  ],
};

export const kiTranslation: Skill = {
  name: "Ki Translation",
  description:
    "Transfers all of the Monk's spirit spheres to another party member.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/monk/ki_translation.png",
  preRequisites: [],
};

export const kiExplosion: Skill = {
  name: "Ki Explosion",
  description:
    "Hit a single target for 300% damage, all nearby targets are knocked back and may be stunned.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/monk/ki_explosion.png",
  preRequisites: [],
};

export const monkSkills = [
  ironHand,
  callSpirits,
  absorbSpirits,
  dodge,
  fury,
  investigate,
  fingerOffensive,
  asuraStrike,
  tripleAttack,
  chainCombo,
  comboFinish,
  steelBody,
  bladeStop,
  spiritsRecovery,
  bodyRelocation,
  kiTranslation,
  kiExplosion,
];
