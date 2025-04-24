import { DirectionalLight, AmbientLight } from 'three'

function createLights() {
  // Create a directional light
  const light = new DirectionalLight('purple', 8)
  light.position.set(10, 10, 10) // Налаштуйте положення

  return light
}

export { createLights }
