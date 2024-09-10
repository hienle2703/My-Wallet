import { createReducer } from '@reduxjs/toolkit'

export const walletReducer = createReducer(
  {
    wallets: []
  },
  (builder) => {
    builder.addCase('getWalletsRequest', (state, action) => {
      state.loading = true
    })
    builder.addCase('createWalletRequest', (state, action) => {
      state.loading = true
    })

    builder.addCase('getWalletsSuccess', (state, action) => {
      state.loading = false
      state.wallets = action.payload
    })
    builder.addCase('createWalletSuccess', (state, action) => {
      state.loading = false
      state.message = action.payload.message
      state.wallets = [...state.wallets, action.payload.wallet]
    })

    builder.addCase('getWalletsFail', (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase('createWalletFail', (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase('clearErrorWallet', (state) => {
      state.error = null
    })
    builder.addCase('clearMessageWallet', (state) => {
      state.message = null
    })
  }
)
