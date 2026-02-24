import { configureStore } from '@reduxjs/toolkit'
import { ProductReducer, ProductSlice } from './Slice/ProductSlice'

export default configureStore({
  reducer: {
   AllProducts: ProductSlice.reducer 
  },
})