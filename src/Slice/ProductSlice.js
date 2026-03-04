import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  Cart: localStorage.getItem("Cart")
    ? JSON.parse(localStorage.getItem("Cart"))
    : [],
     Subtotal: 0,
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
    IncrementReducer: (state,action) => {
      state.Cart= state.Cart.map((item)=>{
      return item.id ==action.payload ? {...item,quan : item.quan+1 } : item



      })
    },
    DecrementReducer: (state,action) => {
      state.Cart= state.Cart.map((item)=>{
      return item.id ==action.payload ? {...item,quan : item.quan-1 } : item



      })
    },
    SubtotalReducer: (state) => {
    state.Subtotal= state.Cart.reduce((currentvalue,item)=>(currentvalue+(item.quantity * itemprice),0))



      },
    },
  });


export const { ProductReducer, CategoryReducer, CartReducer , removeReducer, IncrementReducer, DecrementReducer, SubtotalReducer } =
  ProductSlice.actions;

export default ProductSlice.reducer;
