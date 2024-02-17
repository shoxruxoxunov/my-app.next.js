
import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./storeSlice";
export const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
});
