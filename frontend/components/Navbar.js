import { useState, useEffect } from "react";
import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
import classes from "../styles/Navbar.module.css";
import { MdTimer } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import { ImList2 } from "react-icons/im";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Tooltip, Whisper, Button } from "rsuite";
import { useRouter } from "next/router";
import { problems } from "@/utils/problems";

const tooltip = <Tooltip>Timer.</Tooltip>;

const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
  const [showTimer, setShowTimer] = useState(false);
  const router = useRouter();
  const [time, setTime] = useState(0);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    let intervalId;

    if (showTimer) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [showTimer]);

  function handleProblemChange(isForward) {
    console.log(router.query);
    const { order } = problems[router.query.pid];
    const direction = isForward ? 1 : -1;

    const nextProblemOrder = order + direction;
    const nextProblemKey = Object.keys(problems).find(
      (key) => problems[key].order === nextProblemOrder
    );
    if (isForward && !nextProblemKey) {
      const firstProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === 1
      );
      window.location.href = `/problems/${firstProblemKey}`;
    } else if (!isForward && !nextProblemKey) {
      const lastProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === Object.keys(problems).length
      );
      window.location.href = `/problems/${lastProblemKey}`;
    } else {
      window.location.href = `/problems/${nextProblemKey}`;
    }
  }

  return (
    <Navbar {...props}>
      <Navbar.Brand href="/">
        <div className={classes.logo__wrap}>
          <img src="/logo2.png" />
        </div>
      </Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item className={classes.link} eventKey="1" icon={<HomeIcon />}>
          Home
        </Nav.Item>
        <Nav.Item href="/" className={classes.link} eventKey="3">
          Problems
        </Nav.Item>
        {props.problemPage && (
          <Nav className={classes.center__link}>
            <Nav.Item className={classes.link}>
              <Button>
                <ImList2 />
                Problem List
              </Button>
              <Button
                onClick={() => handleProblemChange(false)}
                className={classes.arrow__btn}
              >
                <MdArrowBackIosNew />
              </Button>
              <Button
                onClick={() => handleProblemChange(true)}
                className={classes.arrow__btn}
              >
                <MdArrowForwardIos />
              </Button>
            </Nav.Item>
          </Nav>
        )}
        {!props.problemPage ? (
          <Nav pullRight>
            <Nav.Item className={classes.link} icon={<CogIcon />}>
              Settings
            </Nav.Item>
          </Nav>
        ) : (
          <Nav pullRight>
            <Nav.Item className={classes.link}>
              <Whisper
                placement="bottom"
                controlId="control-id-hover"
                trigger="hover"
                speaker={tooltip}
              >
                <Button color="red" appearance="primary">
                  {showTimer ? (
                    <div>
                      <div className="center g-1 ">
                        {formatTime(time)}
                        <BiRefresh
                          onClick={() => {
                            setShowTimer(false);
                            setTime(0);
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <MdTimer onClick={() => setShowTimer(true)} />
                  )}
                </Button>
              </Whisper>
            </Nav.Item>
          </Nav>
        )}
      </Nav>
    </Navbar>
  );
};

const NavigationBar = (props) => {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <CustomNavbar
      problemPage={props.problemPage}
      appearance="inverse"
      color="red"
      className="navbar--home"
      activeKey={activeKey}
      onSelect={setActiveKey}
    />
  );
};
export default NavigationBar;
