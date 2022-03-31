<template>
	<Box>
		<div class="columns wrapper">
			<div class="column is-6">{{ project.id }}</div>
			<div class="column is-6">{{ project.name }}</div>
		</div>
	</Box>
</template>

<script setup lang="ts">
import Project from '@/interfaces/Project';
import { defineProps } from 'vue'
import Box from "./Box.vue";

defineProps<{
	project: Project
}>()
</script>

<style>
.wrapper {
	color: var(--text-primary);
}
</style>