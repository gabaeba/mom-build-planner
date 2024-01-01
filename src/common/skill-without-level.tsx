/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import { Skill } from "./types";

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
    userSelect: "none",
    flexShrink: 0,
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      color: "#FFF",
      textDecoration: "underline",
      textUnderlineOffset: "5px",
    },
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
}

export const SkillWithoutLevel = ({ skill }: SkillProps) => {
  const { skillBase } = useStyles();

  return (
    <div id={skill.name} className={`${skillBase}`}>
      <img src={skill.icon} alt={skill.name} style={{ marginRight: 10 }} />
      <div style={{ marginRight: 5 }}>{skill.name}</div>
      <div style={{ marginLeft: "auto" }}>1/{skill.maxLevel}</div>
    </div>
  );
};
