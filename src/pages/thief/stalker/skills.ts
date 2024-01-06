import { Skill, SkillType } from "../../../common/types";
import {
  backStab,
  doubleStrafing,
  gangstersParadise,
  graffiti,
  plagiarism,
  raid,
  removeTrap,
  swordMastery,
} from "../rogue/skills";
import { detoxify, envenom } from "../thief/skills";

export const violentStab: Skill = {
  name: "Violent Stab",
  description:
    "A dagger attack that causes Bleeding and hits twice against Bleeding enemies.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/stalker/violent_stab.png",
  preRequisites: [
    { skill: backStab, level: 10 },
    { skill: swordMastery, level: 5 },
  ],
};

export const bowMaster: Skill = {
  name: "Bow Master",
  description:
    "Increases Damage dealt and adds damage resistance while wearing Bows.",
  maxLevel: 10,
  type: SkillType.passive,
  icon: "./assets/stalker/bow_master.png",
  preRequisites: [{ skill: doubleStrafing, level: 10 }],
};

export const triangleShot: Skill = {
  name: "Triangle Shot",
  description:
    "Fire a volley of 3 arrows at the target, with a chance of knocking them back.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/stalker/triangle_shot.png",
  preRequisites: [{ skill: bowMaster, level: 10 }],
};

export const manhole: Skill = {
  name: "Manhole",
  description:
    "Creates a hole in the ground, sucking enemies into it. Enemies caught inside cannot be damaged.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/stalker/manhole.png",
  preRequisites: [
    { skill: graffiti, level: 1 },
    { skill: gangstersParadise, level: 1 },
  ],
};

export const dimensionDoor: Skill = {
  name: "Dimension Door",
  description: "Create an area that teleports monsters based on their size.",
  maxLevel: 3,
  type: SkillType.active,
  icon: "./assets/stalker/dimension_door.png",
  preRequisites: [{ skill: manhole, level: 2 }],
};

export const bloodyLust: Skill = {
  name: "Bloody Lust",
  description:
    "Create an area that drains HP but enables life leech of allies inside.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/stalker/bloody_lust.png",
  preRequisites: [{ skill: dimensionDoor, level: 3 }],
};

export const chaosPanic: Skill = {
  name: "Chaos Panic",
  description:
    "Create an area that reduces enemies' Status resistance and inflicts a random negative status every few seconds.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/stalker/chaos_panic.png",
  preRequisites: [{ skill: bloodyLust, level: 3 }],
};

export const stalkersInstinct: Skill = {
  name: "Stalker's Instinct",
  description:
    "Increases the movement speed bonus granted by Tunnel Drive and improves damage dealt against enemies that are inflicted with negative status effects.",
  maxLevel: 5,
  type: SkillType.passive,
  icon: "./assets/stalker/stalkers_instinct.png",
  preRequisites: [
    { skill: envenom, level: 5 },
    { skill: detoxify, level: 1 },
    { skill: raid, level: 5 },
  ],
};

export const deadlyInfect: Skill = {
  name: "Deadly Infect",
  description:
    "Purge negative status effects from the Stalker, distributing them in a targeted AoE.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/stalker/deadly_infect.png",
  preRequisites: [{ skill: stalkersInstinct, level: 3 }],
};

export const emergencyEscape: Skill = {
  name: "Emergency Escape",
  description:
    "Backslide a large number of cells while laying an Ankle Snare at the original location.",
  maxLevel: 5,
  type: SkillType.active,
  icon: "./assets/stalker/emergency_escape.png",
  preRequisites: [{ skill: removeTrap, level: 1 }],
};

export const explosiveSatchel: Skill = {
  name: "Explosive Satchel",
  description:
    "Plant an explosive at the targeted location, exploding for AoE damage after a delay. Equipping a bow increases the cast range.",
  maxLevel: 5,
  type: SkillType.offensive,
  icon: "./assets/stalker/explosive_satchel.png",
  preRequisites: [{ skill: raid, level: 5 }],
};

export const feintBomb: Skill = {
  name: "Feint Bomb",
  description:
    "Create a fake Copycat of yourself, backsliding several cells, hiding and forcing enemies to attack the copy. The copy explodes for AoE damage after a delay.",
  maxLevel: 10,
  type: SkillType.offensive,
  icon: "./assets/stalker/feint_bomb.png",
  preRequisites: [{ skill: dimensionDoor, level: 1 }],
};

export const reproduce: Skill = {
  name: "Reproduce",
  description:
    "Activates an SP draining toggle that allows the Stalker to copy the last skill used to inflict damage on them. Can copy stronger skills than Plagiarism.",
  maxLevel: 10,
  type: SkillType.active,
  icon: "./assets/stalker/reproduce.png",
  preRequisites: [{ skill: plagiarism, level: 10 }],
};

export const stalkerSkills = [
  violentStab,
  bowMaster,
  triangleShot,
  manhole,
  dimensionDoor,
  bloodyLust,
  chaosPanic,
  stalkersInstinct,
  deadlyInfect,
  emergencyEscape,
  explosiveSatchel,
  feintBomb,
  reproduce,
];
