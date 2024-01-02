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
    position: "fixed",
    width: "100%",
    maxWidth: "250px",
    height: "150px",
    top: "50%",
    transform: 'translate(-50%, -50%)',
    left: "50%",
    zIndex: '1000',
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
  backdrop: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 990,
  }
});

type ResetModalProps = {
  setShowResetModal: React.Dispatch<React.SetStateAction<boolean>>;
  setResetBuild: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ResetModal({
  setShowResetModal,
  setResetBuild,
}: ResetModalProps) {
  const { resetModal, modalContent, buttonContainer, backdrop } = useStyles();
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
    <>
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
    <div className={backdrop} onClick={() => setShowResetModal(false)}></div>
    </>
  );
}
