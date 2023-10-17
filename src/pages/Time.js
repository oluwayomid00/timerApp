import React from "react";
import Card from "../components/Card";

const Time = () => {
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date < 10 ? "0" : ""}${date} : ${
      month < 10 ? "0" : ""
    }${month} : ${year}`;
  }

  function getTime() {
    const today = new Date();
    const hours = today.getHours();
    const mins = today.getMinutes();
    return `${hours < 10 ? "0" : ""}${hours} : ${mins < 10 ? "0" : ""}${mins}`;
  }

  return (
    <div className="text-center">
      <h1 className="my-5">Current Date & Time</h1>
      <div className="d-flex flex-column align-items-center">
        <Card>
          <div className="w-100 px-4 h-100 fs-2">
            <div className="fs-6 text-center mt-0 pt-0">
              <p>{Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-around w-100">
              <div className="border border-dark rounded m-2">
                <p className="d-flex flex-column align-items-center px-2">
                  <span>Time</span>
                  <span>{getTime()}</span>
                </p>
              </div>
              <div className="border border-dark rounded m-2">
                <p className="d-flex flex-column align-items-center px-2">
                  <span>Date</span>
                  <span>{getDate()}</span>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Time;
