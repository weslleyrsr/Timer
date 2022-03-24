<template>
   <main class="columns is-gapless is-multiline" :class="{ 'dark-theme': darkTheme }">
    <div class="column is-one-quarter">
       <Sidebar @switchTheme="handleSwitchTheme"/>
    </div>
    <div class="column is-three-quarter content">
         <Form @finishTask="saveTask"/>
        <div class="lista">
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
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.dark-theme {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.content {
  background-color: var(--bg-primario);
}
</style>
