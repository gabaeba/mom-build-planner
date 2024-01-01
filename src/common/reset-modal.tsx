import { useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";
import Button from "./button";

const useStyles = createUseStyles({
  resetModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "8px",
    padding: "16px",
    position: "absolute",
    width: "250px",
    height: "150px",
    top: "70px",
    left: "calc(50% - 125px)",
    bottom: "70px",
  },
  modalContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 12,
  },
});

type ResetModalProps = {
  setShowResetModal: React.Dispatch<React.SetStateAction<boolean>>;
  setResetBuild: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ResetModal({
  setShowResetModal,
  setResetBuild,
}: ResetModalProps) {
  const { resetModal, modalContent, buttonContainer } = useStyles();
  const yesBtn = useRef<HTMLButtonElement>(null);
  const noBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "y":
        case "Y":
          yesBtn?.current?.click();
          break;
        case "n":
        case "N":
        case "Escape":
          noBtn?.current?.click();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [setShowResetModal, setResetBuild]);

  return (
    <div className={resetModal}>
      <div className={modalContent}>
        <div style={{ display: "flex" }}>
          <div>Are you sure you want to reset the build?</div>
          <div
            style={{
              marginLeft: "auto",
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => setShowResetModal(false)}
          >
            X
          </div>
        </div>
        <div className={buttonContainer}>
          <Button
            reference={yesBtn}
            color="success"
            onClick={() => {
              setResetBuild(true);
              setShowResetModal(false);
            }}
          >
            <span
              style={{
                textDecoration: "underline",
                textUnderlineOffset: 2,
              }}
            >
              Y
            </span>
            es
          </Button>
          <Button
            reference={noBtn}
            color="error"
            onClick={() => {
              setShowResetModal(false);
            }}
          >
            <span
              style={{
                textDecoration: "underline",
                textUnderlineOffset: 2,
              }}
            >
              N
            </span>
            o
          </Button>
        </div>
      </div>
    </div>
  );
}
