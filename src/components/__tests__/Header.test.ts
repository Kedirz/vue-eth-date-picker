import { test, describe, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header', () => {
  test('correctly creates board', () => {
    const HeaderComp = shallowMount(Header)
    HeaderComp.vm.curGeezMonthYear = { year: 2014, month: 1 }
    const expectedStarterDayIndex = 6 // saturday
    expect(HeaderComp.vm.daysBoard?.[expectedStarterDayIndex]?.day).toStrictEqual(1)
  })

  test('correctly creates board', () => {
    const HeaderComp = shallowMount(Header)
    HeaderComp.vm.curGeezMonthYear = { year: 2011, month: 13 }
    const expectedStarterDayIndex = 5 // Friday sep 5 2019
    expect(HeaderComp.vm.daysBoard?.[expectedStarterDayIndex]?.day).toStrictEqual(1)
  })
})
