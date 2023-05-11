function setup()
{
    createCanvas(640,1136);
    background(255, 255, 255);
}

function draw()
{
    
}

/*
divided in slices,
- each slice can be generated on function call
- each slice has a chance to be a moving platform slice or a normal slice
- each slice has a random amount of platforms
- those platforms have a chance to contain a spring or jetpack
*/