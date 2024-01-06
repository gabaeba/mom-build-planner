import {
  adrenalineRush,
  basicMechanics,
  blacksmithSkills,
  destroyMachine,
  forgeAutomaton,
  hammerFall,
  hiltBinding,
  maximizePower,
  overThrust,
  powerSwing,
  repairEquipment,
  skinTempering,
  weaponPerfection,
  weaponryResearch,
} from "./skills";
import { SkillComponent } from "../../../common/skill";
import { NumberParam } from "use-query-params";
import { Skill } from "../../../common/types";
import { useEffect, useState } from "react";
import { checkHowManySkillPoints } from "../../../common/helpers/check-skill-points";
import { useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { MerchantSkills } from "../merchant/merchant";

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

export type BlacksmithSkills = MerchantSkills & {
  "Hilt Binding": typeof NumberParam;
  "Weaponry Research": typeof NumberParam;
  "Repair Equipment": typeof NumberParam;
  "Skin Tempering": typeof NumberParam;
  "Hammer Fall": typeof NumberParam;
  "Adrenaline Rush": typeof NumberParam;
  "Power Swing": typeof NumberParam;
  "Weapon Perfection": typeof NumberParam;
  "Over Thrust": typeof NumberParam;
  "Maximize Power": typeof NumberParam;
  "Basic Mechanics": typeof NumberParam;
  "Forge Automaton": typeof NumberParam;
  "Destroy Machine": typeof NumberParam;
};

type BlacksmithProps = {
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

export const Blacksmith = ({
  handleKeyPress,
  isHovered,
  setIsHovered,
}: BlacksmithProps) => {
  const { skillsCounter } = useStyles();
  const [skillPoints, setSkillPoints] = useState(0);
  const skillNames = blacksmithSkills?.map((e) => e.name);
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
          Blacksmith Skills
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
          skill={hiltBinding}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={weaponryResearch}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={repairEquipment}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={skinTempering}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={hammerFall}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={adrenalineRush}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={powerSwing}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={weaponPerfection}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={overThrust}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={maximizePower}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={basicMechanics}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={forgeAutomaton}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={destroyMachine}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
      </div>
    </div>
  );
};
