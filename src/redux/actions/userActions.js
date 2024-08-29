import axios from 'axios'
import { server } from '../store'
import { setItemSecureStorage } from '@/utils/secureStorage'
import { ACCESS_TOKEN } from '@/constants/keyStorage'

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: 'loginRequest'
    })

    const { data } = await axios.post(
      `${server}/user/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
    )

    console.log(data, data.token, '===========data')

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

    const { data } = await axios.post(
      `${server}/user/new`,
      { name, email, password },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
    )

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
