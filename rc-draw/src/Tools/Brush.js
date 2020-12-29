import {Tool} from './Tool.js'

export class Brush extends Tool {
    constructor(canvas) {
        super(canvas)
        this.listen()
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveAction.bind(this)
        this.canvas.onmousedown = this.mouseDownAction.bind(this)
        this.canvas.onmouseup = this.mouseUpAction.bind(this)
    }
    
    mouseUpAction(ev) {
        this.mouseUp = false
    }

    mouseDownAction(ev){
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(ev.pageX - ev.target.offsetLeft, ev.pageY - ev.target.offsetTop)
    }

    mouseMoveAction(ev){
        if(this.mouseDown) {
            this.draw(ev.pageX - ev.target.offsetLeft, ev.pageY - ev.target.offsetTop)
        }
    }

    draw(x,y) {
        this.ctx.lineTo(x,y)
        this.ctx.stroke()
        console.log('>>>>>>DRAW')
    }
}