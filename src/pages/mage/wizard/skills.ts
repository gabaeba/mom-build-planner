import { Skill, SkillType } from "../../../common/types";
import {
  coldBolt,
  fireWall,
  frostDiver,
  lightningBolt,
  napalmBeat,
  sight,
  stoneCurse,
  thunderstorm,
} from "../mage/skills";

export const earthSpike: Skill = {
  name: "Earth Spike",
  description:
    "Causes the earth below a target to rise and strike a target for up to a maximum of 5 times.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: stoneCurse, level: 1 }],
};

export const firePillar: Skill = {
  name: "Fire Pillar",
  description:
    "Summons a pillar of fire on a target spot that acts similarly to a trap, dealing MDEF-ignoring damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: fireWall, level: 1 }],
};

export const iceWall: Skill = {
  name: "Ice Wall",
  description: "Summons a shield of ice 5 cells wide in front of the caster.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "",
  preRequisites: [
    { skill: frostDiver, level: 1 },
    { skill: stoneCurse, level: 1 },
  ],
};

export const frostNova: Skill = {
  name: "Frost Nova",
  description:
    "Strikes an area with water elemental damage, knocking back with a massive chance to freeze on the second hit.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [
    { skill: frostDiver, level: 1 },
    { skill: iceWall, level: 1 },
  ],
};

export const heavensDrive: Skill = {
  name: "Heaven's Drive",
  description:
    "Raises the ground in a 5x5 area around a target area, dealing damage similar to Earth Spike.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [{ skill: earthSpike, level: 3 }],
};

export const jupitelThunder: Skill = {
  name: "Jupitel Thunder",
  description:
    "Launches an orb of lightning that hits multiple times while pushing the target back.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
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
  icon: "",
  preRequisites: [
    { skill: jupitelThunder, level: 5 },
    { skill: thunderstorm, level: 1 },
  ],
};

export const sightrasher: Skill = {
  name: "Sightrasher",
  description:
    "Projects the fireball summoned by the Sight skill to knock enemies back and deal damage.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [
    { skill: sight, level: 1 },
    { skill: lightningBolt, level: 1 },
  ],
};

export const meteorStorm: Skill = {
  name: "Meteor Storm",
  description:
    "Calls forth waves of meteors from the sky that strike multiple times, each with the chance to stun a target.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [
    { skill: sightrasher, level: 2 },
    { skill: thunderstorm, level: 1 },
  ],
};

export const quagmire: Skill = {
  name: "Quagmire",
  description:
    "Turns a 7x7 area of ground into a marshland that lowers AGI and DEX, and removes certain buffs.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "",
  preRequisites: [{ skill: heavensDrive, level: 1 }],
};

export const stormGust: Skill = {
  name: "Storm Gust",
  description:
    "Summons a destructive blizzard in a 7x7 target area that can freeze enemies within it.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [
    { skill: jupitelThunder, level: 3 },
    { skill: frostDiver, level: 1 },
  ],
};

export const waterBall: Skill = {
  name: "Water Ball",
  description:
    "Attempt to turn target into stone, rendering it immobile and turning it to Earth 1 element.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [
    { skill: coldBolt, level: 1 },
    { skill: lightningBolt, level: 1 },
  ],
};

export const sightBlaster: Skill = {
  name: "Sight Blaster",
  description:
    "Summon a protective fireball that lasts for 2 minutes, hitting any enemy that comes within a 3x3 area, knocking them back.",
  maxLevel: 1,
  type: SkillType.offensive,
  icon: "",
  preRequisites: [],
};
