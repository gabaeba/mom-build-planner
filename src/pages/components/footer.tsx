import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  socials: {
    display: "flex",
    gap: 16,
    alignItems: "center",
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
  },
});

const Footer = () => {
  const { socials } = useStyles();
  return (
    <footer
      className="fullwidth"
      style={{
        backgroundColor: "#181C1F",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: 32,
      }}
    >
      <div style={{ width: "100%", maxWidth: 300 }}>
        <p style={{ color: "#fff", fontSize: 12, fontWeight: 300 }}>
          All rights for art, names, concepts or other intellectual property
          belong to copyright holders. This is a fanmade tool and is not
          intended for commercial use. ©2023
        </p>
      </div>
      <div className={socials}>
        <a
          href="https://github.com/gabaeba/mom-build-planner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/github.png" alt="github" />
        </a>
        <a
          href="https://www.behance.net/fvvvvv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/behance.png" alt="behance" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
