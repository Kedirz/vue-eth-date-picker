<template>
  <select v-model="selectedYear">
    <option v-for="n in 100" :key="n" :value="selectedYear + (n - 100)">
      {{ selectedYear + (n - 100) }}
    </option>
    <option v-for="n in 100" :key="n" :value="selectedYear + n">{{ selectedYear + n }}</option>
  </select>
</template>
<script lang="ts" setup>
import { store, updateStore } from '@/store'
import { computed } from 'vue'

const selectedYear = computed({
  get() {
    return store.selectedYear
  },
  set(newValue) {
    updateStore('Year', Number(newValue))
  }
})
</script>
