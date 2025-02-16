import { store, updateStore } from '../../store'
import { getGregFromEthiopianDate, getNumberOfDaysInEthiopianMonth, gregToEthiopian } from '../../components/utils/date'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { nextTick } from 'vue'

vi.mock('../../components/utils/date', () => ({
  getGregFromEthiopianDate: vi.fn(),
  getNumberOfDaysInEthiopianMonth: vi.fn(),
  gregToEthiopian: vi.fn(() => ({ year: 2013, month: 1, day: 1 }))
}))
  

describe('store', () => {
  const geezYear = 2013
  const geezMonth = 1
  const geezDay = 1
  const gregorianDate = new Date('2020-09-11')

  beforeEach(() => {
    store.selectedMonth = geezMonth
    store.selectedYear = geezYear
    store.selectedDate = geezDay
    store.gregorianDate = gregorianDate
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize with the correct default values', () => {
    expect(store.selectedMonth).toBe(1)
    expect(store.selectedYear).toBe(2013)
    expect(store.selectedDate).toBe(1)
    expect(store.gregorianDate).toBe(gregorianDate)})

  it('should update the store correctly for Date action', () => {
    updateStore('Date', 15)
    expect(store.selectedDate).toBe(15)
    expect(store.selectedMonth).toBe(1)
    expect(store.selectedYear).toBe(2013)
  })

  it('should update the store correctly for Month action', async () => {
    updateStore('Date', 13)
    expect(getGregFromEthiopianDate).toHaveBeenCalledWith({
      year: 2013,
      month: 1,
      day: 13
    })
    updateStore('Month', 13)
    expect(getGregFromEthiopianDate).toHaveBeenCalled()
    expect(store.selectedMonth).toBe(13)
    getNumberOfDaysInEthiopianMonth.mockReturnValueOnce(5)
    await nextTick()
    expect(getNumberOfDaysInEthiopianMonth).toReturnWith(5)
    expect(store.selectedDate).toBe(1)
  })
})