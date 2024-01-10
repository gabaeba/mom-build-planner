import { Skill, SkillType } from "../../../common/types";
import { coldBolt, fireBolt, lightningBolt, stoneCurse } from "../mage/skills";

export const advancedBook: Skill = {
  name: "Advanced Book",
  description:
    "Mastery damage, percentage physical damage, and ASPD per skill level with Book weapons.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/sage/advanced_book.png",
  preRequisites: [],
};

export const castCancel: Skill = {
  name: "Cast Cancel",
  description: "Cancel the casting of your skill and regain some of the SP.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/sage/cast_cancel.png",
  preRequisites: [{ skill: advancedBook, level: 2 }],
};

export const flameLauncher: Skill = {
  name: "Flame Launcher",
  description: "Endow a party member's weapon with the Fire-element.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/sage/flame_launcher.png",
  preRequisites: [
    { skill: fireBolt, level: 1 },
    { skill: advancedBook, level: 5 },
  ],
};

export const seismicWeapon: Skill = {
  name: "Seismic Weapon",
  description: "Endow a party member's weapon with the Earth-element.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/sage/seismic_weapon.png",
  preRequisites: [
    { skill: stoneCurse, level: 1 },
    { skill: advancedBook, level: 5 },
  ],
};

export const lightningLoader: Skill = {
  name: "Lightning Loader",
  description: "Endow a party member's weapon with the Wind-element.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/sage/lightning_loader.png",
  preRequisites: [
    { skill: lightningBolt, level: 1 },
    { skill: advancedBook, level: 5 },
  ],
};

export const frostWeapon: Skill = {
  name: "Frost Weapon",
  description: "Endow a party member's weapon with the Water-element.",
  maxLevel: 3,
  type: SkillType.supportive,
  icon: "./assets/sage/frost_weapon.png",
  preRequisites: [
    { skill: coldBolt, level: 1 },
    { skill: advancedBook, level: 5 },
  ],
};

export const deluge: Skill = {
  name: "Deluge",
  description:
    "Deal up to 500% MATK damage in a 7x7 AoE, reducing enemy ATK and making them more vulnerable to Water damage",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/sage/deluge.png",
  preRequisites: [{ skill: frostWeapon, level: 1 }],
};

export const volcano: Skill = {
  name: "Volcano",
  description:
    "Deal up to 500% MATK damage in a 7x7 AoE, reducing enemy DEF and making them more vulnerable to Fire damage",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/sage/volcano.png",
  preRequisites: [{ skill: flameLauncher, level: 1 }],
};

export const violentGale: Skill = {
  name: "Violent Gale",
  description:
    "Deal up to 500% MATK damage in a 7x7 AoE, slowing enemies and making them more vulnerable to Wind damage.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/sage/violent_gale.png",
  preRequisites: [{ skill: lightningLoader, level: 1 }],
};

export const magicRod: Skill = {
  name: "Magic Rod",
  description:
    "Absorb a single-target skill that is targeting you, negating its damage and giving you SP.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/sage/magic_rod.png",
  preRequisites: [{ skill: advancedBook, level: 4 }],
};

export const spellBreaker: Skill = {
  name: "Spell Breaker",
  description:
    "Cancel the skill that the target is currently casting and absorb it as SP.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/sage/spell_breaker.png",
  preRequisites: [{ skill: magicRod, level: 1 }],
};

export const dispel: Skill = {
  name: "Dispel",
  description:
    "Use a Yellow Gemstone to remove all buffs from the target, with several exceptions.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/sage/dispel.png",
  preRequisites: [{ skill: spellBreaker, level: 3 }],
};

export const dragonology: Skill = {
  name: "Dragonology",
  description:
    "Increases INT up to 3, and increases ATK and MATK versus Dragon-race enemies.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/sage/dragonology.png",
  preRequisites: [{ skill: advancedBook, level: 5 }],
};

export const earthSpike: Skill = {
  name: "Earth Spike",
  description: "Attack a target for up to 600% Earth-element damage.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/sage/earth_spike.png",
  preRequisites: [
    { skill: stoneCurse, level: 1 },
    { skill: seismicWeapon, level: 1 },
  ],
};

export const freeCast: Skill = {
  name: "Free Cast",
  description: "Allows you to walk and attack while casting spells.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/sage/free_cast.png",
  preRequisites: [{ skill: castCancel, level: 1 }],
};

export const heavensDrive: Skill = {
  name: "Heaven's Drive",
  description:
    "Earth-element AoE attack dealing up to 600% MATK to targets in a 5x5 area.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/sage/heavens_drive.png",
  preRequisites: [{ skill: earthSpike, level: 3 }],
};

export const autoSpell: Skill = {
  name: "Auto Spell",
  description:
    "Allows the Sage to choose a skill from a short list and autocast that skill at their learned level when physically attacking.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/sage/auto_spell.png",
  preRequisites: [{ skill: freeCast, level: 4 }],
};

export const landProtector: Skill = {
  name: "Land Protector",
  description:
    "Use a Blue Gemstone and Yellow Gemstone to create an area that cancels ground-targeting spells.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/sage/land_protector.png",
  preRequisites: [
    { skill: deluge, level: 3 },
    { skill: volcano, level: 3 },
    { skill: violentGale, level: 3 },
  ],
};

export const abracadabra: Skill = {
  name: "Abracadabra",
  description:
    "Use 2 Yellow Gemstones to invoke a random non-Transcendent skill, or one of a few Hocus Pocus-specific effects.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/sage/abracadabra.png",
  preRequisites: [
    { skill: dispel, level: 1 },
    { skill: autoSpell, level: 5 },
    { skill: landProtector, level: 1 },
  ],
};

export const healthConversion: Skill = {
  name: "Health Conversion",
  description:
    "Drain 10% Max HP to restore a percentage of SP based on the sage's max HP.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/sage/health_conversion.png",
  preRequisites: [],
};

export const soulChange: Skill = {
  name: "Soul Change",
  description:
    "Exchange caster's remaining SP amount with the SP amount of a target.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/sage/soul_change.png",
  preRequisites: [],
};

export const focusSpell: Skill = {
  name: "Focus Spell",
  description: "Always use your max MATK for spells but double SP costs.",
  maxLevel: 1,
  type: SkillType.active,
  icon: "./assets/sage/focus_spell.png",
  preRequisites: [],
};

export const sageSkills = [
  advancedBook,
  castCancel,
  flameLauncher,
  seismicWeapon,
  lightningLoader,
  frostWeapon,
  deluge,
  volcano,
  violentGale,
  magicRod,
  spellBreaker,
  dispel,
  dragonology,
  earthSpike,
  freeCast,
  heavensDrive,
  autoSpell,
  landProtector,
  abracadabra,
  healthConversion,
  soulChange,
  focusSpell,
];
