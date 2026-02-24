import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  Cart: localStorage.getItem("Cart")
    ? JSON.parse(localStorage.getItem("Cart"))
    : [],
};

export const ProductSlice = createSlice({
  name: "value",
  initialState,

  reducers: {
    ProductReducer: (state, action) => {
      state.value = action.payload;
    },

    CategoryReducer: (state, action) => {
      state.value = action.payload;
    },

    CartReducer: (state, action) => {
      state.Cart = [...state.Cart, action.payload];
      localStorage.setItem("Cart", JSON.stringify([...state.Cart]));
    },
    removeReducer: (state, action) => {
      state.Cart = [...state.Cart,state.Cart.filter((item)=> item.id !== action.payload)];
      localStorage.setItem("Cart", JSON.stringify([...state.Cart]));
    },
  },
});

export const { ProductReducer, CategoryReducer, CartReducer , removeReducer } =
  ProductSlice.actions;

export default ProductSlice.reducer;
