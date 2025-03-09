import Header from "./components/Header";
import Scores from "./components/Scores";
import Statistic from "./components/Statistic";
import { ENGLISH_RESULTS, HTML_RESULTS, JAVA_RESULTS, PYTHON_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header/>
      <main className="scores-container">
        <Scores courseName="Java" courseResult={JAVA_RESULTS}/>
        <Scores courseName="Python" courseResult={PYTHON_RESULTS}/>
        <Scores courseName="HTML" courseResult={HTML_RESULTS}/>
        <Scores courseName="English" courseResult={ENGLISH_RESULTS}/>
      </main>
    </>
  );
}

export default App;
