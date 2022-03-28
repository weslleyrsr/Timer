import { createRouter, createWebHashHistory } from 'vue-router'
import TimerView from '../views/Timer-view.vue'
import TaskManagerView from '../views/Task-manager-view.vue'

const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: TimerView
        },
        {
            path: '/task-manager',
            component: TaskManagerView
        },
    ]
})

export default Router;