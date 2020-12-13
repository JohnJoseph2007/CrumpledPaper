class Bin {
    constructor(x, y, height, width){
        this.body = Bodies.rectangle(x, y, height, width, {restitution : 0, isStatic : true});
        World.add(world, this.body);
        this.h = height;
        this.w = width;
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("black")
        rect(pos.x, pos.y, this.h, this.w);
    }
}