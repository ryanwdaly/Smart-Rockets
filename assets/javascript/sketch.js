// -Create target var and pass it into rocket
// -pretty it up
// -the length of time it take to get to the rocket affects fitness
// -obsitcles

const popSize = 50;
const mutationRate = 0.001;
const lifespan = 250;

var target;
var rocket;
var population;
var lifeP;
var count = 0; 
var generation = 1;
var cnv;
var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10

function setup() {
    // // frameRate(10)
    // cnv = createCanvas(600, 400);
    // let x = (windowWidth - width) / 2;
    // let y = (windowHeight - height) / 2;
    // cnv.position(x, y);
    createCanvas(600, 400);
    population = new Population(mutationRate, popSize, lifespan)
    lifeP = createP();
    genP = createP();
    target = createVector(width/2, 50)
}
function draw() {
    background(0);
    ellipse(target.x, target.y, 16, 16)
    fill(255);
    rect(rx, ry, rw, rh);
    
    if (count === lifespan) {
        generation++;
        population.evaluate();
        population.generateNextGen();
        count = 0;
    }
    count++;
    lifeP.html(count);
    genP.html(generation);
    for (let i = 0; i < popSize; i++) {
        population.stack[i].update(count);
        population.stack[i].show();
    }
}

