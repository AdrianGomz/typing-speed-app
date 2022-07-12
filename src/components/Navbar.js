import "./Navbar.css";
import NavLinks from "./NavLinks";
import NavLinksResponsive from "./NavLinksResponsive";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="name">Typing Speed</div>
      <NavLinks />
      <NavLinksResponsive />
    </div>
  );
};
export default Navbar;
