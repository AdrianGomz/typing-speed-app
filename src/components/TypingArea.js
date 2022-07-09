import { useState } from "react";
import "./TypingArea.css";
const TypingArea = ({ quote }) => {
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
    <div className="TypingText">
      <div className="Quote">
        {quote.split("").map((char, i) => {
          return (
            <span key={i} className={getColor(i)}>
              {char}
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
};
export default TypingArea;
