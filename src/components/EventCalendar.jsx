import { useMemo } from 'react'

const WEEKDAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

const monthFormatter = new Intl.DateTimeFormat('es', { month: 'long', year: 'numeric' })

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

export default function EventCalendar() {
  const today = useMemo(() => new Date(), [])
  const cells = useMemo(() => buildMonthGrid(today), [today])

  return (
    <section aria-label="Agenda de eventos" className="text-center">
      <h2 className="text-sm font-medium">Agenda de eventos</h2>
      <p className="mb-2 text-xs capitalize text-ink-soft">{monthFormatter.format(today)}</p>

      <div className="grid grid-cols-7 gap-y-1 text-[11px]">
        {WEEKDAYS.map((weekday, index) => (
          <span key={`${weekday}-${index}`} className="font-medium text-ink-soft">
            {weekday}
          </span>
        ))}

        {cells.map(({ date, inMonth }) => {
          const isToday = date.toDateString() === today.toDateString()
          const tone = inMonth ? 'text-ink' : 'text-ink-soft/50'
          const highlight = isToday ? 'bg-brand font-semibold text-page' : ''

          return (
            <span
              key={date.toISOString()}
              className={`mx-auto grid size-6 place-items-center rounded-full ${tone} ${highlight}`}
            >
              {String(date.getDate()).padStart(2, '0')}
            </span>
          )
        })}
      </div>
    </section>
  )
}
