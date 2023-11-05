import * as THREE from 'three'
// @ts-ignore
import FragmentShader from './shader/fragmentShader.glsl'
// @ts-ignore
import VertexShader from './shader/vertexShader.glsl'

export function createWater() {
  let container, mesh, start = Date.now(), fov = 30
  const clock = new THREE.Clock()

  const timeUniform = {
    iGlobalTime: {
      type: 'f',
      value: 0.1
    },
    iResolution: {
      type: 'v2',
      value: new THREE.Vector2( window.innerWidth, window.innerHeight)
    }
  }

  timeUniform.iResolution.value.x = window.innerWidth
  timeUniform.iResolution.value.y = window.innerHeight

  // container = document.getElementById('container')
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 10000)
  camera.position.x = 20
  camera.position.y = 10
  camera.position.z = 20
  camera.lookAt(scene.position)
  scene.add(camera)

  const axis = new THREE.AxesHelper(10)
  scene.add(axis)

  const waterMaterial = new THREE.ShaderMaterial({
    uniforms: timeUniform,
    vertexShader: VertexShader,
    fragmentShader: FragmentShader
  })

  const water = new THREE.Mesh(new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 40), waterMaterial)
  scene.add(water)

  var geometry = new THREE.SphereGeometry(10, 32, 32)
  var material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
  var sphere = new THREE.Mesh(geometry, material)
  scene.add(sphere)

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById('galaxy') as HTMLCanvasElement })
  renderer.setSize(window.innerWidth, window.innerHeight)

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
  
  function render() {
    timeUniform.iGlobalTime.value += clock.getDelta()
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  
  render()
}

// window.addEventListener('load', function () {

// })


