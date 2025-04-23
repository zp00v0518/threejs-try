<template>
  <div id="scene-container"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { World } from '../World/World.js'

// create the main function
function main() {
  const container = document.querySelector('#scene-container')
  const world = new World(container)
  world.render()
}

// We can access member variables from the instance

onMounted(() => {
  main()
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
