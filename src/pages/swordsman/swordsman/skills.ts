import { getSkillId } from "../../../common/helpers/skill-ids";
import { Skill, SkillType } from "../../../common/types";

export const bash: Skill = {
  name: "Bash",
  description:
    "Melee attack with additional accuracy, causing up to 400% damage to a single target. After learning Fatal Blow, also has a chance of stunning the target.",
  maxLevel: 10,
  type: SkillType.offensive,
  skillId: getSkillId("Bash"),
  icon: "src/assets/swordsman/bash.png",
  preRequisites: [],
  dependedBy: [
    {
      level: 10,
      skill: getSkillId("Bowling Bash"),
    },
  ],
};

export const provoke: Skill = {
  name: "Provoke",
  description:
    "Increase a target's attack by up to 32% and decrease its defense by up to 55%.",
  maxLevel: 10,
  type: SkillType.active,
  skillId: getSkillId("Provoke"),
  icon: "src/assets/swordsman/provoke.png",
  preRequisites: [],
  dependedBy: [
    {
      skill: getSkillId("Endure"),
      level: 5,
    },
  ],
};

export const endure: Skill = {
  name: "Endure",
  description:
    "Disables Fliching Status for up to 20 Hits and up to 37 seconds. Also grants 10 bonus Mdef with casted.",
  maxLevel: 10,
  type: SkillType.supportive,
  skillId: getSkillId("Endure"),
  icon: "src/assets/swordsman/endure.png",
  preRequisites: [
    {
      skill: provoke,
      level: 5,
    },
  ],
  dependedBy: [],
};

export const increaseHpRecovery: Skill = {
  name: "Increase HP Recovery",
  description:
    "Increases HP recovery while not moving. Also increases efficiency of healing items and Alchemist's Aid Potion.",
  maxLevel: 10,
  type: SkillType.passive,
  skillId: getSkillId("Increase HP Recovery"),
  icon: "src/assets/swordsman/increase_hp_recovery.png",
  preRequisites: [],
  dependedBy: [],
};

export const magnumBreak: Skill = {
  name: "Magnum Break",
  description:
    "Melee AoE attack with added accuracy, dealing up to 300% damage in a 5*5 area the user. Also pushes back items and gives a small fire damage bonus for 10 seconds after use. Drains a bit of HP.",
  maxLevel: 5,
  type: SkillType.offensive,
  skillId: getSkillId("Magnum Break"),
  icon: "src/assets/swordsman/magnum_break.png",
  preRequisites: [
    {
      skill: bash,
      level: 5,
    },
  ],
  dependedBy: [],
};

export const swordMastery: Skill = {
  name: "Sword Mastery",
  description:
    "Increases damage done with One-Handed and two-handed Swords. Increases Bash stun chance if wielding 1h and Crit chance if wielding 2h.",
  maxLevel: 10,
  type: SkillType.passive,
  skillId: getSkillId("Sword Mastery"),
  icon: "src/assets/swordsman/sword_mastery.png",
  preRequisites: [],
  dependedBy: [],
};

export const spearMastery: Skill = {
  name: "Spear Mastery",
  description:
    "Increases damage done with Spears. Increases Perfect Dodge while wielding spears.",
  maxLevel: 10,
  type: SkillType.passive,
  skillId: getSkillId("Spear Mastery"),
  icon: "src/assets/swordsman/spear_mastery.png",
  preRequisites: [],
  dependedBy: [],
};

export const ironDefense: Skill = {
  name: "Iron Defense",
  description: "Increases VIT DEF by up to 50% for up to 240 seconds.",
  maxLevel: 10,
  type: SkillType.supportive,
  skillId: getSkillId("Iron Defense"),
  icon: "src/assets/swordsman/iron_defense.png",
  preRequisites: [],
  dependedBy: [],
};

export const oneHandQuicken: Skill = {
  name: "One-Hand Quicken",
  description:
    "Increases ASPD by up to 20% while wielding a one-handed weapon for up to 300 seconds.",
  maxLevel: 10,
  type: SkillType.supportive,
  skillId: getSkillId("One-Hand Quicken"),
  icon: "src/assets/swordsman/one_hand_quicken.png",
  preRequisites: [],
  dependedBy: [],
};

export const autoBerserk: Skill = {
  name: "Auto Berserk",
  description:
    "Increases attack, but decreases Defense as per Provoke level 10 when HP drops below 25%.",
  maxLevel: 1,
  type: SkillType.passive,
  skillId: getSkillId("Auto Berserk"),
  icon: "src/assets/swordsman/auto_berserk.png",
  preRequisites: [],
  dependedBy: [],
};

export const fatalBlow: Skill = {
  name: "Fatal Blow",
  description: "Adds a chance to stun targets hit with Bash level 6 and up.",
  maxLevel: 1,
  type: SkillType.passive,
  skillId: getSkillId("Fatal Blow"),
  icon: "src/assets/swordsman/fatal_blow.png",
  preRequisites: [],
  dependedBy: [],
};

export const hpRecoveryWhileMoving: Skill = {
  name: "Hp Recovery While Moving",
  description: "Allows HP recovery while walking.",
  maxLevel: 1,
  type: SkillType.passive,
  skillId: getSkillId("Hp Recovery While Moving"),
  icon: "src/assets/swordsman/moving_hp_recovery.png",
  preRequisites: [],
  dependedBy: [],
};
