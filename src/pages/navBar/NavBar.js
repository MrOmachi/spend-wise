import React from "react";
import { AiOutlineDown } from "react-icons/ai";

function NavBar() {
  return (
    <div className="nav">
      <div className="nav-desktop">
        <img
          className="logo"
          src="https://monoassets.com/f/118499/x/53bf3c69fd/logo.svg"
          alt="mono-logo"
        />
        <ul className="nav-desktop-lists">
          <li>
            <a href="#">
              Why Mono <AiOutlineDown />
            </a>
          </li>
          <li>
            <a href="#">
              Product <AiOutlineDown />
            </a>
          </li>
          <li>
            <a href="#">
              Learn <AiOutlineDown />
            </a>
          </li>
          <li>
            <a href="#">
              Developers <AiOutlineDown />
            </a>
          </li>
        </ul>
        <a href="#">Sign in</a>
      </div>
    </div>
  );
}

export default NavBar;
