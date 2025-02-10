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
import DaysSelector from '@/components/DaysSelector.vue'
import MonthSelector from '@/components/MonthSelector.vue'
import YearsSelector from '@/components/YearsSelector.vue'

const props = defineProps<{
  modelValue: {
    year: number
    month: number
    date: number
  }
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: { year: number; month: number; date: number }): void
}>()
const onSubmit = () => {
  emit('update:modelValue', {
    year: store.selectedYear,
    month: store.selectedMonth,
    date: store.selectedDate
  })
}
</script>
