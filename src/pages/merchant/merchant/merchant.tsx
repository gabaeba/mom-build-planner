import {
  axeMastery,
  cartRevolution,
  crazyUproar,
  cursedTomahawk,
  efficiency,
  enlargeWeightLimit,
  findersFee,
  itemAppraisal,
  mammonite,
  merchantSkills,
  pushcartMastery,
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

export type MerchantSkills = {
  "Axe Mastery": typeof NumberParam;
  "Enlarge Weight Limit": typeof NumberParam;
  "Item Appraisal": typeof NumberParam;
  Mammonite: typeof NumberParam;
  "Pushcart Mastery": typeof NumberParam;
  "Cart Revolution": typeof NumberParam;
  "Cursed Tomahawk": typeof NumberParam;
  Efficiency: typeof NumberParam;
};

type MerchantProps = {
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

export const Merchant = ({
  handleKeyPress,
  isHovered,
  setIsHovered,
}: MerchantProps) => {
  const { skillsCounter } = useStyles();
  const [skillPoints, setSkillPoints] = useState(0);
  const skillNames = merchantSkills?.map((e) => e.name);
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
          Merchant Skills
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
          skill={cartRevolution}
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
        <SkillWithoutLevel skill={crazyUproar} />
        <SkillWithoutLevel skill={findersFee} />
      </div>
    </div>
  );
};
