export class Animation {
    gravity = 0.6

    constructor({ position, velocity }){
        this.position = position
        this.velocity = velocity
    }

    animate(){
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y * this.gravity

        this.velocity.y = 10
    }
}