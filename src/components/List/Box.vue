<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
    const estilos = {
        backgroundColor: '#FAF0CA'
    }
</script>