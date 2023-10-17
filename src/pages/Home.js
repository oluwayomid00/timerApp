import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="my-5 px-3">Welcome to the Timer App : )!!</h1>
      <div className="d-flex flex-column align-items-center">
        <Card>
          <div>
            <p className="fs-5 px-2">What do you want to do?</p>
            <div className="row mx-2">
              <div className="col-12 col-md-auto px-0">
                <Link to="/timerApp/time">
                  <button className="btn btn-dark">Time</button>
                </Link>
              </div>
              <div className="col-12 col-md-5 px-0">
                <Link to="/timerApp/countdown">
                  <button className="btn btn-dark">Countdown</button>
                </Link>
              </div>
              <div className="col-12 col-md-4 px-0">
                <Link to="/timerApp/stopwatch">
                  <button className="btn btn-dark">Stopwatch</button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
