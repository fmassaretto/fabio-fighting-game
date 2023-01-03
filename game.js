import { Player } from "./player.js"
import { Sprites } from "./sprites.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const canvasWidth = 860
const canvasHeight = 480

canvas.width = canvasWidth
canvas.height = canvasHeight

//ctx.fillRect(0,0,canvasWidth,canvasHeight)

const background = new Sprites({
    context: ctx,
    dimension: {w: canvasWidth, h: canvasHeight},
    position: {x: 0, y: 0},
    imageSrc: '.\\img\\Background\\layer_1.png'
})

const player1 = new Player({
    context: ctx, 
    dimension: {w: 64, h: 64}, 
    offset: {t: 14, b: 10, l: 14, r: 30}, 
    imageSrc: '.\\img\\Characters\\knight\\idle\\idle_knight_1.png' 
})

function gameRun() {
    window.requestAnimationFrame(gameRun)

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    checkColision(player1, ctx)
    background.update()
    player1.update()
}


function checkColision(player){
    // if hit the top of the screen don't let go off screen
    if(player.position.y < 0) {
        player.position.y = 0
    }
    
    // if hit left or right of the screen stop moving
    if (player.position.x < 0 ) {
        player.position.x = 0
    } else if(((player.position.x + player.dimension.w) - player.offset.r) >= ctx.canvas.width){
        player.position.x = ctx.canvas.width - player.dimension.w + player.offset.r
    }
}

gameRun()