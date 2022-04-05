<template>
	<div class="box form">
		<div class="columns" role="form" aria-label="Form to create a new task">
			<div class="column is-flex-grow-1">
				<input
					required
                    @keyup.enter.prevent="addProject"
					type="text"
					class="input --transparent"
					placeholder="Project name"
					v-model="project.name"
				/>
				<div
					style="margin-top: 16px"
					class="notification is-danger is-light"
					v-if="inputEmpty && project.showErrorMessage"
				>
					Project name required
				</div>
			</div>
			<div class="column is-flex-grow-0">
                <button class="button" @click="addProject">
                    <span class="icon">
                        <i class="fas fa-plus"></i>
                    </span>
                    <span>{{ props.id ? 'Save' : 'Add project' }}</span>
                </button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Project from "@/interfaces/Project";
import { reactive, defineProps, onMounted, computed } from "vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()

let props = defineProps<{
	id?: string
}>()

const store = useStore()

const project = reactive({
	name: '',
	showErrorMessage: false
})

const inputEmpty = computed(() => {
	return project.name === ''
})

onMounted(async () => {
	if (props.id) {
		console.log(props.id)
		let result = await store.dispatch('projects/findProject', parseInt(props.id));
		if (result) {
			project.name = result.name
		} else {
			throw new Error("Project not found")
		}
	}
})

const newProject = (): Project => {
    return {
        id: props.id ? parseInt(props.id) : new Date().getTime(),
        name: project.name
    }
}

const addProject = () => {
	if (inputEmpty.value) {
		project.showErrorMessage = true
		return;
	} else {
		project.showErrorMessage = false
	}
	
	if(props.id) {
		store.commit('projects/updateProject', newProject())
	} else {
		store.commit('projects/addProject', newProject())
	}

	router.push("/projects")
}

</script>

<style>
.form {
	color: var(--text-primary);
	background-color: var(--bg-primary);
	border-radius: 0;
}
</style>