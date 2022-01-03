import "./x.js"
import * as three from "https://cdn.skypack.dev/three@0.136.0"

const renderer = new three.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
window.document.body.appendChild(renderer.domElement)

const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

const scene = new three.Scene()

const geometry = new three.BoxGeometry()
const material = new three.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new three.Mesh(geometry, material)
scene.add(cube)

function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
}

animate()