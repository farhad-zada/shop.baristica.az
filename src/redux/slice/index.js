import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "az",
};

const baristicaSlice = createSlice({
  name: "baristica",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = baristicaSlice.actions;
export default baristicaSlice.reducer;
