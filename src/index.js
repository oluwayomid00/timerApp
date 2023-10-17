//STYLING
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//IMPORTING PACKAGES
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

//IMPORTING COMPONENTS
import App from "./App";
import count from "./Slices/countdown";
import stopwatch from "./Slices/stopwatch";

const store = configureStore({
  reducer: {
    countdown: count,
    stopwatch: stopwatch
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
