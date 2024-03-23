<template>
  <div class="header-wrapper">
    <button>
      <SvgButton type="backward" />
    </button>
    <div class="month-year">
      <div class="month-list">{{ selectedDate.getMonth() }}</div>
      <div class="month-"></div>
    </div>
    <button>
      <SvgButton type="forward" />
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SvgButton from '../components/shared-assets/SvgButtons.vue'

export default defineComponent({
  name: 'HeaderComp',
  components: {
    SvgButton
  },
  data() {
    return {
      selectedDate: new Date(new Date().setHours(0, 0, 0, 0))
    }
  },
  created() {}
})
</script>
<style scoped>
.header-wrapper {
  flex-direction: column;
  flex: 1;
}
</style>
