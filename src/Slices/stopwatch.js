import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: { hrs: 0, mins: 0, secs: 0, milli: 0 },
  isRunning: false,
};

export const stopwatch = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    updateTime: (state) => {
      var milli = state.time.milli;
      var secs = state.time.secs;
      var mins = state.time.mins;
      var hrs = state.time.hrs;

      milli += 1;

      if (milli === 100) {
        milli = 0;
        secs += 1;
        if (secs === 60) {
          secs = 0;
          mins += 1;
          if (mins === 60) {
            mins = 0;
            hrs += 1;
            if (hrs === 99) {
              milli = 0;
              secs = 0;
              mins = 0;
              hrs = 0;
            }
          }
        }
      }

      state.time = {
        hrs: hrs,
        mins: mins,
        secs: secs,
        milli: milli,
      };
    },
    resetTime: (state) => {
      state.time = { hrs: 0, mins: 0, secs: 0, milli: 0 };
    },
    updateIsRunning: (state, action) => {
      state.isRunning = action.payload;
    },
  },
});

export const { updateTime, resetTime , updateIsRunning} = stopwatch.actions;

export default stopwatch.reducer;
