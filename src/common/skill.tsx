/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import { Skill } from "./types";
import { useLocation } from "react-router-dom";
import useIsMobile from "./helpers/use-mobile";

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
    width: "360px",
    height: "60px",
    padding: "0px 16px",
    borderRadius: "8px",
    background: "#FFF",
    color: "#111111",
    alignItems: "center",
    userSelect: "none",
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      color: "#111111",
      textDecoration: "underline",
      textUnderlineOffset: "5px",
    },
    "@media (max-width: 1024px)": {
      flexDirection: "column",
      textDecoration: "none",
      "&:hover": {
        color: "#111111",
        textDecoration: "none",
      },
    },
  },
  requirementRed: {
    background: "#EDC2B7 !important",
    color: "#111111 !important",
    "& img": {
      opacity: "1 !important",
    },
  },
  requirementGreen: {
    background: "#D4EDB7 !important",
    color: "#111111 !important",
    "& img": {
      opacity: "1 !important",
    },
  },
  skillInfo: {
    display: "flex",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      textDecoration: "none",
    },
  },
  skillLevel: {
    marginLeft: "auto",
    "@media (max-width: 1024px)": {
      display: "flex !important",
      marginLeft: 0,
      flexGrow: 1,
      alignItems: "center",
      textDecoration: "none !important",
      gap: 12,
    },
  },
  levelUp: {
    fontWeight: 700,
    fontSize: 20,
    "@media (min-width: 1024px)": {
      display: "none",
    },
  },
});

interface SkillProps {
  skill: Skill;
  handleKeyPress: (
    e: React.MouseEvent<HTMLDivElement>,
    skill: Skill,
    action?: "levelUp" | "levelDown" | boolean
  ) => void;
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
  const {
    skillBase,
    requirementRed,
    requirementGreen,
    skillInfo,
    skillLevel,
    levelUp,
  } = useStyles();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
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

  const { isMobile } = useIsMobile(1024);

  return (
    <div
      id={skill.name}
      className={`${skillBase} ${skillTeste(preReqs)}`}
      onMouseEnter={() => setIsHovered(skill.preRequisites)}
      style={{
        color: Number(skillName) === 0 ? "#848484" : "",
        background: Number(skillName) === 0 ? "#F0F0F0" : "",
      }}
      onMouseLeave={() => setIsHovered([])}
      onClick={(e) => handleKeyPress(e, skill, isMobile)}
      onContextMenu={(e) => handleKeyPress(e, skill, isMobile)}
    >
      <div className={skillInfo}>
        <img
          src={skill.icon}
          alt={skill.name}
          style={{
            marginRight: 10,
            opacity: Number(skillName) === 0 ? "0.5" : "",
          }}
        />
        <div style={{ marginRight: 5 }}>{skill.name}</div>
        <div>{skillExist ? `(${skillExist.level})` : ""}</div>
      </div>
      <div className={skillLevel}>
        <div
          className={levelUp}
          onClick={(e) => handleKeyPress(e, skill, "levelDown")}
        >
          -
        </div>
        {searchParams.has(skill.name) ? skillName : 0} /{skill.maxLevel}
        <div
          className={levelUp}
          onClick={(e) => handleKeyPress(e, skill, "levelUp")}
        >
          +
        </div>
      </div>
    </div>
  );
};
