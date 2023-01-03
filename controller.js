export class Controller {

    constructor(){
        this.keys = {
            a: {
                pressed: false
            },
            d: {
                pressed: false
            },
            w: {
                pressed: false
            }
        }

        this.lastKey = ''
    }

    controlKeyUp(event) {
        // this.checkKey(player)

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
                this.lastKey = 'a'
                break;
                case 'd':
                    this.keys.d.pressed = true
                    this.lastKey = 'd'
                    break;
                case 'w':
                    this.keys.w.pressed = true
                    this.lastKey = 'w'
                    break;
                default:
                    break;
        }
    }
    
    moveWhenKeyPressed(player) {
        if (this.keys.a.pressed && this.lastKey === 'a') {
            player.velocity.x = -4;
        } else if (this.keys.d.pressed && this.lastKey === 'd') {
            player.velocity.x = 4;
        } else if(this.keys.w.pressed && this.lastKey === 'w') {
            console.log(player)
            player.velocity.y -= 200
            if(player.velocity.y === 0){
            }
        } else {
            player.velocity.x = 0;
        }

    }
}