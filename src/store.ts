import { nextTick, reactive, watch } from 'vue'
import { getNumberOfDaysInEthiopianMonth, gregToEthiopian } from './components/utils/date'

const { year, month, day } = gregToEthiopian()

export const store = reactive<{
  selectedMonth: number
  selectedYear: number
  selectedDate: number
}>({
  selectedMonth: month, // 1 - 13
  selectedDate: day,
  selectedYear: year
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
}

watch(store, () => {
  if (store.selectedMonth === 13) {
    const numOfDaysForThisPagume = getNumberOfDaysInEthiopianMonth({
      year: store.selectedYear,
      month: 13
    })
    if (numOfDaysForThisPagume < store.selectedDate) {
      store.selectedDate = 1
    }
  }
})
