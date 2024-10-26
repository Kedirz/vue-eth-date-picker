<template>
  <MonthSelector />
  <YearsSelector />
  <DaysSelector />
</template>
<script lang="ts" setup>
import DaysSelector from './DaysSelector.vue'
import MonthSelector from './MonthSelector.vue'
import YearsSelector from './YearsSelector.vue'
const props = defineProps({
  /**
   * sets
   */
  defaultCurrentDate: {
    type: Boolean,
    default: true
  },
  selectedDate: {}
})
</script>
