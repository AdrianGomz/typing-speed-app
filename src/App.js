import "./App.css";
import TypingArea from "./components/TypingArea";
import { useState } from "react";
import Metrics from "./components/Metrics";
const quote =
  "She believed, and was entitled to believe, I must say, that all human beings were evil by nature, whether tormentors or victims, or idle standers-by. They could only create meaningless tragedies, she said, since they weren't nearly intelligent enough to accomplish all the good they were meant to do.";

function App() {
  return (
    <div className="App">
      <TypingArea quote={quote} />
      <Metrics />
    </div>
  );
}

export default App;
