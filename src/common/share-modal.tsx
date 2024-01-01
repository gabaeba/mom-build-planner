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
    width: "350px",
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

type ShareModalProps = {
  setShowShareModal: React.Dispatch<React.SetStateAction<boolean>>;
  copyBuildImgToClipboard: () => void;
  downloadBuildImg: () => void;
  getCurrentUrl: () => Promise<void>;
};

export default function ShareModal({
  setShowShareModal,
  copyBuildImgToClipboard,
  downloadBuildImg,
  getCurrentUrl,
}: ShareModalProps) {
  const { resetModal, modalContent, buttonContainer } = useStyles();
  const yesBtn = useRef<HTMLButtonElement>(null);
  const downloadBtn = useRef<HTMLButtonElement>(null);

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
          setShowShareModal(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [setShowShareModal]);

  return (
    <div className={resetModal}>
      <div className={modalContent}>
        <div style={{ display: "flex" }}>
          <div>Share this build</div>
          <div
            style={{
              marginLeft: "auto",
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => setShowShareModal(false)}
          >
            X
          </div>
        </div>
        <div className={buttonContainer}>
          <Button
            reference={yesBtn}
            color="accent"
            onClick={() => {
              copyBuildImgToClipboard();
              setShowShareModal(false);
            }}
          >
            Copy image to clipboard
          </Button>
          <Button
            reference={downloadBtn}
            color="accent"
            onClick={() => {
              downloadBuildImg();
              setShowShareModal(false);
            }}
          >
            Save to image
          </Button>
          <Button
            reference={downloadBtn}
            color="accent"
            onClick={() => {
              getCurrentUrl();
              setShowShareModal(false);
            }}
          >
            Copy url to clipboard
          </Button>
        </div>
      </div>
    </div>
  );
}
