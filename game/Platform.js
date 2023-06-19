class Platform extends Entity {
    constructor(posX, posY, width, height, red, green, blue, move, destroy) {
        // super calls the parent constructor.
        super(posX, posY, undefined, width, height);
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.move = move;
        this.destroy = destroy;
        this.velocity = .25;
    }

    draw() {
        fill(this.red, this.green, this.blue);
        rect(this.posX - this.width / 2,
            this.posY - this.height / 2,
            this.width,
            this.height,
            500
        );
        // move behaviour(, mainly blue platforms).
        if (this.move == 1) {
            this.posX += this.velocity * deltaTime;
            if (this.posX > 1200 - this.width / 2 || this.posX < 0 + this.width / 2) {
                this.velocity *= -1;
            }
        }
        // destroy behavour(, mainly brown platforms).
        if (this.destroy == 1) {
            // this.posX -= 0.1 * deltaTime;
        }
    }
}
