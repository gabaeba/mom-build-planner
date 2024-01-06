import {
  ankleSnare,
  beastBane,
  beastStrafing,
  blastMine,
  blitzBeat,
  claymoreTrap,
  detect,
  falconMastery,
  flasher,
  freezingTrap,
  hunterSkills,
  landMine,
  removeTrap,
  sandman,
  shockwaveTrap,
  skidTrap,
  springTrap,
  steelCrow,
  talkieBox,
} from "./skills";
import { SkillComponent } from "../../../common/skill";
import { NumberParam } from "use-query-params";
import { Skill } from "../../../common/types";
import { useEffect, useState } from "react";
import { checkHowManySkillPoints } from "../../../common/helpers/check-skill-points";
import { SkillWithoutLevel } from "../../../common/skill-without-level";
import { useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { ArcherSkills } from "../archer/archer";

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

export type HunterSkills = ArcherSkills & {
  "Skid Trap": typeof NumberParam;
  "Ankle Snare": typeof NumberParam;
  "Beast Bane": typeof NumberParam;
  "Falcon Mastery": typeof NumberParam;
  "Blitz Beat": typeof NumberParam;
  Detect: typeof NumberParam;
  Flasher: typeof NumberParam;
  "Freezing Trap": typeof NumberParam;
  "Land Mine": typeof NumberParam;
  "Remove Trap": typeof NumberParam;
  "Shockwave Trap": typeof NumberParam;
  Sandman: typeof NumberParam;
  "Blast Mine": typeof NumberParam;
  "Claymore Trap": typeof NumberParam;
  "Spring Trap": typeof NumberParam;
  "Steel Crow": typeof NumberParam;
  "Talkie Box": typeof NumberParam;
};

type HunterProps = {
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

export const Hunter = ({
  handleKeyPress,
  isHovered,
  setIsHovered,
}: HunterProps) => {
  const { skillsCounter } = useStyles();
  const [skillPoints, setSkillPoints] = useState(0);
  const skillNames = hunterSkills?.map((e) => e.name);
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
          Hunter Skills
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
          skill={skidTrap}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={ankleSnare}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={beastBane}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={falconMastery}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={blitzBeat}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={detect}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={flasher}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={freezingTrap}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={landMine}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={removeTrap}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={shockwaveTrap}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={sandman}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={blastMine}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={claymoreTrap}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={springTrap}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={steelCrow}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={talkieBox}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillWithoutLevel skill={beastStrafing} />
      </div>
    </div>
  );
};
