import {
  aDrumOnTheBattlefield,
  aPoemOfBragi,
  aWhistle,
  adaptionToCircumstances,
  appleOfIdun,
  assassinCrossOfSunset,
  bardSkills,
  dissonance,
  encore,
  eternalChaos,
  frostJoker,
  intoTheAbyss,
  invulnerableSiegfried,
  lokisVeil,
  longingForFreedom,
  lullaby,
  musicLessons,
  musicalStrike,
  pangVoice,
  theRingOfNibelungen,
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

export type BardSkills = ArcherSkills & {
  "Adaption to Circumstances": typeof NumberParam;
  Encore: typeof NumberParam;
  "Frost Joker": typeof NumberParam;
  "Music Lessons": typeof NumberParam;
  Dissonance: typeof NumberParam;
  "Longing for Freedom": typeof NumberParam;
  "Musical Strike": typeof NumberParam;
  "Assassin Cross of Sunset": typeof NumberParam;
  "A Poem of Bragi": typeof NumberParam;
  "A Whistle": typeof NumberParam;
  "Apple of Idun": typeof NumberParam;
  "A Drum on the Battlefield": typeof NumberParam;
  "The Ring of Nibelungen": typeof NumberParam;
  "Loki's Veil": typeof NumberParam;
  "Eternal Chaos": typeof NumberParam;
  "Invulnerable Siegfried": typeof NumberParam;
  "Into the Abyss": typeof NumberParam;
};

type BardProps = {
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

export const Bard = ({
  handleKeyPress,
  isHovered,
  setIsHovered,
}: BardProps) => {
  const { skillsCounter } = useStyles();
  const [skillPoints, setSkillPoints] = useState(0);
  const skillNames = bardSkills?.map((e) => e.name);
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
          Bard Skills
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
          skill={adaptionToCircumstances}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={encore}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={frostJoker}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={musicLessons}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={dissonance}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={longingForFreedom}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={musicalStrike}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={assassinCrossOfSunset}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={aPoemOfBragi}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={aWhistle}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={appleOfIdun}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={aDrumOnTheBattlefield}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={theRingOfNibelungen}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={lokisVeil}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={eternalChaos}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={invulnerableSiegfried}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={lullaby}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={intoTheAbyss}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillWithoutLevel skill={pangVoice} />
      </div>
    </div>
  );
};
