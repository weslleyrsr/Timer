<template>
	<header>
		<h1>
			Tracker
			<!-- <img style="border-radius: 30px;" src="../../assets/logo.png" alt /> -->
		</h1>
		<aside class="menu">
			<ul class="menu-list">
				<li v-for="(route, index) in routes" :key="index">
					<router-link
						:to="route.path"
						class="navbar-item menu-item"
						:class="{ 'test': route.name === currentRoute.name }"
					>
						<span>{{ route.name }}</span>
						<i :class="route.meta.icon"></i>
					</router-link>
				</li>
			</ul>
		</aside>
		<button class="button --transparent" @click="switchTheme">{{ buttonText }}</button>
	</header>
</template>

<script setup lang="ts">
	import { reactive, computed, defineEmits } from 'vue';
	import { useRouter } from 'vue-router'

	const router = useRouter()

	const routes = router.getRoutes()
	let currentRoute = router.currentRoute;

	const emit = defineEmits(['switchTheme'])

	const state = reactive({
		darkTheme: false
	})

	const buttonText = computed(() => {
		return `Switch to ${state.darkTheme ? 'light' : 'dark'} theme`;
	})

	const switchTheme = () => {
		state.darkTheme = !state.darkTheme;
		emit('switchTheme', state.darkTheme);
	}
</script>

<style scoped>
	header {
		padding: 1rem;
		background: var(--bg-secondary);
		width: 100%;
		height: 100vh;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	header h1 {
		text-transform: uppercase;
		font-size: 2rem;
		margin-bottom: 32px;
		color: var(--text-primary);
	}

	.test, .menu-item:hover, .menu-item:focus {
		color: #485fc7;
		background-color: var(--bg-secondary--aux);
	}

	.menu {
		flex-grow: 1;
	}

	.menu ul {
		text-align: right;
		text-transform: uppercase;
	}

	.menu ul li span {
		padding-right: 10px;
	}

	@media only screen and (max-width: 768px) {
		header {
			padding: 2.5rem;
			height: auto;
		}
	}
</style>