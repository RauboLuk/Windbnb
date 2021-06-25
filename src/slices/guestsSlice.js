import { createSlice } from "@reduxjs/toolkit";

export const guestsSlice = createSlice({
  name: "guests",
  initialState: {
    adults: 0,
    children: 0,
  },
  reducers: {
    incrementAdult: (state) => {
      state.adults += 1;
    },
    decrementAdult: (state) => {
      state.adults -= 1;
    },
    incrementChildren: (state) => {
      state.children += 1;
    },
    decrementChildren: (state) => {
      state.children -= 1;
    },
  },
});

export const {
  incrementAdult,
  decrementAdult,
  incrementChildren,
  decrementChildren,
} = guestsSlice.actions;

export default guestsSlice.reducer;

export const selectGuestsSum = (state) =>
  state.guests.adults + state.guests.children;
