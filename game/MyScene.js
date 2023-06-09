class MyScene extends Scene {
	constructor(width, height, posX, posY, rotZ) {
		// super calls the parent constructor.
		super(width, height, posX, posY, rotZ);
		// stops the right context click menu from appearing.
		document.oncontextmenu = () => false;

		// platform tests
		this.p = new Platform(0, 0, this.blue);
		this.p2 = new Platform(-400, 0, this.brown);

		this.children.push(this.p);
		this.children.push(this.p2);

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
	}

	draw() {
		// draw background each draw call, acts as a canvas clearer.
		background(250);

		for (let i = 0; i < this.children.length; i++) {
			this.children[i].draw();
		}
	}
}
