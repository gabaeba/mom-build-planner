export enum SkillType {
  active = "Active",
  passive = "Passive",
  offensive = "Offensive",
  supportive = "Supportive",
}

export type Skill = {
  name: string;
  description: string;
  maxLevel: number;
  type: SkillType;
  icon: string;
  skillId: string;
  preRequisites: {
    skill: Skill;
    level: number;
  }[];
  dependedBy: {
    skill: string;
    level: number;
  }[];
};
