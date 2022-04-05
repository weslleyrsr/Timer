import { Task } from "@/interfaces/Task"
import { TasksState} from "./state"

export default {
    'addTask': function(state: TasksState, task: Task) {
        state.tasks.push(task)
    }
}