import "./App.css";
import { useState } from "react";
const quote =
  "She believed, and was entitled to believe, I must say, that all human beings were evil by nature, whether tormentors or victims, or idle standers-by. They could only create meaningless tragedies, she said, since they weren't nearly intelligent enough to accomplish all the good they were meant to do.";

function App() {
  const [text, setText] = useState("");
  const [wrongIndexes, setWrongIdexes] = useState([true]);
  const handleTyping = async (e) => {
    // Handle delete
    if (e.target.value.length < text.length) {
      setText(e.target.value);
      setCurrentChar(e.target.value.length);
      setWrongIdexes(wrongIndexes.slice(0, e.target.value.length + 1));
      return;
    }

    setText(e.target.value);
    if (
      e.target.value.charAt(currentChar) === quote.charAt(currentChar) &&
      wrongIndexes[wrongIndexes.length - 1]
    ) {
      setWrongIdexes((prevIndexes) => [...prevIndexes, true]);
    } else {
      setWrongIdexes((prevIndexes) => [...prevIndexes, false]);
    }
    setCurrentChar(text.split("").length + 1);
  };
  const getColor = (i) => {
    if (wrongIndexes[i + 1] === false) {
      return "wrong";
    } else if (currentChar === i && wrongIndexes[i] !== false) {
      return "current";
    }
    return null;
  };
  const [currentChar, setCurrentChar] = useState(0);
  return (
    <div className="App">
      <div className="Quote">
        {quote.split("").map((word, i) => {
          return (
            <span key={i} className={getColor(i)}>
              {word}
              {""}
            </span>
          );
        })}
      </div>
      <input
        type="text"
        value={text}
        onChange={handleTyping}
        // onKeyUp={handleDelete}
        className="TypingInput"
      />
    </div>
  );
}

export default App;
