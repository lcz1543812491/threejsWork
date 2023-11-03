import * as THREE from 'three'

interface CreateEnvironment {
  scene: THREE.Scene
}

export function createEnvironment(props: CreateEnvironment) {
  const { scene } = props

  const textureLoader = new THREE.CubeTextureLoader()

  const texture = textureLoader.load(['/smartCity/1.jpg', '/smartCity/2.jpg', '/smartCity/3.jpg', '/smartCity/4.jpg', '/smartCity/5.jpg', '/smartCity/6.jpg'])

  scene.environment = texture
  scene.background = texture
}
