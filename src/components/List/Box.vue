<template>
	<div class="box" :style="styles">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
const styles = {
	backgroundColor: 'var(--bg-secondary--aux)',
	color: 'var(--text-primary)'
	
}
</script>