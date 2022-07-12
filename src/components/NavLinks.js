import "./Navbar.css";

const NavLinks = () => {
  return (
    <nav className="navTab normal">
      <div className="links">
        <a href="/">Test</a>
        <a href="quotes" className="quotes">
          Quotes
        </a>
        <a href="create" className="create">
          Create
        </a>
      </div>
    </nav>
  );
};
export default NavLinks;
