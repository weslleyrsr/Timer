import Project from "@/interfaces/Project";
import { Task } from "@/interfaces/Task";
import { State } from './state'

export default {
    'addProject': function(state: State, project: Project) {
        state.projects.push(project)
    },
    'updateProject': function(state: State, project: Project) {
        state.projects = state.projects.map((stateProject: Project) => {
            if (stateProject.id === project.id) {
                return project
            } else {
                return stateProject
            }
        })
    },
    'addTask': function(state: State, task: Task) {
        state.tasks.push(task)
    }
}