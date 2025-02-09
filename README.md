# Ethiopian date picker for vue 3 apps
```
npm install vue-eth-date-picker
```

### Example usage
```
<script setup>
import VueEthDatePicker from 'vue-eth-date-picker'
import { ref } from 'vue'
const dateModel = ref(null)
</script>
<template>
  <VueEthDatePicker
    v-model="dateModel"
  />
</template>
```
