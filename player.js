import { Animation } from "./animation.js"
import { Controller } from "./controller.js"
import { Sprites } from "./sprites.js"

const controller = new Controller()


export class Player extends Sprites {

    constructor({ context, dimension = { w: 0, h: 0 }, position = { x: 0, y: 0 }, velocity = { x: 0, y: 0 } }) {
        super(context, dimension, position, velocity)
        if(!(context instanceof CanvasRenderingContext2D)){
            return new Error("Pass a CanvasRenderingContext2D object")
        }

        
        this.animation = new Animation({ position, velocity })
    }
    
    update() {
        this.draw()
        
        this.animation.animate()

        controller.moveWhenKeyPressed(this)
        
    
        if((this.position.y + this.dimension.h) >= this.context.canvas.height) {
            this.velocity.y = 0
        }
        
        if (this.position.x < 0 ) {
            this.position.x = 0
        } else if((this.position.x + this.dimension.w) >= this.context.canvas.width){
            this.position.x = this.context.canvas.width - this.dimension.w
        }
    }
}

window.addEventListener('keydown', event => {
    controller.controlKeyDown(event)
})

window.addEventListener('keyup', event => {
    controller.controlKeyUp(event)

})

// function control(){
//     Object.assign(this, new Control())
// }