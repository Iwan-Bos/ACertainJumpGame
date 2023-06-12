// p5.disableFriendlyErrors = true;
function setup() {
    // create the scene in which all will take place.
    myScene = new MyScene(1600, 900);
    // call MyScene.setupScene().
    myScene.setup();
}

function draw() {
    // call MyScene.draw().
    myScene.draw();
}
