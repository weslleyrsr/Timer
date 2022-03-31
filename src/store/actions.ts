import Project from "@/interfaces/Project";

export default {
    'findProject': function(context: any, projectId: number): Project {
        return context.state.projects.find((project: Project) => project.id === projectId)
    }
}