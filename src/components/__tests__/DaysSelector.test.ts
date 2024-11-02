import DaysSelector from '@/components/DaysSelector.vue'
import { store, updateStore } from '@/store'
import { getNumberOfDaysInEthiopianMonth } from '@/components/utils/date'
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

vi.mock('@/store', () => ({
  store: {
    selectedDate: 14,
    selectedYear: 2024,
    selectedMonth: 1
  },
  updateStore: vi.fn()
}))

vi.mock('./utils/date', () => ({
  getNumberOfDaysInEthiopianMonth: vi.fn(() => 30)
}))

describe('DaysSelector', () => {
  it('renders the correct number of days in the month', async () => {
    const wrapper = mount(DaysSelector)

    const select = wrapper.get('select')

    const options = select.findAll('option')
    expect(options.length).toBe(30)
    expect(select.element.value).toBe('14')
  })
})
