<template>
	<main class="columns is-gapless is-multiline" :class="{ 'dark-theme': darkTheme }">
		<div class="column is-one-quarter sidebar-wrapper">
			<Sidebar @switchTheme="handleSwitchTheme" />
		</div>
		<div class="column is-three-quarter content">
			<router-view></router-view>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";

export default defineComponent({
	name: "App",
	data() {
		return {
			darkTheme: false
		}
	},
	methods: {
		handleSwitchTheme(darkTheme: boolean) {
			this.darkTheme = darkTheme;
		}
	},
	components: {
		Sidebar
	},
});
</script>

<style>
html {
	overflow: hidden;
}
.sidebar-wrapper {
	z-index: 2;
	border-right: 1px solid #ececec;
}
main {
	--bg-primary: #fff;
	--bg-primary--aux: #f7f7f7;
	--bg-secundary: #fff;
	--text-primary: #000;
}
main.dark-theme {
	--bg-primary: #2a2a2a;
	--bg-primary--aux: #262626;
	--bg-secundary: #1b1d1e;
	--text-primary: #afafaf;
}
.content {
	background-color: var(--bg-primary--aux);
	color: var(--text-primary);
}

.--transparent {
	background: transparent;
	color: var(--text-primary);
}

.--transparent::placeholder {
	color: var(--text-primary);
	opacity: 0.7;
}

@media only screen and (max-width: 768px) {
	html {
		overflow: auto;
	}
}
</style>
