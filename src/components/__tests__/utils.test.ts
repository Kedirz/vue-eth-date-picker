import { describe, expect, test } from 'vitest'
import { getNumberOfDaysInEthiopianMonth, getGregFromEthiopianDate } from '../utils/date.js'

describe('utils', () => {
  test('getNumberOfDaysInEthiopianMonth', () => {
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2018 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2017 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2016 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2015 })).toBe(6)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2014 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2013 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2012 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2011 })).toBe(6)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2010 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2009 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2008 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2007 })).toBe(6)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2006 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2005 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2004 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2003 })).toBe(6)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2002 })).toBe(5)
    expect(getNumberOfDaysInEthiopianMonth({ month: 13, year: 2001 })).toBe(5)
  })

  test('getGregFromEthiopianDate', () => {
    const ecDate = { year: 2012, month: 13, day: 1 }
    const actualGregDate = getGregFromEthiopianDate(ecDate)
    const expectedGregDate = new Date("2020-09-06:00:00:00")
    expect(actualGregDate.toString()).toEqual(expectedGregDate.toString())

    const ecDate2 = { year: 1901, month: 12, day: 9 }
    const actualGregDate2 = getGregFromEthiopianDate(ecDate2)
    const expectedGregDate2 = new Date("1909-08-15:00:00:00")
    expect(actualGregDate2.toString()).toEqual(expectedGregDate2.toString())

    const ecDate3 = { year: 2100, month: 3, day: 15 }
    const actualGregDate3 = getGregFromEthiopianDate(ecDate3)
    const expectedGregDate3 = new Date("2107-11-26:00:00:00")
    expect(actualGregDate3.toString()).toEqual(expectedGregDate3.toString())

    const ecDate4 = { year: 2017, month: 6, day: 30 }
    const actualGregDate4 = getGregFromEthiopianDate(ecDate4)
    const expectedGregDate4 = new Date("2025-03-09:00:00:00")
    expect(actualGregDate4.toString()).toEqual(expectedGregDate4.toString())

    const ecDate5 = { year: 2018, month: 2, day: 23 }
    const actualGregDate5 = getGregFromEthiopianDate(ecDate4)
    const expectedGregDate5 = new Date("2025-11-02:00:00:00")
    expect(actualGregDate4.toString()).toEqual(expectedGregDate4.toString())
  })
})
