import { createReducer } from '@reduxjs/toolkit'

export const walletReducer = createReducer(
  {
    wallets: []
  },
  (builder) => {
    builder.addCase('getWalletsRequest', (state, action) => {
      state.loading = true
    })

    builder.addCase('getWalletsSuccess', (state, action) => {
      state.loading = false
      state.wallets = action.payload
    })

    builder.addCase('getWalletsFail', (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase('clearError', (state) => {
      state.error = null
    })
    builder.addCase('clearMessage', (state) => {
      state.message = null
    })
  }
)
