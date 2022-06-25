import React from "react";
import "./Components.css";
import Feature from "./Feature";
import Company from "./Company";
import MobibleMenu from "./MobileMenu";

export default function Header() {
  const [dropFeature, setDropFeature] = React.useState(false);
  const [dropCompany, setDropCompany] = React.useState(false);
  const [open, isOpen] = React.useState(false);

  const url = "";
  return (
    <div className="header">
      <div className="Logo headerSpacing">
        <h1>snap</h1>
      </div>

      <div className="navBar headerSpacing">
        <ul>
          <li onClick={() => setDropFeature(!dropFeature)}>
            <button className="pointer">
              Feature{" "}
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#686868"
                  stroke-width="1.5"
                  fill="none"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </li>

          {dropFeature && <Feature />}

          <li>
            {" "}
            <button onClick={() => setDropCompany(!dropCompany)}>
              Company{" "}
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#686868"
                  stroke-width="1.5"
                  fill="none"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </li>

          {dropCompany && <Company />}

          <li className="pointer">
            <a href={url}>Careers</a>
          </li>

          <li className="pointer">
            <a href={url}>About</a>
          </li>
        </ul>
      </div>

      <div className="headerButtons headerSpacing">
        <button className="buttons pointer" id="loginButton">
          Login
        </button>
        <button className="buttons pointer" id="registerButton">
          Register
        </button>
      </div>
      {/* {open && (
        <button className="menuButton" onClick={() => isOpen(!open)}>
          <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
            <g fill="#151515" fill-rule="evenodd">
              <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
              <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
            </g>
          </svg>
        </button>
      )} */}

      <button className="menuButton" onClick={() => isOpen(!open)}>
        <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
          <g fill="#151515" fill-rule="evenodd">
            <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
          </g>
        </svg>
      </button>
      {open && <MobibleMenu />}
    </div>
  );
}
