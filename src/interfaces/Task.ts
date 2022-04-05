import Project from "./Project"

export interface Task {
	description: string,
	project: Project | null,
	timeInSeconds: number,
	start: Date
}