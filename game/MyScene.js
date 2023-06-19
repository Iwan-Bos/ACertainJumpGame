class MyScene extends Scene {
	constructor(width, height, posX, posY, rotZ) {
		// super calls the parent constructor.
		super(width, height, posX, posY, rotZ);
		// stops the right click context menu from appearing.
		document.oncontextmenu = () => false;
	}

	setup() {
		// ===================== ###### Platforms ###### ===================
		// multiple layers of platforms at once for test purposes
		for (let i = 50; i < 900; i += 50) {
			// pseudo random number for different kinds of platforms chance.
			let rando = random(0, 100);
			if (rando >= 0 && rando <= 70) { // green, 70% chance.
				this.generatePlatform(i, 0, 230, 0, 0, 0);
			}
			if (rando > 70 && rando <= 95) { // brown, 25% chance.
				this.generatePlatform(i, 102, 51, 0, 0, 1);
			}
			if (rando > 95 && rando <= 100) { // blue, 5% chance.
				i += 50; // empty space before
				this.generatePlatform(i, 153, 204, 255, 1, 0);
				i += 50; // empty space after
			}
		}

		// =================== ###### Frame counter ###### =================
		frameRate(100000); // allow (essentially)unlimited frames.
		textSize(30); // sets universal text size.
		textAlign(RIGHT); // sets universal text alignment(, gotta love apply to all things you have to call over and over).
	}

	draw() {
		background(250); // draw background, acts as a canvas clearer.
		// call draw function of every child of this scene.
		for (let i = 0; i < this.children.length; i++) {
			this.children[i].draw();
		}
		// frames that have passed.
		text(frameCount, width - 10, 30);
	}

	generatePlatform(posY, red, green, blue, move, destroy) {
		this.p = new Platform(random(0 + 100, 1200 - 100), posY, 100, 20, red, green, blue, move, destroy);
		this.children.push(this.p);
	}
}
