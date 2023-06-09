class Platform extends Entity {
    constructor(posX, posY, type) {
        // super calls the parent constructor.
        super(posX, posY, 0);
        this.posX = posX;
        this.posY = posY;
        this.type = type;
    }

    draw() {
        // get texture for box using the ResourceManager.
        switch (this.type) {
            case this.green:
                texture(this.RM.loadTexture("assets/platformGreen.png"));
                break;
            case this.brown:
                texture(this.RM.loadTexture("assets/platformBrown.png"));
                break;
            case this.blue:
                texture(this.RM.loadTexture("assets/platformBlue.png"));
                break;
            default:
                break;
        }
        translate(this.posX, this.posY);
        box(100, 20, 100);
    }

    // ### platforms have ###
    // - a set size
    // - 3 variants:
    //      - green, does absolutely nothing and dies.
    //      - blue, moves from left to right.
    //      - brown, breaks when stepped on.
    // - a small chance to contain a powerup.

    // ### platform logic ###
    // divided in slices,
    // - each slice can be generated on function call.
    // - each slice has a chance to be a moving platform slice or a normal slice,
    //      - each moving platform slice exists out of 2 spawn spaces 
    //          where a blue platform can spawn or not with at least one spawning,
    //      - each normal slice exists out of a set amount of preset positions on which platforms
    //          can either spawn or not spawn.
    //              - after the spawn check there's a chance it becomes a brown platform. 
    //      - these slice platforms have a chance to contain a powerup.
}