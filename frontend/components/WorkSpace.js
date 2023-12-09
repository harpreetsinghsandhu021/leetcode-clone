import React, { useEffect, useContext, useState } from "react";
import ProblemDescription from "./ProblemDescription";
import PlayGround from "./PlayGround";
import Split from "react-split";
import { AuthContext } from "@/shared/context/authContext";

const WorkSpace = (props) => {
  const authCtx = useContext(AuthContext);
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const fetchUser = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users?_id=${authCtx.userId}`
    );
    const user = await fetchUser.json();

    if (fetchUser.ok) {
      setUser(user.data.data[0]);
    }
  }
  useEffect(() => {
    if (authCtx.userId) {
      fetchUser();
    }
  }, [authCtx?.userId]);

  return (
    <Split minSize={450} sizes={[35, 65]} className="split">
      <ProblemDescription
        user={user}
        dbProblem={props.dbProblem[0]}
        problem={props.problem}
      />
      <PlayGround user={user} problem={props.problem} />
    </Split>
  );
};

export default WorkSpace;
