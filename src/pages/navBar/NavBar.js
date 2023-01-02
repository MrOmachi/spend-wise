import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineDown } from "react-icons/ai";

function NavBar() {
  const [toggleBurger, setToggleBurger] = useState(false);
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
            <Link>
              Why Mono <AiOutlineDown />
            </Link>
          </li>
          <li>
            <Link>
              Product <AiOutlineDown />
            </Link>
          </li>
          <li>
            <Link>
              Learn <AiOutlineDown />
            </Link>
          </li>
          <li>
            <Link>
              Developers <AiOutlineDown />
            </Link>
          </li>
        </ul>
        <Link className="sign-in">Sign in</Link>
      </div>

      <div className=" nav-mobile">
        <img
          className="logo"
          src="https://monoassets.com/f/118499/x/53bf3c69fd/logo.svg"
          alt="mono-logo"
        />
        <div
          className="burger-logo"
          onClick={() => setToggleBurger(!toggleBurger)}
        >
          &#x2630;
        </div>
      </div>

      {toggleBurger && (
        <div className="burger-content">
          <ul className="nav-desktop-lists">
            <li>
              <Link>
                Why Mono <AiOutlineDown />
              </Link>
            </li>
            <li>
              <Link>
                Product <AiOutlineDown />
              </Link>
            </li>
            <li>
              <Link>
                Learn <AiOutlineDown />
              </Link>
            </li>
            <li>
              <Link>
                Developers <AiOutlineDown />
              </Link>
            </li>
          </ul>
          <button className="sign-in">Sign in</button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
