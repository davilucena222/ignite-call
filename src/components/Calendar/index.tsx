import { getWeekDaysShort } from '@/src/utils/get-week-days'
import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
} from './styles'

export function Calendar() {
  const shortWeekDays = getWeekDaysShort({ short: true })

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Fevereiro <span>2023</span>
        </CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>

          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
      </CalendarBody>
    </CalendarContainer>
  )
}
