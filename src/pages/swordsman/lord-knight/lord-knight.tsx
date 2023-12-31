import { SkillComponent } from "../../../common/skill";
import {
  aerialAssault,
  auraBlade,
  berserk,
  clashingSpiral,
  concentration,
  defensiveStance,
  headCrush,
  ignitionBreak,
  jointBeat,
  lordKnightSkills,
  majesticSword,
  parry,
  phantomThrust,
  tensionRelax,
  vendetta,
} from "./skills";
import { Swordsman } from "../swordsman/swordsman";
import { useSkill } from "../../../common/helpers/handle-skill-change";
import { useCallback, useEffect, useState } from "react";
import { Skill } from "../../../common/types";
import { NumberParam, useQueryParams } from "use-query-params";
import { Knight, KnightSkills } from "../knight/knight";
import { checkHowManySkillPoints } from "../../../common/helpers/check-skill-points";

export type LordKnightSkillParams = KnightSkills & {
  "Aerial Assault": typeof NumberParam;
  "Aura Blade": typeof NumberParam;
  Berserk: typeof NumberParam;
  "Clashing Spiral": typeof NumberParam;
  Concentration: typeof NumberParam;
  "Defensive Stance": typeof NumberParam;
  "Head Crush": typeof NumberParam;
  "Ignition Break": typeof NumberParam;
  "Joint Beat": typeof NumberParam;
  "Majestic Sword": typeof NumberParam;
  Parry: typeof NumberParam;
  "Phantom Thrust": typeof NumberParam;
  "Tension Relax": typeof NumberParam;
  Vendetta: typeof NumberParam;
};

export const LordKnight = () => {
  const [query, setQuery] = useQueryParams<LordKnightSkillParams>({
    Bash: NumberParam,
    Provoke: NumberParam,
    Endure: NumberParam,
    "Increase HP Recovery": NumberParam,
    "Magnum Break": NumberParam,
    "Sword Mastery": NumberParam,
    "Spear Mastery": NumberParam,
    "Iron Defense": NumberParam,
    "One-Hand Quicken": NumberParam,
    "Twohand Quicken": NumberParam,
    "Auto Counter": NumberParam,
    "Peco Peco Ride": NumberParam,
    "Movement Mastery": NumberParam,
    Pierce: NumberParam,
    "Spear Stab": NumberParam,
    "Spear Boomerang": NumberParam,
    "Bowling Bash": NumberParam,
    "Brandish Spear": NumberParam,
    "Aerial Assault": NumberParam,
    "Aura Blade": NumberParam,
    Berserk: NumberParam,
    "Clashing Spiral": NumberParam,
    Concentration: NumberParam,
    "Defensive Stance": NumberParam,
    "Head Crush": NumberParam,
    "Ignition Break": NumberParam,
    "Joint Beat": NumberParam,
    "Majestic Sword": NumberParam,
    Parry: NumberParam,
    "Phantom Thrust": NumberParam,
    "Tension Relax": NumberParam,
    Vendetta: NumberParam,
  });

  const [isHovered, setIsHovered] = useState<Skill["preRequisites"]>();
  const [levelUpSkill, downgradeSkill] = useSkill({ query, setQuery });

  const handleKeyPress = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, skill: Skill) => {
      e.preventDefault();
      if (e.button === 0) {
        levelUpSkill(skill);
      } else if (e.button === 2) {
        downgradeSkill(skill);
      }
    },
    [levelUpSkill, downgradeSkill]
  );

  const [skillPoints, setSkillPoints] = useState(0);
  const skillNames = lordKnightSkills?.map((e) => e.name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const urlParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    checkHowManySkillPoints(skillNames, urlParams, setSkillPoints);
  }, [skillNames, urlParams]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Swordsman
        handleKeyPress={handleKeyPress}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      <Knight
        handleKeyPress={handleKeyPress}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      <div>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 25 }}
        >
          <div style={{ color: "#FFF", fontWeight: 500 }}>
            Lord Knight Skills
          </div>
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
            skill={aerialAssault}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={auraBlade}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={berserk}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={clashingSpiral}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={concentration}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={defensiveStance}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={headCrush}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={ignitionBreak}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={jointBeat}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={majesticSword}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={parry}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={phantomThrust}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={tensionRelax}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <SkillComponent
            skill={vendetta}
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
        </div>
      </div>
    </div>
  );
};
