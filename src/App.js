import "./App.css";
import TypingArea from "./components/TypingArea";
import { useState } from "react";
import Metrics from "./components/Metrics";
import Navbar from "./components/Navbar";
const quote =
  "She believed, and was entitled to believe, I must say, that all human beings were evil by nature";

function App() {
  const [text, setText] = useState("");
  const [running, setRunning] = useState(false);
  const [wrongTypedChar, setWrongTypedChar] = useState(0);
  const [seconds, setSeconds] = useState(0);
  return (
    <div className="App">
      <Navbar />
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
