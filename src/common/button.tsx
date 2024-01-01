import React, { ReactNode } from "react";
import { createUseStyles } from "react-jss";
import { globalColors } from "./helpers/style-variables";

const useStyles = createUseStyles({
  button: {
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    border: "none",
    outline: "1px solid transparent",
    gap: 8,
  },
  success: {
    backgroundColor: globalColors.success,
    color: globalColors.fontPrimary,
  },
  error: {
    backgroundColor: globalColors.error,
    color: globalColors.fontPrimary,
  },
  accent: {
    backgroundColor: globalColors.accent,
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
      ref={reference}
      {...props}
    >
      {showIcon && icon}
      {props.children}
    </button>
  );
};

export default Button;
