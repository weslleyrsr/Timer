import Project from "@/interfaces/Project";
import { Task } from "@/interfaces/Task";

export default {
    'addProject': function(state: any, project: Project) {
        state.projects.push(project)
    },
    'updateProject': function(state: any, project: Project) {
        state.projects = state.projects.map((stateProject: Project) => {
            if (stateProject.id === project.id) {
                return project
            } else {
                return stateProject
            }
        })
    },
    'addTask': function(state: any, task: Task) {
        state.tasks.push(task)
    }
}