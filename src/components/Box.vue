<template>
  <div class="box"></div>
</template>

  <script setup lang="ts">
import anime from 'animejs';
import { onMounted } from 'vue';

onMounted(() => {
  anime({
        targets: '.box',
        translateX: 250,
        rotate: '1turn',
        duration: 2000
      });
})
</script>

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>
