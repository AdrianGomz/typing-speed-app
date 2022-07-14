import "./App.css";
import TypingArea from "./components/TypingArea";
import { useEffect, useState } from "react";
import Metrics from "./components/Metrics";
import Navbar from "./components/Navbar";

function App() {
  const [quote, setQuote] = useState("Press on start . . .");
  const [text, setText] = useState("");
  const [running, setRunning] = useState(false);
  const [wrongTypedChar, setWrongTypedChar] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [title, setTitle] = useState(" ");
  useEffect(() => {
    if (running) {
      const quoteJSON = fetch("https://typing-speed-api.herokuapp.com/random")
        .then((res) => res.json())
        .then((result) => {
          setQuote(result.quote);
          setTitle(result.title);
        });
      console.log(quoteJSON);
    }
  }, [running, setSeconds]);
  return (
    <div className="App">
      <Navbar />
      <div className="header">
        <div className="typing-area-header">
          <h2>{title}</h2>
        </div>
        <div className="metrics-header"></div>
      </div>
      <div className="body">
        <TypingArea
          quote={quote}
          text={text}
          setText={setText}
          setRunning={setRunning}
          running={running}
          setWrongTypedChar={setWrongTypedChar}
          setSeconds={setSeconds}
        />
        <Metrics
          quoteWords={quote.split(" ").length}
          text={text}
          typedWords={text.split(" ").length - 1}
          setRunning={setRunning}
          running={running}
          wrongTypedChar={wrongTypedChar}
          seconds={seconds}
          setSeconds={setSeconds}
        />
      </div>
    </div>
  );
}

export default App;
