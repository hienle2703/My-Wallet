import api from '@/services/api'
import { server } from '../store'

export const getAllWallets = async (dispatch) => {
  try {
    dispatch({
      type: 'getWalletsRequest'
    })

    const { data } = await api.get(`${server}/wallet/all`)

    dispatch({
      type: 'getWalletsSuccess',
      payload: data.wallets
    })
  } catch (error) {
    dispatch({
      type: 'getWalletsFail',
      payload: error.response.data.message
    })
  }
}

export const createWallet = async (dispatch, formData) => {
  try {
    dispatch({
      type: 'createWalletRequest'
    })

    const { data } = await api.post(`${server}/wallet/create-wallet`, formData)

    dispatch({
      type: 'createWalletSuccess',
      payload: {
        message: data.message,
        wallet: data.wallet
      }
    })
  } catch (error) {
    dispatch({
      type: 'createWalletFail',
      payload: error.response.data.message
    })
  }
}
