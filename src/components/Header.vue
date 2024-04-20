<template>
  <div class="wrapper">
    <div class="row">
      <button @click="handleClickMonthNavigations(-1)">
        <i class="icon-chevron-left"></i>
      </button>
      <div class="month-year">
        <span @click="showMonths = true">{{ geezMonths[selectedDateGeez.month - 1] }}</span>
        <span @click="showYears = true">{{ selectedDateGeez.year }}</span>
      </div>
      <button @click="handleClickMonthNavigations(1)">
        <i class="icon-chevron-right"></i>
      </button>
    </div>
    <div class="row">
      <div v-for="day in geezDays" :key="day">
        <p>{{ day.slice(0, 2) }}</p>
      </div>
    </div>
    <div v-for="board in formatBoard" class="row">
      <div v-for="day in board" class="day-block">
        <p>
          {{ day.day }}
        </p>
      </div>
    </div>
    <div class="dates"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ge, eg, isGregorianLeap } from 'ethiopic-calendar'
import type { GeezDate } from './types/Header.types'
import { geezDaysEnums, geezMonthsEnums } from '@/enums/geez.dates'

export default defineComponent({
  name: 'HeaderComp',
  data() {
    return {
      selectedDate: new Date(new Date().setHours(0, 0, 0, 0)),
      geezMonths: geezMonthsEnums,
      geezDays: geezDaysEnums,
      showMonths: false,
      showYears: false,
      curGeezMonthYear: {}
    }
  },
  methods: {
    handleClickMonthNavigations(direction: 1 | -1) {
      const curGeezMonth = this.selectedDateGeez.month
      if (direction === 1) {
        if (curMonth > 13) {
          //
        } else {
          //
        }
      } else {
        // BACKWARD; i.e. previous month
      }
    },
    isGeezLeapYear(year: number) {
      // TODO: There should be bug somewhere in there. cpt sparrow
      if (year % 4 === 0) {
        if (year % 100 === 0) {
          if (year % 400 === 0) {
            return true
          }
        } else {
          return true
        }
      } else {
        return false
      }
    }
  },
  created() {
    // this.curGeezMonthYear = {
    //   year: this.selectedDateGeez.year,
    //   month: this.selectedDateGeez.month
    // }
  },
  computed: {
    selectedDateGeez() {
      const year = this.selectedDate.getFullYear(),
        month = this.selectedDate.getMonth() + 1,
        date = this.selectedDate.getDate()
      return ge(year, month, date)
    },
    daysBoard(): GeezDate[] {
      const result: GeezDate[] | null = []
      const starterDayGreg: GeezDate = eg(
        this.curGeezMonthYear.year,
        this.curGeezMonthYear.month,
        1
      )
      const starterJsDate = new Date(
        Number(starterDayGreg.year),
        Number(starterDayGreg.month) - 1,
        Number(starterDayGreg.day)
      )
      const offSetFromSunday = starterJsDate.getDay()
      const monthLength =
        this.curGeezMonthYear.month === 13
          ? this.isGeezLeapYear(this.curGeezMonthYear.year)
            ? 6
            : 5
          : 30
      for (let i = 0; i < monthLength + offSetFromSunday; i++) {
        if (i < offSetFromSunday) {
          result.push({})
        } else {
          const date = i + 1 - offSetFromSunday
          result.push({
            year: this.curGeezMonthYear.year,
            month: this.curGeezMonthYear.month,
            day: date //
          })
        }
      }
      return result
    },
    formatBoard() {
      const board = this.daysBoard,
        result: GeezDate[][] = []
      for (let i = 0; i < board.length; i++) {
        if (i % 7 === 0) {
          result.push([])
        }
        result[result.length - 1].push(board[i])
      }
      return result
    }
  }
})
</script>
<style scoped>
.wrapper {
  margin: 1rem;
}
.row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
