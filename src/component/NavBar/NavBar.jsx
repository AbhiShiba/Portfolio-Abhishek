import React, { useState } from "react";
import "./NavBar.css";
import { AiOutlineMenu } from "react-icons/ai";

export function NavBar() {
  const [menuFlag,setMenuFlag] = useState(false);

  const menuHandler = () => {
    setMenuFlag(!menuFlag);
  }

  return (
    <div className="nav-bar-main">
      <div className="menu-bar" onClick={menuHandler}>
        <AiOutlineMenu style={{fontSize: "30px", color: "white"}} />
      </div>

      <div className={menuFlag ?"navigation-bar visibily-menu" : "navigation-bar"}>
        <ul className="list-of-nav">
          <li className="list-name">
            <a className="anchor-name" href="#home">
              Home
            </a>
          </li>
          <li className="list-name">
            <a className="anchor-name" href="#home">
              About
            </a>
          </li>
          <li className="list-name">
            <a className="anchor-name" href="#home">
              My Works
            </a>
          </li>
          <li className="list-name">
            <a className="anchor-name" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
