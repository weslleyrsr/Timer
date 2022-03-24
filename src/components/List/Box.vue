<template>
  <div class="box" :style="styles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
    const styles = {
        backgroundColor: '#FAF0CA'
    }
</script>