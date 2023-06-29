"use strict"

class Entity {
    constructor(x, y, width, height) {
        // list of children
        this.children = [];
        // position vector2.
        this.pos = createVector(x, y);
        // get the ResourceManager in here.
        this.RM = ResourceManager.getInstance();
    }

    draw() {

    }
}
