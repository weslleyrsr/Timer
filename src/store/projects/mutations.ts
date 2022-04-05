import Project from '@/interfaces/Project'
import { ProjectsState } from './state'


export default {
    'addProject': function(state: ProjectsState, project: Project) {
        state.projects.push(project)
    },
    'updateProject': function(state: ProjectsState, project: Project) {
        state.projects = state.projects.map((stateProject: Project) => {
            if (stateProject.id === project.id) {
                return project
            } else {
                return stateProject
            }
        })
    }
}