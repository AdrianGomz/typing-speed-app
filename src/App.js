import "./App.css";
import { useState } from "react";
const quote =
  "She believed, and was entitled to believe, I must say, that all human beings were evil by nature, whether tormentors or victims, or idle standers-by. They could only create meaningless tragedies, she said, since they weren't nearly intelligent enough to accomplish all the good they were meant to do.";

function App() {
  const [text, setText] = useState("");
  const [wrongIndexes, setWrongIdexes] = useState([true]);
  const [currentChar, setCurrentChar] = useState(0);

  const handleTyping = (e) => {
    setText(e.target.value);
    // Handle delete
    if (e.target.value.length < text.length) {
      setCurrentChar(e.target.value.length);
      setWrongIdexes(wrongIndexes.slice(0, e.target.value.length + 1));
      return;
    }
    // if current character is correct and the previous character also was correct add true else false
    if (
      e.target.value.charAt(currentChar) === quote.charAt(currentChar) &&
      wrongIndexes[wrongIndexes.length - 1]
    ) {
      setWrongIdexes((prevIndexes) => [...prevIndexes, true]);
    } else {
      setWrongIdexes((prevIndexes) => [...prevIndexes, false]);
    }
    // Actualzing index of the next character we need to type
    setCurrentChar(e.target.value.length);
  };
  // get color of each character
  const getColor = (i) => {
    // note: wrongIndexes starts as [true] in order to get the wrong typed characters easier, thats why we use i+1
    if (wrongIndexes[i + 1] === false) {
      return "wrong";
    } else if (currentChar === i && wrongIndexes[i] !== false) {
      return "current";
    }
    return null;
  };

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
        className="TypingInput"
      />
    </div>
  );
}

export default App;
