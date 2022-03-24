<template>
   <main class="columns is-gapless is-multiline" :class="{ 'dark-theme': darkTheme }">
    <div class="column is-one-quarter" style="z-index: 2;">
       <Sidebar @switchTheme="handleSwitchTheme"/>
    </div>
    <div class="column is-three-quarter content">
         <Form @finishTask="saveTask"/>
        <div class="list">
            <Task v-for="(task, index) in tasks" :key="index" :task="task"/>
            <Box v-if="emptyList">
                You're not very productive today :(
            </Box>
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
      saveTask(description: string, timeInSeconds: number) {
        this.tasks.push({
          description,
          timeInSeconds
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
.list {
  padding: 1.25rem;
  max-height: calc(100vh - 104px);
  overflow: auto;
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
</style>
