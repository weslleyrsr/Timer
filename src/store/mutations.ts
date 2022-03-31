import Project from "@/interfaces/Project";
import { Task } from "@/interfaces/Task";

export default {
    'addProject': function(state: any, project: Project) {
        state.projects.push(project)
    },
    'addTask': function(state: any, task: Task) {
        state.tasks.push(task)
    }
}