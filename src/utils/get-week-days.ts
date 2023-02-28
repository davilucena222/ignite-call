interface GetWeekDaysShortParams {
  short?: boolean
}

export function getWeekDays(day: number) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  const newDay = formatter.format(new Date(Date.UTC(2021, 5, day)))

  return newDay.substring(0, 1).toLocaleUpperCase().concat(newDay.substring(1))
}

export function getWeekDaysShort({ short = false }: GetWeekDaysShortParams) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
    .map((weekDay) => {
      if (short) {
        return weekDay.substring(0, 3).toUpperCase()
      }

      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}
