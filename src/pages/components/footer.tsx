import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  skillBase: {
    display: "flex",
    width: "274px",
    height: "57px",
    padding: "0px 16px",
    borderRadius: "8px",
    background: "#0F1417",
    color: "#FFF",
    alignItems: "center",
    userSelect: "none",
    flexShrink: 0,
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  requirementRed: {
    background: "#410002 !important",
  },
  requirementGreen: {
    background: "#007336 !important",
  },
  socials: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    '& img': {
      maxWidth: '100%',
      height: 'auto'
    }
  }
});

const Footer = () => {
  const { skillBase, requirementRed, requirementGreen, socials } = useStyles();
  return (
    <footer
      className="fullwidth"
      style={{
        backgroundColor: "#181C1F",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "flex-end",
        padding: 32,
      }}
    >
      <div style={{ width: '100%', maxWidth: 300}}>
        <p style={{ color: "#fff", fontSize: 12, fontWeight: 300}}>
          All rights for art, names, concepts or other intellectual property
          belong to copyright holders. This is a fanmade tool and is not
          intended for commercial use. ©2023
        </p>
      </div>
      <div className={socials}>
        <img src="./assets/github.png" alt="github" />
        <img src="./assets/behance.png" alt="behance" />
      </div>
    </footer>
  );
};

export default Footer;
