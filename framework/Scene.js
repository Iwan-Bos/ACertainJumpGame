"use strict"

class Scene extends Entity {
    // Scene constructor.
    constructor(x, y, width, height) {
        // super calls the parent constructor.
        super(x, y, width, height);
        // create canvas, WEBGL for 3D, omit for 2D(, WEBGL disables 2D functions).
        createCanvas(width, height);
    }
}
