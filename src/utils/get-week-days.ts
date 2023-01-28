export function getWeekDays(day: number) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  const newDay = formatter.format(new Date(Date.UTC(2021, 5, day)))

  return newDay.substring(0, 1).toLocaleUpperCase().concat(newDay.substring(1))
}
