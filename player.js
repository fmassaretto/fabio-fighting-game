import { Animation } from "./animation.js"
import { Controller } from "./controller.js"
import { Sprites } from "./sprites.js"

const controller = new Controller()

export class Player extends Sprites {

    constructor({ 
        context, 
        dimension = { w: 0, h: 0 }, 
        position = { x: 0, y: 0 }, 
        offset, 
        velocity = { x: 0, y: 0 }, 
        imageSrc 
    }) {
        super({context, dimension, position, offset, velocity, imageSrc})
        if(!(context instanceof CanvasRenderingContext2D)){
            return new Error("Pass a CanvasRenderingContext2D object")
        }

        this.dimension = dimension
        this.velocity = velocity
        
    }
    
    update() {
        // this.velocity.y = 10
        super.update()
        
        controller.moveWhenKeyPressed(this)
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