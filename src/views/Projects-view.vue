<template><p> &#128640;&#128679; {{ store.state.workInProgressMessage }} </p></template>

<script setup lang="ts">
	import { useStore } from 'vuex'

	const store = useStore()
</script>

<style scoped>

p {
	padding: 16px
}

</style>