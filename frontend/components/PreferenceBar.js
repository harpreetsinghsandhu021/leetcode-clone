import React, { useEffect, useState } from "react";
import { Button } from "rsuite";
import classes from "../styles/PlayGround.module.css";
import { IoSettings } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import { FiSettings } from "react-icons/fi";
import PopUpModal from "./Modal";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

const PreferenceBar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  function handleFullScreen() {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  }

  useEffect(() => {
    function exitHandler() {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
        return;
      }
      setIsFullScreen(true);
    }

    if (document.addEventListener) {
      document.addEventListener("fullscreenchange", exitHandler);
      document.addEventListener("webkitfullscreenchange", exitHandler);
      document.addEventListener("mozfullscreenchange", exitHandler);
      document.addEventListener("MSFullscreenChange", exitHandler);
    }
  }, [isFullScreen]);

  return (
    <nav className={classes.topbar}>
      <div>
        <Button color="orange" appearance="ghost">
          Javascript
        </Button>
        <div>
          <Button>
            <FiSettings onClick={() => setShowModal(true)} />
            <PopUpModal
              fontSize={props.fontSize}
              onSelectChange={props.onSelectChange}
              open={showModal}
              setOpen={setShowModal}
            />
          </Button>
          <Button onClick={handleFullScreen}>
            {!isFullScreen ? (
              <AiOutlineFullscreen />
            ) : (
              <AiOutlineFullscreenExit />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default PreferenceBar;
