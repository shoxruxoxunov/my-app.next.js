import { createSlice } from "@reduxjs/toolkit";
const initialState = () => {
  return (
   JSON.parse(localStorage.getItem('invoice')) ||{
    drawerOpen:false
   }
  );
};
const storeSlice = createSlice({
  name: "invoice",
  initialState: initialState(),
  reducers: {
    drawerToggle: (state) => {
      state.drawerOpen = !state.drawerOpen;
      console.log(state.drawerOpen);
      storeSlice.caseReducers.countTotal(state);
    },
    countTotal: (state) => {
      localStorage.setItem("invoice", JSON.stringify(state));
    },
  },
});

export default storeSlice.reducer;
export const { drawerToggle } = storeSlice.actions;
