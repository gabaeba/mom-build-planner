import React, { ReactNode } from "react";
import { createUseStyles } from "react-jss";
import { globalColors } from "./helpers/style-variables";

const useStyles = createUseStyles({
  button: {
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    border: "none",
    outline: "1px solid transparent",
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  success: {
    backgroundColor: "#D4EDB7",
    border: "1px solid #D4EDB7",
    color: globalColors.fontPrimary,
    "&:hover": {
      backgroundColor: "#ABD973",
      border: "1px solid #ABD973",
    },
  },
  error: {
    backgroundColor: "#EDC2B7",
    border: "1px solid #EDC2B7",
    color: globalColors.fontPrimary,
    "&:hover": {
      backgroundColor: "#F0A199",
      border: "1px solid #F0A199",
    },
  },
  accent: {
    backgroundColor: "#b5c6f3",
    border: "1px solid #b5c6f3",
    color: globalColors.fontPrimary,
    "&:hover": {
      backgroundColor: "#8f9cc0",
      border: "1px solid #8f9cc0",
    },
  },
  white: {
    backgroundColor: globalColors.fontPrimary,
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showIcon?: boolean;
  icon?: ReactNode;
  color: "success" | "error" | "accent" | "white";
  reference?: React.RefObject<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  showIcon,
  icon,
  color,
  reference,
  ...props
}) => {
  const style = useStyles();

  return (
    <button
      className={`${style.button} ${style[color]}`}
      style={{ gap: showIcon ? 8 : 0 }}
      ref={reference}
      {...props}
    >
      {showIcon && icon}
      {props.children}
    </button>
  );
};

export default Button;
