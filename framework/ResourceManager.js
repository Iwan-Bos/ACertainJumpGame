class ResourceManager {

	constructor() {

	}

	// make a new instance when absent and return it.
	getInstance() {
		if (!ResourceManager.instance) {
			ResourceManager.instance = new ResourceManager();
		}
		return ResourceManager.instance;
	}

	// load a texture using a p5js function.
	loadTexture(path) {
		return loadImage(path, // these vv both get called on success, i've disabled them for now.
			// console.log("Loaded texture: " + path),
			// console.warn("Failed to load texture: " + path)
		);
	}

}
