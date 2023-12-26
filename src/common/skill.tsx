import { createUseStyles } from "react-jss";
import { Skill } from "./types";
import { useContext } from "react";
import { LordKnightContext } from "../pages/swordsman/lord-knight/lord-knight-context";

const useStyles = createUseStyles({
  hovered: {
    border: "red 5px solid",
  },
});

type SkillProps = {
  skill: Skill;
};

export const SkillComponent = ({ skill }: SkillProps) => {
  const { hovered } = useStyles();
  const { isHovered, setIsHovered } = useContext(LordKnightContext);
  const skillExist = isHovered?.find((e) => e?.skill?.name === skill.name);

  return (
    <div
      id={skill.skillId}
      className={skillExist ? hovered : ""}
      onMouseEnter={() => setIsHovered(skill.preRequisites)}
      onMouseLeave={() => setIsHovered([])}
    >
      <div>{skill.name}</div>
      <img src={skill.icon} alt={skill.name} />
      {skill.maxLevel}
      <div>{skillExist ? skillExist.level : ""}</div>
    </div>
  );
};
