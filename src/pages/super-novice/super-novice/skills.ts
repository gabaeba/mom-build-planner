import { Skill, SkillType } from "../../../common/types";

export const bash: Skill = {
  name: "Bash",
  description:
    "Melee attack with additional accuracy, causing up to 400% damage to a single target. After learning Fatal Blow, also has a chance of stunning the target.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/swordsman/bash.png",
  preRequisites: [],
};

export const provoke: Skill = {
  name: "Provoke",
  description:
    "Increase a target's attack by up to 32% and decrease its defense by up to 55%.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/swordsman/provoke.png",
  preRequisites: [],
};

export const endure: Skill = {
  name: "Endure",
  description:
    "Disables Fliching Status for up to 20 Hits and up to 37 seconds. Also grants 10 bonus Mdef with casted.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/swordsman/endure.png",
  preRequisites: [
    {
      skill: provoke,
      level: 5,
    },
  ],
};

export const increaseHpRecovery: Skill = {
  name: "Increase HP Recovery",
  description:
    "Increases HP recovery while not moving. Also increases efficiency of healing items and Alchemist's Aid Potion.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/swordsman/increase_hp_recovery.png",
  preRequisites: [],
};

export const magnumBreak: Skill = {
  name: "Magnum Break",
  description:
    "Melee AoE attack with added accuracy, dealing up to 300% damage in a 5*5 area the user. Also pushes back items and gives a small fire damage bonus for 10 seconds after use. Drains a bit of HP.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/swordsman/magnum_break.png",
  preRequisites: [{ skill: bash, level: 5 }],
};

export const swordMastery: Skill = {
  name: "Sword Mastery",
  description:
    "Increases damage done with One-Handed and two-handed Swords. Increases Bash stun chance if wielding 1h and Crit chance if wielding 2h.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/swordsman/sword_mastery.png",
  preRequisites: [],
};

export const ironDefense: Skill = {
  name: "Iron Defense",
  description: "Increases VIT DEF by up to 50% for up to 240 seconds.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/swordsman/iron_defense.png",
  preRequisites: [],
};

export const oneHandQuicken: Skill = {
  name: "One-Hand Quicken",
  description:
    "Increases ASPD by up to 20% while wielding a one-handed weapon for up to 300 seconds.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/swordsman/one_hand_quicken.png",
  preRequisites: [],
};

export const repelEvil: Skill = {
  name: "Repel Evil",
  description:
    "Increases attack and Resistance against against Demons and Undead monsters by 6~15%.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/acolyte/repel_evil.png",
  preRequisites: [],
};

export const holyLight: Skill = {
  name: "Holy Light",
  description:
    "Holy-element attack that deals 50~275% MATK damage to a single target. Cancels Kyrie Eleison on target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/acolyte/holy_light.png",
  preRequisites: [],
};

export const angelus: Skill = {
  name: "Angelus",
  description:
    "Increase VIT DEF of the user and all party members nearby for 10~100% for 30~300 seconds. Also increases MaxHP.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/acolyte/angelus.png",
  preRequisites: [{ skill: repelEvil, level: 3 }],
};

export const blessing: Skill = {
  name: "Blessing",
  description:
    "Blesses all targets in a 7x7 area on cast, increasing HIT by +2~20 while decreasing Cast Time and Cast Delay by 2~20%.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/acolyte/blessing.png",
  preRequisites: [{ skill: repelEvil, level: 5 }],
};

export const heal: Skill = {
  name: "Heal",
  description:
    "Restore a target's HP, or damage Undead and Demon race targets. (Base factor 12~84)",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/acolyte/heal.png",
  preRequisites: [],
};

export const cure: Skill = {
  name: "Cure",
  description: "Cures a target from Silence, Blind and Chaos statuses.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/acolyte/cure.png",
  preRequisites: [{ skill: heal, level: 2 }],
};

export const increaseAgi: Skill = {
  name: "Increase AGI",
  description:
    "Grants +2~20 FLEE and +1~10 Perfect Dodge for all targets in a 7x7 area when cast.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/acolyte/increase_agi.png",
  preRequisites: [{ skill: heal, level: 3 }],
};

export const decreaseAgi: Skill = {
  name: "Decrease AGI",
  description:
    "Attempts to lower a target's AGI by 3~12 with 42~60% chance of success. (30~120 seconds vs. monsters, 20~65 seconds vs. players)",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/acolyte/decrease_agi.png",
  preRequisites: [{ skill: increaseAgi, level: 1 }],
};

export const ruwach: Skill = {
  name: "Ruwach",
  description:
    "Reveal hidden enemies in a 5x5 area around the user and deal 145% MATK damage to revealed enemies.",
  maxLevel: 1,
  type: SkillType.offensive,
  icon: "./assets/acolyte/ruwach.png",
  preRequisites: [],
};

export const teleport: Skill = {
  name: "Teleport",
  description:
    "Instantly move to a random spot on the map or the user's save spot. Does not work in PvP environments.",
  maxLevel: 2,
  type: SkillType.supportive,
  icon: "./assets/acolyte/teleport.png",
  preRequisites: [{ skill: ruwach, level: 1 }],
};

export const pneuma: Skill = {
  name: "Pneuma",
  description: "Protects a 3x3 area from incoming ranged attacks.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/acolyte/pneuma.png",
  preRequisites: [{ skill: teleport, level: 2 }],
};

export const aquaBenedicta: Skill = {
  name: "Aqua Benedicta",
  description:
    "Create 1 Holy Water while standing in shallow water. Each use consumes an Empty Bottle.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/acolyte/aqua_benedicta.png",
  preRequisites: [],
};

export const doubleAttack: Skill = {
  name: "Double Attack",
  description:
    "Adds a high chance to deal double damage when attacking with a dagger.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/thief/double_attack.png",
  preRequisites: [],
};

export const improveDodge: Skill = {
  name: "Improve Dodge",
  description:
    "Adds up to 30 Flee. Bonus increases when you become a Rogue or Assassin. Also increases Movement Speed if you're an Assassin.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/thief/improve_dodge.png",
  preRequisites: [],
};

export const envenom: Skill = {
  name: "Envenom",
  description:
    "Poison-element melee attack that deals up to 350 additional damage and has a chance of poisoning its target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/thief/envenom.png",
  preRequisites: [],
};

export const detoxify: Skill = {
  name: "Detoxify",
  description: "Cures yourself or a target from being poisoned.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/thief/detoxify.png",
  preRequisites: [{ skill: envenom, level: 3 }],
};

export const steal: Skill = {
  name: "Steal",
  description:
    "Steal items from monsters. Affected monster may still drop the stolen item normally.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/thief/steal.png",
  preRequisites: [],
};

export const hiding: Skill = {
  name: "Hiding",
  description:
    "Hide to protect yourself. Does not work against Boss, Insect and Demon monsters, counterable by some AoE skills and items.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/thief/hiding.png",
  preRequisites: [{ skill: steal, level: 5 }],
};

export const increaseSpeed: Skill = {
  name: "Increase Speed",
  description:
    "Self buff that increases Attack Speed at the cost of reducing DEF.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/thief/increase_speed.png",
  preRequisites: [],
};

export const throwSand: Skill = {
  name: "Throw Sand",
  description:
    "Earth-element attack dealing up to 200% damage with a 15% chance of blinding its target.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/thief/throw_sand.png",
  preRequisites: [],
};

export const quickStrike: Skill = {
  name: "Quick Strike",
  description:
    "Melee attack with increased hit rate, dealing up to 275% damage and inflicting Critical Wounds by chance.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/thief/quick_strike.png",
  preRequisites: [],
};

export const owlsEye: Skill = {
  name: "Owl's Eye",
  description: "Increases DEX by up to 10.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/archer/owls_eye.png",
  preRequisites: [],
};

export const attentionConcentrate: Skill = {
  name: "Attention Concentrate",
  description:
    "Increase DEX and AGI by up to 12% for a duration. Uncovers hidden enemies in a 3x3 area when activated.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/archer/attention_concentrate.png",
  preRequisites: [{ skill: owlsEye, level: 3 }],
};

export const axeMastery: Skill = {
  name: "Axe Mastery",
  description: "Increase physical damage while wielding axes.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/merchant/axe_mastery.png",
  preRequisites: [],
};

export const enlargeWeightLimit: Skill = {
  name: "Enlarge Weight Limit",
  description:
    "Increase your character's maximum Weight Limit by up to 2000 points.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/merchant/enlarge_weight_limit.png",
  preRequisites: [],
};

export const itemAppraisal: Skill = {
  name: "Item Appraisal",
  description: "Identify items without a magnifier.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/merchant/item_appraisal.png",
  preRequisites: [],
};

export const mammonite: Skill = {
  name: "Mammonite",
  description:
    "Powerful melee attack dealing up to 600% damage that costs up to Base Level x 10 Zeny.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/merchant/mammonite.png",
  preRequisites: [],
};

export const pushcartMastery: Skill = {
  name: "Pushcart Mastery",
  description: "Restore lost movement speed from carrying a Pushcart.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/merchant/pushcart_mastery.png",
  preRequisites: [],
};

export const cartRevolution: Skill = {
  name: "Cart Revolution",
  description: "Melee AoE attack that knocks targets back with your cart.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/merchant/cart_revolution.png",
  preRequisites: [],
};

export const cursedTomahawk: Skill = {
  name: "Cursed Tomahawk",
  description:
    "Throw a tomahawk from a distance with a small chance to curse the target.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/merchant/cursed_tomahawk.png",
  preRequisites: [],
};

export const efficiency: Skill = {
  name: "Efficiency",
  description: "Reduces the Zeny cost of Mammonite by up to 25%",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/merchant/efficiency.png",
  preRequisites: [],
};

export const coldBolt: Skill = {
  name: "Cold Bolt",
  description:
    "Attack a single target with up to 10x MATK Water-element damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/mage/cold_bolt.png",
  preRequisites: [],
};

export const fireBolt: Skill = {
  name: "Fire Bolt",
  description:
    "Attack a single target with up to 10x MATK Fire-element damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/mage/fire_bolt.png",
  preRequisites: [],
};

export const fireBall: Skill = {
  name: "Fire Ball",
  description:
    "Attack a target and enemies in a 5x5 area around it for up to 170% Fire-element damage.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/mage/fire_ball.png",
  preRequisites: [{ skill: fireBolt, level: 4 }],
};

export const sight: Skill = {
  name: "Sight",
  description: "Reveal hidden enemies in a 7x7 area around the user.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/mage/sight.png",
  preRequisites: [],
};

export const fireWall: Skill = {
  name: "Fire Wall",
  description:
    "Put up a small fire wall that causes 50% Fire-element damage to enemies passing through and pushes them back.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/mage/fire_wall.png",
  preRequisites: [
    { skill: fireBolt, level: 4 },
    { skill: fireBall, level: 5 },
    { skill: sight, level: 1 },
  ],
};

export const frostDiver: Skill = {
  name: "Frost Diver",
  description:
    "Attack a target for up to 200% Water-element damage with a chance to freeze it, rendering it immobile and turning it to Water 1 element.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/mage/frost_diver.png",
  preRequisites: [{ skill: coldBolt, level: 5 }],
};

export const increaseSpRecovery: Skill = {
  name: "Increase SP Recovery",
  description:
    "Passively increases SP recovery speed when not moving. Also increases efficiency of SP-restoring items consumed and thrown by an Alchemist",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/mage/increase_sp_recovery.png",
  preRequisites: [],
};

export const lightningBolt: Skill = {
  name: "Lightning Bolt",
  description:
    "Attack a single target with up to 10x MATK Wind-element damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/mage/lightning_bolt.png",
  preRequisites: [],
};

export const napalmBeat: Skill = {
  name: "Napalm Beat",
  description:
    "Deal up to 275% MATK Ghost-element damage to target and all enemies in a 3x3 area around it.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/mage/napalm_beat.png",
  preRequisites: [],
};

export const soulStrike: Skill = {
  name: "Soul Strike",
  description:
    "Ghost-element attack dealing up to 6x MATK damage to a single target. Does additional damage to Undead-element enemies.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/mage/soul_strike.png",
  preRequisites: [{ skill: napalmBeat, level: 4 }],
};

export const safetyWallMage: Skill = {
  name: "Safety Wall",
  description:
    "Use a Blue Gemstone to create a pillar on a cell that protects whoever stands in it from melee attacks.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/mage/safety_wall.png",
  preRequisites: [
    { skill: napalmBeat, level: 5 },
    { skill: soulStrike, level: 5 },
  ],
};

export const stoneCurse: Skill = {
  name: "Stone Curse",
  description:
    "Attempt to turn target into stone, rendering it immobile and turning it to Earth 1 element.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/mage/stone_curse.png",
  preRequisites: [],
};

export const thunderstorm: Skill = {
  name: "Thunderstorm",
  description:
    "Wind-element AoE attack dealing up to 8x MATK damage to targets in a 5x5 area.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/mage/thunderstorm.png",
  preRequisites: [{ skill: lightningBolt, level: 4 }],
};

export const superNoviceSkills = [
  swordMastery,
  oneHandQuicken,
  increaseHpRecovery,
  ironDefense,
  bash,
  magnumBreak,
  provoke,
  endure,
  repelEvil,
  angelus,
  aquaBenedicta,
  blessing,
  cure,
  increaseAgi,
  decreaseAgi,
  heal,
  holyLight,
  ruwach,
  teleport,
  pneuma,
  envenom,
  detoxify,
  doubleAttack,
  improveDodge,
  steal,
  hiding,
  quickStrike,
  increaseSpeed,
  throwSand,
  attentionConcentrate,
  owlsEye,
  axeMastery,
  enlargeWeightLimit,
  itemAppraisal,
  mammonite,
  pushcartMastery,
  cursedTomahawk,
  efficiency,
  cartRevolution,
  coldBolt,
  fireBolt,
  sight,
  fireBall,
  fireWall,
  frostDiver,
  increaseSpRecovery,
  lightningBolt,
  thunderstorm,
  napalmBeat,
  soulStrike,
  safetyWallMage,
  stoneCurse,
];
