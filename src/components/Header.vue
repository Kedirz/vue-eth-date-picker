<template>
  <form @submit.prevent="onSubmit">
    <MonthSelector />
    <YearsSelector />
    <DaysSelector />
    <button class="ec-enter" type="submit">Enter</button>
  </form>
</template>
<script lang="ts" setup>
import { store } from '@/store'
import DaysSelector from './DaysSelector.vue'
import MonthSelector from './MonthSelector.vue'
import YearsSelector from './YearsSelector.vue'

const emit = defineEmits(['change:selectedDate'])
const onSubmit = () => {
  emit('change:selectedDate', {
    year: store.selectedYear,
    month: store.selectedMonth,
    date: store.selectedDate
  })
}
</script>
