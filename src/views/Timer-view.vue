<template>
    <Form @finishTask="saveTask"/>
    <template v-if="emptyList">
        <div class="list">
            <Box>
                You're not very productive today :(
            </Box>
        </div>
    </template>
    <template v-else>
        <div class="columns has-text-weight-bold list-header" style="margin-bottom: 0">
            <div class="column is-5">Task</div>
            <div class="column is-4">Time</div>
            <div class="column is-3">Start</div>
        </div>
        <div class="list">
            <Task v-for="(task, index) in tasks" :key="index" :task="task"/>
        </div>
    </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Box from "../components/List/Box.vue";
import Task from "../components/List/Task.vue";
import Form from "../components/Form/Form.vue";
import { Task as ITask } from '../interfaces/Task';


export default defineComponent({
    name: "TimerView",
    data() {
        return {
            tasks: [] as ITask[]
        }
    },
    methods: {
      saveTask(description: string, timeInSeconds: number, timerStarted: Date) {
        this.tasks.push({
          description,
          timeInSeconds,
          start: timerStarted
        })
      }
    },
    computed: {
        emptyList () : boolean {
          return this.tasks.length === 0
        }
    },
    components: {
        Box,
        Task,
        Form
    },
});
</script>

<style>
.list {
    padding: 1.25rem;
    max-height: calc(100vh - 140px);
    overflow: auto;
}
.list-header {
    padding: 0 2rem;
    color: var(--texto-primario);
}

@media only screen and (max-width: 768px) {
    html {
        overflow: auto;
    }
    .list-header {
        padding: 0 15px;
        color: var(--texto-primario);
        display: none;
    }

    .list {
        padding: 1.25rem;
        max-height: unset;
        overflow: auto;
    }
}
</style>
