// p5.disableFriendlyErrors = true;
"use strict"

function setup() {
    // create the scene in which all will take place.
    this.myScene = new MyScene(undefined, undefined, 450, 900);
    // call MyScene.setupScene().
    this.myScene.setup();
}

function draw() {
    // call MyScene.draw().
    myScene.draw();
}
