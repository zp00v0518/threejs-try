<template>
  <div id="scene-container">
    <!-- <canvas id="scene"></canvas> -->
  </div>
</template>

<script setup>
import * as THREE from 'three'
const { BufferGeometry, Color, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } =
  THREE

import { onMounted } from 'vue'

function getGeometry() {
  const geometry = new BufferGeometry()

  // Вершини куба (8 унікальних точок, але для індексованої геометрії потрібно більше)
  const vertices = new Float32Array([
    // передня грань
    -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,

    // задня грань
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
  ])

  // Індекси для створення 12 трикутників (2 на кожну з 6 граней)
  const indices = [
    // передня грань
    0, 1, 2, 0, 2, 3,
    // права грань
    // 1, 5, 6, 1, 6, 2,
    // задня грань
    // 5, 4, 7, 5, 7, 6,
    // ліва грань
    // 4, 0, 3, 4, 3, 7,
    // верхня грань
    // 3, 2, 6, 3, 6, 7,
    // нижня грань
    // 4, 5, 1, 4, 1, 0,
  ]

  // Додаємо атрибути
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  geometry.setIndex(indices)
  // geometry.computeVertexNormals() //
  return geometry
}
onMounted(() => {
  // Get a reference to the container element that will hold our scene
  const container = document.querySelector('#scene-container')

  // create a Scene
  const scene = new Scene()

  // Set the background color
  scene.background = new Color('skyblue')

  // Create a camera
  const fov = 35 // AKA Field of View
  const aspect = container.clientWidth / container.clientHeight
  const near = 0.1 // the near clipping plane
  const far = 100 // the far clipping plane

  const camera = new PerspectiveCamera(fov, aspect, near, far)

  // every object is initially created at ( 0, 0, 0 )
  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10)

  // create a geometry
  const geometry = getGeometry()

  // create a default (white) Basic material
  const material = new MeshBasicMaterial()
  console.log(material)

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material)

  // add the mesh to the scene
  scene.add(cube)

  // create the renderer
  const renderer = new WebGLRenderer()

  // next, set the renderer to the same size as our container element
  renderer.setSize(container.clientWidth, container.clientHeight)

  // finally, set the pixel ratio so that our scene will look good on HiDPI displays
  renderer.setPixelRatio(window.devicePixelRatio)

  // add the automatically created <canvas> element to the page
  container.append(renderer.domElement)

  // render, or 'create a still image', of the scene
  renderer.render(scene, camera)
})
</script>

<style>
#scene-container {
  height: 100vh;
}
</style>
