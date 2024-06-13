import { Link } from "react-router-dom";
import { Container } from "./styles";
import logo from "../../assets/logo-rj.png";
import { SideBar } from "../SideBar";
import { useState } from "react";

export function Header() {
  const [showSideBar, setShowSideBar] = useState(false);
 

  function toggleSideBar() {
    setShowSideBar((prevState) => (prevState == true ? false : true));
  }
  return (
    <Container>
      <div className="asideMenu">
        <i className="menuIcon material-icons" onClick={toggleSideBar}>
          menu
        </i>
      </div>

      <div className="appLogo">
        <h1>Task Manager</h1>
        <Link to="https://emanuelquintino.github.io/Page-WDC/">
          <img src={logo} alt="" />
        </Link>
      </div>

      {showSideBar && <SideBar toggleSideBar={toggleSideBar} />}
    </Container>
  );
}
