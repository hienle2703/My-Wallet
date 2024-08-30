import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/userReducer'
import { transactionReducer } from './reducers/transactionReducer'
import { walletReducer } from './reducers/walletReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    transaction: transactionReducer,
    wallet: walletReducer
  }
})

export const server = 'https://mywallet-be.onrender.com/api/v1'
