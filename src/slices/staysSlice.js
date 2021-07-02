import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { selectGuestsSum } from "./guestsSlice";
import { selectLocation } from "./locationSlice";

import data from "../assets/data/stays.json";

export const fetchStays = createAsyncThunk("stays/fetchStays", async () => {
  return data;
});

export const staysSlice = createSlice({
  name: "stays",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setStays: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchStays.pending]: (state, _) => {
      state.status = "loading";
    },
    [fetchStays.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [fetchStays.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { setStays } = staysSlice.actions;

export default staysSlice.reducer;

export const selectStays = (state) => state.stays.data;
export const selectStatus = (state) => state.stays.status;

export const selectFilteredStays = createSelector(
  selectStays,
  selectLocation,
  selectGuestsSum,
  (stays, selectedLocation, guestsCount) => {
    if (selectedLocation.city === "" || selectedLocation.country === "")
      return stays;
    return stays?.filter(
      (location) =>
        location.city === selectedLocation.city &&
        location.country === selectedLocation.country &&
        location.maxGuests >= guestsCount
    );
  }
);

export const selectFilteredStaysCount = createSelector(
  selectFilteredStays,
  (stays) => stays.length
);
