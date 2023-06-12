class Scene extends Entity {
    // Scene constructor.
    constructor(width, height, posX, posY, rotZ) {
        // super calls the parent constructor.
        super(posX, posY, rotZ);
        // create canvas, WEBGL for 3D, omit for 2D(, WEBGL disables 2D functions).
        createCanvas(width, height);
    }
}
