import React, { useEffect, useState, useContext } from "react";
import classes from "../styles/ProblemDescription.module.css";
import { AiFillLike, AiFillDislike, AiFillStar } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import { Button, Notification, Placeholder, useToaster } from "rsuite";
import { useHttpClient } from "@/shared/hooks/httpHook";
import { AuthContext } from "@/shared/context/authContext";
const ProblemDescription = (props) => {
  const { problem, user } = props;
  const [dbProblem, setDbProblem] = useState(props.dbProblem);

  const toaster = useToaster();
  const authCtx = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [dynamicProblemData, setDynamicProblemData] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setDynamicProblemData({
      liked: user && user.likedProblems.includes(problem.id),
      disLiked: user && user.dislikedProblems.includes(problem.id),
      starred: user && user.starredProblems.includes(problem.id),
      liked: user && user.likedProblems.includes(problem.id),
      solved: user && user.solvedProblems.includes(problem.id),
    });
  }, [user?._id]);

  async function handleLikeClick() {
    if (!user) {
      toaster.push(
        <Message
          className="toast"
          type="error"
          message="You must be logged in to like a problem"
        >
          message
        </Message>,
        {
          duration: 3000,
        }
      );
      return;
    }

    // if the problem is already liked, then we need to remove it from the likes array and
    // decrement likes count by 1

    const currProblemId = problem.id;

    if (dynamicProblemData.liked) {
      try {
        const updateUserReq = await sendRequest(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
          "PATCH",
          JSON.stringify({
            likedProblems: user.likedProblems.filter(
              (problem) => problem !== currProblemId
            ),
          }),
          {
            Authorization: `Bearer ${authCtx.token}`,
            "Content-Type": "application/json",
          }
        );

        const updateProblemReq = await sendRequest(
          `${process.env.NEXT_PUBLIC_API_URL}/algorithmns/${dbProblem._id}`,
          "PATCH",
          JSON.stringify({
            likes: dbProblem.likes - 1,
          }),
          {
            Authorization: `Bearer ${authCtx.token}`,
            "Content-Type": "application/json",
          }
        );

        setDynamicProblemData((prevData) => ({ ...prevData, liked: false }));
        setDbProblem((prevData) => ({
          ...prevData,
          likes: prevData.likes - 1,
        }));
      } catch (err) {
        console.log(err);
      }
    } else if (dynamicProblemData.disLiked) {
      const updateUserReq = await sendRequest(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        "PATCH",
        JSON.stringify({
          dislikedProblems: user.dislikedProblems.filter(
            (problem) => problem !== currProblemId
          ),
          likedProblems: [...user.likedProblems, currProblemId],
        }),
        {
          Authorization: `Bearer ${authCtx.token}`,
          "Content-Type": "application/json",
        }
      );

      const updateProblemReq = await sendRequest(
        `${process.env.NEXT_PUBLIC_API_URL}/algorithmns/${dbProblem._id}`,
        "PATCH",
        JSON.stringify({
          likes: dbProblem.likes + 1,
          dislikes: dbProblem.dislikes - 1,
        }),
        {
          Authorization: `Bearer ${authCtx.token}`,
          "Content-Type": "application/json",
        }
      );

      setDynamicProblemData((prevData) => ({
        ...prevData,
        liked: true,
        disLiked: false,
      }));
      setDbProblem((prevData) => ({
        ...prevData,
        likes: prevData.likes + 1,
        dislikes: prevData.dislikes - 1,
      }));
    } else {
      const updateUserReq = await sendRequest(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        "PATCH",
        JSON.stringify({
          likedProblems: [...user.likedProblems, currProblemId],
        }),
        {
          Authorization: `Bearer ${authCtx.token}`,
          "Content-Type": "application/json",
        }
      );

      const updateProblemReq = await sendRequest(
        `${process.env.NEXT_PUBLIC_API_URL}/algorithmns/${dbProblem._id}`,
        "PATCH",
        JSON.stringify({
          likes: dbProblem.likes + 1,
        }),
        {
          Authorization: `Bearer ${authCtx.token}`,
          "Content-Type": "application/json",
        }
      );

      setDynamicProblemData((prevData) => ({
        ...prevData,
        liked: true,
      }));
      setDbProblem((prevData) => ({
        ...prevData,
        likes: prevData.likes + 1,
      }));
    }
  }

  async function handleDisLikeClick() {
    if (!user) {
      toaster.push(
        <Message
          className="toast"
          type="error"
          message="You must be logged in to dislike a problem"
        >
          message
        </Message>,
        {
          duration: 3000,
        }
      );
      return;
    }
    const currProblemId = problem.id;

    if (dynamicProblemData.disLiked) {
      const updateUserReq = await sendRequest(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        "PATCH",
        JSON.stringify({
          dislikedProblems: user.dislikedProblems.filter(
            (problem) => problem !== currProblemId
          ),
        }),
        {
          Authorization: `Bearer ${authCtx.token}`,
          "Content-Type": "application/json",
        }
      );

      const updateProblemReq = await sendRequest(
        `${process.env.NEXT_PUBLIC_API_URL}/algorithmns/${dbProblem._id}`,
        "PATCH",
        JSON.stringify({
          dislikes: dbProblem.dislikes - 1,
        }),
        {
          Authorization: `Bearer ${authCtx.token}`,
          "Content-Type": "application/json",
        }
      );
      setDynamicProblemData((prevData) => ({ ...prevData, disLiked: false }));
      setDbProblem((prevData) => ({
        ...prevData,
        disLikes: prevData.disLikes - 1,
      }));
    } else if (dynamicProblemData.liked) {
      const updateUserReq = await sendRequest(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        "PATCH",
        JSON.stringify({
          likedProblems: user.likedProblems.filter(
            (problem) => problem !== currProblemId
          ),
          dislikedProblems: [...user.dislikedProblems, currProblemId],
        }),
        {
          Authorization: `Bearer ${authCtx.token}`,
          "Content-Type": "application/json",
        }
      );

      const updateProblemReq = await sendRequest(
        `${process.env.NEXT_PUBLIC_API_URL}/algorithmns/${dbProblem._id}`,
        "PATCH",
        JSON.stringify({
          dislikes: dbProblem.dislikes + 1,
          likes: dbProblem.likes - 1,
        }),
        {
          Authorization: `Bearer ${authCtx.token}`,
          "Content-Type": "application/json",
        }
      );
      setDynamicProblemData((prevData) => ({
        ...prevData,
        disLiked: true,
        liked: false,
      }));
      setDbProblem((prevData) => ({
        ...prevData,
        disLikes: prevData.disLikes + 1,
        likes: prevData.likes - 1,
      }));
    } else {
      const updateUserReq = await sendRequest(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        "PATCH",
        JSON.stringify({
          dislikedProblems: [...user.dislikedProblems, currProblemId],
        }),
        {
          Authorization: `Bearer ${authCtx.token}`,
          "Content-Type": "application/json",
        }
      );

      const updateProblemReq = await sendRequest(
        `${process.env.NEXT_PUBLIC_API_URL}/algorithmns/${dbProblem._id}`,
        "PATCH",
        JSON.stringify({
          dislikes: dbProblem.dislikes + 1,
        }),
        {
          Authorization: `Bearer ${authCtx.token}`,
          "Content-Type": "application/json",
        }
      );

      setDynamicProblemData((prevData) => ({ ...prevData, disLiked: true }));
      setDbProblem((prevData) => ({
        ...prevData,
        disLikes: prevData.disLikes + 1,
      }));
    }
  }

  async function handleStarClick() {
    if (!user) {
      toaster.push(
        <Message
          className="toast"
          type="error"
          message="You must be logged in to dislike a problem"
        >
          message
        </Message>,
        {
          duration: 3000,
        }
      );
      return;
    }
    const currProblemId = problem.id;

    if (!dynamicProblemData.starred) {
      try {
        const updateUserReq = await sendRequest(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
          "PATCH",
          JSON.stringify({
            starredProblems: [...user.starredProblems, currProblemId],
          }),
          {
            Authorization: `Bearer ${authCtx.token}`,
            "Content-Type": "application/json",
          }
        );
        console.log(updateUserReq);

        setDynamicProblemData((prevData) => ({ ...prevData, starred: true }));
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const updateUserReq = await sendRequest(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
          "PATCH",
          JSON.stringify({
            starredProblems: user.starredProblems.filter(
              (problem) => problem !== currProblemId
            ),
          }),
          {
            Authorization: `Bearer ${authCtx.token}`,
            "Content-Type": "application/json",
          }
        );
        setDynamicProblemData((prevData) => ({ ...prevData, starred: false }));
      } catch (err) {
        console.log(err);
      }
    }
  }

  const Message = React.forwardRef(({ type, ...rest }, ref) => {
    return (
      <Notification ref={ref} {...rest} type={type} header={type}>
        <h6>{rest.message}</h6>
      </Notification>
    );
  });

  // if (!dynamicProblemData) return;
  return (
    <>
      <div className={classes.problem__desc__wrapper}>
        <header>
          <h6 className={classes.heading__desc}>Description</h6>
        </header>
        <div className={classes.problem__cnt}>
          <a
            class="mr-2 text-label-1 dark:text-dark-label-1 hover:text-label-1 dark:hover:text-dark-label-1 text-lg font-medium"
            href="/problems/remove-nth-node-from-end-of-list/"
          >
            <h4>{problem.title}</h4>
          </a>

          <div className="flex g-1 align-cntr">
            <p
              className={`${
                problem.difficulty === "Easy"
                  ? "clr-green"
                  : "Medium" === "Medium"
                  ? "clr-gold"
                  : "clr-red"
              }`}
            >
              {problem.difficulty}
            </p>
            {dynamicProblemData && dynamicProblemData.solved && (
              <BsCheck2Circle fill="#40CA7D" size={20} />
            )}
            <Button disabled={isLoading} className={classes.btn__ctx}>
              <AiFillLike
                onClick={handleLikeClick}
                className={`${
                  dynamicProblemData && dynamicProblemData.liked
                    ? classes.color__active
                    : ""
                } `}
              />

              {dbProblem && dbProblem.likes ? dbProblem.likes : null}
            </Button>
            <Button
              onClick={handleDisLikeClick}
              disabled={isLoading}
              className={classes.btn__ctx}
            >
              <AiFillDislike
                className={`${
                  dynamicProblemData && dynamicProblemData.disLiked
                    ? classes.color__active
                    : ""
                } `}
              />
              {dbProblem && dbProblem.disLikes ? dbProblem.disLikes : null}
            </Button>
            <Button className={classes.btn__ctx} onClick={handleStarClick}>
              {dynamicProblemData && dynamicProblemData.starred ? (
                <AiFillStar fill="gold" />
              ) : (
                <TiStarOutline />
              )}
            </Button>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
            className={classes.problem__statement}
          ></div>
          <div className={classes.examples__wrapper}>
            {problem.examples.map((example, index) => (
              <div>
                <p className={classes.example__heading}>
                  {" "}
                  Example {index + 1}{" "}
                </p>
                {example.img && <img src={example.img} />}
                <code className=" ">
                  <strong>Input:</strong> {example.inputText} <br />
                  <strong>outputText:</strong> {example.outputText}
                  <br />
                  {example.explanation && <strong>explanation:</strong>}
                  {example.explanation}
                </code>
              </div>
            ))}
          </div>
          <div className={classes.constraints__wrapper}>
            <h5>Constraints</h5>
            <ul dangerouslySetInnerHTML={{ __html: problem.constraints }}></ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemDescription;
