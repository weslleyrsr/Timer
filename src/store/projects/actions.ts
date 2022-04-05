import Project from "@/interfaces/Project";
import { State } from '../state'
import { ProjectsState } from './state'
import { ActionContext } from 'vuex'

export default {
    'findProject': function(context: ActionContext<ProjectsState, State>, projectId: number): Project | undefined {
        return context.state.projects.find(
            (project: Project) => project.id === projectId
        )
    }
}