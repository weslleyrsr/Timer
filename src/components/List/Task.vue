<template>
  <Box>
    <div class="columns">
      <div class="column is-7">{{ task.description || 'Undefined task' }}</div>
      <div class="column">
         <Timer :timeInSeconds="task.timeInSeconds"/>
      </div>
    </div>
  </Box>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Box from "./Box.vue";
import Timer from "../Shared/Timer.vue";
import { Task } from '../../interfaces/Task'

defineProps<{
  task: Task
}>()
</script>