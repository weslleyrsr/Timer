<template>
	<div class="box form">
		<div class="columns">
			<div class="column is-8 is-flex" role="form" aria-label="Form to create a new task">
				<div class="select">
					<select v-model="task.project">
						<option value="0">Select a project</option>
						<option v-for="project in projects" :key="project.id" :value="project.id"> {{project.name}} </option>
					</select>
				</div>
				<input
					type="text"
					class="input --transparent"
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
import { defineEmits, reactive, computed } from "vue"
import { useStore } from 'vuex'
import Project from "@/interfaces/Project";

const store = useStore()

const projects = computed(() => {
	return store.state.projects
})

const emit = defineEmits(['finishTask'])

const task = reactive({
	description: '',
	project: 0
})

const findProject = async (projectId: number): Promise<Project> => {
	return await store.dispatch('findProject', projectId)
}

let finishTask = async (timeInSeconds: number, timerStarted: Date): Promise<void> => {
	let project = await findProject(task.project)
	emit('finishTask', task.description, project, timeInSeconds, timerStarted)
}
</script>

<style>
.form {
	color: var(--text-primary);
	background-color: var(--bg-primary);
	border-radius: 0;
}
</style>