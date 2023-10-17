import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/timerApp">
            Timer App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className={"navbar-nav  mb-2 mb-sm-0"}>
              <li className="nav-item">
                <Link className="nav-link" to="/timerApp">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/timerApp/time">
                  Time
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/timerApp/countdown">
                  Countdown
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/timerApp/stopwatch">
                  Stopwatch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
