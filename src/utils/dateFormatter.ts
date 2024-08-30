const transactionDateFormat = (date: Date) => {
  // Chuyển chuỗi ngày thành đối tượng Date
  const dateString = new Date(date)

  // Định dạng ngày
  const formatter = new Intl.DateTimeFormat('vi')
  const dateFormatted = formatter.format(dateString)

  // Lấy ngày hôm nay
  const today = new Date()
  const todayFormatted = formatter.format(today)

  // Lấy ngày hôm qua
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)
  const yesterdayFormatted = formatter.format(yesterday)

  // So sánh và trả về kết quả
  if (dateFormatted === todayFormatted) {
    return 'Today'
  } else if (dateFormatted === yesterdayFormatted) {
    return 'Yesterday'
  }

  return dateFormatted
}

export { transactionDateFormat }
