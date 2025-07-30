import { configureStore } from '@reduxjs/toolkit'
import cardSlices from './slices/cardSlices'

export const store=configureStore({
  reducer: {
    cardDetails:cardSlices
  }
})