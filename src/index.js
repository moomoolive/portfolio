import * as three from "../node_modules/three/build/three.module.js"

const canvas = document.getElementById("app")
const renderer = new three.WebGLRenderer({ canvas })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(1, 2.6, -3)
camera.lookAt(0, 0, 0)

const scene = new three.Scene()

const gamePlaneGeometry = new three.PlaneBufferGeometry(3, 3, 64, 64)
const gamePlaneMaterial = new three.MeshBasicMaterial({ color: "gray" })
const gamePlane = new three.Mesh(gamePlaneGeometry, gamePlaneMaterial)
gamePlane.material.side = three.DoubleSide
gamePlane.rotation.x = 55
scene.add(gamePlane)

const playerGeometry = new three.BoxBufferGeometry(0.5, 0.5, 0.5)
const playerMaterial = new three.MeshBasicMaterial({ color: "red" })
const player = new three.Mesh(playerGeometry, playerMaterial)
player.position.set(0, 0.3, 0)
scene.add(player)

const upKey = 38
const downKey = 40
const leftKey = 37
const rightKey = 39
const spaceKey = 32

function move(event) {
    const code = event.keyCode
    if (code === upKey) {
        player.position.z += 0.1
    } else if (code === downKey) {
        player.position.z -= 0.1
    } else if (code === leftKey) {
        player.position.x += 0.1
    } else if (code === rightKey) {
        player.position.x -= 0.1
    } else if (code === spaceKey) {
        player.position.y += 0.2
    }
}

window.addEventListener("keydown", move)
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()