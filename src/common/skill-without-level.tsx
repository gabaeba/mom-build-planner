/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import { Skill } from "./types";

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
    flexShrink: 0,
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      color: "#111111",
      textDecoration: "underline",
      textUnderlineOffset: "5px",
    },
    "@media (max-width: 640px)": {
      flexDirection: "column",
      textDecoration: "none",
      "&:hover": {
        color: "#FFF",
        textDecoration: "none",
      },
    },
  },
  requirementRed: {
    background: "#410002 !important",
  },
  requirementGreen: {
    background: "#007336 !important",
  },
  skillInfo: {
    display: "flex",
    alignItems: "center",
    "@media (max-width: 640px)": {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      textDecoration: "none",
    },
  },
  skillLevel: {
    marginLeft: "auto",
    "@media (max-width: 640px)": {
      display: "flex !important",
      marginLeft: 0,
      flexGrow: 1,
      alignItems: "center",
      textDecoration: "none !important",
      gap: 12,
    },
  },
});

interface SkillProps {
  skill: Skill;
}

export const SkillWithoutLevel = ({ skill }: SkillProps) => {
  const { skillBase, skillInfo, skillLevel } = useStyles();

  return (
    <div id={skill.name} className={`${skillBase}`}>
      <div className={skillInfo}>
        <img src={skill.icon} alt={skill.name} style={{ marginRight: 10 }} />
        <div style={{ marginRight: 5 }}>{skill.name}</div>
      </div>
      <div className={skillLevel}>
        <div>1/{skill.maxLevel}</div>
      </div>
    </div>
  );
};
