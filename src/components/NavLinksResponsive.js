import "./Navbar.css";
import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";
const NavLinksResponsive = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navTab responsive">
      <CgMenuGridO
        className="hamburger"
        color="#e0e0e0"
        size="1.5em"
        onClick={() => setToggleMenu(!toggleMenu)}
      />
      {toggleMenu && (
        <div className="links">
          <a href="/">Test</a>
          <a href="quotes" className="quotes">
            Quotes
          </a>
          <a href="create" className="create">
            Create
          </a>
        </div>
      )}
    </nav>
  );
};
export default NavLinksResponsive;
