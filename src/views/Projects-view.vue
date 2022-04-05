<template>
	<div class="header">
		<h1>Projects</h1>
	
		<button class="button" @click="newProject">
			<span class="icon">
				<i class="fas fa-plus"></i>
			</span>
			<span>Add project</span>
		</button>
	</div>

	<template v-if="emptyList">
		<div class="list">
			<Box>You don't have any projects yet :(</Box>
		</div>
	</template>
	<template v-else>
		<div class="columns has-text-weight-bold list-header" style="margin-bottom: 0">
			<div class="column is-4">Id</div>
			<div class="column is-4">Name</div>
			<div class="column is-4">Actions</div>
		</div>
		<div class="list">
			<Project v-for="(project, index) in projects" :key="index" :project="project" />
		</div>
	</template>
</template>

<script setup lang="ts">
	import Project from '@/components/List/Project.vue'
	import Box from "../components/List/Box.vue";
	import { useStore } from 'vuex'
	import { computed } from '@vue/reactivity';
	import { useRouter } from 'vue-router'

	const router = useRouter()

	const store = useStore()

	const emptyList = computed(() => {
		return !store.getters['projects/haveProjects']
	})

	const projects = computed(() => {
		return store.state.projects.projects
	})

	const newProject = () => {
		router.push("/project/new")
	}
</script>

<style scoped>

.header {
	padding: 1rem;
}

.header h1 {
	color: var(--text-primary)
}

p {
	padding: 16px
}

</style>