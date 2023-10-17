import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
      <Card>
        <div>
          <p>Welcome to the Timer App :)!!</p>
          <p className="fs-5">What do you want to do?</p>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <Link to="/timerApp/time">
              <button className="btn btn-dark">Time</button>
            </Link>
            <Link to="/timerApp/countdown">
              <button className="btn btn-dark mx-2">Countdown</button>
            </Link>
            <Link to="/timerApp/stopwatch">
              <button className="btn btn-dark">Stopwatch</button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
