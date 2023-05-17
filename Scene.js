// class Scene {

function setup() {

	// create canvas, WEBGL for 3D, omit for 2D(, disables 2D functions).
	createCanvas(640, 1136, WEBGL);

	// you can guess what this is for.
	cam = createCamera();
	// cam.ortho();
	// cam.tilt(-100);

	// get the ResourceManager ova here.
	RM = ResourceManager.getInstance();

	// load resources for this scene
	platformGreen = RM.loadTexture("assets/platformGreen.png");
}

function draw() {

	// draw background each draw call, acts as a canvas clearer.
	background(240);

	texture(platformGreen);
	box(100, 20, 100);
}

/*
divided in slices,
- each slice can be generated on function call
- each slice has a chance to be a moving platform slice or a normal slice
- each slice has a random amount of platforms
- those platforms have a chance to contain a spring or jetpack*/
// }
