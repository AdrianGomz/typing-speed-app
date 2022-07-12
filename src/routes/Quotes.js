import "./Quotes.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Quote from "../components/Quote";

const Quotes = () => {
  const [quotes, setQuotes] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/all")
      .then((res) => res.json())
      .then((res) => setQuotes(res));
  }, []);
  console.log(quotes);
  console.log(typeof quotes);
  return (
    <div>
      <Navbar />
      <div className="quote-container">
        {quotes
          ? quotes.map((quote) => <Quote key={quote.id} {...quote} />)
          : null}
      </div>
    </div>
  );
};
export default Quotes;
