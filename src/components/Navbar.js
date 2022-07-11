import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="name">Typing Speed Test</div>
      <div className="navTab">
        <a href="/">Test</a>
        <a href="quotes" className="quotes">
          Quotes
        </a>
        <a href="create" className="create">
          Create
        </a>
      </div>
    </div>
  );
};
export default Navbar;
