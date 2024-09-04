import { server } from '../store'
import { setItemSecureStorage } from '@/utils/secureStorage'
import { ACCESS_TOKEN } from '@/constants/keyStorage'
import api from '@/services/api'

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: 'loginRequest'
    })

    const { data } = await api.post(`${server}/user/login`, { email, password })

    setItemSecureStorage(ACCESS_TOKEN, data.token)

    dispatch({
      type: 'loginSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'loginFail',
      payload: error.response.data.message
    })
  }
}

export const signUp = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: 'signUpRequest'
    })

    const { data } = await api.post(`${server}/user/new`, {
      name,
      email,
      password
    })

    dispatch({
      type: 'signUpSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'signUpFail',
      payload: error.response.data.message
    })
  }
}

export const verifyToken = async (dispatch) => {
  try {
    dispatch({
      type: 'verifyTokenRequest'
    })

    const { data } = await api.post(`${server}/user/verify`)

    dispatch({
      type: 'verifyTokenSuccess',
      payload: data
    })
  } catch (err) {
    dispatch({
      type: 'verifyTokenFail',
      payload: err.response.data.message
    })
  }
}
