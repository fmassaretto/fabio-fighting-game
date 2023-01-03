export class Controller {

    constructor(){
        this.keys = {
            a: {pressed: false},
            d: {pressed: false},
            w: {pressed: false},
            lastKey: ''
        }
    }

    controlKeyUp(event) {
        switch (event.key) {
            case 'a':
                this.keys.a.pressed = false
                break;
            case 'd':
                this.keys.d.pressed = false
                break;
            case 'w':
                this.keys.w.pressed = false
                break;
            default:
                break;
        }
    }

    controlKeyDown(event){
        switch (event.key) {
            case 'a':
                this.keys.a.pressed = true
                this.keys.lastKey = 'a'
                break;
            case 'd':
                this.keys.d.pressed = true
                this.keys.lastKey = 'd'
                break;
            case 'w':
                this.keys.w.pressed = true
                this.keys.lastKey = 'w'
                break;
            default:
                break;
        }
    }
    
    moveWhenKeyPressed(player) {
        if (this.keys.a.pressed && this.keys.lastKey === 'a') {
            player.velocity.x = -4;
        } else if (this.keys.d.pressed && this.keys.lastKey === 'd') {
            player.velocity.x = 4;
        } else if(this.keys.w.pressed && this.keys.lastKey === 'w') {
            console.log("player.position.y")
            console.log(player.position.y)

            if (player.velocity.y === 0) {
                player.velocity.y -= 10
            }
        } else {
            player.velocity.x = 0;
        }
    }
}