export class Tool {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.destroyEv();
    }

    destroyEv() {
        this.canvas.onmousemove = null
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
    }
}