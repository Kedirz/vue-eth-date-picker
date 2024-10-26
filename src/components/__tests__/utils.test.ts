import { describe, expect, test } from 'vitest'
import { getNumberOfDaysInEthiopianMonth } from '../utils/date.js'

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
})
