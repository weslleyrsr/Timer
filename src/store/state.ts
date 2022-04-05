import Project from "@/interfaces/Project"
import { Task } from "@/interfaces/Task"

const state = {
	workInProgressMessage: 'Work in Progress!! Check again later',
	projects: [] as Project[],
	tasks: [] as Task[]
}

export default state

export type State = typeof state