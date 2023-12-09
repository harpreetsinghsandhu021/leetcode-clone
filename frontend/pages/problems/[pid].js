import React, { useEffect } from "react";
import NavigationBar from "@/components/Navbar";
import WorkSpace from "@/components/WorkSpace";
import { problems } from "@/utils/problems";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
const problemPage = (props) => {
  return (
    <>
      <main className="main--problem">
        <NavigationBar problemPage />
        <WorkSpace problem={props.problem} dbProblem={props.dbProblem} />
      </main>
    </>
  );
};

export default problemPage;

export async function getStaticPaths() {
  const paths = Object.keys(problems).map((key) => ({
    params: {
      pid: key,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { pid } = context.params;

  const problem = problems[pid];
  let res = null;
  try {
    const sendRequest = await fetch(
      `${process.env.API_URL}/algorithmns?titleSlug=${pid}`
    );

    res = await sendRequest.json();
    res = res.data.data;
  } catch (err) {}

  if (!problem) {
    return {
      notFound: true,
    };
  }

  problem.handlerFunction = problem.handlerFunction.toString();

  return {
    props: {
      problem,
      dbProblem: res,
    },
  };
}
