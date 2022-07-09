import "./App.css";
import { useState } from "react";
const quote =
  "She believed, and was entitled to believe, I must say, that all human beings were evil by nature, whether tormentors or victims, or idle standers-by. They could only create meaningless tragedies, she said, since they weren't nearly intelligent enough to accomplish all the good they were meant to do.";

function App() {
  const [text, setText] = useState("");
  const handleTyping = (e) => {
    setText(e.target.value);
    setCurrentWord(e.target.value.split(" ").length - 1);
  };
  const [currentWord, setCurrentWord] = useState(0);

  return (
    <div className="App">
      <div className="Quote">
        {quote.split(" ").map((word, i) => {
          return (
            <span key={i} className={currentWord === i ? "current" : null}>
              {word}{" "}
            </span>
          );
        })}
      </div>
      <input
        type="text"
        value={text}
        onChange={handleTyping}
        className="TypingInput"
      />
    </div>
  );
}

export default App;
