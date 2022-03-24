<template>
  <header>
    <h1>
      <img src="../../assets/logo.png" alt="">
    </h1>
    <button class="button" @click="switchTheme">
      {{ buttonText }}
    </button>
  </header>
</template>

<script setup lang="ts">
import { reactive, computed, defineEmits } from 'vue';

const emit = defineEmits(['switchTheme'])

const state = reactive({
  darkTheme: false
})

const buttonText = computed(() => {
  return `Switch to ${state.darkTheme ? 'light' : 'dark'} theme`;
})

const switchTheme = () => {
  state.darkTheme = !state.darkTheme;
  emit('switchTheme', state.darkTheme);
}
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>