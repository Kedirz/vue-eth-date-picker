<template>
  <svg viewBox="0 0 50 50" fill="black" aria-hidden="true" height="25px" width="25px">
    <path :d="pathContent"></path>
  </svg>
</template>

<script setup lang="ts">
import forwardSvg from '../../enums/forward-svg'
import backwardSvg from '../../enums/backward-svg'

const props = defineProps({
  type: {
    type: String as () => Direction,
    required: true
  }
})

enum Direction {
  FORWARD = 'forward',
  BACKWARD = 'backward'
}

const pathContent = props.type === Direction.FORWARD ? forwardSvg : backwardSvg
</script>
