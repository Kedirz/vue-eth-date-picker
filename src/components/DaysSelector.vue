<template>
  <select v-model="selectedDate">
    <option v-for="n in 30" :value="n" :key="n">
      {{ n }}
    </option>
  </select>
</template>
<script lang="ts" setup>
import { store, updateStore } from '@/store'
import { computed } from 'vue'

const selectedDate = computed({
  set(newValue: number) {
    updateStore('Date', newValue)
  },
  get() {
    return store.selectedDate
  }
})
</script>
