import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";

const useStyles = createUseStyles({
  emptyClass: {
    position: "relative",
    display: "flex",
    width: "220px",
    height: "72px",
    padding: "0px 16px",
    "@media (max-width: 640px)": {
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
    color: "#111111",
    alignItems: "center",
    userSelect: "none",
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "&:hover, &:active, &:focus": {
      cursor: "pointer",
      backgroundColor: "#8f9cc0",
    },
    "@media (max-width: 640px)": {
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
    color: "#111111",
    filter: "grayscale(1)",
    alignItems: "center",
    userSelect: "none",
    boxShadow:
      "0px 3px 1px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "@media (max-width: 640px)": {
      marginLeft: "auto",
      marginRight: "auto",
      width: "300px",
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

type ClassButtonProps = {
  empty?: boolean;
  notHome?: boolean;
  available?: boolean;
  baseJobName?: string;
  jobName?: string;
};

function toCamelCase(inputString: string): string {
  if (inputString === "Kagerou/Oboro") return "kagerouOboro";

  const words: string[] = inputString.split(" ");
  const camelCaseString: string =
    words[0].toLowerCase() +
    words
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  return camelCaseString;
}
const ClassButton = ({
  empty,
  notHome,
  available,
  baseJobName,
  jobName,
}: ClassButtonProps) => {
  const {
    emptyClass,
    classAvailable,
    classUnavailable,
    firstJobParagraph,
    finalJobParagraph,
  } = useStyles();
  const history = useHistory();

  if (empty) return <div className={emptyClass}></div>;

  const lowerCaseJobName = jobName?.toLowerCase();
  const url = toCamelCase(jobName ?? "");

  return (
    <div
      className={available ? classAvailable : classUnavailable}
      style={{ cursor: notHome ? "default" : "pointer" }}
      onClick={() => {
        if (!available || notHome) return;
        history.push(url);
      }}
    >
      <img
        src={`./assets/${url}/${url}_sprite.png`}
        alt={`${lowerCaseJobName} sprite`}
        style={{ position: "absolute", left: -25, zIndex: 1 }}
      />
      <img
        src={`./assets/${url}/${url}_icon.png`}
        alt={`${lowerCaseJobName} icon`}
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
        <p className={firstJobParagraph}>{baseJobName}</p>
        <p className={finalJobParagraph}>{jobName}</p>
      </div>
    </div>
  );
};

export default ClassButton;
