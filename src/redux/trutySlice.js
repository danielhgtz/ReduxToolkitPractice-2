import { createSlice } from "@reduxjs/toolkit";

const trutySlice = createSlice({
  name: "truty",
  initialState: { value: false },
  reducers: {
    setTruty: (state) => {
      state.value = true;
    },
    setFalsy: (state) => {
      state.value = false;
    },
  },
});

export const { setTruty, setFalsy } = trutySlice.actions;

export default trutySlice.reducer;
