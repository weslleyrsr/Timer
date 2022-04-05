import { ProjectsState } from "./state"

export default {
    'haveProjects': function(state: ProjectsState) {
        return state.projects.length > 0
    }
}