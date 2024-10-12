export const balanceFormatter = (number: number) => {
  return number.toLocaleString('vi-VN') + 'đ'
}

export const amountFormatter = (number: number) => {
  return number.toLocaleString('vi-VN')
}

export const returnNumericBalance = (value: string) => {
  return value.replace(/[^0-9]/g, '')
}