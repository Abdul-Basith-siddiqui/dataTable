import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      accountNo: "001234",
      division: "23",
      country: "US",
      legacyNo: "12",
      legacyDivision: "433",
    },
    {
      id: 2,
      accountNo: "002345",
      division: "24",
      country: "CA",
      legacyNo: "13",
      legacyDivision: "456",
    },
  ],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { saveData } = tableSlice.actions;

export default tableSlice.reducer;
