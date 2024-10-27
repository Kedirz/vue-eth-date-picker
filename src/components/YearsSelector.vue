<template>
  <select v-model="selectedYear">
    <option v-for="n in 200" :key="n">
      {{ 1900 + n }}
    </option>
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
