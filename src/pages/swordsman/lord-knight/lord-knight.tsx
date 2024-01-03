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
import { toBlob, toPng } from "html-to-image";
import Button from "../../../common/button";
import { globalColors } from "../../../common/helpers/style-variables";
import { createPortal } from "react-dom";
import ResetModal from "../../../common/reset-modal";
import ShareModal from "../../../common/share-modal";
import ClassButton from "../../../common/class-button";
import { useToast } from "../../../common/toast/use-toast";

const useStyles = createUseStyles({
  classDiv: {
    position: "relative",
    display: "flex",
    width: "220px",
    height: "72px",
    marginLeft: "16px",
    padding: "0px 16px",
    borderRadius: "8px",
    background: "#b5c6f3",
    color: globalColors.fontPrimary,
    alignItems: "center",
    flexShrink: 0,
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  input: {
    padding: "16px",
    width: "100%",
    background: "#FFF",
    color: "#111111",
    border: "#938f99 solid 2px",
    borderRadius: "8px",
    "&:focus": {
      outline: "none",
      border: "#111111 solid 2px",
    },
  },
  skillsCounter: {
    display: "flex",
    alignItems: "center",
    marginBottom: 25,
    "@media (max-width: 1024px)": {
      position: "sticky",
      top: 0,
      padding: "12px 0px",
      background: "#d2d2d2",
      zIndex: 100,
    },
  },
  skillTreeHeader: {
    display: "flex",
    gap: 16,
    padding: "16px 0px",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 72,
    marginTop: 24,
    flexWrap: "wrap",
    "& > :first-child": {
      ...(window.innerWidth > 1024 ? { marginLeft: "16px" } : {}),
    },
    "@media (max-width: 1024px)": {
      justifyContent: "space-around",
      gap: 28,
    },
  },
  skillTree: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
    "@media (max-width: 1024px)": {
      justifyContent: "space-around",
      gap: 28,
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
  const { input, skillsCounter, skillTreeHeader, skillTree } = useStyles();
  const toast = useToast();
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
  const [copyingBuild, setCopyingBuild] = useState(false);

  const handleKeyPress = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement>,
      skill: Skill,
      action?: "levelUp" | "levelDown" | boolean
    ) => {
      e.preventDefault();
      let mouseClick: number | undefined = e.button;
      if (action) {
        mouseClick = undefined;
      }
      if (action === "levelUp") {
        levelUpSkill(skill);
        return;
      }
      if (!action && mouseClick === 0) {
        levelUpSkill(skill);
        return;
      }
      if (action === "levelDown") {
        downgradeSkill(skill);
        return;
      }
      if (!action && mouseClick === 2) {
        downgradeSkill(skill);
        return;
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
    const exclusionClasses = ["buttons"];
    return !exclusionClasses.some((classname) =>
      node.classList?.contains(classname)
    );
  };

  const getCurrentUrl = useCallback(async () => {
    const currentUrl = window.location.href;

    try {
      await navigator.clipboard.writeText(currentUrl);
    } catch (error) {
      console.error(error);
      toast?.error("DEU RUIM");
    } finally {
      toast?.success("Successfuly copied");
    }
  }, [toast]);

  const copyBuildImgToClipboard = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    setCopyingBuild(true);

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
        toast?.error("DEU RUIM");
      } finally {
        setCopyingBuild(false);
        toast?.success("Successfuly copied");
      }
    });
  }, [ref, toast]);

  const downloadBuildImg = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    setCopyingBuild(true);

    toPng(ref.current, { cacheBust: true, filter })
      .then(async (dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
        toast?.error("DEU RUIM");
      })
      .finally(() => {
        setCopyingBuild(false);
        toast?.success("Successfuly copied");
      });
  }, [ref, toast]);

  const [showResetModal, setShowResetModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [resetBuild, setResetBuild] = useState(false);

  useEffect(() => {
    if (!resetBuild) return;

    setQuery({}, "push");
    setResetBuild(false);
    toast?.success("Build reseted");
  }, [setQuery, resetBuild, toast]);

  return (
    <div
      style={{
        paddingBottom: 20,
        background: copyingBuild ? "#d2d2d2" : "",
        pointerEvents: showShareModal ? "none" : "all",
      }}
      ref={ref}
    >
      <div className="wrapper">
        <div className={skillTreeHeader}>
          <ClassButton
            available
            notHome
            baseJobName="Swordsman"
            jobName="Lord Knight"
          />
          <div style={{ width: "232px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                gap: 6,
              }}
            >
              <label
                htmlFor="name"
                style={{ textAlign: "start", color: "#111111" }}
              >
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
          <div className="buttons" style={{ display: "flex", gap: 16 }}>
            <div>
              <Button
                color="error"
                onClick={() => setShowResetModal(true)}
                icon={<img src="./assets/reset.svg" />}
                showIcon
              >
                Reset
              </Button>
              {showResetModal &&
                createPortal(
                  <ResetModal
                    setShowResetModal={setShowResetModal}
                    setResetBuild={setResetBuild}
                  />,
                  document.body
                )}
            </div>
            <div>
              <Button
                color="success"
                onClick={() => setShowShareModal(true)}
                icon={<img src="./assets/share.svg" />}
                showIcon
              >
                Share
              </Button>
              {showShareModal &&
                createPortal(
                  <ShareModal
                    setShowShareModal={setShowShareModal}
                    copyBuildImgToClipboard={copyBuildImgToClipboard}
                    downloadBuildImg={downloadBuildImg}
                    getCurrentUrl={getCurrentUrl}
                  />,
                  document.body
                )}
            </div>
          </div>
        </div>
        <div className={skillTree}>
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
            <div className={skillsCounter}>
              <div style={{ color: "#111111", fontWeight: 500 }}>
                Lord Knight Skills
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
                skill={majesticSword}
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
                skill={jointBeat}
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
                skill={ignitionBreak}
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
                skill={vendetta}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
