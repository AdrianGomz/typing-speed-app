import "./Metrics.css";
import { useEffect } from "react";

const Metrics = ({
  quoteWords,
  text,
  running,
  wrongTypedChar,
  seconds,
  setSeconds,
}) => {
  let typedWords = text.split(" ").length - 1;

  let wpm = running
    ? ((typedWords / seconds) * 60).toFixed(2)
    : (seconds !== 0 ? (quoteWords / seconds) * 60 : 0).toFixed(2);
  const accuracy = (
    (text.length / (wrongTypedChar + text.length)) * 100 || 0
  ).toFixed(2);

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
  }, [running, setSeconds]);
  return (
    <div>
      <div className="metrics">
        <div className="metrics-label">Speed</div>
        <div className="wpm metrics-data">{wpm} WPM</div>

        <div className="metrics-label">Accuracy</div>
        <div className="accuracy metrics-data">{accuracy}%</div>
      </div>
    </div>
  );
};
export default Metrics;
