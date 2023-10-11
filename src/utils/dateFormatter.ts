const transactionDateFormat = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('vi')
  const dateFormatted = formatter.format(date)

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  if (dateFormatted === formatter.format(new Date())) {
    return 'Today'
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday'
  }

  return dateFormatted
}

export { transactionDateFormat }
