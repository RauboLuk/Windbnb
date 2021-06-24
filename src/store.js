import { configureStore } from "@reduxjs/toolkit";
import guestsSlice from "./slices/guestsSlice";

export default configureStore({
  reducer: {
    guests: guestsSlice,
  },
});
