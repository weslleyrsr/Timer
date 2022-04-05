import { createStore } from 'vuex';
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import projectsState from './projects/state';
import projectsActions from './projects/actions';
import projectsMutation from './projects/mutations';
import projectsGetters from './projects/getters';

import tasksState from './tasks/state';
import tasksActions from './tasks/actions';
import tasksMutation from './tasks/mutations';
import tasksGetters from './tasks/getters';

const store = createStore({
    state,
    getters,
    mutations,
    actions,
    modules: {
        projects: {
          namespaced: true,
          state: projectsState,
          actions: projectsActions,
          mutations: projectsMutation,
          getters: projectsGetters
        },
        tasks: {
            namespaced: true,
            state: tasksState,
            actions: tasksActions,
            mutations: tasksMutation,
            getters: tasksGetters
          }
    }
})

export default store;