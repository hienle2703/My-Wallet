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

const dateToShowFormat = (date) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const dayOfWeek = days[date.getDay()]
  const dayOfMonth = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  // Thêm hậu tố cho ngày
  const suffix =
    dayOfMonth % 10 === 1 && dayOfMonth !== 11
      ? 'st'
      : dayOfMonth % 10 === 2 && dayOfMonth !== 12
      ? 'nd'
      : dayOfMonth % 10 === 3 && dayOfMonth !== 13
      ? 'rd'
      : 'th'

  return `${dayOfWeek}, ${dayOfMonth}${suffix} ${month} ${year}`
}

export { transactionDateFormat, dateToShowFormat }
