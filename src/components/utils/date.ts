import { ethiopicToGregorian as ethToGreg, gregorianToEthiopic, isGregorianLeap } from '../../utils/ethiopic-calendar.js'

/**
 * returns number of days for a given ethiopian month, year
 */
type EcDate = {
  year: number
  month: number
  day: number
}

/**
 *
 * @EcDate
 * @returns 30 | 5 | 6 as number of days in that month
 */
export function getNumberOfDaysInEthiopianMonth({ year, month }: { month: number; year: number }) {
  if (month < 13) return 30
  const ethiopicToGregorian: EcDate = ethToGreg(year, month, 5)
  const gregDate = new Date(
    ethiopicToGregorian.year,
    ethiopicToGregorian.month - 1,
    ethiopicToGregorian.day
  )
  const nextGregDate = addDaysToDate(gregDate, 1)
  const { year: gregYear, month: gregMonth, day: gregDateNxt } = formatter(nextGregDate)
  if (gregorianToEthiopic(gregYear, gregMonth, gregDateNxt).day === 6) {
    return 6
  } else {
    return 5
  }
}

export function isGregLeapYear(year: number) {
  return isGregorianLeap(year)
}

export function gregToEthiopian(date: Date = new Date(), zeroHours: boolean = true) {
  if (zeroHours) {
    date = new Date(date.setHours(0, 0, 0, 0))
  }
  return gregorianToEthiopic(date.getFullYear(), date.getMonth() + 1, date.getDate())
}

/**
 *
 * @param date js Date
 * @param numOfDays number of days to add or subtract
 * @param zeroHours default true. If false, doesn't set the date to zero hour (12AM)
 * @returns Js date
 */
function addDaysToDate(
  date: Date = new Date(),
  numOfDays: number,
  zeroHours: boolean = true
): Date {
  const result = new Date(date)
  if (zeroHours) result.setHours(0, 0, 0, 0)
  result.setDate(result.getDate() + numOfDays)
  return result
}

/**
 *
 * @param date js Date
 * @returns object in EcDate
 */
function formatter(date: Date = new Date()): EcDate {
  return {
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    day: date.getDate()
  }
}
