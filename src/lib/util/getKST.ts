export const getKST = (dateString: string) => {
  const date = new Date(dateString)

  const formatter = new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })

  const parts = formatter.formatToParts(date)

  const year = parts.find((part) => part.type === 'year')?.value
  const month = parts.find((part) => part.type === 'month')?.value
  const day = parts.find((part) => part.type === 'day')?.value
  // const hour = parts.find((part) => part.type === 'hour')?.value
  // const minute = parts.find((part) => part.type === 'minute')?.value

  return `${year}년 ${month}월 ${day}일`
}
