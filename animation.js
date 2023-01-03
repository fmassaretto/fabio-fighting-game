export class Animation {
    gravity = 0.8

    constructor({ context, position, dimension, offset, velocity }){
        this.context = context
        this.position = position
        this.dimension = dimension
        this.offset = offset
        this.velocity = velocity
    }

    animate(){
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        // if (this.dimension.h < 0) {
        //     console.log(this.position)
        //     console.log((this.position.y + this.dimension.h + this.velocity.y) >= this.context.canvas.height)
        // }


        // if hit the bottom of the screen stop falling
        if((this.position.y + this.dimension.h + this.velocity.y - this.offset.b) >= this.context.canvas.height ) {
            this.velocity.y = 0
        } else {
            this.velocity.y += this.gravity
        }

        // this.velocity.y = 10
    }
}