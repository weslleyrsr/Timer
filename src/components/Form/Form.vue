<template>
	<div class="box form">
		<div class="columns">
			<div class="column is-8" role="form" aria-label="Form to create a new task">
				<input
					type="text"
					class="input"
					placeholder="Which task tou wan to start?"
					v-model="task.description"
				/>
			</div>
			<div class="column">
				<TimeControl @finishTask="finishTask" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import TimeControl from "./TimeControl.vue"
import { defineEmits, reactive } from "vue"
const emit = defineEmits(['finishTask'])

const task = reactive({
	description: ''
})

let finishTask = (timeInSeconds: number, timerStarted: Date): void => {
	emit('finishTask', task.description, timeInSeconds, timerStarted)
}
</script>

<style>
.form {
	color: var(--texto-primario);
	background-color: var(--bg-primario);
	border-radius: 0;
}
</style>