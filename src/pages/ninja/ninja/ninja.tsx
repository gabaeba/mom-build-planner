import {
  bladeMastery,
  castOffCicadaShell,
  coinTrick,
  crimsonFireBlossom,
  crimsonFireFormation,
  dragonFireFormation,
  fallingIcePillar,
  finalStrike,
  flipTatami,
  illusionThrust,
  illusionaryShadow,
  lightningCrash,
  lightningSpearOfIce,
  mistSlash,
  ninjaSkills,
  ninpouTraining,
  shadowJump,
  shadowSlash,
  soul,
  throwHuumaShuriken,
  throwKunai,
  waterEscapeTechnique,
  windBlade,
  zephyrStrike,
} from "./skills";
import { SkillComponent } from "../../../common/skill";
import { NumberParam } from "use-query-params";
import { Skill } from "../../../common/types";
import { useEffect, useState } from "react";
import { checkHowManySkillPoints } from "../../../common/helpers/check-skill-points";
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
  skillGrid: {
    display: "grid",
    gridTemplateRows: "repeat(3, auto)",
    gridTemplateColumns: "repeat(3, 360px)",
    columnGap: "30px",
    justifyContent: "space-between",
    gridAutoFlow: "row",
    marginBottom: 26,
    "@media (max-width: 1024px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
});

export type NinjaSkills = {
  "Crimson Fire Blossom": typeof NumberParam;
  "Crimson Fire Formation": typeof NumberParam;
  "Dragon Fire Formation": typeof NumberParam;
  "Lightning Spear of Ice": typeof NumberParam;
  "Falling Ice Pillar": typeof NumberParam;
  "Water Escape Technique": typeof NumberParam;
  "Wind Blade": typeof NumberParam;
  "Lightning Crash": typeof NumberParam;
  "Illusionary Shadow": typeof NumberParam;
  "Shadow Jump": typeof NumberParam;
  "Illusion Thrust": typeof NumberParam;
  "Mist Slash": typeof NumberParam;
  "Zephyr Strike": typeof NumberParam;
  "Shadow Slash": typeof NumberParam;
  "Final Strike": typeof NumberParam;
  Soul: typeof NumberParam;
  "Flip Tatami": typeof NumberParam;
  "Blade Mastery": typeof NumberParam;
  "Throw Kunai": typeof NumberParam;
  "Throw Huuma Shuriken": typeof NumberParam;
  "Coin Trick": typeof NumberParam;
  "Cast-off Cicada Shell": typeof NumberParam;
  "Ninpou Training": typeof NumberParam;
};

type NinjaProps = {
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

export const Ninja = ({
  handleKeyPress,
  isHovered,
  setIsHovered,
}: NinjaProps) => {
  const { skillsCounter, skillGrid } = useStyles();
  const [skillPoints, setSkillPoints] = useState(0);
  const skillNames = ninjaSkills?.map((e) => e.name);
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
          Ninja Skills
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#111111",
            fontWeight: 600,
            marginLeft: "auto",
            background: skillPoints > 74 ? "#F0A199" : "#ABD973",
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
          74
        </div>
      </div>
      <div className={skillGrid}>
        <SkillComponent
          skill={crimsonFireBlossom}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={crimsonFireFormation}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={dragonFireFormation}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={lightningSpearOfIce}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={fallingIcePillar}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={waterEscapeTechnique}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={windBlade}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={lightningCrash}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={illusionaryShadow}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={shadowJump}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={illusionThrust}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={mistSlash}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={zephyrStrike}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={shadowSlash}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={finalStrike}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={soul}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={flipTatami}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={bladeMastery}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={throwKunai}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={throwHuumaShuriken}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={coinTrick}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={castOffCicadaShell}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={ninpouTraining}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
      </div>
    </div>
  );
};
