import { reactive } from 'vue'
import { gregToEthiopian } from './components/utils/data'

const { year, month, day } = gregToEthiopian()

export const store = reactive({
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
