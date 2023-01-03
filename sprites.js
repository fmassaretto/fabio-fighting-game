
export class Sprites {
    constructor( context, dimension, position, velocity ){
       
        this.context = context
        this.position = position
        this.velocity = velocity
        this.dimension = dimension
    }

    draw() {
        this.context.fillStyle = 'red'
        this.context.fillRect(this.position.x, this.position.y, this.dimension.w, this.dimension.h)
    }

    // animation() {
    //     this.animate(this.velocity)
    // }
}
