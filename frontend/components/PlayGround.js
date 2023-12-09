import React, { useState, useContext, useEffect } from "react";
import PreferenceBar from "./PreferenceBar";
import classes from "../styles/PlayGround.module.css";
import CodeMirror from "@uiw/react-codemirror";
import { Button } from "rsuite";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { useHttpClient } from "@/shared/hooks/httpHook";
import Split from "react-split";
import { problems } from "@/utils/problems";
import Confetti from "react-confetti";
import { AuthContext } from "@/shared/context/authContext";
import useWindowSize from "@/shared/hooks/useWindowSize";
import { useToaster, Message, Notification } from "rsuite";
import { getCookie, setCookie } from "cookies-next";

const PlayGround = ({ user, problem }) => {
  const { width, height } = useWindowSize();
  const handlerFunction = new Function("fn", problem.handlerFunction);
  const authCtx = useContext(AuthContext);
  const toaster = useToaster();

  const [activeTestCaseId, setActiveTestCaseId] = useState(0);
  let [userCode, setUserCode] = useState(problem.starterCode);
  const [success, setSuccess] = useState(false);
  const [fontSize, setFontSize] = useState("16px");
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  function handleCodeEditorChange(e) {
    setCookie(`code-${problem.id}`, e);
    setUserCode(e);
  }

  useEffect(() => {
    const code = getCookie(`code-${problem.id}`);

    if (code) {
      setUserCode(code);
    }
  }, [user, problem.starterCode]);

  async function handleSubmit(run) {
    try {
      userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));
      const cb = new Function(`return ${userCode}`)();
      const problemHandlerFn = problems[problem.id].handlerFunction;

      const result = problemHandlerFn(cb);

      if (result === true) {
        if (run === true) {
          return toaster.push(
            <Message
              className="toast"
              type="success"
              message="All Tests cases passed. Try to submit!"
            >
              message
            </Message>,
            {
              duration: 3000,
            }
          );
        }

        setSuccess(true);
        toaster.push(
          <Message
            className="toast"
            type="success"
            message="Congrats. All tests Passes!!"
          >
            message
          </Message>,
          {
            duration: 3000,
          }
        );
        setTimeout(() => {
          setSuccess(false);
        }, 4000);

        await sendRequest(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
          "PATCH",
          JSON.stringify({
            solvedProblems: [...user.solvedProblems, problem.id],
          }),
          {
            Authorization: `Bearer ${authCtx.token}`,
            "Content-Type": "application/json",
          }
        );
      }
      console.log(result);
    } catch (err) {
      console.log(err);

      if (err.message.startsWith("AssertionError")) {
        toaster.push(
          <Message
            className="toast"
            type="error"
            message="One or more test cases failed."
          >
            message
          </Message>,
          {
            duration: 3000,
          }
        );
      } else {
        toaster.push(
          <Message className="toast" message={err.message} type="error">
            {err.message}
          </Message>,
          {
            duration: 3000,
          }
        );
      }
    }
  }
  const Message = React.forwardRef(({ type, ...rest }, ref) => {
    return (
      <Notification closable ref={ref} {...rest} type={type} header={type}>
        <h6>{rest.message}</h6>
      </Notification>
    );
  });

  useEffect(() => {});
  return (
    <>
      <div>
        {success && (
          <Confetti
            className="confetti"
            gravity={0.6}
            tweenDuration={4000}
            width={width}
            height={height - 1}
          />
        )}
        <PreferenceBar
          fontSize={fontSize}
          onSelectChange={(e) => {
            setFontSize(e);
          }}
        />
        <Split
          minSize={140}
          direction="vertical"
          sizes={[60, 40]}
          className="split split-col ht-split"
        >
          <div className={classes.editor}>
            <CodeMirror
              value={userCode}
              height="100%"
              theme={vscodeDark}
              width="100%"
              style={{ fontSize: fontSize }}
              extensions={[javascript({ jsx: true })]}
              onChange={handleCodeEditorChange}
            />
          </div>
          <div className={classes.console}>
            <div className={classes.inner__console}>
              <div className={classes.console__desc}>
                <h6>test Cases</h6>
                <hr />
              </div>
              <div className={`flex ${classes.test__cases_wrapper}`}>
                {problem.examples.map((example, index) => (
                  <Button
                    className={`${
                      index === activeTestCaseId ? classes.active : ""
                    }`}
                    onClick={() => setActiveTestCaseId(index)}
                  >
                    Case {index + 1}
                  </Button>
                ))}
              </div>
              <div className={classes.cases__cnt}>
                <p>Input:</p>
                <div className={classes.text__case}>
                  {problem.examples[activeTestCaseId].inputText}
                </div>
                <p>Output:</p>
                <div className={classes.text__case}>
                  {" "}
                  {problem.examples[activeTestCaseId].outputText}
                </div>
              </div>
            </div>
            <div className={classes.action__bar}>
              <div className={classes.inner__action__bar}>
                <Button
                  onClick={() => handleSubmit(true)}
                  className={classes.btn__run}
                >
                  Run
                </Button>
                <Button onClick={handleSubmit} className={classes.btn__sbmt}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Split>
      </div>
    </>
  );
};

export default PlayGround;
