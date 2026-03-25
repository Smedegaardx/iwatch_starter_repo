import AppleLogo from "./undercomponents/AppleLogo";
import NavIcons from "./undercomponents/NavIcons";
import NavText from "./undercomponents/NavText";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <AppleLogo />
      <NavText />
      <NavIcons />
    </div>
  );
};

export default NavBar;
