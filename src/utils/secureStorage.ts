import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'

export const setItemSecureStorage = (key: string, value: string) => {
  RNSecureStorage.setItem(key, value, {
    accessible: ACCESSIBLE.WHEN_UNLOCKED
  })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(
        err,
        'ERROR SET ITEM SECURE STORAGE - secureStorage.ts line7 🐛'
      )
    })
}

export const getItemSecureStorage = async (key: string) => {
  let response: string | null = null
  await RNSecureStorage.getItem(key)
    .then((res) => {
      response = res
    })
    .catch((err) => {
      console.log(
        err,
        'ERROR GET ITEM SECURE STORAGE - secureStorage.ts line22 🐛'
      )
    })

  return response
}
