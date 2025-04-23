import {
  BufferGeometry,
  Mesh,
  MeshBasicMaterial,
  BufferAttribute,
  MeshStandardMaterial,
  Color,
} from 'three'

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
    1, 5, 6, 1, 6, 2,
    // задня грань
    5, 4, 7, 5, 7, 6,
    // ліва грань
    4, 0, 3, 4, 3, 7,
    // верхня грань
    3, 2, 6, 3, 6, 7,
    // нижня грань
    4, 5, 1, 4, 1, 0,
  ]

  // Додаємо атрибути
  geometry.setAttribute('position', new BufferAttribute(vertices, 3))
  geometry.setIndex(indices)
  // geometry.computeVertexNormals() //
  return geometry
}

function createCube() {
  // create a geometry
  const geometry = new getGeometry(2, 2, 2)

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: new Color('lightpink') })

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material)
  cube.rotation.set(-0.5, -0.1, 0.8)

  return cube
}

export { createCube }
