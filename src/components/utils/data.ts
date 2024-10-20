import * as Ec from 'ethiopic-calendar'

/**
 * returns number of days for a given ethiopian month, year
 */
type EcDate = {
  year: number
  month: number
  day: number
}

export function getNumberOfDaysInEthiopianMonth(month: number, year: number, day: number = 1) {
  if (month < 13) return 30
  const ethiopicToGregorian: EcDate = Ec.eg(year, month, day)
  return isGregLeapYear(ethiopicToGregorian.year) ? 6 : 5
}

export function isGregLeapYear(year: number) {
  return Ec.isGregorianLeap(year)
}

export function gregToEthiopian(date: Date = new Date(), zeroHours: boolean = true) {
  if (zeroHours) {
    date = new Date(date.setHours(0, 0, 0, 0))
  }
  return Ec.ge(date.getFullYear(), date.getMonth() + 1, date.getDate())
}
