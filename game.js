import { Player } from "./player.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const canvasWidth = 860
const canvasHeight = 480

canvas.width = canvasWidth
canvas.height = canvasHeight

//ctx.fillRect(0,0,canvasWidth,canvasHeight)



const player1 = new Player({context: ctx, dimension: {w: 30, h: 100} })


function gameRun() {
    window.requestAnimationFrame(gameRun)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player1.update()
}

gameRun()