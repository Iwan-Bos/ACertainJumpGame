class MyScene extends Scene {
	constructor(width, height, posX, posY, rotZ) {
		// super calls the parent constructor.
		super(width, height, posX, posY, rotZ);
		// stops the right context click menu from appearing.
		document.oncontextmenu = () => false;
	}

	setup() {
		// // ==================== ###### Camera ###### ====================
		// // initial camera state data.
		// let cam,
		// 	state = {
		// 		distance: 1000,
		// 		center: [0, 0, 0],
		// 		rotation: [0, 0, 0, 0.85]
		// 	};
		// // initialize the camera.
		// cam = createEasyCam();
		// // set initial camera state:
		// cam.setState(state, 0); // animate to state in 2 second (on double click),
		// cam.state_reset = state; // state to use on reset.

		// ===================== ###### Platforms ###### ===================
		this.generateGreenSlice();

		frameRate(100000); // allow (essentially)unlimited frames.
		textSize(30);
		textAlign(RIGHT);
	}

	draw() {
		// draw background each draw call, acts as a canvas clearer.
		background(250);

		// call draw function of every child of this scene.
		for (let i = 0; i < this.children.length; i++) {
			this.children[i].draw();
		}

		// frames that have passed.
		text(frameCount, width - 10, 30);
	}

	// each slice has a chance to be a moving platform slice or a normal slice,
	generateGreenSlice() {
		this.p = new Platform(width / 2, height / 2, 500, 50);
		this.children.push(this.p);

		let rand = Math.random();
		console.log(rand);

		// true 0.25% of the time (1/400)
		// rand < [hundreds].[tens][ones][etc]%
		if (rand < 0.0025) {
			console.log("rod of discord would've dropped");
		}

		// each slice exists out of a set amount of preset positions on which platforms
		// can either spawn or not spawn.

		// after the spawn check there's a chance it becomes a brown platform. 

		// these slice platforms have a chance to contain a powerup.
		// TODO: powerups
	}

	generateBlueSlice() {
		// each moving platform slice exists out of 2 spawn spaces
		// where a blue platform can spawn or not with at least one spawning,
	}
}
