import {Tool} from './Tool.js'

export class Rectangle extends Tool {
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
        this.mouseUp = true
    }

    mouseDownAction(ev){
        this.startX = ev.pageX - ev.target.offsetLeft
        this.startY = ev.pageY - ev.target.offsetTop
        this.mouseDown = true
        this.ctx.beginPath()
        this.saved = this.canvas.toDataURL()
    }

    mouseMoveAction(ev){
        console.log('>>>>>UP', ev)
        if(this.mouseDown) {
            let currentX = ev.pageX - ev.target.offsetLeft,
                currentY = ev.pageY - ev.target.offsetTop,
                width = currentX - this.startX,
                height = currentY - this.startY;
            this.draw(this.startX, this.startY, width, height)
        }
    }

    draw(x,y,w,h) {
        const img = new Image();
        img.src = this.saved
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.rect(x,y,w,h)
            this.ctx.fill()
            this.ctx.stroke()
        }
    }
}