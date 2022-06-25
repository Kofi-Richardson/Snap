import React from "react";
import "./Components.css";
import { ReactComponent as Reminder } from "../images/icon-reminders.svg";
import { ReactComponent as Todo } from "../images/icon-todo.svg";
import { ReactComponent as Planning } from "../images/icon-planning.svg";
import { ReactComponent as Calander } from "../images/icon-calendar.svg";
import App from "../App";
export default function MobibleMenu() {
  const [dropFeature, setDropFeature] = React.useState(false);
  const [dropCompany, setDropCompany] = React.useState(false);

  const [close, setClosed] = React.useState(false);

  return (
    <div className="mobile-menu">
      <div className="close" onClick={() => setClosed(!close)}>
        {/* <button>
          <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
            <g fill="#151515" fill-rule="evenodd">
              <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
              <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
            </g>
          </svg>
        </button>
        {close && null} */}
      </div>
      <div className="mobile-menu-lower">
        <ul>
          <li>
            <button onClick={() => setDropFeature(!dropFeature)}>
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
            {dropFeature && (
              <ul className="mobile-dropdown">
                <li>
                  <Todo /> Todo List
                </li>
                <li>
                  <Calander /> Calender
                </li>
                <li>
                  <Reminder /> Reminder
                </li>
                <li>
                  <Planning /> Planning
                </li>
              </ul>
            )}
          </li>

          <li>
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

            {dropCompany && (
              <ul className="mobile-dropdown">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            )}
          </li>

          <li>
            <button>Careers</button>
          </li>
          <li>
            <button>About</button>
          </li>
        </ul>
      </div>

      <div className="Buttons login-button">
        <button>Login</button>
      </div>

      <div className="Buttons register-button">
        <button>Register</button>
      </div>
    </div>
  );
}
