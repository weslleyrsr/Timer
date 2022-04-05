<template>
	<Form :id="id"></Form>
</template>

<script setup lang="ts">
	import Form from '@/components/Form/Form-projects.vue'
    import { defineProps } from 'vue'

    defineProps<{
        id?: string
    }>()
</script>

<style scoped>
</style>