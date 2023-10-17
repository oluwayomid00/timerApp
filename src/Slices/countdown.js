// src/timerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  targetDate: null,
  remainingTime: { days: 0, hours: 0, mins: 0, secs: 0 },
  isRunning: false,
};

export const countdown = createSlice({
  name: "count",
  initialState,
  reducers: {
    setTargetDate: (state, action) => {
      state.isRunning = true;
      state.targetDate = action.payload;
    },
    updateRemainingTime: (state) => {
      const now = new Date().getTime();
      const timer = state.targetDate - now;

      if (timer > 0) {
        const days = Math.floor(timer / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (timer % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
        );
        const mins = Math.floor((timer % (60 * 60 * 1000)) / (60 * 1000));
        const secs = Math.floor((timer % (60 * 1000)) / 1000);

        state.remainingTime = {
          days: days,
          hours: hours,
          mins: mins,
          secs: secs,
        };
      } else {
        state.isRunning = false;
        state.remainingTime = { days: 0, hours: 0, mins: 0, secs: 0 };
      }
    },
    resetTimer: (state) => {
      state.isRunning = false;
      state.remainingTime = { days: 0, hours: 0, mins: 0, secs: 0 };
    },
  },
});

export const { setTargetDate, updateRemainingTime, resetTimer } =
  countdown.actions;

export default countdown.reducer;