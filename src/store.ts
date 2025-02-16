import { reactive, watch } from 'vue'
import { getGregFromEthiopianDate, getNumberOfDaysInEthiopianMonth, gregToEthiopian } from './components/utils/date'

const { year, month, day } = gregToEthiopian()

export const store = reactive<{
  selectedMonth: number
  selectedYear: number
  selectedDate: number
  gregorianDate: Date
}>({
  selectedMonth: month, // 1 - 13
  selectedDate: day,
  selectedYear: year,
  gregorianDate: getGregFromEthiopianDate({
    year: year,
    month: month,
    day: day
  })
})

type Actions = 'Year' | 'Date' | 'Month'
export const updateStore = (action: Actions, payload: number) => {
  switch (action) {
    case 'Date':
      store.selectedDate = payload
      break
    case 'Month':
      store.selectedMonth = payload
      break
    case 'Year':
      store.selectedYear = payload
      break
  }
  const gregDate = getGregFromEthiopianDate({
    year: store.selectedYear,
    month: store.selectedMonth,
    day: store.selectedDate
  })
  store.gregorianDate = gregDate
}

watch(store, () => {
  if (store.selectedMonth === 13) {
    const numOfDaysForThisPagume = getNumberOfDaysInEthiopianMonth({
      year: store.selectedYear,
      month: 13
    })
    if (numOfDaysForThisPagume < store.selectedDate) {
      updateStore('Date', 1)
    }
  }
})
