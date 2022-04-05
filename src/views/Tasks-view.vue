<template>
	<Form @finishTask="saveTask" />
	<template v-if="emptyList">
		<div class="list">
			<Box>You're not very productive today :(</Box>
		</div>
	</template>
	<template v-else>
		<div class="columns has-text-weight-bold list-header" style="margin-bottom: 0">
			<div class="column is-3">Project</div>
			<div class="column is-3">Task</div>
			<div class="column is-3">Time</div>
			<div class="column is-3">Started</div>
		</div>
		<div class="list">
			<Task v-for="(task, index) in tasks" :key="index" :task="task" />
		</div>
	</template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from 'vuex'
import Box from "../components/List/Box.vue";
import Task from "../components/List/Task.vue";
import Form from "../components/Form/Form.vue";
import { Task as ITask } from '../interfaces/Task';
import Project from "@/interfaces/Project";

export default defineComponent({
	name: "TimerView",
	data() {
		return {}
	},
	methods: {
		saveTask(description: string, project: Project | null, timeInSeconds: number, timerStarted: Date) {
			this.store.commit('addTask', {
				description,
				project,
				timeInSeconds,
				start: timerStarted
			})
		}
	},
	computed: {
		emptyList(): boolean {
			return this.tasks.length === 0
		},
		tasks(): ITask[] {
			return this.store.state.tasks
		}
	},
	components: {
		Box,
		Task,
		Form
	},
	setup() {
		const store = useStore()

		return {
			store
		}
	}
});
</script>

<style>
.list {
	padding: 1.25rem;
	max-height: calc(100vh - 140px);
	overflow: auto;
}
.list-header {
	padding: 0 2rem;
	color: var(--text-primary);
}

@media only screen and (max-width: 768px) {
	html {
		overflow: auto;
	}
	.list-header {
		padding: 0 15px;
		color: var(--text-primary);
		display: none;
	}

	.list {
		padding: 1.25rem;
		max-height: unset;
		overflow: auto;
	}
}
</style>