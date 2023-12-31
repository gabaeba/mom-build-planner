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
});

const Footer = () => {
  const { skillBase, requirementRed, requirementGreen } = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#181C1F",
      }}
    >
      <div>
        <p style={{ color: "#fff" }}>
          All rights for art, names, concepts or other intellectual property
          belong to copyright holders. This is a fanmade tool and is not
          intended for commercial use. ©2023
        </p>
      </div>
      <div>
        <img src="./assets/github.png" alt="github" />
        <img src="./assets/behance.png" alt="behance" />
      </div>
    </div>
  );
};

export default Footer;
