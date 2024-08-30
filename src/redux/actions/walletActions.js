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
