<template>
  <select v-model="selectedDate">
    <option v-for="n in numOfDaysInMonth" :value="n" :key="n">
      {{ n }}
    </option>
  </select>
</template>
<script lang="ts" setup>
import { store, updateStore } from '@/store'
import { computed } from 'vue'
import { getNumberOfDaysInEthiopianMonth } from './utils/date'

const selectedDate = computed({
  set(newValue: number) {
    updateStore('Date', newValue)
  },
  get() {
    return store.selectedDate
  }
})

const numOfDaysInMonth = computed(() => {
  const numOfDays = getNumberOfDaysInEthiopianMonth({
    year: store.selectedYear,
    month: store.selectedMonth
  })
  return numOfDays
})
</script>
