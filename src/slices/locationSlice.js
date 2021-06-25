import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    city: "Helsinki",
    country: "Finland",
  },
  reducers: {
    setLocation: (state, action) => {
      state.city = action.payload.city;
      state.country = action.payload.country;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;

export const selectLocation = (state) => state.location;
export const selectCountry = (state) => state.location.country;
