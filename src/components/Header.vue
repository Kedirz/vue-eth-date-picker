<template>
  <MonthSelector />
  <YearsSelector />
  <DaysSelector />
  <button
    class="ec-enter"
    @click.prevent="
      emit('change:selectedDate', {
        year: store.selectedYear,
        month: store.selectedMonth,
        date: store.selectedDate
      })
    "
  >
    Enter
  </button>
</template>
<script lang="ts" setup>
import { store } from '@/store'
import DaysSelector from './DaysSelector.vue'
import MonthSelector from './MonthSelector.vue'
import YearsSelector from './YearsSelector.vue'

const emit = defineEmits(['change:selectedDate'])
</script>
