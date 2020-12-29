import Tool from './Tool.js';

export default class Circle extends Tool {
    constructor(canvas) {
        super(canvas);
        this.listen()
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveAction.bind(this)
        this.canvas.onmousedown = this.mouseDownAction.bind(this)
        this.canvas.onmouseup = this.mouseUpAction.bind(this)
    }

    mouseDownAction(ev) {
        this.mouseDown = true
        let canvasData = this.canvas.toDataURL()
        this.ctx.beginPath()
        this.startX = ev.pageX-ev.target.offsetLeft
        this.startY = ev.pageY-ev.target.offsetTop
        this.saved = canvasData
    }

    mouseUpAction(ev) {
        this.mouseDown = false
    }

    mouseMoveAction(ev) {
        if(this.mouseDown) {
            let curentX = ev.pageX-ev.target.offsetLeft,
                curentY = ev.pageY-ev.target.offsetTop,
                width = curentX-this.startX,
                height = curentY-this.startY,
                r = Math.sqrt(width**2 + height**2);

            this.draw(this.startX, this.startY, r)
        }
    }

    draw(x,y,r) {
        const img = new Image()
        img.src = this.saved
        img.onload = async function () {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.arc(x, y, r, 0, 2*Math.PI)
            this.ctx.fill()
            this.ctx.stroke()
        }.bind(this)
    }
}