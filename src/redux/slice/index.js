import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: '',
  lang: "",
  compareProducts: [],
  favoritesProducts: [],
  cartProducts: [],
  deliveryPrice: '',
  user: null
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
    setDeliveryPrice: (state,action) => {
      state.deliveryPrice = action.payload
    },
    changeFavorites: (state, action) => {
      const { payload } = action;
      const isFavorited = state.favoritesProducts.some((product) => product._id === payload._id);

      if (isFavorited) {
        state.favoritesProducts = state.favoritesProducts.filter((product) => product._id !== payload._id);
      } else {
        state.favoritesProducts = [...state.favoritesProducts, {...payload, favorited: true}];
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

export const { setLang, setCompare, changeCompare, setCart, setToken, setUser, changeFavorites, setFavorites,setDeliveryPrice } = baristicaSlice.actions;
export default baristicaSlice.reducer;
