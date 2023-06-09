"use strict"

class MyScene extends Scene {
	constructor(x, y, width, height) {
		// super calls the parent constructor.
		super(x, y, width, height);
		// stops the right click context menu from appearing.
		document.oncontextmenu = () => false;
		// list of platforms in the scene.
		this.plats = [];
		// velocity and acceleration vector2's.
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);
		// score value
		this.score = 0;
	}

	setup() {
		// load background image.
		this.BG = loadImage('assets/BG.png');
		// generates the starting platforms.
		// multiple layers of platforms at once bottom to top with 2 garantueed platforms
		this.genPlat(width / 2, 850, 255, 255, 0, 0, 0);
		for (let i = 700; i > 0; i -= 150) {
			let rando = random(0, 100); // pseudo random number for different kinds of platforms chance.
			let rando2; // local variable for random x position
			if (rando >= 0 && rando <= 70) { // green, 70% chance.
				rando2 = random(0 + this.plats[0].width / 2, 450 - this.plats[0].width / 2);
				this.genPlat(rando2, i, 0, 230, 0, 0, 0);
			}
			if (rando > 70 && rando <= 90) { // brown, 20% chance.
				rando2 = random(0 + this.plats[0].width / 2, 450 - this.plats[0].width / 2);
				this.genPlat(rando2, i, 102, 51, 0, 0, 1);
			}
			if (rando > 90 && rando <= 100) { // blue, 10% chance.
				rando2 = random(0 + this.plats[0].width / 2, 450 - this.plats[0].width / 2);
				this.genPlat(rando2, i, 153, 204, 255, 1, 0);
			}
		}
		// create player.
		this.player = new Player(width / 2, 700, 50, 50);
		this.children.push(this.player);
		// set the framerate
		frameRate(360);
	}

	draw() {
		background(this.BG, 255); // draw background, acts as a canvas clearer.
		// call draw function of every child and platform of the scene.
		for (let i = 0; i < this.children.length; i++) { this.children[i].draw(); }
		for (let i = 0; i < this.plats.length; i++) { this.plats[i].draw(); }
		// all of the functionality methods.
		this.playerMove();
		this.cameraMove();
		this.wrapEdges();
		this.regenPlats();
		this.displayScore();
		this.updateHighscore();
	}

	// generates a new platform with given parameters.
	genPlat(posX, posY, red, green, blue, move, destroy) {
		this.p = new Platform(posX, posY, 80, 18, red, green, blue, move, destroy);
		this.plats.push(this.p);
	}
	// generates a platform with the genPlat function using randomized parameters.
	genRandomPlat(posY) {
		let rando = random(0, 100); // pseudo random number for different kinds of platforms chance.
		let rando2; // local variable for random x position
		if (rando >= 0 && rando <= 70) { // green, 70% chance.
			rando2 = random(0 + this.plats[0].width / 2, 450 - this.plats[0].width / 2);
			this.genPlat(rando2, posY, 0, 230, 0, 0, 0);
		}
		if (rando > 70 && rando <= 90) { // brown, 20% chance.
			rando2 = random(0 + this.plats[0].width / 2, 450 - this.plats[0].width / 2);
			this.genPlat(rando2, posY, 102, 51, 0, 0, 1);
		}
		if (rando > 90 && rando <= 100) { // blue, 10% chance.
			rando2 = random(0 + this.plats[0].width / 2, 450 - this.plats[0].width / 2);
			this.genPlat(rando2, posY, 153, 204, 255, 1, 0);
		}
	}
	// deletes old platform and generates a new platform 
	regenPlats() {
		for (let i = 0; i < this.plats.length; i++) {
			// only check the bottom most platform
			const plat = this.plats[i];
			// when platform is offscreen bottom
			if (plat.pos.y > height + 1.5 * plat.height) {
				this.plats.shift();
				this.genRandomPlat(-plat.height);
			}
		}
	}
	// moves the "camera" with the player when it gains new height.
	cameraMove() {
		if (this.player.pos.y <= height / 2) {
			if (this.vel.y < 0) { // jumping.
				for (let i = 0; i < this.plats.length; i++) {
					const plat = this.plats[i];
					plat.pos.y += height / 2 - this.player.pos.y;
				}
				this.player.pos.y = height / 2;
			}
		}
	}
	// does all the movement inluding jumping on platforms.
	playerMove() {
		deltaTime = deltaTime / 100; // change deltaTime for the values to have less decimals.
		let gravity = 3 // the higher the value the faster you fall, affects jump height in a major way. 
		let handling = 0.05 // higher value = icy movement, lower value = super precise.

		this.acc.y += gravity; // apply gravity force.
		this.vel.y += this.acc.y; // add acceleration to velocity.
		this.vel.x += this.acc.x;
		this.player.pos.y += this.vel.y * deltaTime; // move player.
		this.player.pos.x += this.vel.x * deltaTime;
		this.acc.mult(0); // reset acceleration.

		this.vel.x *= handling; // speed at which player slows down.	
		if (keyIsDown(37)) { // arrow left
			this.acc.x = -40;
		}
		if (keyIsDown(39)) { // arrow right
			this.acc.x = 40;
		}
		// when to jump off of a platform.
		// only when moving down to prevent jumping off 20 platforms in a row.
		if (this.vel.y >= 0) {
			// loop through all platforms in plats[].
			for (let i = 0; i < this.plats.length; i++) {
				const plat = this.plats[i]; // for simplification.
				const player = this.player; // for simplification.
				// big platform contact check.
				if (player.pos.x + player.width / 2 >= plat.pos.x - plat.width / 2
					&& player.pos.x - player.width / 2 <= plat.pos.x + plat.width / 2
					&& plat.pos.y - player.pos.y <= 35
					&& plat.pos.y - player.pos.y > 0
				) {
					// only allow jumping when jumpedOn is 0.
					if (!plat.jumpedOn) {
						// make the player jump.
						this.vel.y = -gravity * 50;
					}
					// set jumpedOn to 1 for brown platforms after contact.
					if (plat.destroy == 1) {
						plat.jumpedOn = 1;
					}
				}
			}
		}
	}
	// makes player appear on the left side when exiting on the right and so forth.
	wrapEdges() {
		if (this.player.pos.x + this.player.width < 0) {
			this.player.pos.x = width;
		}
		if (this.player.pos.x > width) {
			this.player.pos.x = 0;
		}
	}
	// calculates and displays score.
	displayScore() {
		// box for score.
		fill(147, 108, 108);
		rect(0, 0, 450, height / 23);
		// display score.
		textSize(32);
		fill(0);
		textAlign(LEFT);
		text(round(this.score) + ' m', 10, 30);
		// display highscore
		textAlign(RIGHT);
		text(round(localStorage.getItem('highscore')) + ' m', width - 10, 30);


		// score calculation.
		// when the player is above the middle of the screen.
		if (this.player.pos.y <= height / 2) {
			// when the player is moving upwards.
			if (this.vel.y < 0) {
				// add onto score.
				this.score += deltaTime;
			}
		}
	}
	// updates highscore when score is the highest, also displays death message.
	updateHighscore() {
		let once = 0;
		if (!once) {
			// when player falls offscreen.
			if (this.player.pos.y - this.player.height / 2 > height) {
				this.displayDeath();
				try {
					// if highscore exists.
					if (localStorage.getItem('highscore') != null) {
						// set highscore.
						if (localStorage.getItem('highscore') < this.score) {
							localStorage.setItem('highscore', this.score);
						}
					} else {
						// if highscore absent, create the fist one.
						localStorage.setItem('highscore', this.score);
					}
				} catch (QuotaExceededError) {
					console.log('Failed to store highscore, storing could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.');
				}
				once = 1;
			}
		}
	}
	// displays death message.
	displayDeath() {
		textSize(32);
		fill(0);
		textAlign(CENTER);
		text('you died!', width / 2, height / 2);
		textSize(25);
		text('press F5 to restart.', width / 2, height / 2 + 25);
	}
}
