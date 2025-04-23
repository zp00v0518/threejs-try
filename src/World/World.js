import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createScene } from './components/scene.js'

import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'
let camera
let renderer
let scene
class World {
  // 1. Create an instance of the World app
  constructor(container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)

    const cube = createCube()

    scene.add(cube)
    const resizer = new Resizer(container, camera, renderer)
  }

  // 2. Render the scene
  render() {
    renderer.render(scene, camera)
  }
}

export { World }
