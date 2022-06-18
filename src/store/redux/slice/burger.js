import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const burger = createSlice({
  name: "burger",
  initialState,
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },
    
    close(state) {
      state.toggle = false;
    }
  },
});

export const { toggle, close } = burger.actions;
export default burger.reducer;
