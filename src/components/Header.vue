<template>
  <div class="header-wrapper">
    <button>
      <i class="icon-chevron-left"></i>
    </button>
    <div class="month-year">
      <div class="month-list">{{ selectedDate.getMonth() }}</div>
      <div class="month-"></div>
    </div>
    <button>
      <i class="icon-chevron-right"></i>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ge } from 'ethiopic-calendar'

export default defineComponent({
  name: 'HeaderComp',
  data() {
    return {
      selectedDate: new Date(new Date().setHours(0, 0, 0, 0))
    }
  },
  created() {
    this.selectedDate = new Date()
  },
  computed: {
    selectedDateGeez() {
      console.log(ge(this.selectedDate))
      return ge(this.selectedDate)
    }
  }
})
</script>
<style scoped>
.header-wrapper {
  flex-direction: row;
  display: flex;
}
</style>
