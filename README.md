### 2. **Using JavaScript (For Custom Websites)**
<pre>
<code id="code-block">npm install vue-eth-date-picker</code>
</pre>

# Example usage
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
