<template>
  <div class="wrapper">
    <div class="header-wrapper">
      <button>
        <i class="icon-chevron-left"></i>
      </button>
      <div class="month-year">
        <span @click="showMonths = true">{{ geezMonths[selectedDateGeez.month - 1] }}</span>
        <span @click="showYears = true">{{ selectedDateGeez.year }}</span>
      </div>
      <button>
        <i class="icon-chevron-right"></i>
      </button>
    </div>
  </div>
  <div class="days">
    <div v-for="day in geezDays">
      <p>{{ day.slice(0, 2) }}</p>
    </div>
  </div>
  <div class="dates"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ge } from 'ethiopic-calendar'
import { geezDaysEnums, geezMonthsEnums } from '@/enums/geez.dates'

export default defineComponent({
  name: 'HeaderComp',
  data() {
    return {
      selectedDate: new Date(new Date().setHours(0, 0, 0, 0)),
      geezMonths: geezMonthsEnums,
      geezDays: geezDaysEnums,
      showMonths: false,
      showYears: false
    }
  },
  methods: {
    handleClickMonthNavigations(direction: 1 | -1) {
      const curMonth = selectedDateGeez.month
      if (direction === 1) {
        // FORWARD: i.e. next month
        if (curMonth > 13) {
          //
        } else {
          //
        }
      } else {
        // BACKWARD; i.e. previous month
      }
    }
  },
  computed: {
    selectedDateGeez() {
      const year = this.selectedDate.getFullYear(),
        month = this.selectedDate.getMonth() + 1,
        date = this.selectedDate.getDate()
      return ge(year, month, date)
    }
  }
})
</script>
<style scoped>
.header-wrapper {
  flex-direction: row;
  display: flex;
  gap: 8px;
}
.days {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
