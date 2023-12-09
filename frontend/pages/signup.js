import React from "react";
import CustomForm from "../components/Form";

export function getServerSideProps(context) {
  const token = context.req.cookies.userData
    ? JSON.parse(context.req.cookies.userData).token
    : null;

  if (token) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {
      check: true,
    },
  };
}

const SignUp = (props) => {
  return (
    <div className="auth--page">
      <main className="center">
        <CustomForm signup />
      </main>
    </div>
  );
};

export default SignUp;
