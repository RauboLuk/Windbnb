import { configureStore } from "@reduxjs/toolkit";
import guestsReducer from "./slices/guestsSlice";
import locationReducer from "./slices/locationSlice";

export default configureStore({
  reducer: {
    guests: guestsReducer,
    location: locationReducer,
  },
});
