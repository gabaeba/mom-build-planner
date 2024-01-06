import {
  archerSkills,
  arrowCrafting,
  arrowShower,
  attentionConcentrate,
  chargeArrow,
  doubleStrafing,
  heavyArrow,
  owlsEye,
  precision,
  vulturesEye,
} from "./skills";
import { SkillComponent } from "../../../common/skill";
import { NumberParam } from "use-query-params";
import { Skill } from "../../../common/types";
import { useEffect, useState } from "react";
import { checkHowManySkillPoints } from "../../../common/helpers/check-skill-points";
import { SkillWithoutLevel } from "../../../common/skill-without-level";
import { useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  skillsCounter: {
    display: "flex",
    alignItems: "center",
    marginBottom: 25,
    "@media (max-width: 1024px)": {
      position: "sticky",
      top: 0,
      padding: "12px 0px",
      zIndex: 100,
    },
  },
});

export type ArcherSkills = {
  "Owl's Eye": typeof NumberParam;
  "Vulture's Eye": typeof NumberParam;
  "Attention Concentrate": typeof NumberParam;
  "Double Strafing": typeof NumberParam;
  "Arrow Shower": typeof NumberParam;
  "Charge Arrow": typeof NumberParam;
  Precision: typeof NumberParam;
  "Heavy Arrow": typeof NumberParam;
};

type ArcherProps = {
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
};

export const Archer = ({
  handleKeyPress,
  isHovered,
  setIsHovered,
}: ArcherProps) => {
  const { skillsCounter } = useStyles();
  const [skillPoints, setSkillPoints] = useState(0);
  const skillNames = archerSkills?.map((e) => e.name);
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const urlParams = new URLSearchParams(location.search);

  useEffect(() => {
    checkHowManySkillPoints(skillNames, urlParams, setSkillPoints);
  }, [skillNames, urlParams]);
  return (
    <div>
      <div className={skillsCounter}>
        <div
          style={{
            color: "#111111",
            textShadow: "0px 0px 2px #fff",
            fontWeight: 600,
          }}
        >
          Archer Skills
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#111111",
            fontWeight: 600,
            marginLeft: "auto",
            background: skillPoints > 54 ? "#F0A199" : "#ABD973",
            borderRadius: "8px 0px 0px 8px",
            width: "46px",
            height: "25px",
            boxShadow:
              "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          {skillPoints}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#0F1417",
            fontWeight: 600,
            background: "#fff",
            borderRadius: "0px 8px 8px 0px",
            width: "46px",
            height: "25px",
            boxShadow:
              "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          54
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SkillComponent
          skill={owlsEye}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={vulturesEye}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={attentionConcentrate}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={doubleStrafing}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={arrowShower}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={chargeArrow}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={precision}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={heavyArrow}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillWithoutLevel skill={arrowCrafting} />
      </div>
    </div>
  );
};
