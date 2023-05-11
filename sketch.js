function preload()
{
    // load assets
    platformGreen = loadImage("assets/platformGreen.png");
}

function setup()
{   
    createCanvas(640, 1136, WEBGL);
    //camera(0, 0, 30);
    ortho();

    // create player
    var player = new Player(0, 0);

    // player function test
    player.isAlive();
}

function draw()
{
   background(240);

   texture(platformGreen);
   box(100, 20, 100);
}

/*
divided in slices,
- each slice can be generated on function call
- each slice has a chance to be a moving platform slice or a normal slice
- each slice has a random amount of platforms
- those platforms have a chance to contain a spring or jetpack
*/