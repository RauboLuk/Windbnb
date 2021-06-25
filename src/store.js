import { configureStore } from "@reduxjs/toolkit";
import guestsReducer from "./slices/guestsSlice";
import locationReducer from "./slices/locationSlice";
import staysReducer from "./slices/staysSlice";

export default configureStore({
  reducer: {
    guests: guestsReducer,
    location: locationReducer,
    stays: staysReducer,
  },
});
