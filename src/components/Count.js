import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetTime, updateIsRunning, updateTime } from "../Slices/stopwatch";
import Card from "./Card";

const Count = () => {
  const dispatch = useDispatch();
  var isRunning = useSelector((state) => state.stopwatch.isRunning);
  const time = useSelector((state) => state.stopwatch.time);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        dispatch(updateTime());
      }, 10);

      return () => clearInterval(interval);
    }
  }, [dispatch, isRunning]);

  const startTimer = () => {
    dispatch(updateIsRunning(true));
  };

  const resetTimer = () => {
    dispatch(resetTime(false));
  };

  const stopTimer = () => {
    dispatch(updateIsRunning(false));
  };

  return (
    <div className="text-center container d-flex flex-column align-items-center ">
      <h1 className="mt-5 w-100">Stopwatch</h1>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center my-auto">
        <Card>
          <p>
            {time.hrs < "10" ? "0" : ""}
            {time.hrs} : {time.mins < "10" ? "0" : ""}
            {time.mins} : {time.secs < "10" ? "0" : ""}
            {time.secs} : {time.milli < "10" ? "0" : ""}
            {time.milli}
          </p>
        </Card>
        <div className="justify-content-center my-5 w-100">
          <button className="col-1 btn btn-success" onClick={startTimer}>
            Start
          </button>
          <button className="col-1 btn btn-danger mx-2" onClick={stopTimer}>
            Stop
          </button>
          <button className="col-1 btn btn-warning text-white" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
