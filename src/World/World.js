import * as THREE from 'three'
import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createScene } from './components/scene.js'
import { createLights } from './components/lights.js'
import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera
let renderer
let scene

class World {
  constructor(container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)

    const cube = createCube()
    const light = createLights()
    const ambientLight = new THREE.AmbientLight('purple', 8) // м'яке біле світло
    scene.add(ambientLight)
    scene.add(cube)
    scene.add(light)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera)
  }
}

export { World }
