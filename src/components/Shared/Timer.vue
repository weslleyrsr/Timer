<template>
  <section>
    <strong class="display">
      {{ time }}
    </strong>
  </section>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps<{
  timeInSeconds: number
}>()

let time = computed((): string => {
  return new Date(props.timeInSeconds * 1000).toISOString().substr(11,8)
})

</script>

<style scoped>
.display {
  color: var(--texto-primario);
}
</style>