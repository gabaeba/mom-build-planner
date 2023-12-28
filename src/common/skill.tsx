import { createUseStyles } from "react-jss";
import { Skill } from "./types";
import { useCallback, useContext } from "react";
import {
  KnightSkills,
  LordKnightContext,
} from "../pages/swordsman/lord-knight/lord-knight-context";
import { useSkill } from "./helpers/handle-skill-change";

function flattenReqs(preReq: { skill: Skill; level: number }) {
  const { preRequisites, ...rest } = preReq.skill;
  const teste = {
    ...rest,
    level: preReq.level,
  };
  const res = [teste];
  if (preRequisites?.length) {
    res.push(...preRequisites.flatMap((x) => flattenReqs(x)));
  }
  return res;
}

const useStyles = createUseStyles({
  hovered: {
    border: "red 1px solid",
  },
});

type SkillProps = {
  skill: Skill;
};

export const SkillComponent = ({ skill }: SkillProps) => {
  const { hovered } = useStyles();
  const { isHovered, setIsHovered, query, setQuery } =
    useContext(LordKnightContext);
  const preReqs = isHovered?.flatMap((x) => flattenReqs(x));
  const skillExist = preReqs?.find((e) => e?.name === skill.name);
  const [levelUpSkill, downgradeSkill] = useSkill({ skill, query, setQuery });

  const handleKeyPress = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (e.button === 0) {
        levelUpSkill(skill);
      } else if (e.button === 2) {
        downgradeSkill(skill);
      }
    },
    [skill, levelUpSkill, downgradeSkill]
  );

  return (
    <div
      id={skill.name}
      className={skillExist ? hovered : ""}
      onMouseEnter={() => setIsHovered(skill.preRequisites)}
      onMouseLeave={() => setIsHovered([])}
      onClick={(e) => handleKeyPress(e)}
      onContextMenu={(e) => handleKeyPress(e)}
    >
      <div>{skill.name}</div>
      <div>
        {query[skill.name as keyof KnightSkills]
          ? query[skill.name as keyof KnightSkills]
          : 0}
      </div>
      <img src={skill.icon} alt={skill.name} />
      {skill.maxLevel}
      <div>{skillExist ? skillExist.level : ""}</div>
    </div>
  );
};
