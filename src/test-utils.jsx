import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import guestsReducer from "./slices/guestsSlice";
import locationReducer from "./slices/locationSlice";
import staysReducer from "./slices/staysSlice";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        guests: guestsReducer,
        location: locationReducer,
        stays: staysReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
