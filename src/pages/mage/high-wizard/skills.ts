import { Skill, SkillType } from "../../../common/types";
import {
  heavensDrive,
  iceWall,
  lordOfVermilion,
  meteorStorm,
  stormGust,
} from "../wizard/skills";

export const ganbantein: Skill = {
  name: "Ganbantein",
  description:
    "Casts a spell that cancels ground targeting magic around the spot targeted by the caster.",
  maxLevel: 1,
  type: SkillType.supportive,
  icon: "./assets/highWizard/ganbantein.png",
  preRequisites: [{ skill: iceWall, level: 1 }],
};

export const mysticalAmplification: Skill = {
  name: "Mystical Amplification",
  description:
    "Amplifies the magic attack strength of the next spell used by up to 150% at the cost of increasing its cast time.",
  maxLevel: 5,
  type: SkillType.supportive,
  icon: "./assets/highWizard/mystical_amplification.png",
  preRequisites: [],
};

export const release: Skill = {
  name: "Release",
  description:
    "Throws your active Elemental orb that you currently have summoned to deal damage to target and the enemies in the way. At max level, fires a spell stored via Spellbook.",
  maxLevel: 3,
  type: SkillType.offensive,
  icon: "./assets/highWizard/release.png",
  preRequisites: [],
};

export const readingSpellbook: Skill = {
  name: "Reading Spellbook",
  description:
    "Enables use of Magic Spellooks by reading them to seal their magic",
  maxLevel: 3,
  type: SkillType.active,
  icon: "./assets/highWizard/reading_spellbook.png",
  preRequisites: [{ skill: release, level: 3 }],
};

export const mindExpansion: Skill = {
  name: "Mind Expansion",
  description:
    "Increase the amount of spells that can be sealed with the skill Reading Spellbook.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/highWizard/mind_expansion.png",
  preRequisites: [{ skill: readingSpellbook, level: 2 }],
};

export const recognizedSpell: Skill = {
  name: "Recognized Spell",
  description:
    "By gaining a greater understanding of your magic, you can make all of your magic skills penetrate a portion of MDEF.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/highWizard/recognized_spell.png",
  preRequisites: [{ skill: mysticalAmplification, level: 3 }],
};

export const summonFireOrb: Skill = {
  name: "Summon Fire Orb",
  description:
    "Summons a ball of fire near the caster. Level 2 summons the maximum amount.",
  maxLevel: 2,
  type: SkillType.active,
  icon: "./assets/highWizard/summon_fire_orb.png",
  preRequisites: [{ skill: meteorStorm, level: 1 }],
};

export const summonWaterOrb: Skill = {
  name: "Summon Water Orb",
  description:
    "Summons a ball of water near the caster. Level 2 summons the maximum amount.",
  maxLevel: 2,
  type: SkillType.active,
  icon: "./assets/highWizard/summon_water_orb.png",
  preRequisites: [{ skill: stormGust, level: 1 }],
};

export const summonLightningOrb: Skill = {
  name: "Summon Lightning Orb",
  description:
    "Summons a ball of lightning near the caster. Level 2 summons the maximum amount.",
  maxLevel: 2,
  type: SkillType.active,
  icon: "./assets/highWizard/summon_lightning_orb.png",
  preRequisites: [{ skill: lordOfVermilion, level: 1 }],
};

export const summonStoneOrb: Skill = {
  name: "Summon Stone Orb",
  description:
    "Summons a magic stone near the caster. Level 2 summons the maximum amount.",
  maxLevel: 2,
  type: SkillType.active,
  icon: "./assets/highWizard/summon_stone_orb.png",
  preRequisites: [{ skill: heavensDrive, level: 1 }],
};

export const crimsonRock: Skill = {
  name: "Crimson Rock",
  description:
    "Summons a huge meteorite on the target, striking all targets nearby and inflicting Burning.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/highWizard/crimson_rock.png",
  preRequisites: [{ skill: summonFireOrb, level: 1 }],
};

export const jackFrost: Skill = {
  name: "Jack Frost",
  description:
    "Deals water element damage to surrounding enemies, increasing the damage on subsequent uses.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/highWizard/jack_frost.png",
  preRequisites: [{ skill: summonWaterOrb, level: 1 }],
};

export const chainLightning: Skill = {
  name: "Chain Lightning",
  description:
    "Deals wind element damage to a single target. When a target is struck by Chain Lightning, it will also chain to enemies near the target.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/highWizard/chain_lightning.png",
  preRequisites: [{ skill: summonLightningOrb, level: 1 }],
};

export const earthStrain: Skill = {
  name: "Earth Strain",
  description:
    "Causes the earth near you to shake and shoot up from below, dealing damage to those in range.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/highWizard/earth_strain.png",
  preRequisites: [{ skill: summonStoneOrb, level: 1 }],
};

export const tetraVortex: Skill = {
  name: "Tetra Vortex",
  description:
    "Deals 5 blows to target foe. Element of summoned stones determine the element of each hit. Causes one status effect from Burning, Chilled, Grounded, and Shocked status ailments.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/highWizard/tetra_vortex.png",
  preRequisites: [
    { skill: summonWaterOrb, level: 1 },
    { skill: summonFireOrb, level: 1 },
    { skill: summonLightningOrb, level: 1 },
    { skill: summonStoneOrb, level: 1 },
    { skill: crimsonRock, level: 1 },
    { skill: jackFrost, level: 1 },
    { skill: chainLightning, level: 1 },
    { skill: earthStrain, level: 1 },
  ],
};

export const highWizardSkills = [
  ganbantein,
  mysticalAmplification,
  release,
  readingSpellbook,
  mindExpansion,
  recognizedSpell,
  summonFireOrb,
  summonWaterOrb,
  summonLightningOrb,
  summonStoneOrb,
  crimsonRock,
  jackFrost,
  chainLightning,
  earthStrain,
  tetraVortex,
];
