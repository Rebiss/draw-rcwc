import Tool from "./Tool.js"

export default class Line extends Tool {
    constructor(canvas) {
        super(canvas);
        this.listen()
        this.name = 'Line'
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveAction.bind(this)
        this.canvas.onmousedown = this.mouseDownAction.bind(this)
        this.canvas.onmouseup = this.mouseUpAction.bind(this)
    }

    mouseDownAction(ev) {
        this.mouseDown = true
        this.currentX = ev.pageX-ev.target.offsetLeft
        this.currentY = ev.pageY-ev.target.offsetTop
        this.ctx.beginPath()
        this.ctx.moveTo(this.currentX, this.currentY )
        this.saved = this.canvas.toDataURL()
    }

    mouseUpAction(ev) {
        this.mouseDown = false
    }

    mouseMoveAction(ev) {
        if (this.mouseDown) {
            this.draw(ev.pageX-ev.target.offsetLeft, ev.pageY-ev.target.offsetTop);
        }
    }

    draw(x,y) {
        const img = new Image()
        img.src = this.saved
        img.onload = async function () {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.moveTo(this.currentX, this.currentY )
            this.ctx.lineTo(x, y)
            this.ctx.stroke()
        }.bind(this)
    }
}