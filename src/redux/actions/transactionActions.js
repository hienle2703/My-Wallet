import api from '@/services/api'
import { server } from '../store'

export const getAllTransactions = async (dispatch) => {
  try {
    dispatch({
      type: 'getAllTransactionsRequest'
    })

    const { data } = await api.get(`${server}/transaction/all`)

    dispatch({
      type: 'getAllTransactionsSuccess',
      payload: data.transactions
    })
  } catch (error) {
    dispatch({
      type: 'getAllTransactionsFail',
      payload: error.response.data.message
    })
  }
}
