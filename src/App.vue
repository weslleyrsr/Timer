<template>
   <main class="columns is-gapless is-multiline" :class="{ 'dark-theme': darkTheme }">
    <div class="column is-one-quarter sidebar-wrapper">
       <Sidebar @switchTheme="handleSwitchTheme"/>
    </div>
    <div class="column is-three-quarter content">
         <Form @finishTask="saveTask"/>
        <div class="list">
            <Box v-if="emptyList">
                You're not very productive today :(
            </Box>
            <template v-else>
                <div class="columns has-text-weight-bold list-header">
                    <div class="column is-5">Task</div>
                    <div class="column is-4">Time</div>
                    <div class="column is-3">Start</div>
                </div>
                <Task v-for="(task, index) in tasks" :key="index" :task="task"/>
            </template>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Box from "./components/List/Box.vue";
import Task from "./components/List/Task.vue";
import Form from "./components/Form/Form.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import { Task as ITask } from './interfaces/Task';


export default defineComponent({
    name: "App",
    data() {
        return {
            tasks: [] as ITask[],
            darkTheme: false
        }
    },
    methods: {
      saveTask(description: string, timeInSeconds: number, timerStarted: Date) {
        this.tasks.push({
          description,
          timeInSeconds,
          start: timerStarted
        })
      },
      handleSwitchTheme(darkTheme: boolean) {
        this.darkTheme = darkTheme;
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
        Form,
        Sidebar
    },
});
</script>

<style>
html {
  overflow: hidden;
}
.sidebar-wrapper {
    z-index: 2;
    border-right: 1px solid #ececec;
}
.list {
  padding: 1.25rem;
  max-height: calc(100vh - 104px);
  overflow: auto;
}
.list-header {
  padding: 0 15px;
  color: var(--texto-primario);
}
main {
  --bg-primario: #fff;
  --bg-primario--aux: #f7f7f7;
  --bg-secundario: #fff;
  --texto-primario: #000;
}
main.dark-theme {
  --bg-primario: #2a2a2a;
  --bg-primario--aux: #262626;
  --bg-secundario: #1b1d1e;
  --texto-primario: #939393;
}
.content {
  background-color: var(--bg-primario--aux);
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
