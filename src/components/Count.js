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
    <div className="text-center">
      <h1 className="my-5">Stopwatch</h1>
      <div className="d-flex flex-column align-items-center">
        <Card>
          <p className="fs-sm-3">
            {time.hrs < "10" ? "0" : ""}
            {time.hrs} : {time.mins < "10" ? "0" : ""}
            {time.mins} : {time.secs < "10" ? "0" : ""}
            {time.secs} : {time.milli < "10" ? "0" : ""}
            {time.milli}
          </p>
        </Card>

        <div className="justify-content-center my-5 row">
          <div className="col">
            <button className="btn btn-success" onClick={startTimer}>
              Start
            </button>
          </div>
          <div className="col">
            <button className="btn btn-danger" onClick={stopTimer}>
              Stop
            </button>
          </div>
          <div className="col">
            <button className="btn btn-warning text-white" onClick={resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
