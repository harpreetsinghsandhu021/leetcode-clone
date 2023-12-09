import { Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;
import classes from "../styles/Table.module.css";
import { BsFillClipboardCheckFill, BsCheck2Circle } from "react-icons/bs";
import { FaFileVideo } from "react-icons/fa6";

export default function QuestionsTable(props) {
  return (
    <>
      <h1 className={classes.main__heading}>
        "Unlock Your Coding Potential with Codestuds: Your Ultimate Destination
        for Mastering Algorithms and Landing Your Dream Tech Job!"
      </h1>
      <div className={classes.table__wrapper}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>status</th>
              <th>title</th>
              <th>solution</th>
              <th>acceptance</th>
              <th>difficulty</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((r, index) => {
              return (
                <tr key={r._id} id={r._id}>
                  <td className={classes.status}>
                    {r.status === "ac" ? (
                      <BsCheck2Circle fill="#40CA7D" />
                    ) : null}
                  </td>
                  <td>
                    {" "}
                    <a href={`/problems/${r.titleSlug}`}>
                      {" "}
                      {r.frontendQuestionId}. {r.title}
                    </a>{" "}
                  </td>
                  <td>
                    {r.hasVideoSolution ? (
                      <FaFileVideo fill="#BF5AF2" />
                    ) : (
                      <BsFillClipboardCheckFill fill="#0A84FF" />
                    )}
                  </td>
                  <td>{r.acRate.toFixed(2)}%</td>
                  <td
                    className={`${
                      r.difficulty === "Easy"
                        ? "clr-green"
                        : r.difficulty === "Medium"
                        ? "clr-gold"
                        : "clr-red"
                    }`}
                  >
                    {r.difficulty}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
