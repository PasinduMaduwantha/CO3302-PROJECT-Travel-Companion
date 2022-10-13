import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./sidebar.css";

function SideBar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar && user);
  //send alert if user is not logged in
  if (!user) {
    alert("Please sign in to continue");
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          {/* <Link to="#" className="menu-bars"> */}
          <FaIcons.FaBars onClick={showSidebar} />
          {/* </Link> */}
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              {/* <Link to="#" className="menu-bars"> */}
              <AiIcons.AiOutlineBackward />
              {/* </Link> */}
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
