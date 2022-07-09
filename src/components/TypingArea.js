import { useState, useRef } from "react";
import "./TypingArea.css";
const TypingArea = ({
  quote,
  text,
  setText,
  running,
  setRunning,
  setWrongTypedChar,
  setSeconds,
}) => {
  const [wrongIndexes, setWrongIdexes] = useState([true]);
  const [currentChar, setCurrentChar] = useState(0);
  const ref = useRef(null);

  const handleTyping = (e) => {
    if (!running && e.target.value.length === 1) {
      setRunning(true);
    }
    if (e.target.value.length === quote.length && e.target.value === quote) {
      setRunning(false);
    }
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
      setWrongTypedChar((prev) => prev + 1);
      setWrongIdexes((prevIndexes) => [...prevIndexes, false]);
    }
    // Actualzing index of the next character we need to type
    setCurrentChar(e.target.value.length);
  };

  const handleStart = async () => {
    setText("");
    setSeconds(0);
    setWrongTypedChar(0);
    setWrongIdexes([true]);
    await setCurrentChar(0);
    await setRunning(true);
    ref.current.focus();
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
      {running ? (
        <input
          ref={ref}
          type="text"
          value={text}
          onChange={handleTyping}
          className="TypingInput"
        />
      ) : null}
      <button onClick={handleStart}>start</button>
    </div>
  );
};
export default TypingArea;
