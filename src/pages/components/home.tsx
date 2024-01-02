import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import { globalColors } from "../../common/helpers/style-variables";

const useStyles = createUseStyles({
  emptyClassDiv: {
    position: "relative",
    display: "flex",
    width: "220px",
    height: "72px",
    padding: "0px 16px",
    "@media (max-width: 640px)": {
      display: "none",
    },
  },
  classDivSuccess: {
    position: "relative",
    display: "flex",
    width: "220px",
    height: "72px",
    padding: "0px 16px",
    borderRadius: "8px",
    background: globalColors.foreground,
    color: globalColors.fontPrimary,
    alignItems: "center",
    flexShrink: 0,
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "&:hover, &:active, &:focus": {
      cursor: "pointer",
      backgroundColor: globalColors.success,
    },
    "@media (max-width: 640px)": {
      width: "300px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  classDivError: {
    position: "relative",
    display: "flex",
    width: "220px",
    height: "72px",
    padding: "0px 16px",
    borderRadius: "8px",
    background: globalColors.foreground,
    color: globalColors.fontPrimary,
    filter: "grayscale(1)",
    alignItems: "center",
    flexShrink: 0,
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "&:hover, &:active, &:focus": {
      backgroundColor: globalColors.error,
    },
    "@media (max-width: 640px)": {
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
      fontSize: 57,
      textShadow: "8px 6px 32px rgba(0, 0, 0, 0.65)",
    },
    "& h2": {
      color: globalColors.fontPrimary,
      fontWeight: 400,
      fontSize: 24,
      textShadow: "8px 6px 32px rgba(0, 0, 0, 0.65)",
    },
    "& .title": {
      paddingTop: 50,
    },
  },
});

const Home = () => {
  const { emptyClassDiv, classDivSuccess, classDivError, hero } = useStyles();
  const history = useHistory();
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
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "space-between",
            marginTop: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            className={classDivSuccess}
            onClick={() => history.push("lordKnight")}
          >
            <img
              src="./assets/lord-knight/lk_sprite.png"
              alt="lk sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/lord-knight/lk_icon.png"
              alt="lk class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
          <div
            className={classDivSuccess}
            onClick={() => history.push("paladin")}
          >
            <img
              src="./assets/paladin/paladin_sprite.png"
              alt="paladin sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/paladin/paladin_icon.png"
              alt="paladin class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 16, margin: 0 }}>Paladin</p>
            </div>
          </div>
          <div
            className={classDivError}
            // onClick={() => history.push("runeKnight")}
          >
            <img
              src="./assets/rune-knight/rk_sprite.png"
              alt="rk sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/rune-knight/rk_icon.png"
              alt="rk class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 16, margin: 0 }}>Rune Knight</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
          <div
            className={classDivError}
            // onClick={() => history.push("royalGuard")}
          >
            <img
              src="./assets/royal-guard/rg_sprite.png"
              alt="rg sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/royal-guard/rg_icon.png"
              alt="rg class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 16, margin: 0 }}>Royal Guard</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "space-between",
            marginTop: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            className={classDivSuccess}
            onClick={() => history.push("highWizard")}
          >
            <img
              src="./assets/high-wizard/hw_sprite.png"
              alt="hw sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/high-wizard/hw_icon.png"
              alt="hw class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Mage</p>
              <p style={{ fontSize: 16, margin: 0 }}>High Wizard</p>
            </div>
          </div>
          <div
            className={classDivSuccess}
            onClick={() => history.push("professor")}
          >
            <img
              src="./assets/professor/professor_sprite.png"
              alt="professor sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/professor/professor_icon.png"
              alt="professor class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Mage</p>
              <p style={{ fontSize: 16, margin: 0 }}>Professor</p>
            </div>
          </div>
          <div
            className={classDivError}
            // onClick={() => history.push("warlock")}
          >
            <img
              src="./assets/warlock/wl_sprite.png"
              alt="warlock sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/warlock/wl_icon.png"
              alt="warlock class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Mage</p>
              <p style={{ fontSize: 16, margin: 0 }}>Warlock</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
          <div
            className={classDivError}
            // onClick={() => history.push("sorceror")}
          >
            <img
              src="./assets/sorceror/sorceror_sprite.png"
              alt="sorceror sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/sorceror/sorceror_icon.png"
              alt="sorceror class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Mage</p>
              <p style={{ fontSize: 16, margin: 0 }}>Sorceror</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "space-between",
            marginTop: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            className={classDivSuccess}
            onClick={() => history.push("assassinCross")}
          >
            <img
              src="./assets/assassin-cross/ac_sprite.png"
              alt="assassin-cross sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/assassin-cross/ac_icon.png"
              alt="assassin-cross class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Thief</p>
              <p style={{ fontSize: 16, margin: 0 }}>Assassin Cross</p>
            </div>
          </div>
          <div
            className={classDivSuccess}
            onClick={() => history.push("stalker")}
          >
            <img
              src="./assets/stalker/stalker_sprite.png"
              alt="stalker sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/stalker/stalker_icon.png"
              alt="stalker class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Thief</p>
              <p style={{ fontSize: 16, margin: 0 }}>Stalker</p>
            </div>
          </div>
          <div
            className={classDivError}
            // onClick={() => history.push("guillotineCross")}
          >
            <img
              src="./assets/guillotine-cross/gc_sprite.png"
              alt="guillotine-cross sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/guillotine-cross/gc_icon.png"
              alt="guillotine-cross class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Thief</p>
              <p style={{ fontSize: 16, margin: 0 }}>Guillotine Cross</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
          <div
            className={classDivError}
            // onClick={() => history.push("shadowChaser")}
          >
            <img
              src="./assets/shadow-chaser/sc_sprite.png"
              alt="shadow-chaser sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/shadow-chaser/sc_icon.png"
              alt="shadow-chaser class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Thief</p>
              <p style={{ fontSize: 16, margin: 0 }}>Shadow Chaser</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "space-between",
            marginTop: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            className={classDivSuccess}
            onClick={() => history.push("whitesmith")}
          >
            <img
              src="./assets/whitesmith/ws_sprite.png"
              alt="whitesmith sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/whitesmith/ws_icon.png"
              alt="whitesmith class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
                Merchant
              </p>
              <p style={{ fontSize: 16, margin: 0 }}>Whitesmith</p>
            </div>
          </div>
          <div
            className={classDivSuccess}
            onClick={() => history.push("creator")}
          >
            <img
              src="./assets/creator/creator_sprite.png"
              alt="creator sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/creator/creator_icon.png"
              alt="creator class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
                Merchant
              </p>
              <p style={{ fontSize: 16, margin: 0 }}>Creator</p>
            </div>
          </div>
          <div
            className={classDivError}
            // onClick={() => history.push("mechanic")}
          >
            <img
              src="./assets/mechanic/mechanic_sprite.png"
              alt="mechanic sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/mechanic/mechanic_icon.png"
              alt="mechanic class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
                Merchant
              </p>
              <p style={{ fontSize: 16, margin: 0 }}>Mechanic</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
          <div
            className={classDivError}
            // onClick={() => history.push("geneticist")}
          >
            <img
              src="./assets/geneticist/genetic_sprite.png"
              alt="geneticist sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/geneticist/genetic_icon.png"
              alt="geneticist class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
                Merchant
              </p>
              <p style={{ fontSize: 16, margin: 0 }}>Geneticist</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "space-between",
            marginTop: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            className={classDivSuccess}
            onClick={() => history.push("highPriest")}
          >
            <img
              src="./assets/high-priest/hp_sprite.png"
              alt="high-priest sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/high-priest/hp_icon.png"
              alt="high-priest class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
                Acolyte
              </p>
              <p style={{ fontSize: 16, margin: 0 }}>High Priest</p>
            </div>
          </div>
          <div
            className={classDivSuccess}
            onClick={() => history.push("champion")}
          >
            <img
              src="./assets/champion/champion_sprite.png"
              alt="champion sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/champion/champion_icon.png"
              alt="champion class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
                Acolyte
              </p>
              <p style={{ fontSize: 16, margin: 0 }}>Champion</p>
            </div>
          </div>
          <div
            className={classDivError}
            // onClick={() => history.push("archBishop")}
          >
            <img
              src="./assets/arch-bishop/ab_sprite.png"
              alt="arch-bishop sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/arch-bishop/ab_icon.png"
              alt="arch-bishop class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
                Acolyte
              </p>
              <p style={{ fontSize: 16, margin: 0 }}>Arch Bishop</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
          <div
            className={classDivError}
            // onClick={() => history.push("sura")}
          >
            <img
              src="./assets/sura/sura_sprite.png"
              alt="sura sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/sura/sura_icon.png"
              alt="sura class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
                Acolyte
              </p>
              <p style={{ fontSize: 16, margin: 0 }}>Sura</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "space-between",
            marginTop: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            className={classDivSuccess}
            onClick={() => history.push("sniper")}
          >
            <img
              src="./assets/sniper/sniper_sprite.png"
              alt="sniper sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/sniper/sniper_icon.png"
              alt="sniper class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Archer</p>
              <p style={{ fontSize: 16, margin: 0 }}>Sniper</p>
            </div>
          </div>
          <div
            className={classDivSuccess}
            onClick={() => history.push("gypsy")}
          >
            <img
              src="./assets/gypsy/gypsy_sprite.png"
              alt="gypsy sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/gypsy/gypsy_icon.png"
              alt="gypsy class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Archer</p>
              <p style={{ fontSize: 16, margin: 0 }}>Gypsy</p>
            </div>
          </div>
          <div
            className={classDivError}
            // onClick={() => history.push("ranger")}
          >
            <img
              src="./assets/ranger/ranger_sprite.png"
              alt="ranger sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/ranger/ranger_icon.png"
              alt="ranger class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Archer</p>
              <p style={{ fontSize: 16, margin: 0 }}>Ranger</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
          <div
            className={classDivError}
            // onClick={() => history.push("wanderer")}
          >
            <img
              src="./assets/wanderer/wanderer_sprite.png"
              alt="wanderer sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/wanderer/wanderer_icon.png"
              alt="wanderer class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Archer</p>
              <p style={{ fontSize: 16, margin: 0 }}>Wanderer</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "space-between",
            marginTop: 24,
            flexWrap: "wrap",
          }}
        >
          <div className={emptyClassDiv}></div>
          <div
            className={classDivSuccess}
            onClick={() => history.push("clown")}
          >
            <img
              src="./assets/clown/clown_sprite.png"
              alt="clown sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/clown/clown_icon.png"
              alt="clown class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Archer</p>
              <p style={{ fontSize: 16, margin: 0 }}>Clown</p>
            </div>
          </div>
          <div className={emptyClassDiv}></div>
          <div
            className={classDivError}
            // onClick={() => history.push("minstrel")}
          >
            <img
              src="./assets/minstrel/minstrel_sprite.png"
              alt="minstrel sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/minstrel/minstrel_icon.png"
              alt="minstrel class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Archer</p>
              <p style={{ fontSize: 16, margin: 0 }}>Minstrel</p>
            </div>
            <div className="tooltip">
              <div className="tooltip-text tooltip-top">Not released yet</div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "space-around",
            marginTop: 36,
            flexWrap: "wrap",
          }}
        >
          <div
            className={classDivSuccess}
            onClick={() => history.push("superNovice")}
          >
            <img
              src="./assets/super-novice/sn_sprite.png"
              alt="super-novice sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/super-novice/sn_icon.png"
              alt="super-novice class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Novice</p>
              <p style={{ fontSize: 16, margin: 0 }}>Expanded Super Novice</p>
            </div>
          </div>
          <div
            className={classDivSuccess}
            onClick={() => history.push("kagoboro")}
          >
            <img
              src="./assets/kagoboro/oboro_sprite.png"
              alt="oboro sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/kagoboro/kagoboro_icon.png"
              alt="kagoboro class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
              <p style={{ fontSize: 12, margin: 0, fontWeight: 300 }}>Ninja</p>
              <p style={{ fontSize: 16, margin: 0 }}>Kagerou/Oboro</p>
            </div>
          </div>
          <div
            className={classDivSuccess}
            onClick={() => history.push("rebel")}
          >
            <img
              src="./assets/rebel/rebel_sprite.png"
              alt="rebel sprite"
              style={{ position: "absolute", left: -25, zIndex: 1 }}
            />
            <img
              src="./assets/rebel/rebel_icon.png"
              alt="rebel class icon"
              style={{ marginLeft: 20, marginRight: 20 }}
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
                Gunslinger
              </p>
              <p style={{ fontSize: 16, margin: 0 }}>Rebel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
