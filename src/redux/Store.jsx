import tableSlice from "./Slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    table: tableSlice,
  },
});

export default store;
