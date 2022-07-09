import "./App.css";
import TypingArea from "./components/TypingArea";
import { useState } from "react";
import Metrics from "./components/Metrics";
const quote =
  "She believed, and was entitled to believe, I must say, that all human beings were evil by nature, whether tormentors or victims, or idle standers-by. They could only create meaningless tragedies, she said, since they weren't nearly intelligent enough to accomplish all the good they were meant to do.";

function App() {
  const [text, setText] = useState("");
  const [running, setRunning] = useState(false);
  const [wrongTypedChar, setWrongTypedChar] = useState(0);
  return (
    <div className="App">
      <TypingArea
        quote={quote}
        text={text}
        setText={setText}
        setRunning={setRunning}
        running={running}
        setWrongTypedChar={setWrongTypedChar}
      />
      <Metrics
        quoteWords={quote.split(" ").length}
        text={text}
        typedWords={text.split(" ").length - 1}
        setRunning={setRunning}
        running={running}
        wrongTypedChar={wrongTypedChar}
      />
    </div>
  );
}

export default App;
