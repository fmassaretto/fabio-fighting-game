import { Animation } from "./animation.js"

export class Sprites {
    constructor({ context, dimension, position, offset = {t: 0, b: 0, l: 0, r: 0}, velocity = {x: 0, y: 0}, imageSrc }){
       
        this.context = context
        this.dimension = dimension
        this.position = position
        this.offset = offset
        this.image = new Image()
        this.image.src = imageSrc
        this.animation = new Animation({ context, position, dimension, offset, velocity })
    }

    draw() {
        

        this.context.drawImage(this.image, 
            (this.position.x - this.offset.l), 
            (this.position.y - this.offset.t), 
            this.dimension.w, 
            this.dimension.h)

        // this.context.fillStyle = 'red'
        // this.context.fillRect(this.position.x, this.position.y, this.dimension.w, this.dimension.h)
    }

    update() {
        this.draw()
        this.animation.animate()
    }
}
