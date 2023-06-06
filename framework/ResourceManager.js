class ResourceManager {
	constructor() {
		// textures that were loaded before are stored in here.
		this.loadedTextures = [];
	}

	// make a new instance when absent and return it.
	static getInstance() {
		if (!ResourceManager.instance) {
			ResourceManager.instance = new ResourceManager();
		}
		return ResourceManager.instance;
	}

	// load a texture or return it when it was already loaded.
	loadTexture(path) {
		// local variable texture,
		// texture only gets assigned if path is an entry in loadedTextures[].
		let texture = this.loadedTextures[path];
		// if path was not an entry of loadedTextures[].
		if (texture == null) {
			// load image using p5.js function.
			texture = loadImage(path);
			// loadedTexture[] entry is whatever loadImage() returned.
			this.loadedTextures[path] = texture;
		}
		// if path was an entry of loadedTextures[].
		return texture;
	}
}
