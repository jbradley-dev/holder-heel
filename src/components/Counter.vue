<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
</script>

<template>
  <div id="app">
    <button class="bg-red-500" @click="count++">
      Count is: {{ count }}
    </button>
  </div>
</template>
