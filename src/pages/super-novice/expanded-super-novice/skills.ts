import { Skill, SkillType } from "../../../common/types";
import {
  angelus,
  bash,
  coldBolt,
  envenom,
  fireBolt,
  frostDiver,
  hiding,
  lightningBolt,
  magnumBreak,
  napalmBeat,
  stoneCurse,
  swordMastery,
  thunderstorm,
} from "../super-novice/skills";

export const breakthrough: Skill = {
  name: "Breakthrough",
  description: "Increases Max HP, Max SP, ATK and MATK.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/superNovice/breakthrough.png",
  preRequisites: [],
};

export const angelHelpMe: Skill = {
  name: "Angel Help Me",
  description: "Heal party members by 5% HP and SP per second for 10 seconds.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/superNovice/angel_help_me.png",
  preRequisites: [],
};

export const transcendence: Skill = {
  name: "Transcendence",
  description:
    "Increases Power of Healing and APM. Reduces Casting Time by a flat amount. Reduces After-Cast Delay.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/superNovice/transcendence.png",
  preRequisites: [],
};

export const novicesFury: Skill = {
  name: "Novice's Fury",
  description:
    "Temporarily increase Critical Rate by 30% and Critical Damage by 50% for 60 seconds.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/superNovice/novices_fury.png",
  preRequisites: [],
};

export const bowlingBash: Skill = {
  name: "Bowling Bash",
  description:
    "Knock targets backward, causing up to 800% damage in a 3x3 cell area that hits all enemies in the area.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/knight/bowling_bash.png",
  preRequisites: [
    {
      skill: bash,
      level: 10,
    },
    { skill: magnumBreak, level: 3 },
    { skill: swordMastery, level: 5 },
  ],
};

export const autoGuard: Skill = {
  name: "Auto Guard",
  description:
    "Blocks physical attacks with a Shield by chance for 300 seconds.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/crusader/auto_guard.png",
  preRequisites: [],
};

export const holyCross: Skill = {
  name: "Holy Cross",
  description:
    "Summon a holy cross that inflicts Holy damage on a target, blinding it by chance.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/crusader/holy_cross.png",
  preRequisites: [],
};

export const shieldCharge: Skill = {
  name: "Shield Charge",
  description:
    "Hurl your shield at an enemy, dealing damage based on ATK and knocking them back.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/crusader/shield_charge.png",
  preRequisites: [{ skill: autoGuard, level: 5 }],
};

export const earthSpike: Skill = {
  name: "Earth Spike",
  description:
    "Causes the earth below a target to rise and strike a target for up to a maximum of 5 times.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/wizard/earth_spike.png",
  preRequisites: [{ skill: stoneCurse, level: 1 }],
};

export const frostNova: Skill = {
  name: "Frost Nova",
  description:
    "Strikes an area with water elemental damage, knocking back with a massive chance to freeze on the second hit.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/wizard/frost_nova.png",
  preRequisites: [{ skill: frostDiver, level: 1 }],
};

export const heavensDrive: Skill = {
  name: "Heaven's Drive",
  description:
    "Raises the ground in a 5x5 area around a target area, dealing damage similar to Earth Spike.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/wizard/heavens_drive.png",
  preRequisites: [{ skill: earthSpike, level: 3 }],
};

export const jupitelThunder: Skill = {
  name: "Jupitel Thunder",
  description:
    "Launches an orb of lightning that hits multiple times while pushing the target back.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/wizard/jupitel_thunder.png",
  preRequisites: [
    { skill: lightningBolt, level: 1 },
    { skill: napalmBeat, level: 1 },
  ],
};

export const lordOfVermilion: Skill = {
  name: "Lord of Vermilion",
  description:
    "Summons explosive bolts of destruction in a 9x9 area that deals 10 strikes per second.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/wizard/lord_of_vermilion.png",
  preRequisites: [
    { skill: jupitelThunder, level: 5 },
    { skill: thunderstorm, level: 1 },
  ],
};

export const meteorStorm: Skill = {
  name: "Meteor Storm",
  description:
    "Calls forth waves of meteors from the sky that strike multiple times, each with the chance to stun a target.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/wizard/meteor_storm.png",
  preRequisites: [{ skill: thunderstorm, level: 1 }],
};

export const quagmire: Skill = {
  name: "Quagmire",
  description:
    "Turns a 7x7 area of ground into a marshland that lowers AGI and DEX, and removes certain buffs.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/wizard/quagmire.png",
  preRequisites: [{ skill: heavensDrive, level: 1 }],
};

export const stormGust: Skill = {
  name: "Storm Gust",
  description:
    "Summons a destructive blizzard in a 7x7 target area that can freeze enemies within it.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/wizard/storm_gust.png",
  preRequisites: [
    { skill: jupitelThunder, level: 3 },
    { skill: frostDiver, level: 1 },
  ],
};

export const autoSpell: Skill = {
  name: "Auto Spell",
  description:
    "Allows the Sage to choose a skill from a short list and autocast that skill at their learned level when physically attacking.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/sage/auto_spell.png",
  preRequisites: [],
};

export const flameLauncher: Skill = {
  name: "Flame Launcher",
  description: "Endow a party member's weapon with the Fire-element.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/sage/flame_launcher.png",
  preRequisites: [{ skill: fireBolt, level: 1 }],
};

export const seismicWeapon: Skill = {
  name: "Seismic Weapon",
  description: "Endow a party member's weapon with the Earth-element.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/sage/seismic_weapon.png",
  preRequisites: [{ skill: stoneCurse, level: 1 }],
};

export const lightningLoader: Skill = {
  name: "Lightning Loader",
  description: "Endow a party member's weapon with the Wind-element.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/sage/lightning_loader.png",
  preRequisites: [{ skill: lightningBolt, level: 1 }],
};

export const frostWeapon: Skill = {
  name: "Frost Weapon",
  description: "Endow a party member's weapon with the Water-element.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/sage/frost_weapon.png",
  preRequisites: [{ skill: coldBolt, level: 1 }],
};

export const impositioManus: Skill = {
  name: "Impositio Manus",
  description:
    "Temporarily increase a target's attack power by 9~45 for 60 seconds.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/priest/impositio_manus.png",
  preRequisites: [],
};

export const aspersio: Skill = {
  name: "Aspersio",
  description:
    "Temporarily enchant a target's weapon with the Holy property. Requires a Holy Water.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/priest/aspersio.png",
  preRequisites: [{ skill: impositioManus, level: 3 }],
};

export const kyrieEleison: Skill = {
  name: "Kyrie Eleison",
  description:
    "Create a barrier around a target player protecting them from physical attacks. Lasts 60 seconds, up to 14~50% of maximum health or 3~12 hits. Can auto-refresh.",
  maxLevel: 10,
  type: SkillType.supportive,
  icon: "./assets/priest/kyrie_eleison.png",
  preRequisites: [{ skill: angelus, level: 2 }],
};

export const lexAeterna: Skill = {
  name: "Lex Aeterna",
  description:
    "Inflicts a status effect on the target which causes it to recieve 1.5x damage for 1.5sec.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/priest/lex_aeterna.png",
  preRequisites: [],
};

export const magnusExorcismus: Skill = {
  name: "Magnus Exorcismus",
  description:
    "Summons a holy cross on the ground that lasts 5~14 seconds, damaging all enemies for 1~10 MATKx1 hits at 2-second intervals. Monsters not of the Demon race, Shadow, Ghost, and Undead element receive greatly reduced damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/priest/magnus_exorcismus.png",
  preRequisites: [],
};

export const callSpirits: Skill = {
  name: "Call Spirits",
  description:
    "Allows the Monk to summon 1~5 spirit spheres which enable many powerful attacks.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/monk/call_spirits.png",
  preRequisites: [],
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

export const tripleAttack: Skill = {
  name: "Triple Attack",
  description:
    "Enables regular melee attacks to hit a target three times instead of once by 12~30% chance.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/monk/triple_attack.png",
  preRequisites: [],
};

export const adrenalineRush: Skill = {
  name: "Adrenaline Rush",
  description:
    "Increases the Attack Speed of Axe and Mace weapons by +50% for self and +30% for party members as well as provides additional flee for the caster.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/blacksmith/adrenaline_rush.png",
  preRequisites: [],
};

export const overThrust: Skill = {
  name: "Over Thrust",
  description:
    "Enhances the attac power of the equipped weapon while adding a 0.03% chance of breaking the weapon while attacking.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/blacksmith/over_thrust.png",
  preRequisites: [{ skill: adrenalineRush, level: 3 }],
};

export const demonstration: Skill = {
  name: "Demonstration",
  description:
    "Throw a Bottle grenade at the ground to create a 5*5 cell fire damaging enemies that step into it and stripping their weapons with a chance.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/alchemist/demonstration.png",
  preRequisites: [],
};

export const acidTerror: Skill = {
  name: "Acid Terror",
  description:
    "Throw an Acid bottle to deal up to 1100% armour-ignoring, always-hitting damage to a single target. Also, strip their armour and/or cause Bleeding with a chance.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/alchemist/acid_terror.png",
  preRequisites: [],
};

export const potionPitcher: Skill = {
  name: "Potion Pitcher",
  description:
    "Throw a Condensed Red, Orange, Condensed Yellow, Condensed White or Blue potion at a friendly target or yourself for up to 150% effectiveness of it's HP or SP recovery.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/alchemist/potion_pitcher.png",
  preRequisites: [],
};

export const enchantPoison: Skill = {
  name: "Enchant Poison",
  description:
    "Forces the character's weapon to neutral element, increasing damage dealt and causes each attack to have a chance to inflict the Poison status.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/assassin/enchant_poison.png",
  preRequisites: [{ skill: envenom, level: 1 }],
};

export const tunnelDrive: Skill = {
  name: "Tunnel Drive",
  description: "Allows the player to move while in the Hiding state.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/rogue/tunnel_drive.png",
  preRequisites: [{ skill: hiding, level: 1 }],
};

export const backStab: Skill = {
  name: "Back Stab",
  description:
    "Appears behind a target to attack from behind, dealing up to 1000% damage that does not miss.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/rogue/back_stab.png",
  preRequisites: [],
};

export const raid: Skill = {
  name: "Raid",
  description:
    "Damages all opponents in a 7x7 area around the caster, with a chance to Blind or Stun.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/rogue/raid.png",
  preRequisites: [
    { skill: tunnelDrive, level: 2 },
    { skill: backStab, level: 2 },
  ],
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

export const freezingTrap: Skill = {
  name: "Freezing Trap",
  description:
    "Do Water damage and possibly freeze to enemies in a 5x5 area when triggered.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/hunter/freezing_trap.png",
  preRequisites: [],
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
  ],
};

export const claymoreTrap: Skill = {
  name: "Claymore Trap",
  description:
    "Set a trap that will explode, causing Fire property damage in a 7x7 area.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/hunter/claymore_trap.png",
  preRequisites: [{ skill: blastMine, level: 1 }],
};

export const expandedSuperNoviceSkills = [
  breakthrough,
  angelHelpMe,
  transcendence,
  novicesFury,
  bowlingBash,
  autoGuard,
  holyCross,
  shieldCharge,
  earthSpike,
  frostNova,
  heavensDrive,
  jupitelThunder,
  lordOfVermilion,
  meteorStorm,
  quagmire,
  stormGust,
  autoSpell,
  flameLauncher,
  seismicWeapon,
  lightningLoader,
  frostWeapon,
  impositioManus,
  aspersio,
  kyrieEleison,
  lexAeterna,
  magnusExorcismus,
  callSpirits,
  investigate,
  tripleAttack,
  adrenalineRush,
  overThrust,
  demonstration,
  acidTerror,
  potionPitcher,
  enchantPoison,
  tunnelDrive,
  backStab,
  raid,
  landMine,
  freezingTrap,
  blastMine,
  claymoreTrap,
];
