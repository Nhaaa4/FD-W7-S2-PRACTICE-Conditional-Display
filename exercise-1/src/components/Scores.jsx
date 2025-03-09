import Statistic from "./Statistic";

function Scores(props) {
  return (
    <div class="scores">
      <h1>{props.courseName}</h1>

      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {props.courseResult.map((data) => {
            return (
              <tr>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td className={ data.score < 50 ? "warning" : "" } >{data.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Statistic courseResult={props.courseResult} />
    </div>
  );
}

export default Scores;
