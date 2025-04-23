<template>
  <div id="scene-container">
    <!-- <canvas id="scene"></canvas> -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { World } from '../World/World.js'

// create the main function
function main() {
  const container = document.querySelector('#scene-container')

  // 1. Create an instance of the World app
  const world = new World(container)

  // 2. Render the scene
  world.render()
}

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
