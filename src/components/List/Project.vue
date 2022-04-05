<template>
	<Box>
		<div class="columns wrapper">
			<div class="column is-4">{{ project.id }}</div>
			<div class="column is-4">{{ project.name }}</div>
			<div class="column is-4">
				<button class="button" @click="editProject">
                    <span class="icon">
                        <i class="fas fa-pencil-alt"></i>
                    </span>
                    <span>Edit project</span>
                </button>
			</div>
		</div>
	</Box>
</template>

<script setup lang="ts">
import Project from '@/interfaces/Project';
import { defineProps } from 'vue'
import Box from "./Box.vue";
import { useRouter } from 'vue-router'

const router = useRouter()

let props = defineProps<{
	project: Project
}>()

const editProject = () => {
	router.push(`/project/${props.project.id}`)
}
</script>

<style>
.wrapper {
	color: var(--text-primary);
}
</style>