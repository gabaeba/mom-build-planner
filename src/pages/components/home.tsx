import { createUseStyles } from "react-jss";
import { globalColors } from "../../common/helpers/style-variables";
import ClassButton from "../../common/class-button";

const useStyles = createUseStyles({
  emptyClassDiv: {
    position: "relative",
    display: "flex",
    width: "220px",
    height: "72px",
    padding: "0px 16px",
    "@media (max-width: 1024px)": {
      display: "none",
    },
  },
  classAvailable: {
    position: "relative",
    display: "flex",
    width: "220px",
    height: "72px",
    padding: "0px 16px",
    borderRadius: "8px",
    background: "#b5c6f3",
    color: globalColors.fontPrimary,
    alignItems: "center",
    flexShrink: 0,
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "&:hover, &:active, &:focus": {
      cursor: "pointer",
      backgroundColor: "#8f9cc0",
    },
    "@media (max-width: 1024px)": {
      width: "300px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  classUnavailable: {
    position: "relative",
    display: "flex",
    width: "220px",
    height: "72px",
    padding: "0px 16px",
    borderRadius: "8px",
    background: "#b5c6f3",
    color: globalColors.fontPrimary,
    filter: "grayscale(1)",
    alignItems: "center",
    flexShrink: 0,
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "@media (max-width: 1024px)": {
      marginLeft: "auto",
      marginRight: "auto",
      width: "300px",
    },
  },
  hero: {
    margin: "0 auto",
    height: "600px",
    width: "100%",
    position: "relative",
    "& img": {
      position: "absolute",
      objectFit: "cover",
      opacity: 0.5,
      top: 0,
      bottom: 0,
      right: 0,
      maxWidth: "auto",
      height: "100%",
      zIndex: -1,
    },
    "& h1": {
      color: globalColors.fontPrimary,
      fontWeight: 400,
      fontSize: 60,
      textShadow: "8px 6px 32px rgba(0, 0, 0, 0.65)",
      "@media (max-width: 1024px)": {
        fontSize: 36,
      },
    },
    "& h2": {
      color: globalColors.fontPrimary,
      fontWeight: 400,
      fontSize: 24,
      textShadow: "8px 6px 32px rgba(0, 0, 0, 0.65)",
      "@media (max-width: 1024px)": {
        fontSize: 20,
      },
    },
    "& .title": {
      paddingTop: 50,
      "@media (max-width: 1024px)": {
        textAlign: "center",
      },
    },
  },
  classFlexDiv: {
    display: "flex",
    gap: 12,
    justifyContent: "space-between",
    marginTop: 24,
    flexWrap: "wrap",
    "@media (max-width: 1024px)": {
      gap: 24,
    },
  },
  firstJobParagraph: {
    fontSize: 12,
    margin: 0,
    fontWeight: 400,
  },
  finalJobParagraph: {
    fontSize: 16,
    margin: 0,
    fontWeight: 500,
  },
});

const Home = () => {
  const { hero, classFlexDiv } = useStyles();
  return (
    <div className="wrapper">
      <div className={hero}>
        <div className="title">
          <h2>Mythos of Midgard</h2>
          <h1>Skill Calculator</h1>
        </div>
        <img src="./assets/hero.png" alt="" />
      </div>
      <div style={{ marginTop: "-400px" }}>
        <div className={classFlexDiv}>
          <ClassButton
            available
            jobName="Lord Knight"
            baseJobName="Swordsman"
          />
          <ClassButton available jobName="Paladin" baseJobName="Swordsman" />
          <ClassButton
            available={false}
            jobName="Rune Knight"
            baseJobName="Swordsman"
          />
          <ClassButton
            available={false}
            jobName="Royal Guard"
            baseJobName="Swordsman"
          />
        </div>
        <div className={classFlexDiv}>
          <ClassButton available jobName="High Wizard" baseJobName="Mage" />
          <ClassButton available jobName="Professor" baseJobName="Mage" />
          <ClassButton available={false} jobName="Warlock" baseJobName="Mage" />
          <ClassButton
            available={false}
            jobName="Sorceror"
            baseJobName="Mage"
          />
        </div>
        <div className={classFlexDiv}>
          <ClassButton available jobName="Assassin Cross" baseJobName="Thief" />
          <ClassButton available jobName="Stalker" baseJobName="Thief" />
          <ClassButton
            available={false}
            jobName="Guillotine Cross"
            baseJobName="Thief"
          />
          <ClassButton
            available={false}
            jobName="Shadow Chaser"
            baseJobName="Thief"
          />
        </div>
        <div className={classFlexDiv}>
          <ClassButton available jobName="Whitesmith" baseJobName="Merchant" />
          <ClassButton available jobName="Creator" baseJobName="Merchant" />
          <ClassButton
            available={false}
            jobName="Mechanic"
            baseJobName="Merchant"
          />
          <ClassButton
            available={false}
            jobName="Geneticist"
            baseJobName="Merchant"
          />
        </div>
        <div className={classFlexDiv}>
          <ClassButton available jobName="High Priest" baseJobName="Acolyte" />
          <ClassButton available jobName="Champion" baseJobName="Acolyte" />
          <ClassButton
            available={false}
            jobName="Arch Bishop"
            baseJobName="Acolyte"
          />
          <ClassButton available={false} jobName="Sura" baseJobName="Acolyte" />
        </div>
        <div className={classFlexDiv}>
          <ClassButton available jobName="Sniper" baseJobName="Archer" />
          <ClassButton available jobName="Gypsy" baseJobName="Archer" />
          <ClassButton
            available={false}
            jobName="Ranger"
            baseJobName="Archer"
          />
          <ClassButton
            available={false}
            jobName="Wanderer"
            baseJobName="Archer"
          />
        </div>
        <div className={classFlexDiv}>
          <ClassButton empty />
          <ClassButton available jobName="Clown" baseJobName="Archer" />
          <ClassButton empty />
          <ClassButton
            available={false}
            jobName="Minstrel"
            baseJobName="Archer"
          />
        </div>
        <div className={classFlexDiv}>
          <ClassButton available jobName="Super Novice" baseJobName="Novice" />
          <ClassButton available jobName="Kagerou/Oboro" baseJobName="Ninja" />
          <ClassButton available jobName="Rebel" baseJobName="Gunslinger" />
          <ClassButton
            available={false}
            jobName="Star Emperor"
            baseJobName="Taekwon"
          />
          <ClassButton
            available={false}
            jobName="Soul Reaper"
            baseJobName="Soul Linker"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
