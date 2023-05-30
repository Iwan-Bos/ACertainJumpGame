class MyScene extends Scene {

	constructor(width, height) {

		super(width, height);

		background(250);

		// stops the right context click menu from appearing
		document.oncontextmenu = () => false;

		// initial camera state parameters(? Idk if this is the right word).
		var cam,
			state = {
				distance: 1000,
				center: [0, 0, 0],
				rotation: [0, 0, 0, 0.85]
			};
	}

	setup() {

		// initialize the camera.
		cam = createEasyCam();

		// set initial camera state
		cam.setState(state, 0); // animate to state in 2 second
		cam.state_reset = state;   // state to use on reset

		// get the ResourceManager ova here.
		RM = ResourceManager.getInstance();

		// load resources for this scene
		platformGreen = RM.loadTexture("assets/platformGreen.png");
	}

	draw() {

		// draw background each draw call, acts as a canvas clearer.
		// background(240);

		texture(platformGreen);
		box(100, 20, 100);
	}

}

/*
divided in slices,
- each slice can be generated on function call
- each slice has a chance to be a moving platform slice or a normal slice
- each slice has a random amount of platforms
- those platforms have a chance to contain a spring or jetpack
*/
