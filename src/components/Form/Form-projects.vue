<template>
	<div class="box form">
		<div class="columns">
			<div class="column is-flex-grow-1" role="form" aria-label="Form to create a new task">
				<input
                    @keyup.enter.prevent="addProject"
					type="text"
					class="input --transparent"
					placeholder="Project name"
					v-model="project.name"
				/>
			</div>
			<div class="column is-flex-grow-0">
                <button class="button" @click="addProject">
                    <span class="icon">
                        <i class="fas fa-plus"></i>
                    </span>
                    <span>Add project</span>
                </button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Project from "@/interfaces/Project";
import { reactive } from "vue"
import { useStore } from 'vuex'

const store = useStore()

const project = reactive({
	name: ''
})

const newProject = (): Project => {
    return {
        id: new Date().getTime(),
        name: project.name
    }
}

const addProject = () => {
    store.commit('addProject', newProject())
}

</script>

<style>
.form {
	color: var(--text-primary);
	background-color: var(--bg-primary);
	border-radius: 0;
}
</style>