import {
  autoBerserk,
  bash,
  endure,
  fatalBlow,
  hpRecoveryWhileMoving,
  increaseHpRecovery,
  ironDefense,
  magnumBreak,
  oneHandQuicken,
  provoke,
  spearMastery,
  swordMastery,
  swordsmanSkills,
} from "../swordsman/skills";
import { SkillComponent } from "../../../common/skill";
import { NumberParam } from "use-query-params";
import { Skill } from "../../../common/types";
import { useEffect, useState } from "react";
import { checkHowManySkillPoints } from "../../../common/helpers/check-skill-points";
import { SkillWithoutLevel } from "../../../common/skill-without-level";
import { useLocation } from "react-router-dom";

export type SwordsmanSkills = {
  Bash: typeof NumberParam;
  Provoke: typeof NumberParam;
  Endure: typeof NumberParam;
  "Increase HP Recovery": typeof NumberParam;
  "Magnum Break": typeof NumberParam;
  "Sword Mastery": typeof NumberParam;
  "Spear Mastery": typeof NumberParam;
  "Iron Defense": typeof NumberParam;
  "One-Hand Quicken": typeof NumberParam;
};

type SwordsmanProps = {
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

export const Swordsman = ({
  handleKeyPress,
  isHovered,
  setIsHovered,
}: SwordsmanProps) => {
  const [skillPoints, setSkillPoints] = useState(0);
  const skillNames = swordsmanSkills?.map((e) => e.name);
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const urlParams = new URLSearchParams(location.search);

  useEffect(() => {
    checkHowManySkillPoints(skillNames, urlParams, setSkillPoints);
  }, [skillNames, urlParams]);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 25 }}>
        <div style={{ color: "#FFF", fontWeight: 500 }}>Swordsman Skills</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFF",
            fontWeight: 600,
            marginLeft: "auto",
            background: skillPoints > 54 ? "#410002" : "#007336",
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
          gap: 12,
        }}
      >
        <SkillComponent
          skill={swordMastery}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={spearMastery}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={oneHandQuicken}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={increaseHpRecovery}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={bash}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={provoke}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={ironDefense}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={magnumBreak}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={endure}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillWithoutLevel skill={autoBerserk} />
        <SkillWithoutLevel skill={fatalBlow} />
        <SkillWithoutLevel skill={hpRecoveryWhileMoving} />
      </div>
    </div>
  );
};
