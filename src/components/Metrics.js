import "./Metrics.css";
import { useState, useEffect } from "react";

const Metrics = ({ quoteWords, typedWords, setRunning, running }) => {
  const [seconds, setSeconds] = useState(0);
  let wpm = running
    ? ((typedWords / seconds) * 60).toFixed(2)
    : ((quoteWords / seconds) * 60).toFixed(2);
  const accuracy = 93;

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div>
      <div className="metrics">
        <div className="wpm metrics-data">{wpm} WPM</div>

        <div className="accuracy metrics-data">{accuracy}%</div>
      </div>
      <button onClick={() => setRunning(true)}>start</button>
    </div>
  );
};
export default Metrics;
