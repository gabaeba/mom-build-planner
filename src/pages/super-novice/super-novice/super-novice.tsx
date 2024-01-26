import {
  angelus,
  aquaBenedicta,
  attentionConcentrate,
  axeMastery,
  bash,
  blessing,
  cartRevolution,
  coldBolt,
  cure,
  cursedTomahawk,
  decreaseAgi,
  detoxify,
  doubleAttack,
  efficiency,
  endure,
  enlargeWeightLimit,
  envenom,
  fireBall,
  fireBolt,
  fireWall,
  frostDiver,
  heal,
  hiding,
  holyLight,
  improveDodge,
  increaseAgi,
  increaseHpRecovery,
  increaseSpRecovery,
  increaseSpeed,
  ironDefense,
  itemAppraisal,
  lightningBolt,
  magnumBreak,
  maceMastery,
  mammonite,
  napalmBeat,
  oneHandQuicken,
  owlsEye,
  pneuma,
  provoke,
  pushcartMastery,
  quickStrike,
  repelEvil,
  ruwach,
  safetyWallMage,
  sight,
  soulStrike,
  steal,
  stoneCurse,
  superNoviceSkills,
  swordMastery,
  teleport,
  throwSand,
  thunderstorm,
} from "./skills";
import { SkillComponent } from "../../../common/skill";
import { NumberParam } from "use-query-params";
import { Skill } from "../../../common/types";
import { useEffect, useState } from "react";
import { checkHowManySkillPoints } from "../../../common/helpers/check-skill-points";
import { useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { SkillWithoutLevel } from "../../../common/skill-without-level";

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

export type SuperNoviceSkills = {
  Bash: typeof NumberParam;
  Provoke: typeof NumberParam;
  Endure: typeof NumberParam;
  "Increase HP Recovery": typeof NumberParam;
  "Magnum Break": typeof NumberParam;
  "Sword Mastery": typeof NumberParam;
  "Spear Mastery": typeof NumberParam;
  "Iron Defense": typeof NumberParam;
  "One-Hand Quicken": typeof NumberParam;
  "Mace Mastery": typeof NumberParam;
  "Repel Evil": typeof NumberParam;
  Ruwach: typeof NumberParam;
  "Holy Light": typeof NumberParam;
  Angelus: typeof NumberParam;
  Blessing: typeof NumberParam;
  Heal: typeof NumberParam;
  Cure: typeof NumberParam;
  "Increase AGI": typeof NumberParam;
  "Decrease AGI": typeof NumberParam;
  Teleport: typeof NumberParam;
  Pneuma: typeof NumberParam;
  "Double Attack": typeof NumberParam;
  "Improve Dodge": typeof NumberParam;
  Envenom: typeof NumberParam;
  Detoxify: typeof NumberParam;
  Steal: typeof NumberParam;
  Hiding: typeof NumberParam;
  "Increase Speed": typeof NumberParam;
  "Throw Sand": typeof NumberParam;
  "Quick Strike": typeof NumberParam;
  "Owl's Eye": typeof NumberParam;
  "Attention Concentrate": typeof NumberParam;
  "Axe Mastery": typeof NumberParam;
  "Enlarge Weight Limit": typeof NumberParam;
  "Item Appraisal": typeof NumberParam;
  Mammonite: typeof NumberParam;
  "Pushcart Mastery": typeof NumberParam;
  "Cart Revolution": typeof NumberParam;
  "Cursed Tomahawk": typeof NumberParam;
  Efficiency: typeof NumberParam;
  "Cold Bolt": typeof NumberParam;
  "Fire Bolt": typeof NumberParam;
  "Fire Ball": typeof NumberParam;
  Sight: typeof NumberParam;
  "Fire Wall": typeof NumberParam;
  "Frost Diver": typeof NumberParam;
  "Increase SP Recovery": typeof NumberParam;
  "Lightning Bolt": typeof NumberParam;
  "Napalm Beat": typeof NumberParam;
  "Soul Strike": typeof NumberParam;
  "Safety Wall": typeof NumberParam;
  "Stone Curse": typeof NumberParam;
  Thunderstorm: typeof NumberParam;
};

type SuperNoviceProps = {
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

export const Novice = ({
  handleKeyPress,
  isHovered,
  setIsHovered,
}: SuperNoviceProps) => {
  const { skillsCounter, skillGrid } = useStyles();
  const [skillPoints, setSkillPoints] = useState(0);
  const skillNames = superNoviceSkills?.map((e) => e.name);
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
          Super Novice Skills
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#111111",
            fontWeight: 600,
            marginLeft: "auto",
            background: skillPoints > 108 ? "#F0A199" : "#ABD973",
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
          108
        </div>
      </div>
      <div className={skillGrid}>
        <SkillComponent
          skill={swordMastery}
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
          skill={ironDefense}
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
          skill={magnumBreak}
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
          skill={endure}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={repelEvil}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={maceMastery}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={angelus}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillWithoutLevel skill={aquaBenedicta} />
        <SkillComponent
          skill={blessing}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={cure}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={increaseAgi}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={decreaseAgi}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={heal}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={holyLight}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={ruwach}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={teleport}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={pneuma}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={envenom}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={detoxify}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={doubleAttack}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={improveDodge}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={steal}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={hiding}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={quickStrike}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={increaseSpeed}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={throwSand}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={owlsEye}
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
          skill={axeMastery}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={enlargeWeightLimit}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={itemAppraisal}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={mammonite}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={pushcartMastery}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={cursedTomahawk}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={efficiency}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={cartRevolution}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={coldBolt}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={fireBolt}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={fireBall}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={sight}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={fireWall}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={frostDiver}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={increaseSpRecovery}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={lightningBolt}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={thunderstorm}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={napalmBeat}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={soulStrike}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={safetyWallMage}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <SkillComponent
          skill={stoneCurse}
          handleKeyPress={handleKeyPress}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
      </div>
    </div>
  );
};
