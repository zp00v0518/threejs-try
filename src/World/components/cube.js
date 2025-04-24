import {
  BufferGeometry,
  Mesh,
  MeshStandardMaterial,
  BufferAttribute,
  Color,
  Uint16BufferAttribute,
  BoxGeometry,
} from 'three'

function getGeometry() {
  const geometry = new BufferGeometry()

  // Вершини куба
  const vertices = new Float32Array([
    // Передня грань (z = 1)
    -1,
    -1,
    1, // 0
    1,
    -1,
    1, // 1
    1,
    1,
    1, // 2
    -1,
    1,
    1, // 3

    // Задня грань (z = -1)
    -1,
    -1,
    -1, // 4
    1,
    -1,
    -1, // 5
    1,
    1,
    -1, // 6
    -1,
    1,
    -1, // 7

    // Верхня грань (y = 1)
    -1,
    1,
    1, // 8  (3)
    1,
    1,
    1, // 9  (2)
    1,
    1,
    -1, // 10 (6)
    -1,
    1,
    -1, // 11 (7)

    // Нижня грань (y = -1)
    -1,
    -1,
    -1, // 12 (4)
    1,
    -1,
    -1, // 13 (5)
    1,
    -1,
    1, // 14 (1)
    -1,
    -1,
    1, // 15 (0)

    // Права грань (x = 1)
    1,
    -1,
    1, // 16 (1)
    1,
    1,
    1, // 17 (2)
    1,
    1,
    -1, // 18 (6)
    1,
    -1,
    -1, // 19 (5)

    // Ліва грань (x = -1)
    -1,
    -1,
    -1, // 20 (4)
    -1,
    1,
    -1, // 21 (7)
    -1,
    1,
    1, // 22 (3)
    -1,
    -1,
    1, // 23 (0)
  ])

  // Індекси для граней (два трикутники на грань) - УВАГА на порядок!
  const indices = new Uint16Array([
    // Передня грань
    0, 1, 2, 2, 3, 0,

    // Задня грань
    4, 5, 6, 6, 7, 4,

    // Верхня грань
    8, 9, 10, 10, 11, 8,

    // Нижня грань
    12, 13, 14, 14, 15, 12,

    // Права грань
    16, 17, 18, 18, 19, 16,

    // Ліва грань
    20, 21, 22, 22, 23, 20,
  ])

  geometry.setAttribute('position', new BufferAttribute(vertices, 3))
  geometry.setIndex(new Uint16BufferAttribute(indices, 1))
  geometry.computeVertexNormals()

  return geometry
}

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2)
  const material = new MeshStandardMaterial({ color: new Color('lightpink') })
  const cube = new Mesh(geometry, material)
  cube.rotation.set(-0.5, -0.1, 0.8)
  return cube
}

export { createCube }
