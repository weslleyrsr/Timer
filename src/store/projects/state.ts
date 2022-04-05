import Project from "@/interfaces/Project"

const projectsState = {
    projects: [] as Project[],
}

export default projectsState
export type ProjectsState = typeof projectsState