import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectGuestsSum } from "./guestsSlice";
import { selectLocation } from "./locationSlice";

export const staysSlice = createSlice({
  name: "stays",
  initialState: [],
  reducers: {
    setStays: (state, action) => {
      return action.payload;
    },
  },
});

export const { setStays } = staysSlice.actions;

export default staysSlice.reducer;

export const selectStays = (state) => state.stays;

export const selectFilteredStays = createSelector(
  selectStays,
  selectLocation,
  selectGuestsSum,
  (stays, selectedLocation, guestsCount) =>
    stays?.filter(
      (location) =>
        location.city === selectedLocation.city &&
        location.country === selectedLocation.country &&
        location.maxGuests >= guestsCount
    )
);

export const selectFilteredStaysCount = createSelector(
  selectFilteredStays,
  (stays) => stays.length
);
