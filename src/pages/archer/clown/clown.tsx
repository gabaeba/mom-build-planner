import { SkillComponent } from "../../../common/skill";
import {
  arrowVulcan,
  chaoticVoice,
  clownSkills,
  dominionImpulse,
  guitarSmash,
  improvisedSong,
  infernalStrings,
  moonlitWaterMill,
  perfectRythm,
  reverberation,
  showmanship,
  soundOfDestruction,
  tarotCardOfDate,
  wandOfHermode,
} from "./skills";
import { useSkill } from "../../../common/helpers/handle-skill-change";
import { useCallback, useEffect, useRef, useState } from "react";
import { Skill } from "../../../common/types";
import { NumberParam, StringParam, useQueryParams } from "use-query-params";
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
import { Archer } from "../archer/archer";
import { Bard, BardSkills } from "../bard/bard";

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
  hero: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: "100vh",
    width: "100%",
    backgroundImage: "url('./assets/prontera.webp')",
    opacity: 0.2,
    backgroundSize: "cover",
    zIndex: -1,
  },
  wrapperScreenshot: {
    "&::before": {
      content: '""',
      position: "absolute",
      display: "block",
      width: "100%",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
      backgroundColor: "#d2d2d2",
      zIndex: -1,
    },
  },
});

export type ClownSkillParams = BardSkills & {
  Showmanship: typeof NumberParam;
  "Arrow Vulcan": typeof NumberParam;
  "Chaotic Voice": typeof NumberParam;
  "Sound of Destruction": typeof NumberParam;
  Reverberation: typeof NumberParam;
  "Dominion Impulse": typeof NumberParam;
  "Guitar Smash": typeof NumberParam;
  "Moonlit Water Mill": typeof NumberParam;
  "Wand of Hermode": typeof NumberParam;
  "Tarot Card of Fate": typeof NumberParam;
  "Improvised Song": typeof NumberParam;
  "Infernal Strings": typeof NumberParam;
  "Perfect Rythm": typeof NumberParam;
  BuildName: typeof StringParam;
};

export const Clown = () => {
  const {
    input,
    skillsCounter,
    skillTreeHeader,
    skillTree,
    hero,
    wrapperScreenshot,
  } = useStyles();
  const toast = useToast();
  const [query, setQuery] = useQueryParams<ClownSkillParams>({
    "Owl's Eye": NumberParam,
    "Vulture's Eye": NumberParam,
    "Attention Concentrate": NumberParam,
    "Double Strafing": NumberParam,
    "Arrow Shower": NumberParam,
    "Charge Arrow": NumberParam,
    Precision: NumberParam,
    "Heavy Arrow": NumberParam,
    "Adaption to Circumstances": NumberParam,
    Encore: NumberParam,
    "Frost Joker": NumberParam,
    "Music Lessons": NumberParam,
    Dissonance: NumberParam,
    "Longing for Freedom": NumberParam,
    "Musical Strike": NumberParam,
    "Assassin Cross of Sunset": NumberParam,
    "A Poem of Bragi": NumberParam,
    "A Whistle": NumberParam,
    "Apple of Idun": NumberParam,
    "A Drum on the Battlefield": NumberParam,
    "The Ring of Nibelungen": NumberParam,
    "Loki's Veil": NumberParam,
    "Eternal Chaos": NumberParam,
    "Invulnerable Siegfried": NumberParam,
    "Into the Abyss": NumberParam,
    Showmanship: NumberParam,
    "Arrow Vulcan": NumberParam,
    "Chaotic Voice": NumberParam,
    "Sound of Destruction": NumberParam,
    Reverberation: NumberParam,
    "Dominion Impulse": NumberParam,
    "Guitar Smash": NumberParam,
    "Moonlit Water Mill": NumberParam,
    "Wand of Hermode": NumberParam,
    "Tarot Card of Fate": NumberParam,
    "Improvised Song": NumberParam,
    "Infernal Strings": NumberParam,
    "Perfect Rythm": NumberParam,
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
  const skillNames = clownSkills?.map((e) => e.name);
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const urlParams = new URLSearchParams(location.search);
  useEffect(() => {
    checkHowManySkillPoints(skillNames, urlParams, setSkillPoints);
  }, [skillNames, urlParams]);

  const ref = useRef<HTMLDivElement>(null);

  const filter = (node: HTMLElement) => {
    const exclusionClasses = ["buttons", "hero"];
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

    toBlob(ref.current, {
      cacheBust: true,
      filter,
      backgroundColor: "#d2d2d2",
    }).then(async function (blob) {
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

    toPng(ref.current, { cacheBust: true, filter, backgroundColor: "#d2d2d2" })
      .then(async (dataUrl) => {
        const link = document.createElement("a");
        link.download = query?.BuildName
          ? `${query?.BuildName}.png`
          : "build.png";
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
  }, [ref, toast, query?.BuildName]);

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
      className={wrapperScreenshot}
      style={{
        pointerEvents: showShareModal ? "none" : "all",
        maxWidth: copyingBuild ? "1320px" : "",
        margin: copyingBuild ? "0 auto" : "",
        overflow: "hidden",
        zIndex: -101,
      }}
      ref={ref}
    >
      <div className="wrapper">
        <div className={skillTreeHeader}>
          <ClassButton available notHome baseJobName="Archer" jobName="Clown" />
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
                style={{
                  textAlign: "start",
                  color: "#111111",
                  textShadow: "0px 0px 2px #fff",
                  fontWeight: 600,
                }}
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
          <Archer
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <Bard
            handleKeyPress={handleKeyPress}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
          <div>
            <div className={skillsCounter}>
              <div
                style={{
                  color: "#111111",
                  textShadow: "0px 0px 2px #fff",
                  fontWeight: 600,
                }}
              >
                Clown Skills
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
                skill={showmanship}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <SkillComponent
                skill={arrowVulcan}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <SkillComponent
                skill={chaoticVoice}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <SkillComponent
                skill={soundOfDestruction}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <SkillComponent
                skill={reverberation}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <SkillComponent
                skill={dominionImpulse}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <SkillComponent
                skill={guitarSmash}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <SkillComponent
                skill={moonlitWaterMill}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <SkillComponent
                skill={wandOfHermode}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <SkillComponent
                skill={tarotCardOfDate}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <SkillComponent
                skill={improvisedSong}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <SkillComponent
                skill={infernalStrings}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <SkillComponent
                skill={perfectRythm}
                handleKeyPress={handleKeyPress}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={hero}
        style={{
          backgroundImage: copyingBuild
            ? "url('')"
            : "url('./assets/prontera.webp')",
        }}
      ></div>
    </div>
  );
};
