import { useMemo, useState } from 'react'

const WEEKDAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

const monthFormatter = new Intl.DateTimeFormat('es', { month: 'long', year: 'numeric' })
const dayFormatter = new Intl.DateTimeFormat('es', { dateStyle: 'full' })

const buildMonthGrid = (reference) => {
  const year = reference.getFullYear()
  const month = reference.getMonth()
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const totalCells = Math.ceil((firstWeekday + daysInMonth) / 7) * 7

  return Array.from({ length: totalCells }, (_, index) => {
    const date = new Date(year, month, index - firstWeekday + 1)
    return { date, inMonth: date.getMonth() === month }
  })
}

const formatDay = (date) => String(date.getDate()).padStart(2, '0')

export default function EventCalendar() {
  const today = useMemo(() => new Date(), [])
  const cells = useMemo(() => buildMonthGrid(today), [today])
  const [selectedDay, setSelectedDay] = useState(null)

  const toggleDay = (day) => setSelectedDay((current) => (current === day ? null : day))

  return (
    <section aria-label="Agenda de eventos" className="text-center">
      <h2 className="text-sm font-medium">Agenda de eventos</h2>
      <p className="mb-2 text-xs capitalize text-ink-soft">{monthFormatter.format(today)}</p>

      <div className="grid grid-cols-7 gap-1 text-[11px]">
        {WEEKDAYS.map((weekday, index) => (
          <span key={`${weekday}-${index}`} className="font-medium text-ink-soft">
            {weekday}
          </span>
        ))}

        {cells.map(({ date, inMonth }) => {
          const key = date.toISOString()

          if (!inMonth) {
            return (
              <span key={key} className="grid aspect-square place-items-center text-ink-soft/50">
                {formatDay(date)}
              </span>
            )
          }

          const day = date.getDate()
          const isSelected = selectedDay === day
          const isToday = date.toDateString() === today.toDateString()
          const state = isSelected
            ? 'bg-brand font-semibold text-page'
            : `text-ink hover:bg-brand/20 ${isToday ? 'ring-1 ring-brand' : ''}`

          return (
            <button
              key={key}
              type="button"
              onClick={() => toggleDay(day)}
              aria-pressed={isSelected}
              aria-label={dayFormatter.format(date)}
              className={`grid aspect-square place-items-center rounded-md transition ${state}`}
            >
              {formatDay(date)}
            </button>
          )
        })}
      </div>
    </section>
  )
}
