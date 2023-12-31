/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import { Skill } from "./types";

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
  skillBase: {
    display: "flex",
    width: "274px",
    height: "57px",
    padding: "0px 16px",
    borderRadius: "8px",
    background: "#0F1417",
    color: "#FFF",
    alignItems: "center",
    flexShrink: 0,
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  requirementRed: {
    background: "#410002 !important",
  },
  requirementGreen: {
    background: "#007336 !important",
  },
});

interface SkillProps {
  skill: Skill;
  handleKeyPress: (e: React.MouseEvent<HTMLDivElement>, skill: Skill) => void;
  isHovered:
    | {
        skill: Skill;
        level: number;
      }[]
    | undefined;
  setIsHovered: React.Dispatch<
    React.SetStateAction<
      | {
          skill: Skill;
          level: number;
        }[]
      | undefined
    >
  >;
}

export const SkillComponent = ({
  skill,
  handleKeyPress,
  isHovered,
  setIsHovered,
}: SkillProps) => {
  const { skillBase, requirementRed, requirementGreen } = useStyles();
  const searchParams = new URLSearchParams(window.location.search);
  const skillName = searchParams.get(skill.name);

  const preReqs = isHovered?.flatMap((x: { skill: Skill; level: number }) =>
    flattenReqs(x)
  );
  const skillExist = preReqs?.find(
    (e: { name: string }) => e?.name === skill.name
  );

  const skillTeste = (preReq: typeof preReqs) => {
    const exist = preReq?.find((e: { name: string }) => e?.name === skill.name);
    if (Number(skillName) >= (exist?.level ?? 100)) return requirementGreen;
    if (exist) return requirementRed;
    return "";
  };

  return (
    <div
      id={skill.name}
      className={`${skillBase} ${skillTeste(preReqs)}`}
      onMouseEnter={() => setIsHovered(skill.preRequisites)}
      onMouseLeave={() => setIsHovered([])}
      onClick={(e) => handleKeyPress(e, skill)}
      onContextMenu={(e) => handleKeyPress(e, skill)}
    >
      <img src={skill.icon} alt={skill.name} style={{ marginRight: 10 }} />
      <div style={{ marginRight: 5 }}>{skill.name}</div>
      <div>{skillExist ? `(${skillExist.level})` : ""}</div>
      <div style={{ marginLeft: "auto" }}>
        {searchParams.has(skill.name) ? skillName : 0} /{skill.maxLevel}
      </div>
    </div>
  );
};
