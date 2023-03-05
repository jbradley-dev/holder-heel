<script setup lang="ts">
import anime from 'animejs'
import { onMounted } from 'vue'

onMounted(() => {
  anime({
    targets: '.box',
    translateX: 250,
    rotate: '1turn',
    duration: 2000,
  })
})
</script>

<template>
  <div class="box w-24 h-24 bg-red-500" />
</template>
