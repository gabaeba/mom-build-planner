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
import { useCallback, useEffect, useRef, useState } from "react";
import { Skill } from "../../../common/types";
import { NumberParam, StringParam, useQueryParams } from "use-query-params";
import { Knight, KnightSkills } from "../knight/knight";
import { checkHowManySkillPoints } from "../../../common/helpers/check-skill-points";
import { useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { toBlob } from "html-to-image";
import Button from "../../../common/button";

const useStyles = createUseStyles({
  classDiv: {
    position: "relative",
    display: "flex",
    width: "200px",
    height: "72px",
    padding: "0px 16px",
    borderRadius: "8px",
    background: "#0F1417",
    color: "#FFF",
    alignItems: "center",
    flexShrink: 0,
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  input: {
    padding: "16px",
    width: "100%",
    background: "#454647",
    color: "#FFF",
    border: "#938f99 solid 2px",
    borderRadius: "8px",
    "&:focus": {
      outline: "none",
      border: "#FFF solid 2px",
    },
  },
});

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
  BuildName: typeof StringParam;
};

export const LordKnight = () => {
  const { classDiv, input } = useStyles();
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
    BuildName: StringParam,
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
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const urlParams = new URLSearchParams(location.search);
  useEffect(() => {
    checkHowManySkillPoints(skillNames, urlParams, setSkillPoints);
  }, [skillNames, urlParams]);

  const ref = useRef<HTMLDivElement>(null);

  const filter = (node: HTMLElement) => {
    const exclusionClasses = ["share"];
    return !exclusionClasses.some((classname) =>
      node.classList?.contains(classname)
    );
  };

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toBlob(ref.current, { cacheBust: true, filter }).then(async function (
      blob
    ) {
      try {
        await navigator.clipboard.write([
          //@ts-expect-error - typescript doesn't know about ClipboardItem yet
          new ClipboardItem({
            [blob?.type ?? ""]: blob,
          }),
        ]);
      } catch (error) {
        console.error(error);
      }
    });

    // toPng(ref.current, { cacheBust: true, filter })
    //   .then(async (dataUrl) => {
    //     const link = document.createElement("a");
    //     link.download = "my-image-name.png";

    //     link.href = dataUrl;
    //     link.click();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [ref]);

  return (
    <div className="wrapper" ref={ref}>
      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 16,
          marginBottom: 48,
        }}
      >
        <div className={classDiv}>
          <img
            src="./assets/lord-knight/lk_sprite.png"
            alt="lk sprite"
            style={{ position: "absolute", left: -20, zIndex: 1 }}
          />
          <img
            src="./assets/lord-knight/lk_icon.png"
            alt="lk class icon"
            style={{ marginLeft: 10, marginRight: 20 }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: 6,
            }}
          >
            <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>
              Swordsman
            </p>
            <p style={{ fontSize: 16, margin: 0 }}>Lord Knight</p>
          </div>
        </div>
        <div style={{ width: "232px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              gap: 6,
            }}
          >
            <label htmlFor="name" style={{ textAlign: "start", color: "#FFF" }}>
              Build name
            </label>
            <input
              name="name"
              id="name"
              className={input}
              maxLength={40}
              value={query?.BuildName || ""}
              onChange={(e) =>
                setQuery(
                  (prev) => ({
                    ...prev,
                    BuildName: e?.target?.value ? e.target.value : undefined,
                  }),
                  "push"
                )
              }
            />
          </div>
        </div>

        <div className="share" style={{ display: "flex", width: "232px", gap: 16 }}>
          <div>
            <Button color="error" onClick={onButtonClick}>Reset Build</Button>
          </div>
          <div>
            <Button color="success" onClick={onButtonClick} icon={<div>teste</div>} showIcon>Share</Button>
          </div>
        </div>
      </div>
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
    </div>
  );
};
