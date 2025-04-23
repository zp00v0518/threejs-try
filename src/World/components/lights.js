import { DirectionalLight } from 'three'

function createLights() {
  // Create a directional light
  const light = new DirectionalLight('white', 8)
  const num = 10
  light.position.set(num, num, num)

  return light
}

export { createLights }
