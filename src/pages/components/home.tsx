import { createUseStyles } from "react-jss";
import { Link, useHistory } from "react-router-dom";
import { globalColors } from "../../common/helpers/style-variables";

const useStyles = createUseStyles({
  classDiv: {
    position: "relative",
    display: "flex",
    width: "200px",
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
      textShadow: '8px 6px 32px rgba(0, 0, 0, 0.65)'
    },
    "& h2": {
      color: globalColors.fontPrimary,
      fontWeight: 400,
      fontSize: 24,
      textShadow: '8px 6px 32px rgba(0, 0, 0, 0.65)'
    },
    "& .title": {
      paddingTop: 100
    }
  },
});

const Home = () => {
  const { classDiv, hero } = useStyles();
  const history = useHistory();
  return (
    // <div className={hero}>
    <div className="wrapper">
      <div className={hero}>
        <div className='title'>
          <h2>Mythos of Midgard</h2>
          <h1>Skill Calculator</h1>
        </div>
        <img src="./assets/hero.png" alt="" />
      </div>
      <div style={{ marginTop: "-300px" }}>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "space-between",
          }}
        >
          <div className={classDiv} onClick={() => history.push("lordKnight")}>
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
          <div className={classDiv} onClick={() => history.push("/paladin")}>
            <img
              src="/aerial_assault.png"
              alt="lk sprite"
              style={{ position: "absolute", left: -100, zIndex: 1 }}
            />
            <img
              src="/aerial_assault.png"
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
          <div className={classDiv} onClick={() => history.push("/lordKnight")}>
            <img
              src="/aerial_assault.png"
              alt="lk sprite"
              style={{ position: "absolute", left: -100, zIndex: 1 }}
            />
            <img
              src="/aerial_assault.png"
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
          <div className={classDiv} onClick={() => history.push("/lordKnight")}>
            <img
              src="/aerial_assault.png"
              alt="lk sprite"
              style={{ position: "absolute", left: -100, zIndex: 1 }}
            />
            <img
              src="/aerial_assault.png"
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
        </div>
        <div>
          <Link to="/highWizard">hw</Link>
        </div>
        <div>
          <Link to="/professor">PROF</Link>
        </div>
        <div>
          <Link to="/sniper">sniper</Link>
        </div>
        <div>
          <Link to="/clown">clown</Link>
        </div>
        <div>
          <Link to="/gypsy">gypsy</Link>
        </div>
        <div>
          <Link to="/whitesmith">WS</Link>
        </div>
        <div>
          <Link to="/creator">creator</Link>
        </div>
        <div>
          <Link to="/assassinCross">sinX</Link>
        </div>
        <div>
          <Link to="/stalker">stalker</Link>
        </div>
        <div>
          <Link to="/highPriest">HP</Link>
        </div>
        <div>
          <Link to="/champion">Champion</Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Home;
