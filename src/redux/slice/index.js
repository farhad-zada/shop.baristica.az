import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: '',
  lang: "",
  compareProducts: [],
  favoritesProducts: [],
  cartProducts: [],
  user: {}
};

const baristicaSlice = createSlice({
  name: "baristica",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setCart: (state, action) => {
      state.cartProducts = action.payload
    },

    setFavorites: (state, action) => {
      state.favoritesProducts = action.payload
    },
    changeFavorites: (state, action) => {
      const { payload } = action
      if (state.compareProducts.length > 0) {
        let checkCompareProduct = state.compareProducts.find((product) => product._id === payload._id)
        // delete product from compare array
        if (checkCompareProduct) {
          state.compareProducts = state.compareProducts.filter((product) => product._id !== payload._id)
        } else {
          state.compareProducts = [...state.compareProducts, payload]
        }
      } else {
        state.compareProducts = [payload]
      }

    },

    setCompare: (state, action) => {
      state.compareProducts = action.payload
    },
    changeCompare: (state, action) => {
      const { payload } = action
      if (state.compareProducts.length > 0) {
        let checkCompareProduct = state.compareProducts.find((product) => product._id === payload._id)
        // delete product from compare array
        if (checkCompareProduct) {
          state.compareProducts = state.compareProducts.filter((product) => product._id !== payload._id)
        } else {
          state.compareProducts = [...state.compareProducts, payload]
        }
      } else {
        state.compareProducts = [payload]
      }

    }
  },
});

export const { setLang, setCompare, changeCompare, setCart, setToken, setUser } = baristicaSlice.actions;
export default baristicaSlice.reducer;
