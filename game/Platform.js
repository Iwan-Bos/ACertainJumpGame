"use strict"

class Platform extends Entity {
    constructor(x, y, width, height, red, green, blue, move, destroy) {
        // super calls the parent constructor.
        super(x, y, width, height);
        // position & dimensions.
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
        // rgb colors of platform.
        this.red = red;
        this.green = green;
        this.blue = blue;
        // behaviours.
        this.move = move;
        this.destroy = destroy;
        this.jumpedOn = 0;
        // movement.
        this.vel = .25;
    }

    draw() {
        if (!this.jumpedOn) {
            fill(this.red, this.green, this.blue);
            rect(this.pos.x - this.width / 2,
                this.pos.y - this.height / 2,
                this.width,
                this.height,
                500
            );
        }
        // move behaviour(, mainly blue platforms).
        if (this.move == 1) {
            this.pos.x += this.vel * deltaTime;
            if (this.pos.x > width - this.width / 2 || this.pos.x < 0 + this.width / 2) {
                this.vel *= -1;
            }
        }
    }
}
