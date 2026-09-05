import "./logo"
import Logo from "./logo";
import Navlist from "./Navlist";
const SwiggyNavbarProject = () => {
  console.log("SwiggyNavbarProject loaded");
  return (
    <div id="navbar">
      <div id="navbox">
        <div id="leftnav">
           <Logo/>
        </div>
        <div id="rightnav">
            <Navlist/>
        </div>

      </div>
    </div>
  );
};
export default SwiggyNavbarProject;
