import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTargetDate,
  updateRemainingTime,
  resetTimer,
} from "../Slices/countdown";
import Card from "./Card";

const Clock = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.countdown.isRunning);
  const remainingTime = useSelector((state) => state.countdown.remainingTime);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        dispatch(updateRemainingTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [dispatch, isRunning]);

  const handleTimer = (date) => {
    dispatch(setTargetDate(new Date(date).getTime()));
  };

  return (
    <div className="text-center">
      <h1 className="my-5">Countdown</h1>
      <div className="d-flex flex-column align-items-center column">
        <Card>
          <section className="col-sm-2 mx-2">
            <p className="mb-0">
              {remainingTime.days < "10" ? "0" : ""}
              {remainingTime.days}
            </p>
            <small className="fs-6">Days</small>
          </section>
          <span>:</span>
          <section className="col-sm-2 mx-2">
            <p className="mb-0">
              {remainingTime.hours < "10" ? "0" : ""}
              {remainingTime.hours}
            </p>
            <small className="fs-6">Hours</small>
          </section>
          <span>:</span>
          <section className="col-sm-2 mx-2">
            <p className="mb-0">
              {remainingTime.mins < "10" ? "0" : ""}
              {remainingTime.mins}
            </p>
            <small className="fs-6">Mins</small>
          </section>
          <span>:</span>
          <section className="col-sm-2 mx-2">
            <p className="mb-0">
              {remainingTime.secs < "10" ? "0" : ""}
              {remainingTime.secs}
            </p>
            <small className="fs-6">Secs</small>
          </section>
        </Card>
        <div className="d-grid justify-content-center my-3">
          <label htmlFor="date" className="form-label">
            Enter Date:
          </label>

          <input
            id="date"
            className="form-control mb-2"
            type="datetime-local"
            onChange={(e) => handleTimer(e.target.value)}
          />
          <button
            className="btn btn-danger mb-5"
            onClick={() => dispatch(resetTimer())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
