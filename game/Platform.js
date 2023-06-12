class Platform extends Entity {
    constructor(posX, posY, width, height) {
        // super calls the parent constructor.
        super(posX, posY, undefined, width, height);
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }

    draw() {
        // get texture for box using the ResourceManager.
        // texture(this.RM.loadTexture("assets/platformGreen.png"));
        // translate(this.posX, this.posY);
        // box(100, 20, 100);
        rect(this.posX - this.width / 2,
            this.posY - this.height / 2,
            this.width,
            this.height
        );
    }
}
