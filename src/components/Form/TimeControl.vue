<template>
	<div class="is-flex is-align-items-center is-justify-content-space-between" style="gap: 16px;">
		<Timer :timeInSeconds="state.timeInSeconds" />
		<button class="button --transparent" @click="start" :disabled="state.timerRunning">
			<span class="icon">
				<i class="fas fa-play"></i>
			</span>
			<span>Start</span>
		</button>
		<button class="button --transparent" @click="stop" :disabled="!state.timerRunning">
			<span class="icon">
				<i class="fas fa-stop"></i>
			</span>
			<span>Stop</span>
		</button>
	</div>
</template>

<script setup lang="ts">
import Timer from "../Shared/Timer.vue";
import { defineEmits, reactive } from "vue";
const emit = defineEmits(['finishTask']);

const state = reactive({
	timeInSeconds: 0,
	timerRunning: false,
	timer: 0,
	timerStarted: new Date()
});

let start = (): void => {
	state.timerRunning = true;
	state.timerStarted = new Date();
	state.timer = setInterval(() => {
		state.timeInSeconds += 1
	}, 1000)
};

let stop = (): void => {
	state.timerRunning = false;
	clearInterval(state.timer);
	emit('finishTask', state.timeInSeconds, state.timerStarted);
	state.timeInSeconds = 0;
};
</script>