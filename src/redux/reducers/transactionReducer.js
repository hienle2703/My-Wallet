import { createReducer } from '@reduxjs/toolkit'

export const transactionReducer = createReducer(
  {
    transactions: []
  },
  (builder) => {
    builder.addCase('getAllTransactionsRequest', (state, action) => {
      state.loading = true
    })

    builder.addCase('getAllTransactionsSuccess', (state, action) => {
      state.loading = false
      state.transactions = action.payload
    })

    builder.addCase('getAllTransactionsFail', (state, action) => {
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
