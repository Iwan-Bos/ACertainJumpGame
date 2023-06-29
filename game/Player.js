"use strict"

class Player extends Entity {
    constructor(x, y, width, height) {
        super(x, y);
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
    }

    draw() {
        // player drawing.
        fill(200, 0, 200);
        rect(this.pos.x - this.width / 2,
            this.pos.y - this.height / 2,
            this.width,
            this.height,
        );
    }

}