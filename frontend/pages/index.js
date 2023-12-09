import NavigationBar from "@/components/Navbar";
import QuestionsTable from "@/components/Table";

export async function getServerSideProps(context) {
  const userDataCookie = context.req.cookies["userData"];
  console.log(context.req.cookies, userDataCookie);

  if (!userDataCookie) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  let allProblems;
  try {
    const getAllProblems = await fetch(`${process.env.API_URL}/algorithmns`);

    if (!getAllProblems.ok) {
      allProblems = null;
    } else {
      const res = await getAllProblems.json();
      allProblems = res.data.data;
    }
  } catch (error) {}

  return {
    props: {
      allProblems,
    },
  };
}

export default function App(props) {
  return (
    <>
      <section className="home--wrapper">
        <NavigationBar />

        {props.allProblems && <QuestionsTable data={props.allProblems} />}
      </section>
    </>
  );
}
