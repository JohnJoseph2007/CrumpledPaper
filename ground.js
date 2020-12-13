class Ground {
    constructor() {
        this.body = Bodies.rectangle(400, 550, 800, 15, {restitution : 0, isStatic : true});
        World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);
        fill("black");
        rect(400, 550, 800, 15)
    }
}