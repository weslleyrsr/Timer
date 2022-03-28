<template>
	<Box>
		<div class="columns wrapper">
			<div class="column is-5">{{ task.description || 'Undefined task' }}</div>
			<div class="column is-4">
				<Timer :timeInSeconds="task.timeInSeconds" />
			</div>
			<div class="column is-3">{{ task.start.toLocaleString() }}</div>
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

<style>
.wrapper {
	color: var(--texto-primario);
}
</style>