<!-- <template><p> &#128640;&#128679; {{ store.state.workInProgressMessage }} </p></template> -->
<template>
	<Form></Form>

	<template v-if="emptyList">
		<div class="list">
			<Box>You don't have any projects yet :(</Box>
		</div>
	</template>
	<template v-else>
		<div class="columns has-text-weight-bold list-header" style="margin-bottom: 0">
			<div class="column is-6">Id</div>
			<div class="column is-6">Name</div>
		</div>
		<div class="list">
			<Project v-for="(project, index) in projects" :key="index" :project="project" />
		</div>
	</template>
</template>

<script setup lang="ts">
	import Form from '@/components/Form/Form-projects.vue'
	import Project from '@/components/List/Project.vue'
	import Box from "../components/List/Box.vue";
	import { useStore } from 'vuex'
	import { computed } from '@vue/reactivity';

	const store = useStore()

	const emptyList = computed(() => {
		return !store.getters['haveProjects']
	})

	const projects = computed(() => {
		return store.state.projects
	})
</script>

<style scoped>

p {
	padding: 16px
}

</style>