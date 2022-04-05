import { createRouter, createWebHashHistory } from 'vue-router'
import TasksView from '../views/Tasks-view.vue'
import ProjectsView from '../views/Projects-view.vue'
import ProjectsFormView from '@/views/projects/Form-view.vue'

const Router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			name: "Tasks",
			path: '/',
			component: TasksView,
			meta: {
				icon: "fas fa-tasks"
			}
		},
		{
			name: "Projects",
			path: '/projects',
			component: ProjectsView,
			meta: {
				icon: "fa fa-project-diagram"
			}
		},
		{
			name: "Project",
			path: '/project/:id',
			component: ProjectsFormView,
			props: true,
			meta: {
				hide: true,
				icon: "fa fa-project-diagram"
			}
		},
		{
			name: "New project",
			path: '/project/new',
			component: ProjectsFormView,
			meta: {
				hide: true,
				icon: "fa fa-project-diagram"
			}
		},
	]
})

export default Router