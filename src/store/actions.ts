import Project from "@/interfaces/Project";
import { State } from '@/store/state'
import { ActionContext } from 'vuex'

export default {
    'findProject': function(context: ActionContext<State, State>, projectId: number): Project | undefined {
        return context.state.projects.find(
            (project: Project) => project.id === projectId
        )
    }
}