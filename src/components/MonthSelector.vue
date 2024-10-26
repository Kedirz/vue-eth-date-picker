<template>
  <select v-model="selectedMonth">
    <option v-for="n in 13" :key="n" :value="n">
      {{ geezMonths[n - 1] }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { geezMonths } from '@/enums/geez.dates'
import { store, updateStore } from '@/store'
import { computed } from 'vue'

const selectedMonth = computed({
  get() {
    return store.selectedMonth
  },
  set(newMonth: number) {
    updateStore('Month', newMonth)
  }
})
</script>
