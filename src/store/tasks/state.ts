import { Task } from "@/interfaces/Task"

const tasksState = {
    tasks: [] as Task[]
}

export default tasksState
export type TasksState = typeof tasksState