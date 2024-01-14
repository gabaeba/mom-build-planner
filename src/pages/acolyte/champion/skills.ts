import { Skill, SkillType } from "../../../common/types";
import { blessing, heal } from "../acolyte/skills";
import {
  bladeStop,
  bodyRelocation,
  chainCombo,
  comboFinish,
  fury,
  ironHand,
  steelBody,
} from "../monk/skills";

export const zen: Skill = {
  name: "Zen",
  description: "Summon the maximum amount of Spirit Spheres at once.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/champion/zen.png",
  preRequisites: [{ skill: fury, level: 5 }],
};

export const palmPushStrike: Skill = {
  name: "Palm Push Strike",
  description:
    "While in the fury state, deals up to 800% atk and knocks target back 3 cells. If the target collides with an obstacle, does an additional 800%.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/champion/palm_push_strike.png",
  preRequisites: [{ skill: ironHand, level: 7 }],
};

export const tigerKnuckleFist: Skill = {
  name: "Tiger Knuckle Fist",
  description:
    "Combo Skill - Strikes a single target dealing up to 900% atk, damage scales further based on user's AGI. Immobilizes the target on hit. Must be used in a combo.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/champion/tiger_knuckle_fist.png",
  preRequisites: [
    { skill: chainCombo, level: 5 },
    { skill: comboFinish, level: 5 },
  ],
};

export const chainCrushCombo: Skill = {
  name: "Chain Crush Combo",
  description:
    "Combo Skill - Strikes multiple targets up to 700% atk over 5 hits in a 5x5 AoE around the target, damage scales further based on user's AGI. Must be used in a combo.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/champion/chain_crush_combo.png",
  preRequisites: [{ skill: tigerKnuckleFist, level: 3 }],
};

export const flashCombo: Skill = {
  name: "Flash Combo",
  description:
    "Consumes all spirit spheres to strike the target with a rapid sequence of Triple Attack, Chain Combo, Combo Finish, Tiger Knuckle Fist, and Chain Crush Combo.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/champion/flash_combo.png",
  preRequisites: [
    { skill: fury, level: 5 },
    { skill: chainCrushCombo, level: 5 },
  ],
};

export const dragonCombo: Skill = {
  name: "Dragon Combo",
  description:
    "Strikes the target for up to 600% damage. Acts as a Combo starter and can chain into any other combo skill.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/champion/dragon_combo.png",
  preRequisites: [{ skill: comboFinish, level: 3 }],
};

export const fallenEmpire: Skill = {
  name: "Fallen Empire",
  description:
    "Combo Skill - A powerful blow that ignores the target's defenses. Can only be used after Combo Finish or other Champion combo skills.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/champion/fallen_empire.png",
  preRequisites: [{ skill: dragonCombo, level: 3 }],
};

export const windmill: Skill = {
  name: "Windmill",
  description:
    "An area of effect kick that inflicts damage and has a chance of leaving enemies immobilized.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/champion/windmill.png",
  preRequisites: [{ skill: bladeStop, level: 2 }],
};

export const lightningWalk: Skill = {
  name: "Lightning Walk",
  description:
    "When targeted by a ranged or magic attack, has a chance of nullifying the damage and moving instantly to the opponent's position. Buff lasts 5~9 seconds or until triggered once.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/champion/lightning_walk.png",
  preRequisites: [{ skill: bodyRelocation, level: 1 }],
};

export const knuckleArrow: Skill = {
  name: "Knuckle Arrow",
  description:
    "Consumes 1 spirit sphere to attack a target from long distance, moving instantly to the target and knocking them back. Additional damage is dealt if the target hits an obstacle.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/champion/knuckle_arrow.png",
  preRequisites: [{ skill: lightningWalk, level: 1 }],
};

export const crescentElbow: Skill = {
  name: "Crescent Elbow",
  description:
    "When activated, grants the champion a chance of retaliating against physical attackers, reducing their damage and knocking them back.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/champion/crescent_elbow.png",
  preRequisites: [{ skill: steelBody, level: 3 }],
};

export const curingTouch: Skill = {
  name: "Curing Touch",
  description:
    "Consumes Spheres to heal a target for a portion of their Max HP, while cleansing certain negative status effects.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/champion/curing_touch.png",
  preRequisites: [
    { skill: heal, level: 2 },
    { skill: blessing, level: 5 },
  ],
};

export const quietTouch: Skill = {
  name: "Quiet Touch",
  description:
    "Consumes Spheres to strike at the target with a high chance of inflicting Silence.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/champion/quiet_touch.png",
  preRequisites: [{ skill: curingTouch, level: 1 }],
};

export const energizingTouch: Skill = {
  name: "Energizing Touch",
  description:
    "Consumes Spheres to buff the Champion, granting a chance of gaining spheres when dealing or receiving damage.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/champion/energizing_touch.png",
  preRequisites: [{ skill: curingTouch, level: 1 }],
};

export const changingTouch: Skill = {
  name: "Changing Touch",
  description:
    "Consumes Spheres to buff a target, increasing their ATK and ASPD at the cost of Max HP, DEF, and MDEF.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/champion/changing_touch.png",
  preRequisites: [{ skill: curingTouch, level: 1 }],
};

export const revitalizingTouch: Skill = {
  name: "Revitalizing Touch",
  description:
    "Consumes Spheres to buff the target, increasing their DEF, MDEF, and Max HP, while also regenerating their health.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/champion/revitalizing_touch.png",
  preRequisites: [{ skill: curingTouch, level: 1 }],
};

export const spiritualConcentration: Skill = {
  name: "Spiritual Concentration",
  description:
    "Increases the max amount of spirit spheres the Champion can have, while also increasing their damage bonus.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/champion/spiritual_concentration.png",
  preRequisites: [{ skill: zen, level: 1 }],
};

export const championSkills = [
  zen,
  palmPushStrike,
  tigerKnuckleFist,
  chainCrushCombo,
  flashCombo,
  dragonCombo,
  fallenEmpire,
  windmill,
  lightningWalk,
  knuckleArrow,
  crescentElbow,
  curingTouch,
  quietTouch,
  energizingTouch,
  changingTouch,
  revitalizingTouch,
  spiritualConcentration,
];
