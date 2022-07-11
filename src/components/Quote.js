import "./Quote.css";
const Quote = ({ title, quote, author, publishedDate }) => {
  return (
    <div className="quote">
      <h3 className="quote-title">{title}</h3>
      <h4 className="quote-author">By: {author}</h4>
      <p>"{quote}"</p>
      <p>Published on: {publishedDate}</p>
    </div>
  );
};
export default Quote;
