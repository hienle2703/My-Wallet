import { createReducer } from '@reduxjs/toolkit'

export const userReducer = createReducer({}, (builder) => {
  builder
    .addCase('loginRequest', (state, action) => {
      state.loading = true
    })
    .addCase('signUpRequest', (state, action) => {
      state.loading = true
    })
    .addCase('verifyTokenRequest', (state, action) => {
      state.loading = true
    })

  builder
    .addCase('loginSuccess', (state, action) => {
      state.loading = false
      state.user = action.payload
      state.isAuthenticated = true
    })
    .addCase('signUpSuccess', (state, action) => {
      state.loading = false
      state.user = action.payload
      state.isAuthenticated = true
    })
    .addCase('verifyTokenSuccess', (state, action) => {
      console.log(action, '=============action')
      state.loading = false
      state.user = action.payload.user
      state.isAuthenticated = true
    })

  builder
    .addCase('loginFail', (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    .addCase('signUpFail', (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    .addCase('verifyTokenFail', (state, action) => {
      state.loading = false
      state.isAuthenticated = false
    })

  builder.addCase('clearError', (state) => {
    state.error = null
  })
  builder.addCase('clearMessage', (state) => {
    state.message = null
  })
})
